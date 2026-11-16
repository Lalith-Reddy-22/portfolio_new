import { Briefcase, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function ExperienceSection() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-24 border-t border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Work Experience
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            Track record of shipping production code, optimizing infrastructure, and collaborating on systems engineering.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mt-12 space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8 transition-all hover:border-zinc-700/80 hover:bg-zinc-900/50"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="mt-1 text-sm font-semibold text-emerald-400">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                    <span>{exp.location}</span>
                  </div>
                  <span className="rounded-full border border-zinc-700/60 bg-zinc-800/60 px-2.5 py-0.5 font-mono text-[11px] text-zinc-300">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Bullet points with STAR accomplishments */}
              <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5">
                    <span className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span className="leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies used */}
              <div className="mt-6 flex flex-wrap items-center gap-1.5 border-t border-zinc-800/80 pt-4">
                <span className="mr-2 text-xs font-mono text-zinc-500">Tech:</span>
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-zinc-800 bg-zinc-900 px-2 py-0.5 font-mono text-xs text-zinc-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

