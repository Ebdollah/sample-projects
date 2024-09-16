import React from 'react';

const FormInput = ({ label, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border p-2 w-full rounded"
      />
    </div>
  );
};

export default FormInput;
