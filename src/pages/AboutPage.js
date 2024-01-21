import React from 'react';
import background from './background-image.png';
import Navbar from '../components/navbar';
import jeffZhangImage from './jeff-zhang-image.jpg';
import monaZhaoImage from './mona-img.jpg';
import ginnaKhangImage from './ginna-img.jpg';
import vincentImage from './vincent-image.jpg';
import { useInView } from 'react-intersection-observer';

const MemberCard = ({ image, name, role, major }) => {
  return (
    <div className={`flex-shrink-0 px-4 text-center`}>
      <img src={image} alt={name} className='rounded-full w-40 h-40 mb-5 mx-auto' loading='lazy' />
      <p className='text-3xl font-bold'>{name}</p>
      <p className=''>{role}</p>
      <p>{major}</p>
    </div>
  );
};

// along with visual representations like pie charts illustrating ecological and human health damage factors for enhanced sustainability awareness.

const AboutPage = () => {
  return (
    <div className='h-screen bg-cover bg-no-repeat bg-center relative' style={{ backgroundImage: `url(${background})` }}>
      <div className='absolute inset-0 backdrop-filter backdrop-blur-sm bg-slate-800 bg-opacity-75'>
        <Navbar />
        <div className='h-screen flex flex-col items-center justify-center'>
          <h2 className='font-mono text-6xl text-white font-bold mb-8'>About EcoScan</h2>
          <p className='font-mono text-xl text-white font-bold mb-8'>Designed by Students of UC Santa Cruz <br />@ CruzHacks2024</p>
          <p className='font-mono text-lg  text-white mx-auto max-w-[600px] text-justify'>
            EcoScan is an environmental impact assessment tool that utilizes data scraped from Amazon (more soon to come)
            to generate general results page for products, showcasing details such as material, manufacturing,
            and shipping. 
          </p>
        </div>
        <div className='flex flex-col bg-slate-800'>
          <div className='flex justify-center my-16 text-white font-bold text-5xl'>Meet the team</div>
          <div className='flex flex-row justify-center items-center pb-16 font-mono text-white '>
            <MemberCard image={jeffZhangImage} name='Jeff Zhang' role='Full Stack' major='Computer Engineering' />
            <MemberCard image={vincentImage} name='Vincent Kurniadjaja' role='Backend' major='CS Game Design' />
            <MemberCard image={monaZhaoImage} name='Mona Zhao' role='Frontend & UI/UX' major='Computer Science' />
            <MemberCard image={ginnaKhangImage} name='Ginna Khang' role='Frontend' major='Computer Science Engineering' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
