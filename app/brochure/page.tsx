import Link from "next/link";

export default function BrochurePage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-indigo-400 uppercase tracking-widest text-sm font-semibold mb-4">
            Brochure
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            Download the JG University Brochure
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
            Get a complete overview of our programs, campus facilities, scholarships, and application deadlines.
            This page helps you access everything you need before applying.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-10 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
          <h2 className="text-3xl font-bold text-white mb-4">What’s inside</h2>
          <ul className="space-y-3 text-slate-300 mb-8">
            <li>• Program details for AI, Cybersecurity, Data Science, Design, Aviation, Commerce and more.</li>
            <li>• Campus life, labs, hostels, sports facilities, and community programs.</li>
            <li>• Scholarship opportunities and application timeline.</li>
            <li>• Placement support, internships, and career services.</li>
          </ul>
          <Link href="/" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
