import Link from "next/link";

export default function QuestionsLayout({ children }) {
  return (
    <div className="p-4">
      <Link href="/" className="text-blue-500 hover:underline mb-2">
        Back to /
      </Link>
      {children}
    </div>
  );
}
