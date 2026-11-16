"use client";

import { useState } from "react";
import Link from "next/link";
import { FileText, Menu, X, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { portfolioData } from "@/data/portfolio";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { personal } = portfolioData;

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link
          href="#about"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-zinc-100 transition-colors hover:text-emerald-400"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-700/80 bg-zinc-900 transition-colors group-hover:border-emerald-500/50">
            <Terminal className="h-4 w-4 text-emerald-400" />
          </div>
          <span>
            {personal.name.toLowerCase()}
            <span className="text-emerald-400">.dev</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1.5 text-xs font-medium text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA Links */}
        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-2 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-100"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="rounded-lg border border-zinc-800 bg-zinc-900/80 p-2 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-100"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href={personal.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400 transition-colors hover:bg-emerald-500/20"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg border border-zinc-800 p-2 text-zinc-400 md:hidden hover:text-zinc-100"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-zinc-800 bg-zinc-950 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-emerald-400"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex items-center gap-3 border-t border-zinc-800 pt-3">
              <a
                href={personal.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-emerald-500/15 py-2 text-xs font-semibold text-emerald-400"
              >
                <FileText className="h-3.5 w-3.5" />
                Resume (PDF)
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-800 p-2 text-zinc-400"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-800 p-2 text-zinc-400"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
