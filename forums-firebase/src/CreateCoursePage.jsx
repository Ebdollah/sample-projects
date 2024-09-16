import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getFirestore, doc, setDoc, collection } from "firebase/firestore";

const CreateCoursePage = () => {
  const [courseName, setCourseName] = useState('');
  const [affiliatedUniversity, setAffiliatedUniversity] = useState('');
  const [courseDifficulty, setCourseDifficulty] = useState('');
  const history = useNavigate(); // Initialize useNavigate hook
  const db = getFirestore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const docRef = doc(collection(db, "Courses"));
      await setDoc(docRef, {
        courseName: courseName,
        affiliatedUniversity: affiliatedUniversity,
        courseDifficulty: courseDifficulty
      });
      console.log('Document written with ID:', docRef.id);
      localStorage.setItem('courseName', courseName);
    } catch (error) {
      console.error('Error adding document:', error);
    }

    console.log('Form submitted');
    history('/course');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 p-6 lg:p-12 rounded-md shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight pb-8 text-center text-indigo-800">
          Create New Course
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="courseName" className="text-gray-700 block font-semibold mb-2">
              Course Name
            </label>
            <input
              type="text"
              id="courseName"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-800"
              placeholder="Enter course name"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="affiliatedUniversity" className="text-gray-700 block font-semibold mb-2">
              Affiliated University
            </label>
            <input
              type="text"
              id="affiliatedUniversity"
              value={affiliatedUniversity}
              onChange={(e) => setAffiliatedUniversity(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-800"
              placeholder="Enter affiliated university"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="courseDifficulty" className="text-gray-700 block font-semibold mb-2">
              Course Difficulty
            </label>
            <select
              id="courseDifficulty"
              value={courseDifficulty}
              onChange={(e) => setCourseDifficulty(e.target.value)}
              className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-800"
              required
            >
              <option value="">Select difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-800 hover:bg-indigo-900 text-white font-semibold rounded-md py-2 transition duration-300 ease-in-out"
          >
            Create Course
          </button>
        </form>

        <p className="mt-4 text-center text-gray-700">
          <Link to="/" className="text-indigo-800 hover:text-blue-700 font-semibold">
            Go back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CreateCoursePage;
