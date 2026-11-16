"use client";

import { ArrowUp, Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-12 text-xs text-zinc-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-emerald-400" />
          <span className="font-mono text-zinc-400">
            {personal.name.toLowerCase()}
            <span className="text-emerald-400">.dev</span>
          </span>
          <span className="text-zinc-600">|</span>
          <span>© 2026 {personal.name}. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <span>Engineered with Next.js &amp; Tailwind CSS</span>
          <a
            href="#about"
            className="inline-flex items-center gap-1 text-zinc-400 transition-colors hover:text-emerald-400"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
