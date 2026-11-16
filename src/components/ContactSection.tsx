"use client";

import { useState } from "react";
import { Check, Copy, Download, Mail, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { portfolioData } from "@/data/portfolio";

export function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-t border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/80 to-zinc-950 p-8 sm:p-12 lg:p-16">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-[100px]" />

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Get In Touch</span>
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s Build Something Impactful
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              I am actively interviewing for Software Development Engineer (SDE) roles.
              Whether you have an open position, an engineering problem to discuss, or want to review my code, my inbox is always open.
            </p>

            {/* Direct Connect Options */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-zinc-950 transition-all hover:bg-emerald-400 active:scale-95"
              >
                <Mail className="h-4 w-4" />
                <span>Send Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-200 transition-all hover:border-zinc-700 hover:bg-zinc-800 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-zinc-400" />
                    <span>Copy {personal.email}</span>
                  </>
                )}
              </button>

              <a
                href={personal.resumePdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-200 transition-all hover:border-zinc-700 hover:bg-zinc-800 active:scale-95"
              >
                <Download className="h-4 w-4 text-zinc-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social pills */}
            <div className="mt-8 flex items-center gap-4 border-t border-zinc-800/80 pt-6">
              <span className="text-xs text-zinc-400">Profiles:</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 transition-colors hover:text-emerald-400"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 transition-colors hover:text-emerald-400"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
