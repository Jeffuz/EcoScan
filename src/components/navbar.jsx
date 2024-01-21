import React from 'react';
import logoImage from './logo-white2.png';
import { Link } from 'react-router-dom';

const Navbar = ({ navbarColor }) => {
  return (
    <div className={`py-4 px-28 flex justify-between items-center fixed ${navbarColor} w-[100%]`}>
      <Link to="/" className="no-underline transition-transform transform hover:scale-105 duration-300">
        <img src={logoImage} alt="Logo" className="logo-img h-12 mr-4" />
      </Link>

      <div className="flex font-mono gap-12">
        <Link to="/" className="text-white text-lg no-underline hover:text-gray-400 duration-300">
          Home
        </Link>
        <Link to="/about" className="text-white text-lg no-underline hover:text-gray-400 duration-300">
          About
        </Link>
        <Link to="/contact" className="text-white text-lg no-underline hover:text-gray-400 duration-300">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
