import React, { useState } from "react";
import questions from "./questions.js";
import Dashboard from "./components/Dashboard/Dashboard";
import Exam from "./components/Exam/Exam";
import "./App.css"

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [examStarted, setExamStarted] = useState(false);
  const [results, setResults] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setExamStarted(true);
  };

  const calculateResults = (answers) => {
    const categoryQuestions = questions[selectedCategory];
    let correctAnswers = 0;

    categoryQuestions.forEach((question, index) => {
      if (question.answer === answers[index]) {
        correctAnswers++;
      }
    });

    setResults({
      correct: correctAnswers,
      total: categoryQuestions.length,
    });
  };

  return (
    <div className="app">
      {!results ? (
        examStarted ? (
          <Exam questions={questions[selectedCategory]} onSubmit={calculateResults} />
        ) : (
          <Dashboard
            onSelectCategory={handleCategorySelect}
            selectedCategory={selectedCategory}
          />
        )
      ) : (
        <div className="results">
          <h2>Test Results</h2>
          <p>
            You scored {results.correct} out of {results.total}.
          </p>
          <p>Percentage: {((results.correct / results.total) * 100).toFixed(2)}%</p>
          <button onClick={() => window.location.reload()}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default App;
