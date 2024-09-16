import React from 'react';

const MyForm = () => {
  return (
    <>
    <form className="flex items-center border border-gray-300 m-8 p-1 rounded-full">
      <input
        className="flex-grow focus:outline-none rounded-full py-2 px-4"
        type="text"
        placeholder="Type something..."
      />
      <button className="bg-red-500 text-white py-2 px-4 rounded-full w-40">
        Go
      </button>
    </form>
    </>
  );
};

export default MyForm;
