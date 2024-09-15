// Subjects.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SubjectList from './subjectList';
import SubjectCard from './SubjectCard';
import standardsData from '../standardData';
import './subjects.css';

const Subjects = () => {
  const { standardName } = useParams();
  const standard = standardsData.find((s) => s.name.toLowerCase() === standardName);

  const [subjects, setSubjects] = useState(standard.subjects);

  const handleAddSubject = () => {
    const newSubjectName = window.prompt('Enter the name of the new subject:');
    const ytUrl = window.prompt('Enter the YouTube link for the subject:');
    
    if (newSubjectName && ytUrl) {
      const newSubject = { name: newSubjectName, ytUrl: ytUrl };
      setSubjects([...subjects, newSubject]);
    }
  };

  const handleDeleteSubject = (subjectToDelete) => {
    const updatedSubjects = subjects.filter((subject) => subject !== subjectToDelete);
    setSubjects(updatedSubjects);
  };

  if (!standard) {
    return <div>Standard not found</div>;
  }

  return (
    <div>
      <div className="name">
        <h2>{standard.name} </h2>
      </div>
      <br />
      <div className="subname">
        <h3>Subjects</h3>
      </div>
      <br />
      <div>
        <SubjectList
          subjects={subjects}
          renderSubject={(subject, index) => (
            <SubjectCard
              key={index}
              subject={subject}
              onDelete={() => handleDeleteSubject(subject)}
            />
          )}
        />
        <button className='new_sub_btn' onClick={handleAddSubject}>Add New Subject</button>
      </div>
    </div>
  );
};

export default Subjects;
