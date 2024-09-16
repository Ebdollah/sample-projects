import React, { useState } from "react";
// import logo from '../src/assets/Logo2'
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import { useAuth } from './AuthContext';


const Login = ({setIsLogin}) => {
  const {login} = useAuth();
  const navigate = useNavigate();

  const [value, setValue] = useState({ email: '', password: '' });
//
//
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try{
//       const response = await fetch('http://localhost:5000/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(value)
//       })
//       const data = await response.json();
//       if(response.ok && data.success){
//         localStorage.setItem('token', data.token)
//         localStorage.setItem('role', data.role)
//         navigate('/main');
     
      
//       }
//     }
//     catch(err){
//       console.log(err)
//     }

//   }

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("http://localhost:5000/api/users/login", value);

    if (response.data.message) {
      console.log("Login successful!");
      login();  // Set the login state
      navigate('/');  // Navigate to the main page or any other desired page
    }

    if (response.data.error) {
      console.log("Login unsuccessful!");
      console.log(response.data.error);
    }
  } catch (error) {
    console.log(error);
  }
};
  return (
    <>
      <div className="bg-black">
        <Link to='/'>
          <div className="-mb-10 group hover:underline flex ml-5 p-3 text-sm text-white">
            <span className="mt-1 mr-1"><FaArrowLeft /></span> Back
          </div>
        </Link>
        <section className="min-h-screen flex items-center justify-center  ">

          <div className="max-w-md w-full mx-auto p-8 rounded-lg shadow-lg bg-white">
            <div className="flex items-center justify-center">
              <Link to='/'>
                <img src={"#"} alt="Logo" className="w-40 h-auto mb-10" />
              </Link>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Email input */}

              <div className="relative mb-8">
                <input onChange={
                  (e) => {
                    setValue({ ...value, email: e.target.value })
                  }
                }
                  type="email"
                  className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem]  focus:outline-none peer-focus:text-primary "
                 
                  placeholder="" />
                <label
                  htmlFor="floatingInput"
                  className="pointer-events-none absolute left-0 -top-2 origin-[0_0] border border-solid border-transparent px-3 py-4  text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
                >Email address
                </label>
              </div>
              {/* password */}
              <div className="relative mb-8">
                <input
                  onChange={(e) => {
                    setValue({ ...value, password: e.target.value })
                  }
                  }
                  type="password"
                  className="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-500 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem]  focus:outline-none peer-focus:text-primary "
              
                  placeholder="" />
                <label
                  htmlForfor="floatingInput"
                  className="pointer-events-none absolute left-0 -top-2  origin-[0_0] border border-solid border-transparent px-3 py-4  text-gray-400 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
                >Password
                </label>
              </div>



              <div className="flex items-center justify-center mt-3 mb-6">

                {/* Forgot password link */}
                <p className="text-black text-sm">
                  Forgot password?
                </p>
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="button-primary w-full py-3 text-white font-semibold rounded-lg shadow-lg bg-black hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                Login
              </button>
            </form>

            <p className="mt-8 text-sm text-neutral-700 ">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-indigo-600 underline underline-offset-8 font-medium">
                Sign Up
              </Link>
            </p>
          </div>
        </section>
      </div>

    </>
  );
};

export default Login;