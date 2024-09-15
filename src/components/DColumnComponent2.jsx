import React, { useRef } from 'react';
import './DColumnComponent2.css';

const DColumnComponent2 = () => {
    const documentContentRef = useRef(null);

    const handleButtonClick = (command, value = null) => {
      documentContentRef.current.focus();
      document.execCommand(command, false, value);
    };
  
  return (
    <div>
      <nav className="navbar navbcc2 navbar-light bg-light">
        <div className="container-fluid">
          <h2>Student</h2>
        </div>
        <div className="b">
          <button className='formatbutton' onClick={() => handleButtonClick('bold')}>B</button>
          <button className='formatbutton' onClick={() => handleButtonClick('underline')}>U</button>
          <button className='formatbutton' onClick={() => handleButtonClick('italic')}>I</button>
          <button className='formatbutton' onClick={() => handleButtonClick('hiliteColor', 'yellow')}>H</button>
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

export default DColumnComponent2;
