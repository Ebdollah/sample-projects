import React, { useState, useEffect } from 'react';
import {
  FaUser,
  FaSignInAlt,
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaYoutube,
  FaBars,
  FaTimes,
  FaInfo,
  FaArrowRight,
} from 'react-icons/fa';

const Navbar = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  // Close the drawer when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const drawer = document.getElementById('drawer-example');
      if (drawer && !drawer.contains(e.target)) {
        setIsDrawerVisible(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <nav className="bg-white p-4 pb-1 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        {/* Hamburger menu for small and mobile devices */}
        <div className="lg:hidden cursor-pointer" onClick={toggleDrawer}>
          {isDrawerVisible ? (
            <FaTimes className="w-6 h-6 text-black" />
          ) : (
            <FaBars className="w-6 h-6 text-black" />
          )}
        </div>
        <a href="#" className="text-gray-800 hover:text-gray-600 rounded-lg border p-3 bg-gray-200">
          Logo
        </a>

        {/* Links */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#" className="text-gray-800 text-sm lg:text-xl hover:text-gray-600">
            My List
          </a>
          <a href="#" className="text-gray-800 text-sm lg:text-xl hover:text-gray-600">
            How it Works
          </a>
          <a href="#" className="text-gray-800 text-sm lg:text-xl hover:text-gray-600">
            Our Partners
          </a>
          <a
            href="#"
            className="text-gray-800 text-sm lg:text-xl hover:text-gray-600 border-l-2 border-black pl-4"
          >
            Meet the team
          </a>
        </div>
      </div>

      {/* Login/Signup and Social Icons */}
      <div className="flex items-center space-x-4">
        <button className="flex justify-center items-center bg-white text-gray-800 text-sm lg:text-lg hover:text-gray-600">
          {/* <FaSignInAlt className="mr-2" /> */}
          Login/Signup
        </button>
        <a href="#" className="text-gray-800 hover:text-blue-500">
          <FaFacebook size={20} />
        </a>
        <a href="#" className="text-gray-800 hover:text-blue-400">
          <FaTiktok size={20} />
        </a>
        <a href="#" className="text-gray-800 hover:text-pink-500">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-gray-800 hover:text-pink-500">
          <FaYoutube size={20} />
        </a>
      </div>

      {/* Drawer for small and mobile devices */}
      <div
        id="drawer-example"
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          isDrawerVisible ? '' : '-translate-x-full'
        } bg-white w-80 dark:bg-gray-800`}
        tabIndex="-1"
        aria-labelledby="drawer-label"
      >
        {/* Drawer content */}
        <div className="mt-5">
          <a href="#" className="text-gray-800 hover:text-gray-600 rounded-lg border  p-3 bg-gray-200 px-14">
            Logo
          </a>
          <button
            type="button"
            onClick={toggleDrawer}
            aria-controls="drawer-example"
            className="text-gray-400 bg-transparent mt-5 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <FaTimes className="w-7 h-7" size={30} />
          </button>
        </div>

        <div className="flex flex-col gap-4 mt-14">
          <div className="flex justify-between items-center">
            <a href="#" className="text-white text-2xl pb-2 hover:text-gray-300">
              My List
            </a>
            <FaArrowRight className="text-white" size={23} />
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-white text-2xl pb-2 hover:text-gray-300">
              How it Works
            </a>
            <FaArrowRight className="text-white" size={23} />
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-white text-2xl pb-2 hover:text-gray-300">
              Our Partners
            </a>
            <FaArrowRight className="text-white" size={23} />
          </div>
          <div className="flex justify-between items-center">
            <a href="#" className="text-white text-2xl pb-2 hover:text-gray-300">
              Meet the team
            </a>
            <FaArrowRight className="text-white" size={23} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
