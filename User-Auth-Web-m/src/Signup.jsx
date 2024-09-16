import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; 
import { collection, addDoc } from 'firebase/firestore'; 
import { db } from './firebase'; 

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  
/////////////////////////
const handleSubmit = async (e) => {
  e.preventDefault(); 

  try {
    // Create the user account with Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);

    // Get the newly created user's ID
    const userId = userCredential.user.uid;

    // Save the user data in Firestore
    const usersCollectionRef = collection(db, 'users');
    await addDoc(usersCollectionRef, {
        name: values.username, 
        email: values.email,
        // ... other user data you want to store
    });

    console.log('User signed up successfully');
    navigate('/dashboard'); // Or any other appropriate route

  } catch (error) {
    console.error('Error signing up:', error);
    // Handle errors, e.g., display an error message to the user
  }
}
  return (
    <>
      <div className=" bg-black">
        <Link to="/">
          <div className="group hover:underline flex ml-5 p-3 text-sm text-white">
            <span className="mt-1 mr-1">
              <FaArrowLeft />
            </span>{" "}
            Back
          </div>
        </Link>
        <section className="min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full mx-auto p-8 bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-center">
              <Link to="/">
                <img src={"#"} alt="Sample" className="w-40 h-auto mb-5" />
              </Link>
            </div>

            <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
              {/*  Name */}
              <div className="relative mb-3">
                <input
                  value={values.username}
                  onChange={(e) =>
                    setValues({ ...values, username: e.target.value })
                  }
                  type="name"
                  className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem]  focus:outline-none peer-focus:text-primary "
                  // id="floatingInput"
                  placeholder=""
                />
                <label
                  // htmFor="floatingInput"
                  className="pointer-events-none absolute left-0 -top-2 origin-[0_0] border border-solid border-transparent px-3 py-4  text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
                >
                  Full Name
                </label>
              </div>

              {/* Email */}
              <div className="relative mb-3">
                <input
                  value={values.email}
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  type="email"
                  className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem]  focus:outline-none peer-focus:text-primary "
                  // id="floatingInput"
                  placeholder="name@example.com"
                />
                <label
                  // htmFor="floatingInput"
                  className="pointer-events-none absolute left-0 -top-2 origin-[0_0] border border-solid border-transparent px-3 py-4  text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
                >
                  Email address
                </label>
              </div>

              {/* Password */}
              <div className="relative mb-3">
                <input
                  value={values.password}
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                  type="password"
                  className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem]  focus:outline-none peer-focus:text-primary "
                  // id="floatingInput"
                  placeholder="name@example.com"
                />
                <label
                  // htmFor="floatingInput"
                  className="pointer-events-none absolute left-0 -top-2 origin-[0_0] border border-solid border-transparent px-3 py-4  text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
                >
                  Password
                </label>
              </div>

              <div className="">
                <button
                  type="submit"
                  className="button-primary w-full py-3 text-white font-semibold rounded-lg shadow-lg bg-black hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                  Sign up
                </button>
              </div>
            </form>
            <p className="mt-8 text-sm text-neutral-700 ">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-indigo-500 underline underline-offset-8 font-medium"
              >
                Login
              </Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Signup;
