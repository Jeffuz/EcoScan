import React from 'react';
import background from './background-image.png'
// import logoImage from './ecoscan-high-resolution-logo-transparent.png'
// import logoImage from './logo-white.png'
import Navbar from '../components/navbar';


const Home = () => {
  return (
    <div className='bg-cover h-screen flex ' style={{ backgroundImage: `url(${background})` }}>
      <Navbar/>
    </div>
  );
}

export default Home;
