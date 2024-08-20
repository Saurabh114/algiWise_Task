import React, { useState, useEffect } from "react";
import "./Exam.css";
import Question from "./../Questions/Questions";
import WebcamCapture from "./../CameraAccess/CameraAccess";

function Exam({ questions, onSubmit }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(3600); // 1 hour in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);

  const allQuestions = [...questions];

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timerInterval);
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const handleAnswerChange = (index, selectedOption) => {
    setAnswers({
      ...answers,
      [index]: selectedOption,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    onSubmit(answers); // Pass the answers to the parent component
  };

  const handleQuestionSelect = (index) => {
    setCurrentQuestionIndex(index);
  };

  const formatRemainingTime = () => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const currentQuestion = allQuestions[currentQuestionIndex];

  return (
    <div className="exam-container">
      <div className="sidebar">
        <div className="clock-container">
          <div className="time-remaining">
            {formatRemainingTime()} remaining
          </div>
        </div>
        <div className="question-list">
          {allQuestions.map((question, index) => (
            <div
              key={index}
              className={`question-item ${answers[index] ? "answered" : ""} ${
                currentQuestionIndex === index ? "active" : ""
              }`}
              onClick={() => handleQuestionSelect(index)}
            >
              Question {index + 1}
            </div>
          ))}
        </div>
        <div className="questionGurid mt-8">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Question Guidline
          </h3>
          <div className="question-list">
            <div className="question-item">Not Answered Question</div>
            <div className="question-item answered"> Answered </div>
            <div className="question-item answered active">
              Current Question
            </div>
          </div>
        </div>
      </div>
      <div className="question-area">
        {!isSubmitted ? (
          <>
            <Question
              question={currentQuestion}
              questionIndex={currentQuestionIndex}
              onAnswerChange={handleAnswerChange}
              selectedAnswer={answers[currentQuestionIndex]}
            />
            <div className="navigation-buttons">
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex <= 0}
              >
                Previous
              </button>
              {currentQuestionIndex < allQuestions.length - 1 ? (
                <button onClick={handleNextQuestion}>Next</button>
              ) : (
                <button onClick={handleSubmit}>Submit Test</button>
              )}
            </div>
          </>
        ) : (
          <div className="submission-message">
            <h2>Test Submitted!</h2>
            <p>Your results will be displayed here.</p>
          </div>
        )}
      </div>

      <div className="webcam">
        <WebcamCapture />
      </div>
    </div>
  );
}

export default Exam;
