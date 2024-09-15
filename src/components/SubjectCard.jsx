import React from 'react';
import './subjects.css';

const SubjectCard = ({ subject, onDelete }) => {
  const handleOpenYoutubeLink = () => {
    window.open(subject.ytUrl, '_blank');
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete();
  };

  return (
    <div className="subject-card" onClick={handleOpenYoutubeLink}>
      <h3>{subject.name}</h3>
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
};

export default SubjectCard;
