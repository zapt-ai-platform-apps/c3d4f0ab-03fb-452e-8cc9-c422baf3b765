import React, { useState } from 'react';

export default function Quiz() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const question = "What is 2 + 2?";
  const options = ["3", "4", "5"];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    console.log("Quiz submitted");
    setTimeout(() => {
      if (selectedAnswer === "4") {
        setResult("Correct!");
      } else {
        setResult("Incorrect. Try again.");
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold mb-4">Quiz Time</h2>
      <form onSubmit={handleSubmit}>
        <p className="mb-4">{question}</p>
        {options.map((option) => (
          <label key={option} className="block mb-2 cursor-pointer">
            <input 
              type="radio" 
              name="answer" 
              value={option} 
              className="mr-2 box-border" 
              checked={selectedAnswer === option}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />
            {option}
          </label>
        ))}
        <button 
          type="submit" 
          disabled={isSubmitting || !selectedAnswer} 
          className="cursor-pointer bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Answer"}
        </button>
      </form>
      {result && <p className="mt-4 font-bold">{result}</p>}
    </div>
  );
}