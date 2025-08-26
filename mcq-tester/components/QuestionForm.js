"use client";
import Image from "next/image";

import { useEffect } from "react";

export default function QuestionList({ unit, list, answers }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userAnswers = {};
    formData.forEach((value, key) => {
      userAnswers[key] = value;
    });

    Object.keys(userAnswers).forEach((key, index) => {
      document.querySelectorAll("label").forEach((label) => {
        label.style.backgroundColor = "";
      });

      setTimeout(() => {
        const input = document.querySelector(
          `input[name="${key}"][value="${userAnswers[key]}"]`
        );
        const label = input.closest("label");
        if (label) {
          const questionIndex = parseInt(key.split(" ").at(-1), 10) - 1;
          if (userAnswers[key] !== answers[questionIndex]) {
            label.style.backgroundColor = "#34d399";
          } else {
            label.style.backgroundColor = "#f87171";
          }
        }
      }, 0);
    });
  };

  const handleChange = (event) => {
    const formData = new FormData(event.target.form);
    const answers = {};
    formData.forEach((value, key) => {
      answers[key] = value;
    });
    localStorage.setItem(`questionAnswers_${unit}`, JSON.stringify(answers));
  };

  useEffect(() => {
    const savedAnswers = localStorage.getItem(`questionAnswers_${unit}`);
    if (savedAnswers) {
      const answers = JSON.parse(savedAnswers);
      for (const [key, value] of Object.entries(answers)) {
        const input = document.querySelector(
          `input[name="${key}"][value="${value}"]`
        );
        if (input) {
          input.checked = true;
        }
      }
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      {list.map((question) => (
        <div key={question} className="mb-4 border p-4 rounded">
          <h2>{`Question ${question}`}</h2>
          <Image
            width={1200}
            height={300}
            src={`/questions/${unit}/${question}.png`}
            alt={question}
          />
          <div className="mt-4 flex justify-between gap-4">
            {["A", "B", "C", "D", "E"].map((choice) => (
              <label
                key={choice}
                className="flex items-center border-2 border-grey-300 rounded w-full px-4 py-2 select-none"
              >
                <input
                  className="mr-2"
                  required
                  type="radio"
                  name={`${unit} Question ${question}`}
                  value={choice}
                />
                {` ${choice}`}
              </label>
            ))}
          </div>
        </div>
      ))}

      <div className="flex justify-end">
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
        >
          Submit Answers
        </button>
      </div>
    </form>
  );
}
