import { GraduationCap, Award, BookOpen } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 sm:py-24 border-t border-zinc-800/80">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Education
          </h2>
          <p className="mt-3 text-sm text-zinc-400 sm:text-base">
            Rigorous foundation in computer science principles and software engineering.
          </p>
        </div>

        {/* Education Cards */}
        <div className="mt-12 space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {edu.degree}
                  </h3>
                  <div className="mt-1 text-sm font-semibold text-emerald-400">
                    {edu.institution}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {edu.gpa && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-xs font-medium text-emerald-300">
                      <Award className="h-3 w-3" />
                      GPA: {edu.gpa}
                    </span>
                  )}
                  <span className="text-xs font-mono text-zinc-400">
                    {edu.period}
                  </span>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="mt-6 border-t border-zinc-800/80 pt-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  <BookOpen className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Key Computer Science Coursework</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-md border border-zinc-800 bg-zinc-900/80 px-2.5 py-1 text-xs text-zinc-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

