"use client";

import { useState } from "react";
import { ArrowDown, Check, Copy, Download, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  const { personal, stats } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="about" className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="h-[300px] w-[500px] rounded-full bg-cyan-500/5 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Availability Badge */}
        {personal.availableForHire && (
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>{personal.availabilityText}</span>
          </div>
        )}

        {/* Hero Title & Subtitle */}
        <div className="mt-6 max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl sm:leading-[1.1]">
            Engineering scalable systems &amp;{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              high-performance
            </span>{" "}
            software.
          </h1>

          <p className="mt-5 max-w-2xl text-base text-zinc-400 sm:text-lg sm:leading-relaxed">
            I&apos;m <span className="font-semibold text-zinc-200">{personal.name}</span>, a{" "}
            <span className="text-zinc-200">{personal.role}</span>. {personal.bio}
          </p>

          <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500">
            <MapPin className="h-3.5 w-3.5 text-emerald-400" />
            <span>{personal.location}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-all hover:bg-emerald-400 active:scale-95"
          >
            <span>Explore Projects</span>
            <ArrowDown className="h-4 w-4" />
          </a>

          <a
            href={personal.resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/90 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-all hover:border-zinc-700 hover:bg-zinc-800 active:scale-95"
          >
            <Download className="h-4 w-4 text-zinc-400" />
            <span>Resume (PDF)</span>
          </a>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/90 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-all hover:border-zinc-700 hover:bg-zinc-800 active:scale-95"
            title="Click to copy email address"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-400">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-zinc-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2 pl-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-2.5 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-2.5 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bento Stats Row */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-4 transition-all hover:border-zinc-700/80 hover:bg-zinc-900/70"
            >
              <div className="font-mono text-2xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-semibold text-zinc-300">
                {stat.label}
              </div>
              <div className="mt-0.5 text-[11px] text-zinc-500">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
