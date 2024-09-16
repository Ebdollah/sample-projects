import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const db = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (!user) {
        throw new Error("User object not found");
      }
      const accessToken = await user.getIdToken();
      localStorage.setItem("token", accessToken);

      await setDoc(doc(db, "userProfiles", user.uid), {
        email: user.email,
        fullname: fullname,
      });

      setSuccessMessage("Signup successful");
      setError(null);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-screen flex items-center justify-center">
      <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 className="font-bold text-2xl">Welcome to the Signup Page</h3>
          <p className="text-gray-600 pt-2">Create a new account.</p>
        </section>

        <section className="mt-10">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                required
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
              />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
              />
            </div>
            <div className="mb-6 pt-3 rounded bg-gray-200">
              <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
              />
            </div>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            {successMessage && <p className="text-green-500 text-center mb-4">{successMessage}</p>}
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200" type="submit">Sign Up</button>
          </form>
        </section>
      </div>
      <div className="max-w-lg mx-auto text-center mt-12 mb-6">
        <p className="text-white">Already have an account? <Link to="/login" className="font-bold hover:underline">Sign in</Link>.</p>
        <Link
              to="/"
              className="text-indigo-800 hover:text-blue-700 ml-3 font-semibold"
            >
              Back To HomePage
            </Link>
      </div>
    </div>
  );
}

export default SignUp;
``
