import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

export default function BrochurePage() {
  return (
    <main className="min-h-screen bg-[#f8f7f3] text-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-extrabold text-rose-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <p className="institutional-label mb-3">Brochure</p>
        <h1 className="max-w-3xl text-5xl font-black tracking-tight text-slate-950">
          Download the JG University brochure.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Review programs, admissions steps, campus facilities, scholarships,
          and placement support before you apply.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            "Program details for AI, Cybersecurity, Data Science, Design, Aviation, and Commerce.",
            "Campus life, labs, hostels, sports facilities, clubs, and community programs.",
            "Scholarship opportunities, application documents, and admissions timeline.",
            "Placement support, internships, career services, and alumni outcomes.",
          ].map((item) => (
            <div key={item} className="rounded-xl border border-slate-900/10 bg-white p-6">
              <p className="font-bold leading-7 text-slate-800">{item}</p>
            </div>
          ))}
        </div>

        <button className="mt-10 inline-flex items-center gap-2 rounded-lg bg-rose-900 px-6 py-3.5 text-sm font-extrabold text-white">
          <Download className="h-4 w-4" />
          Download Brochure
        </button>
      </div>
    </main>
  );
}
