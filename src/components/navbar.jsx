import React from 'react';
import logoImage from './logo-white2.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="py-4 px-28 flex justify-between items-center bg-slate-800 bg-opacity-10">
            <Link to="/about" className="no-underline">
                <img src={logoImage} alt="Logo" className="logo-img h-12 mr-4" />
            </Link>

            <div className="flex">
                <Link to="/" className="text-white mr-4 no-underline">
                    Home
                </Link>
                <Link to="/about" className="text-white mr-4 no-underline">
                    About
                </Link>
                <Link to="/contact" className="text-white no-underline">
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
