// StudentProgressReport.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TaskList from './TaskList';
import ProgressBar from './ProgressBar';
import './StudentProgressReport.css';

const StudentProgressReport = () => {
  const { studentId } = useParams();
  const [tasks, setTasks] = useState(() => {
    // Load tasks from LocalStorage on component mount
    const storedTasks = localStorage.getItem(`tasks_${studentId}`);
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [newTaskDescription, setNewTaskDescription] = useState('');

  useEffect(() => {
    // Save tasks to LocalStorage whenever tasks change
    localStorage.setItem(`tasks_${studentId}`, JSON.stringify(tasks));
  }, [tasks, studentId]);

  const calculateProgress = () => {
    const completedTasks = tasks.filter(task => task.completed).length;
    const totalTasks = tasks.length;
    return (completedTasks / totalTasks) * 100;
  };

  const progress = calculateProgress();

  const addTask = () => {
    if (newTaskDescription.trim() === '') return;
    const newTask = { id: tasks.length + 1, description: newTaskDescription, completed: false };
    setTasks([...tasks, newTask]);
    setNewTaskDescription('');
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="progress-report-container">
      <h2 className="progress-report-title">Progress Report</h2>
      <br />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggleCompletion={toggleTaskCompletion} />
      <br /><br />
      <ProgressBar progress={progress} />
      <br />
      <div>
        <input
          type="text"
          placeholder="Enter task description"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          className="task-input"
        />
        <button onClick={addTask} className="task-button">
          Add Task
        </button>
      </div>
    </div>
  );
};

export default StudentProgressReport;
