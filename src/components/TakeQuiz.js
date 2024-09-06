import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';

function TakeQuiz() {
  // const location = useLocation();
  const [username, setUsername] = useState('');
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    const savedQuestions = JSON.parse(localStorage.getItem('quizQuestions'));
    // const savedQuestions = location.state?.questions || JSON.parse(localStorage.getItem('quizQuestions'));
    if (savedQuestions) {
      setQuestions(savedQuestions);
    }
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleStartQuiz = () => {
    if (username.trim()) {
      setQuizStarted(true);
    }
  };

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer('');
    setQuizFinished(false);
    setQuizStarted(false);
  };

  if (questions.length === 0) {
    return <div>No questions available.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center justify-center p-6">
      {!quizStarted ? (
        <div className="w-full max-w-sm bg-black rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6">Enter Your Name</h1>
          <label htmlFor="username" className="block text-lg font-semibold mb-2">Name:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white"
            placeholder="Enter your name"
            required
          />
          <button
            onClick={handleStartQuiz}
            className="bg-gradient-to-r from-purple-900 to-blue-500 text-white px-4 py-2 rounded mt-4 hover:from-purple-800 hover:to-blue-400"
          >
            Start Quiz
          </button>
        </div>
      ) : !quizFinished ? (
        <div className="w-full max-w-4xl bg-black rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Welcome, {username}!
          </h1>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <p className="mb-6 text-lg">
            {questions[currentQuestion].question}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`px-4 py-2 border border-gray-600 rounded-lg ${
                  selectedAnswer === option
                    ? 'bg-gradient-to-r from-purple-900 to-blue-500'
                    : 'bg-gray-900'
                } hover:bg-gray-700 transition-colors`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex justify-between items-center">
            <p className="text-lg font-semibold">Score: {score}</p>
            <button
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
              className={`bg-gradient-to-r from-purple-900 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-purple-800 hover:to-blue-400 ${
                !selectedAnswer ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {currentQuestion + 1 === questions.length ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-4xl bg-black rounded-lg shadow-lg p-6 text-center">
          <h1 className="text-2xl font-bold mb-6">Quiz Completed!</h1>
          <p className="text-lg mb-6">
            Thank you for taking the quiz, {username}! Your final score is {score} out of {questions.length}.
          </p>
          <button
            onClick={handleRestartQuiz}
            className="bg-gradient-to-r from-purple-900 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-purple-800 hover:to-blue-400"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default TakeQuiz;

