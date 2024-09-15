import React from 'react';
import SubjectCard from './SubjectCard';
import './subjects.css';

const SubjectList = ({ subjects, renderSubject }) => {
  return (
    <div className="subject-list">
      {subjects.map((subject, index) => (
        renderSubject(subject, index)
      ))}
    </div>
  );
};

export default SubjectList;
