import Link from "next/link";

export default function CampusTourPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-indigo-400 uppercase tracking-widest text-sm font-semibold mb-4">
            Campus Experience
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            Campus Tour
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
            Explore our vibrant campus, modern classrooms, research labs, and student life offerings with a guided virtual tour.
            This page is your gateway to JG University's facilities and atmosphere.
          </p>
        </div>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-white mb-5">Tour highlights</h2>
            <ul className="space-y-4 text-slate-300">
              <li>• State-of-the-art innovation labs and AI research centers.</li>
              <li>• Immersive design studios and creative collaboration spaces.</li>
              <li>• Advanced cybersecurity labs and incident response facilities.</li>
              <li>• Residential campuses, dining halls, and outdoor recreation zones.</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
            <h2 className="text-3xl font-bold text-white mb-5">Watch the tour</h2>
            <div className="aspect-[16/9] w-full overflow-hidden rounded-3xl bg-slate-900 border border-white/10">
              <div className="flex h-full items-center justify-center text-slate-500">
                <p className="text-center px-6">Virtual campus tour content is coming soon. In the meantime, learn more about our facilities and admissions process below.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
            Back to Home
          </Link>
          <Link href="/apply" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
            Start Your Application
          </Link>
        </div>
      </div>
    </main>
  );
}
