import React from 'react';
import './result.css'; 

const Result = ({ score, totalQuestions, userAnswers, quizData }) => {
  return (
    <div className="result-container">
      <h2>Quiz Completed</h2>
      <p>Your Score: {score}/{totalQuestions}</p>
      <ul>
        {userAnswers.map((answer, index) => (
          <li key={index}>
           <div className="resu"> <span className="question-number">Question {answer.question + 1}:</span>
            <span className="question-letter">Correct Answer: {quizData[answer.question].letter}</span>
            <br />
            <span className="your-answer">Your Answer: {answer.answer}</span>
            {answer.isCorrect ? <span className="correct-answer"> (Correct)</span> : <span className="wrong-answer"> (Wrong)</span>}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
