import React from 'react';
import './question.css'; // Import the CSS file

const Question = ({ data, handleAnswer }) => {
  return (
    <div className="question-container">
      <img src={data.image} alt={`Image for letter ${data.letter}`} className="question-image" />
      <p className="question-text">Which letter is this?</p>
      <div className="options-container">
        {data.options.map((option, index) => (
          <button key={index} className="option-button" onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
