import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "./firebase";
import ReactLogo from "./assets/react.svg";
import { doc, getDoc } from "firebase/firestore"; // Import getDoc

const MainPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState(null); // State to hold user's email
  const [userFullName, setUserFullName] = useState(null); // State to hold user's full name
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // User is logged in
        setIsLoggedIn(true);
        setUserEmail(user.email); // Set user's email
        console.log(user.email);

        // Fetch user's full name from Firestore
        const userDocRef = doc(db, "userProfiles", user.uid);
        console.log('userDocRef' + userDocRef);
        const userDocSnap = await getDoc(userDocRef);
        console.log('userDocSnap' + userDocSnap);
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          console.log('userData' + userData);
          setUserFullName(userData?.fullname || null);
        }
      } else {
        // User is not logged in
        setIsLoggedIn(false);
        setUserEmail(null); // Reset user's email
        setUserFullName(null); // Reset user's full name
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        setIsLoggedIn(false);
        setUserEmail(null); // Reset user's email on logout
        setUserFullName(null); // Reset user's full name on logout
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  const handleCourse = () => {
    navigate('/createcourse');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={ReactLogo} alt="React Logo" className="w-24 mb-8" />
      <h1 className="text-3xl mb-4">Choose Your Authentication Type</h1>
      {!isLoggedIn && (
        <div>
          <Link to="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </Link>
        </div>
      )}
      {isLoggedIn && (
        <div className="mt-4">
          <div className="flex">
            <button
              onClick={handleCourse}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-10 rounded"
            >
              Create Course
            </button>
            <button
              onClick={() => { navigate('/course') }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              See Courses
            </button>
          </div>
          
          <p>You are logged in</p>
          {userEmail && <p>Email: {userEmail}</p>}
          {userFullName && <p>Full Name: {userFullName}</p>}
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default MainPage;
