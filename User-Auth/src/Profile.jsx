// Profile.jsx
import React from 'react';
import { useAuth } from './AuthContext';

const Profile = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    // Call the logout function from the context
    logout();
  };

  return (
    <div>
      <h2>Profile Page</h2>
      {/* Other user-specific content */}
      <button className='p-4 m-4 text-3xl w-48 rounded-lg bg-slate-500' onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
