import { doc, getDoc, serverTimestamp  } from 'firebase/firestore';
import { db } from './firebase';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Forum from './Forum';

function ShowMaterial() {
  const [loading, setLoading] = useState(true);
  const [material, setMaterial] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const courseId = searchParams.get('courseId');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMaterial = async () => {
      try {
        const courseDocRef = doc(db, 'Courses', courseId);
        const courseDocSnapshot = await getDoc(courseDocRef);

        if (courseDocSnapshot.exists()) {
          const materialData = courseDocSnapshot.data();
          setMaterial(materialData);
          setLoading(false);
        } else {
          console.error('Course document not found');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching material:', error);
        setLoading(false);
      }
    };

    if (courseId) {
      fetchMaterial();
    }
  }, [courseId]);

  return (
    <div className='container mx-auto mt-8 font-serif'>
      {material && (
        <h1 className='text-3xl mb-6'>Current Course: {material.courseName}</h1>
      )}
      {loading && <div>Loading...</div>}

      <button
        onClick={() => navigate('/addmaterial')}
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      >
        Add Courses material
      </button>

      {!loading && material && material.lectures && (
        <ul className='grid grid-cols-1'>
          {material.lectures.map((lec, index) => (
            <li key={index} className='bg-gray-200 p-4 rounded-lg m-6'>
              {lec.title}
              <Forum idd={lec.id}/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShowMaterial;
