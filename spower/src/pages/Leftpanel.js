import React from 'react';
import bag from '../assets/bag.png';

function Leftpanel({ secondChildHeight }) {
  console.log('Second child height in Leftpanel:', secondChildHeight);
  return (
    <div className="flex flex-col justify-start pl-7 pt-10 mb-5 w-full rounded-lg shadow-lg border sm:w-[100%] md:w-[100%] lg:w-[50vw] lg:mb-0">
      <div className=" ">
        <h6 className="pt-1 font-semibold mb-4">#Itstheeasywaytolearn</h6>
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Get ladybugs with Katty.<br /> Get them now.
        </h1>
        <ul className="list-disc ml-6 md:text-2xl text-gray-700 text-left mb-8">
          <li className="text-base mb-2">Benefit 01</li>
          <li className="text-base mb-2">Benefit 02</li>
          <li className="text-base mb-2">Benefit 03</li>
        </ul>
        <div className="flex justify-between">
          <div className="flex-col">
            <button className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-900">
              Active Super power!
            </button>
            <div className="flex pt-3 text-xl font-semibold">
              <p className="pr-3">Restart Step 1</p>
              <div className="border-r-2 border-black mr-3"></div>
              <p>Get Started Now</p>
            </div>
          </div>
          <img src={bag} alt="hero" className="w-24 h-24" />
        </div>
      </div>
    </div>
  );
}

export default Leftpanel;
