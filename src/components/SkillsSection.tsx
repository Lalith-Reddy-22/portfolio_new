import { Code2, Server, Database, Cloud, Layout, Cpu } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function SkillsSection() {
  const { skillCategories } = portfolioData;

  const categoryIcons: Record<string, React.ReactNode> = {
    "Programming Languages": <Code2 className="h-4 w-4 text-emerald-400" />,
    "Backend & Systems": <Server className="h-4 w-4 text-emerald-400" />,
    "Frontend Engineering": <Layout className="h-4 w-4 text-emerald-400" />,
    "Databases & Storage": <Database className="h-4 w-4 text-emerald-400" />,
    "DevOps & Cloud Tooling": <Cloud className="h-4 w-4 text-emerald-400" />,
    "Software Engineering Core": <Cpu className="h-4 w-4 text-emerald-400" />,
  };

  return (
    <section id="skills" className="py-16 sm:py-24 border-t border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <Code2 className="h-3.5 w-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Skills &amp; Technologies
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            Proficient across the stack with an emphasis on typed languages, distributed primitives, and robust tooling.
          </p>
        </div>

        {/* Skills Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all hover:border-zinc-700/80 hover:bg-zinc-900/60"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                  {categoryIcons[category.title] || <Code2 className="h-4 w-4 text-emerald-400" />}
                </div>
                <h3 className="text-base font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 font-mono text-xs text-zinc-300 transition-colors group-hover:border-zinc-700"
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

