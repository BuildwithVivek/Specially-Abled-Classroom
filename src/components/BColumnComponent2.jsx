import React, { useRef } from 'react';
import './BColumnComponent2.css';

const BColumnComponent2 = () => {
    const API_ENDPOINT = 'https://braille-70ade-default-rtdb.firebaseio.com/Prototype.json';
  const documentContentRef = useRef(null);

  const fetchData = async () => {
    try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  };

  const updateDocumentContent = async () => {
    const data = await fetchData();

    if (data && data.Data) {
      documentContentRef.current.innerHTML = data.Data;
    } else {
      documentContentRef.current.innerHTML = 'No content available';
    }
  };

  return (
    <div>
      <nav className="navbar navbcc2 navbar-light bg-light">
        <div className="container-fluid">
          <h2>Student</h2>
        </div>
        <div className="b">
          <button id="fetchButton" onClick={updateDocumentContent}>
            Fetch
          </button>
        </div>
      </nav>


      <div className="notepad">
        <div
          id="document-content"
          ref={documentContentRef}
          contentEditable="true"
        ></div>
      </div>
    </div>
  );
};

export default BColumnComponent2;
