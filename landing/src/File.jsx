import React, { useState } from "react";

const Module = ({ moduleNumber, onRemove }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md mt-2">
      <h3 className="text-lg font-semibold mb-2">Module {moduleNumber}</h3>
      <button
        onClick={() => onRemove(moduleNumber)}
        className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md"
      >
        Remove Module
      </button>
    </div>
  );
};

const File = () => {
  const [modules, setModules] = useState([{ number: 1 }]);

  const handleUploadClick = () => {
    const newModuleNumber = modules.length + 1;
    setModules([...modules, { number: newModuleNumber }]);
  };

  const handleRemoveModule = (moduleNumber) => {
    const updatedModules = modules.filter(
      (module) => module.number !== moduleNumber
    );
    setModules(updatedModules);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">Week 1</h2>
      <button
        onClick={handleUploadClick}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md"
      >
        Add New Material
      </button>
      {modules.map((module) => (
        <Module
          key={module.number}
          moduleNumber={module.number}
          onRemove={handleRemoveModule}
        />
      ))}
    </div>
  );
};

export default File;
