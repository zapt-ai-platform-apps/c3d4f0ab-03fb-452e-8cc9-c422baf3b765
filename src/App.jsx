import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Lessons from './Lessons';
import LessonDetail from './LessonDetail';
import Quiz from './Quiz';
import Footer from './Footer';

export default function App() {
  useEffect(() => {
    console.log('App Initialized');
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Study for Students</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link className="cursor-pointer hover:underline" to="/">Home</Link>
            </li>
            <li>
              <Link className="cursor-pointer hover:underline" to="/lessons">Lessons</Link>
            </li>
            <li>
              <Link className="cursor-pointer hover:underline" to="/quiz">Quiz</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lesson/:id" element={<LessonDetail />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}