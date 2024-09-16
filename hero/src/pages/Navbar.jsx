import React from 'react';
import image from '../assets/image.png';
import { FaUser, FaSignInAlt, FaFacebook, FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 pb-1 flex items-center justify-between">
      
      <div className="flex items-center space-x-4">
       
        
          <a href="#" className="text-gray-800 hover:text-gray-600 rounded-lg border p-3 bg-gray-200">
            Logo
          </a>
        
        {/* Links */}
        <a href="#" className="text-gray-800 hover:text-gray-600">My List</a>
        <a href="#" className="text-gray-800 hover:text-gray-600">How it Works</a>
        <a href="#" className="text-gray-800 hover:text-gray-600">Our Partners</a>
        <a href="#" className="text-gray-800 hover:text-gray-600 border-l-2 border-black pl-4">
          Meet the team
        </a>
      </div>

      {/* Login/Signup and Social Icons */}
      <div className="flex items-center space-x-4">
        <button className="flex justify-center items-center bg-white text-black px-4 py-2 rounded-md focus:outline-none">
          {/* <FaSignInAlt className="mr-2" /> */}
          Login/Signup
        </button>
        <a href="#" className="text-gray-800 hover:text-blue-500"><FaFacebook /></a>
        <a href="#" className="text-gray-800 hover:text-blue-400"><FaTiktok /></a>
        <a href="#" className="text-gray-800 hover:text-pink-500"><FaInstagram /></a>
        <a href="#" className="text-gray-800 hover:text-pink-500"><FaYoutube /></a>
      </div>
      {/* Media query for responsive behavior (optional) */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </nav>
  );
};

export default Navbar;
