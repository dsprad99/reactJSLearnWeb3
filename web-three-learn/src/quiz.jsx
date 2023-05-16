import React, { useState } from "react";
import "./App.css";

function Quiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is blockchains main feature?",
      options: [
        { id: 0, text: "Exchangability", isCorrect: false },
        { id: 1, text: "Falsibility", isCorrect: false },
        { id: 2, text: "Centralization", isCorrect: false },
        { id: 3, text: "Secureness", isCorrect: true },
      ],
    },
    {
      text: "What is a crypto wallet?",
      options: [
        { id: 0, text: "Soft/hardware for accessing crypto assets and transacting", isCorrect: true },
        { id: 1, text: "Sotware for accesing crypto assets and transacting", isCorrect: false },
        { id: 2, text: "Any wallet with crypto assets", isCorrect: false },
        { id: 3, text: "A physcial wallet with crypto coins", isCorrect: false },
      ],
    },
    {
      text: "What is the difference between public and private keys",
      options: [
        { id: 0, text: "Get money with private key, access assets with public key", isCorrect: false },
        { id: 1, text: "Access assets with private key, get money with public key", isCorrect: true },
        { id: 2, text: "Use both to access a SEED-phrase", isCorrect: false },
        { id: 3, text: "PUblic is when anyone can see the key", isCorrect: false },
      ],
    },
    {
      text: "What is a node blockchain?",
      options: [
        { id: 0, text: "A group of devices that mines crypto", isCorrect: false },
        { id: 1, text: "A group of devices in a blockchain that help P2P network function", isCorrect: true },
        { id: 2, text: "A network that stores data about transactions", isCorrect: false },
        { id: 3, text: "A way to store data using the cloud", isCorrect: false },
      ],
    },
    {
      text: "What is a crypto miner?",
      options: [
        { id: 0, text: "Hardware to get bitcoins", isCorrect: false },
        { id: 1, text: "Hardware to get crypto", isCorrect: true },
        { id: 2, text: "A professional in crypto exhange", isCorrect: false },
        { id: 3, text: "When people go into coal mines to get crypto", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/*  Header for our quiz */}
      <h1>Web3 Quiz</h1>

      {/*  Current Score which was set to 0*/}
      <h2>Score: {score}</h2>

      {/* Show results or show the question game  */}
      {showResults ? (
        /* Final results at the end of our quiz*/
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* Answer choices available */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;