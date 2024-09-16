import React, { useState, createContext } from 'react';

// Create Context
const MyContext = createContext();

// Provider Component
const MyProvider = ({ children }) => {
    const [value, setValue] = useState("Initial Value");

    return (
        <MyContext.Provider value={{ value, setValue }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyProvider, MyContext };
