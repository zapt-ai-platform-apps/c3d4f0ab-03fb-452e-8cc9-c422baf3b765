import React from 'react';
import { Link } from 'react-router-dom';

const lessons = [
  { id: 1, title: "Math Basics", description: "Learn foundational math concepts." },
  { id: 2, title: "Science Fundamentals", description: "Explore the basics of science." },
  { id: 3, title: "History Overview", description: "Discover key historical events." },
];

export default function Lessons() {
  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold mb-4">Available Lessons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="border p-4 rounded shadow-sm">
            <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
            <p className="mb-4">{lesson.description}</p>
            <Link to={`/lesson/${lesson.id}`}>
              <button className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}