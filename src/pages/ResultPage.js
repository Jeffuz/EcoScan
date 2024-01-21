import React, { useEffect, useState } from 'react';
import { ref, get } from 'firebase/database';
import db from '../firebase';
import Navbar from '../components/navbar';
import background from './background-image.png';
import SearchBar from '../components/searchbar';

const ResultPage = () => {
  const [data, setData] = useState('');
  const [productTitle, setProductTitle] = useState('');

  useEffect(() => {
    const ansRef = ref(db, 'answers/test');
    get(ansRef).then((snapshot) => {
      if (snapshot.exists()) {
        const formattedData = formatText(snapshot.val());
        setData(formattedData);
      } else {
        console.log("No Data Found");
      }
    });
    const ansRef2 = ref(db, 'answers/productTitle');
    get(ansRef2).then((snapshot) => {
      if (snapshot.exists()) {
        setProductTitle(snapshot.val());
      } else {
        console.log("No Data Found");
      }
    });
  }, []);

  const formatText = (text) => {
    if (!text) {
      return '';
    }
    const formattedText = text.replace(/[:.]/g, match => match + '<br>');
    return formattedText;
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleGetStarted = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <div>
      <div className='h-screen bg-cover bg-center' style={{ backgroundImage: `url(${background})` }}>
        <div className='absolute inset-0 backdrop-filter backdrop-blur-md bg-slate-900 bg-opacity-60'>
          <Navbar navbarColor='bg-slate-800 hover:bg-opacity-15 bg-opacity-10 duration-100' />
          <div className='h-screen flex flex-col justify-center items-center gap-8'>
            <div className='text-3xl font-bold text-white text-center container mx-auto'>{productTitle}</div>
            <div className='text-md font-medium text-white container mx-auto h-[55vh] overflow-auto'><div dangerouslySetInnerHTML={{ __html: data }} /></div>
            <button onClick={handleGetStarted} className='font-mono bg-slate-900 text-white px-6 py-3 rounded-full 
          no-underline transition-transform transform hover:scale-105 duration-300 font-semibold'>Click to scan another link
            </button>
          </div>
          {isSearchOpen && <SearchBar onClose={handleCloseSearch} />}
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
