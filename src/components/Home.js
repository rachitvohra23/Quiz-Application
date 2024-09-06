import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="bg-black flex justify-center items-center h-[8rem] mb-5">
        <h1 className=" text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-red-600 text-transparent bg-clip-text">
          Dynamic Quiz Application
        </h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-6xl mx-auto mt-[6rem] max-w-sm">
        <div className="bg-black text-white p-6 rounded-3xl shadow-2xl">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-700 text-transparent bg-clip-text">
            Start Quiz
          </h1>
          <p className="mt-4">
            Dive into our engaging quizzes and test your knowledge. Answer the
            questions to the best of your ability and see how high you can
            score.
          </p>

          <button className="bg-gradient-to-r from-purple-900 to-blue-500 text-white px-4 py-2 rounded mt-4 hover:from-purple-800 hover:to-blue-400">
            <Link to="/takequiz">Let's Begin</Link>
          </button>
        </div>
        <div className="bg-black text-white p-6 rounded-3xl shadow-2xl">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-700 text-transparent bg-clip-text">
            Create Quiz
          </h1>
          <p className="mt-4">
            Customize and create your own quizzes with your favorite topics.
            Provide the questions and answers, and let others test their
            knowledge.
          </p>
          <button className="bg-gradient-to-r from-purple-900 to-blue-500 text-white px-4 py-2 rounded mt-4 hover:from-purple-800 hover:to-blue-400">
            <Link to="/createquiz">Let's Create</Link>
          </button>
        </div>
      </section>

      <section className="text-white py-12 mt-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="mb-5">
            <strong className="text-4xl bg-gradient-to-r from-blue-900 to-blue-400 text-transparent bg-clip-text">
              Features
            </strong>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:max-w-6xl mx-auto mt-[4rem] max-w-sm">
            <div className="bg-black p-6 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text mb-4">
                Interactive Quizzes
              </h3>
              <p>
                Create and take interactive quizzes with real-time feedback.
              </p>
            </div>
            <div className="bg-black p-6 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text mb-4">
                Customizable
              </h3>
              <p>
                Customize your quizzes with various topics and question types.
              </p>
            </div>
            <div className="bg-black p-6 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text mb-4">
                Track Progress
              </h3>
              <p>
                Monitor your progress and scores to see how you improve over
                time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-6">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Dynamic Quiz Application. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
