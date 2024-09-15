// StandardCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './standards.css';

const StandardCard = ({ standard, onDelete }) => {
  return (
    <div className="standard-card">
      <h2>{standard.name}</h2>
      <Link to={`/subjects/${standard.name.toLowerCase()}`}>
        View Progess
      </Link>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default StandardCard;
