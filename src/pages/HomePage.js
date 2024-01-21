// import React from 'react';
// import background from './background-image.png'
// import Navbar from '../components/navbar';


// const Home = () => {
//   return (
//     <div className='min-h-screen h-fit bg-cover bg-center' style={{ backgroundImage: `url(${background})` }}>
    
//       <Navbar/>
//       <div className='p-32 text-left text-white'>
//         <h1 className='text-8xl font-bold mb-6 drop-shadow-xl'>Discover. Link. <br /> Thrive Sustainably.</h1>
//         <p className='text-2xl mb-8 drop-shadow-lg'>
//           Explore products, trace their impact, and join <br />a community dedicated to conscious choices for <br />a greener tomorrow.
//         </p>
//         <button className='bg-slate-800 text-white px-6 py-3 rounded-full'>Get Started</button>
//       </div>
//     </div>
//   );
// }

// export default Home;
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
    <div className='min-h-screen h-fit bg-cover bg-center' style={{ backgroundImage: `url(${background})` }}>
      <Navbar />
      <div className='p-32 text-left text-white'>
        <h1 className='font-mono text-7xl font-medium mb-8 drop-shadow-xl'>Embark. Sustain. <br /> Preserve Our Earth.</h1>
        <p className='font-mono text-lg mb-10 drop-shadow-lg'>
          Empower your choices, unveil eco-impact, <br />and embark on a journey to a greener lifestyle <br />with our enlightening platform.  .
        </p>
        <button onClick={handleGetStarted} className='hover:bg-slate-900 font-mono bg-slate-800 text-white px-6 py-3 rounded-full'>Get Started</button>
      </div>

      {isSearchOpen && <SearchBar onClose={handleCloseSearch} />}
    </div>
  );
};

export default Home;

