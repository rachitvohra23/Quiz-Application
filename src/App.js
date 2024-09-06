import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateQuiz from './components/CreateQuiz';
import TakeQuiz from './components/TakeQuiz'; 

function App() {
  return (  
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createquiz" element={<CreateQuiz />} />
        <Route path="/takequiz" element={<TakeQuiz />} /> 
      </Routes>
    </>
  );
}

export default App;
