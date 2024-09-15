import React, { useState } from 'react';
import Question from './question'; // Adjust the import path as needed
import Result from './result'; // Adjust the import path as needed

const Quiz = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (answer) => {
    const isCorrect = answer === quizData[currentQuestion].correctAnswer;
    setUserAnswers([...userAnswers, { question: currentQuestion, answer, isCorrect }]);
    if (isCorrect) {
      setScore(score + 1);
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div>
      {quizCompleted ? (
        <Result score={score} totalQuestions={quizData.length} userAnswers={userAnswers} quizData={quizData} />
      ) : (
        <Question data={quizData[currentQuestion]} handleAnswer={handleAnswer} />
      )}
    </div>
  );
};

export default Quiz;
