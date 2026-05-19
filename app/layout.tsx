import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlagiaCheck – Detect Copied Coding Interview Solutions",
  description: "Analyze coding interview submissions against GitHub, Stack Overflow, and LeetCode to detect plagiarism instantly."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5dabf09a-ae11-4c0b-a848-548a9562b017"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
