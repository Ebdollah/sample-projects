import React, { useState, useEffect } from "react";
// import logo from "../src/assets/Logo2";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";

// In the provided code snippet, axios is being imported and used. Axios is a popular JavaScript library that allows you to make HTTP requests from both the front-end and back-end of an application.
// In the front-end, axios is commonly used to send HTTP requests to a server and retrieve data. It provides a simple and intuitive API for making asynchronous requests, such as GET, POST, PUT, DELETE, etc. This is useful when you need to interact with an API or fetch data from a server. In this case, axios might be used to send a request to a server to create a new user account during the signup process.
// In the back-end, axios can be used to handle incoming HTTP requests and send responses. It is often used in server-side frameworks like Node.js to make requests to external APIs or perform database operations. For example, if the signup process involves storing user information in a database, axios might be used to send a request to the server's backend to save the user data.
// Overall, axios simplifies the process of making HTTP requests and handling responses in both the front-end and back-end of an application, making it a popular choice for developers.



const Signup = () => {
  const navigate = useNavigate();

  //make sure these below 3 fields matches with the backend/database fields
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  // const handleSubmit = async (e) => {
  //   //setValues({...values, role: 'user'});
  //   e.preventDefault();
  //   try {
  //     const response = await fetch("http://localhost:5000/api/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: values.name,
  //         email: values.email,
  //         password: values.password,
  //       }),
  //     });
  //     const data = await response.json();

  //     if (response.ok && data.success) {
  //       alert("User created successfully");
  //       navigate("/login");
  //     } else {
  //       alert(data.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

 
  const a = 19;

/////////////////////////
const handleSubmit = async (e) => {
  e.preventDefault(); // Prevent default form submission behavior

    try {
      // Make POST request to backend to register user
      const response = await axios.post("http://localhost:5000/api/users/register", values);

      // Handle successful registration (e.g., navigate to login page)
      if (response.data.message) {
        console.log("Registration successful!");
        navigate('/login'); // Navigate to login page after successful registration
      }
    } catch (error) {
      // Handle error (e.g., display error message)
      console.error("Registration failed:", error);
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
