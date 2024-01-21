// AboutPage.js
import React from 'react';
import background from './background-image.png';
import Navbar from '../components/navbar';
import jeffZhangImage from './jeff-zhang-image.jpg';
import monaZhaoImage from './mona-img.jpg';
import ginnaKhangImage from './ginna-img.jpg';
import vincentImage from './vincent-image.jpg';
// import SearchBar from '../components/searchbar';

const AboutPage = () => {
  return (
    <div className='min-h-screen bg-cover bg-no-repeat bg-center relative' style={{ backgroundImage: `url(${background})` }}>
      <div className='absolute inset-0 backdrop-filter backdrop-blur-sm bg-slate-800 bg-opacity-75'>

        <Navbar />

        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-6xl text-white font-bold mb-8'>About EcoScan</h2>
          <p className='text-3xl text-white font-bold mb-8'>
            Designed by students of UC Santa Cruz @ CruzHacks2024
          </p>

          <p className='text-lg text-center text-white mx-auto max-w-[600px] text-justify'>
            EcoScan is an environmental impact assessment tool that utilizes data scraped from Amazon (more soon to come)
            to generate informative results pages for products, showcasing key details such as material sourcing, packaging,
            product lifespan, and disposal, along with visual representations like pie charts illustrating ecological and
            human health damage factors for enhanced sustainability awareness.
          </p>
        </div>
        <div className='bg-slate-800 flex flex-row justify-center
                    items-center justify-center'>
          <div className='flex-shrink-0 px-4 text-center'>
            <img src={jeffZhangImage} alt='Jeff Zhang' className='rounded-full w-40 h-40 mb-5 mx-auto' />
            <p className='text-3xl font-bold'>Jeff Zhang</p>
            <p className=''>Team Leader</p>
            <p>Computer Engineering Student</p>
          </div>
          <div className='flex-shrink-0 px-4 text-center'>
            <img src={vincentImage} alt='Vincent Kurniadjaja' className='rounded-full w-40 h-40 mb-5 mx-auto' />

            <p className='text-3xl font-bold '>Vincent Kurniadjaja</p>
            <p className=''>Member</p>
            <p>Computer Game Design Student</p>
          </div>
          <div className='flex-shrink-0 px-4 text-center'>
            <img src={monaZhaoImage} alt='Mona Zhao' className='rounded-full w-40 h-40 mb-5 mx-auto' />
            <p className='text-3xl font-bold'>Mona Zhao </p>
            <p className=''>Member</p>
            <p>Computer Science Student</p>
          </div>
          <div className='flex-shrink-0 px-4 text-center'>
            <img src={ginnaKhangImage} alt='Ginna Khang' className='rounded-full w-40 h-40 mb-5 mx-auto' />
            <p className='text-3xl font-bold'>Ginna Khang </p>
            <p className=''>Member</p>
            <p>Computer Engineering Student</p>
          </div>
        </div>


      </div>

    </div>
  );
};

export default AboutPage;

