"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { CookieStorage } from "@/utils/CookieStorage";

export default function QuestionList({ unit, list, answers }) {
  const [userAnswers, setUserAnswers] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const formData = new FormData(event.target.form);
    const formAnswers = {};
    formData.forEach((value, key) => {
      formAnswers[key] = value;
    });
    setUserAnswers(formAnswers);
    CookieStorage.setJson(`questionAnswers_${unit}`, formAnswers);
  };

  useEffect(() => {
    const savedAnswers = CookieStorage.getJson(`questionAnswers_${unit}`);
    if (savedAnswers) {
      setUserAnswers(savedAnswers);
    }
  }, []);

  useEffect(() => {
    document
      .querySelectorAll(`label[style*="background"]:has(input:not(:checked))`)
      .forEach((label) => {
        label.style.backgroundColor = "";
      });

    Object.keys(userAnswers).forEach((key) => {
      const input = document.querySelector(
        `input[name="${key}"][value="${userAnswers[key]}"]`
      );

      input.checked = true;
      const label = input.closest("label");

      const questionIndex = parseInt(key.split(" ").at(-1), 10) - 1;

      if (userAnswers[key] !== answers[questionIndex]) {
        label.style.backgroundColor = "#f87171";
      } else {
        label.style.backgroundColor = "#34d399";
      }
    });
  }, [userAnswers]);

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
    </form>
  );
}
