import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function LessonDetail() {
  const { id } = useParams();
  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold mb-4">Lesson Detail</h2>
      <p className="mb-4">Details for lesson ID: {id}</p>
      <Link to="/lessons">
        <button className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Back to Lessons
        </button>
      </Link>
    </div>
  );
}