import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import App from './App';

// Use createRoot for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
