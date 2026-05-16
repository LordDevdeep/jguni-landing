import Link from "next/link";
import { programs } from "@/data";
import { ArrowRight } from "lucide-react";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-indigo-400 uppercase tracking-widest text-sm font-semibold mb-4">
            Programs
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-4">
            Explore All JG University Programs
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mx-auto max-w-3xl">
            Discover full program insights, career paths, and what makes each offering unique.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <article key={program.id} className="group rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.2)] transition hover:border-indigo-500/30 hover:bg-white/[0.08]">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm uppercase tracking-widest text-indigo-300 font-semibold mb-2">
                    {program.shortTitle}
                  </p>
                  <h2 className="text-2xl font-bold text-white">{program.title}</h2>
                </div>
                <div className="rounded-2xl px-4 py-2 text-sm font-semibold" style={{ background: `${program.accentColor}15`, color: program.accentColor }}>
                  {program.duration}
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">{program.description}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {program.tags.map((tag) => (
                  <span key={tag} className="text-[11px] px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/apply" className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-300 hover:text-white transition">
                Apply to this program
                <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
