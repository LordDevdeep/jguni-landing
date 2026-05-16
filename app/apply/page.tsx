import Link from "next/link";

export default function ApplyPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-indigo-400 uppercase tracking-widest text-sm font-semibold mb-4">
            Admissions
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            Apply to JG University
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
            Complete your application for the 2025 intake and start the next chapter of your academic journey.
            Our admissions team will guide you through eligibility, scholarships, and the application process.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <section className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to apply?</h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Select your preferred program, upload your documents, and submit your details. Admissions are now open for the 2025-26 academic year.
              </p>

              <div className="grid gap-6">
                <div className="rounded-3xl bg-slate-950/80 border border-white/10 p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Step 1: Start your application</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Choose a program and fill out the application form. You will receive a confirmation email with next steps.
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 border border-white/10 p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Step 2: Upload documents</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Attach academic transcripts, ID, and any required certificates in one secure place.
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 border border-white/10 p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">Step 3: Confirm and submit</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Review your information, submit your application, and expect a response from our admissions team within 48 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-indigo-500/20 bg-indigo-500/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-3">Need help?</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Our admissions counselors are here to help you choose the right program and prepare your application.
              </p>
              <p className="text-slate-300 font-semibold">Email us:</p>
              <p className="text-slate-400">admissions@jguni.in</p>
            </div>
          </section>

          <aside className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-indigo-300 mb-2">Apply for 2025</p>
              <h2 className="text-3xl font-bold text-white">Submit your application</h2>
            </div>

            <div className="space-y-5">
              {[
                "Program selection",
                "Personal information",
                "Academic transcripts",
                "Document upload",
                "Final review",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-slate-300 text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>

            <Link href="/" className="mt-10 inline-flex items-center justify-center w-full rounded-xl bg-white/10 border border-white/10 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/15">
              Back to Home
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
