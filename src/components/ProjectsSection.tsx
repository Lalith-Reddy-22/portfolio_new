import { ExternalLink, Zap, Layers, Cpu, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { portfolioData, Project } from "@/data/portfolio";

export function ProjectsSection() {
  const { projects } = portfolioData;
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <Layers className="h-3.5 w-3.5" />
            <span>Engineering Showcase</span>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            Architected for scalability, fault tolerance, and measurable performance under load.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-8 transition-all hover:border-zinc-700 hover:bg-zinc-900/70"
            >
              {/* Subtle top card glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-500/5 blur-3xl transition-opacity group-hover:bg-emerald-500/10" />

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                <div>
                  <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                    {project.category}
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-zinc-300">
                    {project.tagline}
                  </p>
                </div>

                {/* External links */}
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>Source</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400 transition-colors hover:bg-emerald-500/20"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              {/* Architecture & Engineering Highlights */}
              <div className="mt-5 rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  <Cpu className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Architecture &amp; System Design Highlights</span>
                </div>
                <ul className="mt-2.5 space-y-2 text-xs text-zinc-400 sm:text-sm">
                  {project.architecture.map((item, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Measurable Performance Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {project.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-700/60 bg-zinc-800/40 px-3 py-1 text-xs font-mono font-medium text-emerald-300"
                    >
                      <Zap className="h-3 w-3 text-emerald-400 shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="mt-5 flex flex-wrap items-center gap-1.5 border-t border-zinc-800/60 pt-4">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Noteworthy Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-16">
            <h3 className="text-xl font-bold text-white">
              Other Noteworthy Tools &amp; Repositories
            </h3>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {otherProjects.map((project) => (
                <div
                  key={project.id}
                  className="group rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 transition-all hover:border-zinc-700 hover:bg-zinc-900/60"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-mono text-emerald-400">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="h-4 w-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-white"
                          aria-label="Live Demo"
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="mt-3 text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-zinc-400 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-zinc-800/80 bg-zinc-900/80 px-2 py-0.5 font-mono text-[10px] text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
