// Standards.js
import React, { useState } from 'react';
import StandardCard from './standardCard';
import standardsData from '../standardData';

const Standards = () => {
  const [students, setStudents] = useState(standardsData);

  const handleAdd = () => {
    const newStudentName = window.prompt('Enter the name of the new Student:');
    const newSubjectName = window.prompt('Enter the name of the subject for the new Student:');

    if (newStudentName && newSubjectName) {
      const newStudent = {
        name: newStudentName,
        subjects: [
          {
            name: newSubjectName,
            ytUrl: 'https://www.youtube.com/watch?v=defaultVideoID',
          },
        ],
      };
      setStudents([...students, newStudent]);
    }
  };

  const handleDelete = (studentToDelete) => {
    const updatedStudents = students.filter(
      (student) => student !== studentToDelete
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="standards">
      {students.map((student, index) => (
        <StandardCard
          key={index}
          standard={student}
          onDelete={() => handleDelete(student)}
        />
      ))}
      <button onClick={handleAdd}>Add New Student</button>
    </div>
  );
};

export default Standards;
