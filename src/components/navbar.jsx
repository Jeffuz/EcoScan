import React from 'react';
import logoImage from './logo-white2.png';
import { Link } from 'react-router-dom';

const Navbar = ({ navbarColor }) => {
  return (
    <div className={`py-4 px-28 flex justify-between items-center ${navbarColor}`}>
      <Link to="/about" className="no-underline">
        <img src={logoImage} alt="Logo" className="logo-img h-12 mr-4" />
      </Link>

      <div className="flex">
        <Link to="/about" className="text-white text-lg mr-4 no-underline hover:text-black">
          About
        </Link>
        <Link to="/" className="text-white text-lg mr-4 no-underline hover:text-black">
          Home
        </Link>
        <Link to="/contact" className="text-white text-lg no-underline hover:text-black">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;