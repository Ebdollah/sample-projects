
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FaPlus, FaTrash } from "react-icons/fa";
import {
  collection,
  getFirestore,
  query,
  where,
  getDocs,
  updateDoc
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";

const CreateCourseMaterial = () => {
  const randomUUID = generateRandomNumber();
  const [lectures, setLectures] = useState([{id:randomUUID, number: 1, title: "", materials: [] }]);
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  
  const handleAddLecture = () => {
    const newLectureId = uuidv4();
    const newLectureNumber = lectures.length + 1;
    setLectures([
      ...lectures,
      { id: newLectureId, number: newLectureNumber, title: "", materials: [] },
    ]);
  };
  function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 1000000000000000000);
    const formattedNumber = randomNumber.toString().padStart(36, '0');
    const formattedUUID = `${formattedNumber.slice(0, 8)}-${formattedNumber.slice(8, 12)}-${formattedNumber.slice(12, 16)}-${formattedNumber.slice(16, 20)}-${formattedNumber.slice(20, 32)}`;
    return formattedUUID;
  }

  const handleRemoveLecture = (lectureNumber) => {
    const updatedLectures = lectures.filter(
      (lecture) => lecture.number !== lectureNumber
    );
    setLectures(updatedLectures);
  };

  const handleAddMaterial = (lectureNumber, materialType) => {
    if (materialType === "video") {
      const videoLink = prompt("Enter the video link:");
      if (videoLink) {
        const updatedLectures = lectures.map((lecture) => {
          if (lecture.number === lectureNumber) {
            const updatedMaterials = [
              ...lecture.materials,
              { type: materialType, link: videoLink },
            ];
            return { ...lecture, materials: updatedMaterials };
          }
          return lecture;
        });
        setLectures(updatedLectures);
      }
    } else if (materialType === "slides") {
      const fileInput = document.createElement("input");
      fileInput.setAttribute("type", "file");
      fileInput.setAttribute("accept", ".pdf, .ppt, .pptx"); 
      fileInput.addEventListener("change", (e) => {
        const target = e.target;
        const file = target.files ? target.files[0] : null;
        if (file) {
          const updatedLectures = lectures.map((lecture) => {
            if (lecture.number === lectureNumber) {
              const updatedMaterials = [
                ...lecture.materials,
                { type: materialType, file },
              ];
              return { ...lecture, materials: updatedMaterials };
            }
            return lecture;
          });
          setLectures(updatedLectures);
        }
      });
      fileInput.click();
    }
  };

  const handleConfirmCourse = async () => {
    try {
      setLoading(true);

      const db = getFirestore();
      const storage = getStorage();

      const storageRef = ref(storage, "slides");

      const updatedLectures = await Promise.all(
        lectures.map(async (lecture) => {
          const updatedMaterials = await Promise.all(
            lecture.materials.map(async (material) => {
              if (material.type === "slides" && material.file) {
                const slidesRef = ref(storageRef, material.file.name); 
                await uploadBytes(slidesRef, material.file); 
                const downloadURL = await getDownloadURL(slidesRef); 
                return { type: "slides", url: downloadURL };
              }
              return material;
            })
          );
          return { ...lecture, materials: updatedMaterials };
        })
      );

      const savedCourseName = localStorage.getItem('courseName');

      if (savedCourseName) {
        const coursesRef = collection(db, 'Courses');
        const q = query(coursesRef, where('courseName', '==', savedCourseName));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const courseDocRef = querySnapshot.docs[0].ref;

          await updateDoc(courseDocRef, {
            lectures: updatedLectures,
          });

          console.log('Course updated successfully with lectures');
        } else {
          console.log('No course found with the provided course name');
        }

        setLoading(false);
        setSuccessMessage("Course updated successfully!");
      } else {
        console.error('No course name found in localStorage');
        setLoading(false);
      }
    } catch (error) {
      console.error("Error updating course: ", error);
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-8 font-serif">
      <h1 className="text-3xl mb-6">Create New Course</h1>

      <form>
        {/* <div className="mb-4">
          <label
            htmlFor="courseName"
            className="block text-sm font-medium text-gray-700"
          >
            Course Name:
          </label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="affiliatedUniversity"
            className="block text-sm font-medium text-gray-700"
          >
            Affiliated University:
          </label>
          <input
            type="text"
            id="affiliatedUniversity"
            name="affiliatedUniversity"
            value={affiliatedUniversity}
            onChange={(e) => setAffiliatedUniversity(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="courseDifficulty"
            className="block text-sm font-medium text-gray-700"
          >
            Course Difficulty:
          </label>
          <select
            id="courseDifficulty"
            name="courseDifficulty"
            value={courseDifficulty}
            onChange={(e) => setCourseDifficulty(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div> */}

        {lectures.map((lecture) => (
          <div key={lecture.number} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">
              Lecture Number {lecture.number} - {lecture.title}
            </h2>

            {/* Lecture title input */}
            <div className="mb-4">
              <label
                htmlFor={`lectureTitle-${lecture.number}`}
                className="block text-sm font-medium text-gray-700"
              >
                Lecture Title:
              </label>
              <input
                type="text"
                id={`lectureTitle-${lecture.number}`}
                name={`lectureTitle-${lecture.number}`}
                value={lecture.title}
                onChange={(e) => {
                  const updatedLectures = lectures.map((lec) =>
                    lec.number === lecture.number
                      ? { ...lec, title: e.target.value }
                      : lec
                  );
                  setLectures(updatedLectures);
                }}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>

            {/* Materials for each lecture */}
            <div className="flex items-center mb-2">
              <span className="mr-2">Materials:</span>

              {/* Add material buttons */}
              <button
                type='button'
                className='bg-indigo-800 hover:bg-green-700 text-white p-2 rounded-lg mr-2'
                onClick={() => handleAddMaterial(lecture.number, 'video')}
              >
                Add Video
              </button>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg"
                onClick={() => handleAddMaterial(lecture.number, "slides")}
              >
                Add Slides
              </button>
            </div>

            {/* Display materials for each lecture */}
            <ul className="list-disc ml-6">
              {lecture.materials.map((material, index) => (
                <li key={index}>
                  {material.type === "video" ? (
                    <div>
                      Video Lecture:{" "}
                      <a
                        href={material.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {material.link}
                      </a>
                      {/* You can embed a video player here instead of displaying a link */}
                    </div>
                  ) : (
                    "Lecture Slides"
                  )}
                </li>
              ))}
            </ul>

            {/* Remove lecture button */}
            <button
              type="button"
              className="text-red-500 mt-2 hover:text-red-700 flex items-center"
              onClick={() => handleRemoveLecture(lecture.number)}
            >
              <FaTrash className="mr-1" /> Remove Lecture
            </button>
          </div>
        ))}

        {/* Add new lecture button */}
        <button
          type="button"
          className="block bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg mb-4"
          onClick={handleAddLecture}
        >
          <FaPlus className="mr-2" />
          Add New Lecture
        </button>

        {/* Confirm button */}
        <button
          type='button'
          className='block bg-indigo-800 hover:bg-green-700 text-white p-2 my-12 rounded-lg'
          onClick={handleConfirmCourse}
          disabled={loading} // Disable button when loading is true
        >
          {/* Show loader if loading, otherwise show text */}
          {loading ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            "Confirm Course"
          )}
        </button>

        {/* Success message */}
        {successMessage && (
          <div className="text-green-600 my-4">{successMessage}</div>
        )}
      </form>
      {/* Form and other JSX elements */}
      {/* Your JSX here, make sure to use event handlers and inputs correctly */}
    </div>
  );
};

export default CreateCourseMaterial;
