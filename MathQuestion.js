
import React from 'react';
import './Question.css';

function MathQuestion({ data, onAnswer }) {
  return (
    <div className="question-box">
      <h4>{data.question}</h4>
      <ul className="option-list">
        {data.options.map((opt, index) => (
          <li key={index} onClick={() => onAnswer(index)}>
            {opt}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MathQuestion;
