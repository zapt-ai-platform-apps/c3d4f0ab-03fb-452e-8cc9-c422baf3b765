import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold mb-4">Welcome to Study for Students</h2>
      <p className="mb-4">
        Your one-stop resource for interactive lessons and quizzes to help you excel in your studies.
      </p>
      <Link to="/lessons">
        <button className="cursor-pointer bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Start Learning
        </button>
      </Link>
    </div>
  );
}