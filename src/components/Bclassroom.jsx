import React from 'react';
import './classroom.css';
import BColumnComponent1 from './BColumnComponent1';
import BColumnComponent2 from './BColumnComponent2';

const BClassroom = () => {
  return (
    <div className="con-class">
     <div className="heading"> <h1>BLIND CLASSROOM</h1></div>
      <div className="classroom-container">
      <div className="classroom-column1">
        <BColumnComponent1 />
        
      </div>
      <div className="classroom-column2">
        <BColumnComponent2 />
      </div>
    </div>
    </div>
  );
};

export default BClassroom;
