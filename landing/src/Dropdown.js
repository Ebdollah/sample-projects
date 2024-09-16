import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
//   const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="">
      <button onClick={()=>{setIsOpen(!isOpen)}} className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none focus:border-blue-700">
        Options
      </button>
      {isOpen && (
        <ul className="absolute bg-white border border-gray-300 rounded shadow py-1 mt-1">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
