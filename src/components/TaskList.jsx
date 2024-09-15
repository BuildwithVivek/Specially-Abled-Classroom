// TaskList.js

import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onDelete, onToggleCompletion }) => {
  return (
    <div className="task-list-container">
      <h3 className="task-list-title">Tasks</h3>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleCompletion(task.id)}
              className="task-checkbox"
            />
            <span className={`task-description ${task.completed ? 'completed' : ''}`}>
              {task.description}
            </span>
            <button onClick={() => onDelete(task.id)} className="task-delete">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
