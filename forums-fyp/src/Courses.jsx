import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'; // Import your Firestore instance

const Courses = () => {
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [existingCourses, setExistingCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesSnapshot = await getDocs(collection(db, 'Courses'));
        const coursesData = coursesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('coursedata' + coursesData);
        setExistingCourses(coursesData);
        setLoading(false); // Set loading to false when data fetching is complete
      } catch (error) {
        console.error('Error fetching courses:', error);
        setLoading(false); // Also set loading to false in case of error
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className='container mx-auto mt-8 font-serif'>
      <h1 className='text-3xl mb-6'>Your Courses</h1>

      {/* Display loading animation if data is being fetched */}
      {loading && <div>Loading...</div>}

      {/* List of existing courses */}
      {!loading && (
        <ul className='grid grid-cols-1 gap-4'>
          {existingCourses.map(course => (
            <li key={course.id} className='bg-gray-200 p-4 rounded-lg'>
              {/* Use Link component to navigate to course page */}
              <Link to={`/showmaterial?courseId=${course.id}`} className='text-indigo-800 hover:underline'>{course.courseName}</Link>
            </li>
          ))}
        </ul>
      )}

      {/* Button to create a new course */}
      <Link to='/createcourse'>
        <button className='mt-8 mb-8 bg-indigo-800 hover:bg-blue-700 text-white p-3 rounded-lg'>
          Create New Course
        </button>
      </Link>
    </div>
  );
};

export default Courses;
