import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { programs } from "@/data";

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f3] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-extrabold text-rose-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-12">
          <p className="institutional-label mb-3">Programs</p>
          <h1 className="max-w-3xl text-5xl font-black tracking-tight text-slate-950">
            Explore all JG University programs.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Compare school, duration, degree level, focus areas, and career
            direction before applying.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {programs.map((program) => (
            <article
              key={program.id}
              className="rounded-xl border border-slate-900/10 bg-white p-6 shadow-sm"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-sm font-black uppercase tracking-[0.16em] text-rose-900">
                    {program.school}
                  </p>
                  <h2 className="text-2xl font-black text-slate-950">
                    {program.title}
                  </h2>
                </div>
                <span className="rounded-full bg-[#f8f7f3] px-3 py-1 text-sm font-bold text-slate-700">
                  {program.duration}
                </span>
              </div>
              <p className="mb-5 leading-7 text-slate-600">{program.description}</p>
              <p className="mb-5 text-sm font-bold text-slate-700">
                Career direction: {program.outcome}
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {program.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-900/10 bg-[#f8f7f3] px-3 py-1 text-xs font-bold text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/apply"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-rose-900"
              >
                Apply to this program
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
