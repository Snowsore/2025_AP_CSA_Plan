import Link from "next/link";
import fs from "fs";
import path from "path";

async function getQuestionFolders() {
  const questionsDir = path.join(process.cwd(), "public", "questions");
  const entries = await fs.promises.readdir(questionsDir, {
    withFileTypes: true,
  });
  return entries
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

export default async function Home() {
  const questionFolders = await getQuestionFolders();

  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold">MCQ Tester</h1>
      <div className="flex flex-col gap-4">
        {questionFolders.map((folder) => (
          <Link key={folder} href={`/questions/${folder}`}>
            {folder}
          </Link>
        ))}
      </div>
    </div>
  );
}
