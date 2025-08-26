import fs from "fs";
import path from "path";
import Image from "next/image";
import QuestionForm from "@/components/QuestionForm";

async function getQuestions(id) {
  const questionsDir = path.join(process.cwd(), "public", "questions", id);

  try {
    const entries = await fs.promises.readdir(questionsDir, {
      withFileTypes: true,
    });
    return entries
      .filter((file) => file.isFile())
      .map((file) => file.name.replace(/\.(txt|png|jpg|jpeg)$/, ""));
  } catch (error) {
    console.error("Error reading questions directory:", error);
    return [];
  }
}

async function getAnswers(id) {
  const answersFile = path.join(
    process.cwd(),
    "public",
    "answers",
    `${id}.txt`
  );
  try {
    const data = await fs.promises.readFile(answersFile, "utf-8");
    return data.split("\n").map((line) => line.trim());
  } catch (error) {
    console.error("Error reading answers file:", error);
    return [];
  }
}

export default async function QuestionPage({ params }) {
  const { id } = await params;

  if (!id) {
    return <div>Question ID is required</div>;
  }

  const questionName = decodeURIComponent(id);
  const questions = await getQuestions(questionName);
  const answers = await getAnswers(questionName);

  if (questions.length === 0) {
    return <div>Question not found</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <h1 className="mb-4">Question {questionName}</h1>
      <QuestionForm unit={questionName} list={questions} answers={answers} />
    </div>
  );
}
