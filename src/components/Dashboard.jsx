// Dashboard.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StudentProgressChart from './StudentProgressChart';
import './Dashboard.css';

const Dashboard = ({ students, setStudents }) => {
  const [newStudentName, setNewStudentName] = useState('');

  const addStudent = () => {
    console.log("adding student");
    if (newStudentName.trim() === '') return;
    const newStudent = { id: Date.now(), name: newStudentName };
    setStudents([...students, newStudent]);
    setNewStudentName('');
  };

  const deleteStudent = (studentId) => {
    console.log('Deleting student with ID:', studentId);
    const updatedStudents = students.filter(student => student.id !== studentId);
    setStudents(updatedStudents);
  };

  useEffect(() => {
    // Save students to LocalStorage whenever students change
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const calculateProgress = () => {
    return students.map(student => {
      const tasks = student.tasks || [];  // Ensure tasks is defined or default to an empty array
      const completedTasks = tasks.filter(task => task.completed).length;
      const totalTasks = tasks.length;
      return (completedTasks / totalTasks) * 100;
    });
  };
  

  const progressData = calculateProgress();

  return (
    <div className="dashboard-container">
      <h2>Student List</h2>
      <ul className="student-list">
        {students.map(student => (
          <li key={student.id} className="student-item">
            <Link to={`/progress/${student.id}`} className="student-name">{student.name}</Link>
            <button className='dash_del_btn' onClick={() => deleteStudent(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <br /> <br />
        <input
          type="text"
          placeholder="Enter student name"
          value={newStudentName}
          onChange={(e) => setNewStudentName(e.target.value)}
          className="student-input"
        />
        <button onClick={addStudent} className="student-button">
          Add Student
        </button>
      </div>
      {/* <StudentProgressChart students={students} progressData={progressData} /> */}
    </div>
  );
};

export default Dashboard;
