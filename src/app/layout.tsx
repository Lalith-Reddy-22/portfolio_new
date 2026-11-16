import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K. Lalith Kumar Reddy | Software Development Engineer",
  description:
    "Software Development Engineer portfolio of K. Lalith Kumar Reddy. Specializing in Go, TypeScript, Python, high-throughput backend APIs, and modern full-stack web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-zinc-950 text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
