import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import Profile from './Profile';

function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <div>
      <div className='flex justify-center mb-16'>
        {isLoggedIn ? (
          // <button onClick={logout} className='p-4 m-4 text-3xl w-48 rounded-lg bg-slate-500'>
          //   Logout
          // </button>
          <Profile />
        ) : (
          <>
            <Link to='/login' className='p-4 m-4 text-3xl w-48 rounded-lg bg-slate-500'>
              Login
            </Link>
            <Link to='/signup' className='p-4 m-4 text-3xl w-48 rounded-lg bg-slate-500'>
              Signup
            </Link>
          </>
        )}
      </div>
      {/* ... remaining code */}
    </div>
  );
}

export default Navbar;
