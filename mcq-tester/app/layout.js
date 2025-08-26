import "./globals.css";

export const metadata = {
  title: "Sulang MCQ Tester",
  description: "A web application for testing multiple-choice questions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
