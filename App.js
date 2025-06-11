
import React, { useState } from 'react';
import MathQuestion from './MathQuestion';
import './App.css';

const questions = [
  {
    id: 1,
    question: "What is the derivative of f(x) = ln(x^2 + 1) ?",
    options: [
      "1 / (x^2 + 1)",
      "2x / (x^2 + 1)",
      "ln(2x)",
      "2x * ln(x^2 + 1)"
    ],
    answer: 1
  },
  {
    id: 2,
    question: "Evaluate ∫ x * e^x dx",
    options: [
      "x * e^x - ∫ e^x dx",
      "e^x + C",
      "x * e^x - e^x + C",
      "x * e^x + e^x + C"
    ],
    answer: 2
  },
  {
    id: 3,
    question: "Find the derivative of f(x) = sin(x) * ln(x)",
    options: [
      "cos(x)/x + sin(x)/x",
      "cos(x) * ln(x) + sin(x)/x",
      "cos(x) * ln(x)",
      "cos(x) * ln(x) + ln(x)/x"
    ],
    answer: 1
  }
];

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="container">
      <h2>🧠 CalculusPro - Test Your Calculus Knowledge</h2>
      {showResult ? (
        <div className="result">
          <h4>Quiz Completed</h4>
          <p>Your score: {score} / {questions.length}</p>
        </div>
      ) : (
        <MathQuestion
          data={questions[current]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default App;
