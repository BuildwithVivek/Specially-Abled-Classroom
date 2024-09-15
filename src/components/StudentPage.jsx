// StudentPage.js

import React from 'react';
import TaskList from './TaskList';
import ProgressBar from './ProgressBar';
import studentsData from './studentsData';

const StudentPage = ({ match }) => {
  const studentId = parseInt(match.params.id, 10); // Extract studentId from the URL
  const student = studentsData.find(student => student.id === studentId);

  return (
    <div>
      <h2>{student.name}'s Details</h2>
      <TaskList tasks={student.tasks} />
      <ProgressBar progress={student.progress} />
    </div>
  );
};

export default StudentPage;
