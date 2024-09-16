import React, { useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

function Forum({ idd }) {
  const [comment, setComment] = useState({ subject: "", message: "" });

  const handleSubjectChange = (e) => {
    setComment({ ...comment, subject: e.target.value });
  };

  const handleMessageChange = (e) => {
    setComment({ ...comment, message: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const timestamp = serverTimestamp();
      const commentRef = await addDoc(collection(db, 'Comments'), {
        lectureId: idd,
        timestamp: timestamp,
        subject: comment.subject,
        message: comment.message,
      });
      console.log('Comment added with ID: ', commentRef.id);
    } catch (error) {
      console.error('Error adding comment: ', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="subject"
            type="text"
            placeholder="Subject"
            value={comment.subject}
            onChange={handleSubjectChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message"
            value={comment.message}
            onChange={handleMessageChange}
            rows="3"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Forum;
