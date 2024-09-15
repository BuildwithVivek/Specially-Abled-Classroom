import React from 'react';
import './classroom.css';
import DColumnComponent1 from './DColumnComponent1';
import DColumnComponent2 from './DColumnComponent2';

const DClassroom = () => {
  return (
    <div className="con-class">
     <div className="heading"> <h1>DEAF CLASSROOM</h1></div>
      <div className="classroom-container">
        <div className="classroom-column1">
          <DColumnComponent1 />
        </div>
        <div className="classroom-column2">
          <DColumnComponent2 />
        </div>
      </div>
    </div>
  );
};

export default DClassroom;
