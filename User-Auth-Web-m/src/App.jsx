import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Navbar from './Navbar';
import Signup from './Signup';
import Login from './Login';
// import { AuthProvider } from './AuthContext';

function App() {
  return (
    // <AuthProvider>
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Navbar />
      </div>
    // </AuthProvider>
  );
}

export default App;
