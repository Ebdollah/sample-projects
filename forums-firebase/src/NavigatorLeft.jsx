import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { doc, getDoc, serverTimestamp  } from 'firebase/firestore';
import { db } from './fb';

function NavigatorLeft({onSelect}) {
  const [loading, setLoading] = useState(true);
  const [weekk, setWeekk] = useState(null);
  const [count, setCount] = useState(0);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const courseId = searchParams.get('courseId');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMaterial = async () => {
      try {
        const courseDocRef = doc(db, 'courses', courseId);
        const courseDocSnapshot = await getDoc(courseDocRef);
        console.log("fetchMaterial called");
  
        if (courseDocSnapshot.exists()) {
          const materialData = courseDocSnapshot.data();
          setWeekk(materialData);
          setCount(materialData.courseName);
          console.log("Data fetched:", materialData);
          alert("hello");
          setLoading(false);
          // console.log('Count: ' + count);
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
  
  const menuList = ['Lecture1', 'Lecture2','Lecture3','Lecture4', 'Lecture5' 
  ,'Lecture6', 'Lecture7', 'Lecture8', 'Lecture9', 'Lecture10'
  ,'Lecture11', 'Lecture12', 'Lecture13', 'Lecture14', 'Lecture15']
  return (
    // <div>
    // {loading && <div>Loading...</div>}

    //   {!loading && weekk && (
    //   <div className='w-[200px] mr-[50px] max-h-[80vh] overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200'>
    //   {weekk.map((menu)=>{
    //       <button className='flex-col w-[100%] p-[10px] mb-[10px] bg-indigo-800 rounded-lg text-white cursor-pointer transition duration-300 hover:bg-blue-700' key={menu} onClick={()=>onSelect(menu)}>{menu}</button>
    //   })}
    // </div>
    // ) }
    // </div>
    <div className='w-[200px] mr-[50px] max-h-[80vh] overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200'>
      {menuList.map((menu)=>{
        return(
          <button className='flex-col w-[100%] p-[10px] mb-[10px] bg-indigo-800 rounded-lg text-white cursor-pointer transition duration-300 hover:bg-blue-700' key={menu} onClick={()=>onSelect(menu)}>{menu}</button>
        )
      })}
    </div>
  )
}

export default NavigatorLeft