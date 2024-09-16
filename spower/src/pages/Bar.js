import React from 'react';
import { FaSearch, FaPlay } from 'react-icons/fa';

const Bar = () => {
  return (
    <div className=" px-3 w-full pt-1">
      <div className="flex items-center h-12 w-[100%] ">
        <button className="flex justify-start items-center text-xs  md:text-base w-48 h-12 bg-white text-black px-4 pl-4 rounded-md border hover:bg-white focus:outline-none">
          <FaPlay className="mr-2 bg-purple-900 p-1" size={24} color='white' />
          Watch Demo
        </button>
        <form className="flex items-center border border-gray-300 p-1 rounded-lg w-full">
          <input
            className="flex-grow focus:outline-none rounded-full py-2 px-4"
            type="text"
            placeholder="Get Started By adding..."
          />
          <button className="bg-red-500 text-white py-2 px-2 rounded-full w-32 md:w-40">
            Add to List
          </button>
        </form>
        {/* <input
          type="text"
          placeholder="Get Started By adding..."
          className="flex-grow border border-gray-300  rounded-full py-2 px-4 focus:outline-none focus:border-blue-500"
        /> 
        <button className="bg-red-500 text-white py-2 px-4 rounded-full">
          Add to List
        </button> */}
      </div>
    </div>
  );
};

export default Bar;
