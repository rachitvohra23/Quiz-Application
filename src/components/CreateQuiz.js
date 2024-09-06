import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CreateQuiz() {
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""], correctAnswer: "" },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedQuestions = JSON.parse(localStorage.getItem("quizQuestions"));
    if (storedQuestions) {
      setQuestions(storedQuestions);
    }
  }, []);

  const handleQuestionChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index].question = event.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (index, optionIndex, event) => {
    const newQuestions = [...questions];
    newQuestions[index].options[optionIndex] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleCorrectAnswerChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index].correctAnswer = event.target.value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", options: ["", "", "", ""], correctAnswer: "" },
    ]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("quizQuestions", JSON.stringify(questions));
    navigate("/takequiz", { state: { questions } });
  };

  const handleClear = () => {
    localStorage.removeItem("quizQuestions");
    setQuestions([
      { question: "", options: ["", "", "", ""], correctAnswer: "" },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Create a Quiz</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-4xl">
        {questions.map((q, index) => (
          <div
            key={index}
            className="mb-6 p-4 border border-gray-600 rounded-lg"
          >
            <label className="block text-lg font-semibold mb-2">
              Question {index + 1}:
            </label>
            <input
              type="text"
              value={q.question}
              onChange={(event) => handleQuestionChange(index, event)}
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white mb-4"
              placeholder="Enter the question"
              required
            />
            <div className="mb-4">
              {q.options.map((option, optionIndex) => (
                <div key={optionIndex} className="mb-2">
                  <label className="block text-lg font-semibold">
                    Option {optionIndex + 1}:
                  </label>
                  <input
                    type="text"
                    value={option}
                    onChange={(event) =>
                      handleOptionChange(index, optionIndex, event)
                    }
                    className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white"
                    placeholder={`Option ${optionIndex + 1}`}
                    required
                  />
                </div>
              ))}
            </div>
            <label className="block text-lg font-semibold mb-2">
              Correct Answer:
            </label>
            <select
              value={q.correctAnswer}
              onChange={(event) => handleCorrectAnswerChange(index, event)}
              className="w-full px-3 py-2 border border-gray-600 rounded-lg bg-gray-900 text-white"
              required
            >
              <option value="" disabled>
                Select the correct answer
              </option>
              {q.options.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  Option {optionIndex + 1}: {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button
          type="button"
          onClick={addQuestion}
          className="bg-gradient-to-r from-purple-900 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-purple-800 hover:to-blue-400 mb-4"
        >
          Add Another Question
        </button>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-900 to-blue-500 text-white py-2 px-4 rounded-lg hover:from-purple-800 hover:to-blue-400"
          >
            Submit Quiz
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="bg-gradient-to-r from-red-600 to-red-400 text-white py-2 px-4 rounded-lg hover:from-red-500 hover:to-red-300"
          >
            Clear Quiz
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateQuiz;
