import { collection, doc, getDoc, query, where, } from 'firebase/firestore';
import { db } from './firebase';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";



function ShowMaterial() {
    // const [loading, setLoading] = useState(true); // State to manage loading status
    // const [existingCourses, setExistingCourses] = useState([]);
    const [Material, setMaterial] = useState(); // State to hold course data
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
                } else {
                    console.error('Course document not found');
                }
            } catch (error) {
                console.error('Error fetching material:', error);
            }
        };

        if (courseId) {
            fetchMaterial();
        }
    }, [])

    return (
        <div className='container mx-auto mt-8 font-serif'>
            <h1 className='text-3xl mb-6'>Current Course : {Material.courseName}</h1>
            {/* <p>{Material.courseDifficulty}</p> */}


            <button
                onClick={() => { navigate('/addmaterial') }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add Courses material
            </button>
            <ul className='grid grid-cols-1 gap-4'>
                
            </ul>
                
                {/* <div className='bg-gray-200 p-4 rounded-lg'>
                    {Material && (
                        <p className='text-indigo-800 hover:underline'>{Material.courseName}</p>
                    )}                    
                </div> */}
            
        </div>
    )
}

export default ShowMaterial