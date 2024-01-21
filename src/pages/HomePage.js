import React, { useState } from 'react';
import background from './background-image.png';
import Navbar from '../components/navbar';
import SearchBar from '../components/searchbar';

const Home = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleGetStarted = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <div className='h-screen bg-cover bg-center' style={{ backgroundImage: `url(${background})` }}>
      <div className='absolute inset-0 backdrop-filter backdrop-blur-sm bg-slate-900 bg-opacity-40'>
        <Navbar navbarColor='bg-slate-800 hover:bg-opacity-15 bg-opacity-10 duration-100' />
        <div className='px-36 pt-52 text-left text-white'>
          <h1 className='font-mono text-8xl font-bold mb-6 drop-shadow-2xl'>Discover. Link. <br /> Thrive Sustainably.</h1>
          <p className='font-mono text-xl mb-8 drop-shadow-2xl'>
            Explore products, trace their impact, and join <br />a community dedicated to conscious choices for <br />a greener tomorrow.
          </p>
          <button onClick={handleGetStarted} className='font-mono bg-slate-900 text-white px-6 py-3 rounded-full 
          no-underline transition-transform transform hover:scale-105 duration-300 font-semibold'>Paste Your Link Here and Get Started</button>
        </div>

        {isSearchOpen && <SearchBar onClose={handleCloseSearch} />}
      </div>
    </div>
  );
};

export default Home;

