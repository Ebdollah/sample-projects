// import React, { useEffect, useState } from 'react';
// import { getDownloadURL, ref } from 'firebase/storage';
// import { storage } from './firebase-config'; // Import your Firebase Storage configuration
// import PDFViewer from './PDFViewer'; // Import your PDFViewer component

// function PDFContainer({ filePath }) {
//   const [fileUrl, setFileUrl] = useState(null);

//   useEffect(() => {
//     const storageRef = ref(storage, filePath);

//     getDownloadURL(storageRef)
//       .then((url) => {
//         setFileUrl(url);
//       })
//       .catch((error) => {
//         console.error('Error fetching PDF file:', error);
//       });
//   }, [filePath]);

//   return <>{fileUrl && <PDFViewer fileUrl={fileUrl} />}</>;
// }

// export default PDFContainer;
