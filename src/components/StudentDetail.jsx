// StudentDetail.js

import React from 'react';
import TaskList from './TaskList';
import ProgressBar from './ProgressBar';

const StudentDetail = ({ student }) => {
  return (
    <div>
      <h2>{student.name}'s Details</h2>
      <TaskList tasks={student.tasks} />
      <ProgressBar progress={student.progress} />
    </div>
  );
};

export default StudentDetail;
