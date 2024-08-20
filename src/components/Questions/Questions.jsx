import React from "react";

function Question({ question, questionIndex, onAnswerChange, selectedAnswer }) {
  return (
    <div className="question">
    
      <h3 className="text-xl font-semibold" >{question.question}</h3>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              name={`question-${questionIndex}`}
              id={`option-${questionIndex}-${index}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onAnswerChange(questionIndex, option)}
            />
            <label htmlFor={`option-${questionIndex}-${index}`}>{option}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
