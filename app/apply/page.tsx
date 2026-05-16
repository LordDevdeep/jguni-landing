"use client";

import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent } from "react";

const programs = [
  "B.Sc Artificial Intelligence",
  "B.Des Interaction Design",
  "B.Tech Cybersecurity",
  "BBA Aviation Management",
  "M.Sc Data Science",
];

const qualifications = [
  "High School Diploma",
  "Associate Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "Professional Certification",
];

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Other",
];

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    program: programs[0],
    fullName: "",
    email: "",
    phone: "",
    nationality: countries[0],
    qualification: qualifications[0],
    transcriptFile: null as File | null,
    idFile: null as File | null,
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = event.target;
    setFormData((prev) => ({ ...prev, [name]: files?.[0] ?? null }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) nextErrors.fullName = "Please enter your full name.";
    if (!formData.email.trim()) nextErrors.email = "Please enter your email address.";
    if (!formData.phone.trim()) nextErrors.phone = "Please enter your phone number.";
    if (!formData.transcriptFile) nextErrors.transcriptFile = "Please upload your academic transcript.";
    if (!formData.idFile) nextErrors.idFile = "Please upload your government ID.";
    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-indigo-400 uppercase tracking-widest text-sm font-semibold mb-4">Admissions</p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">Apply to JG University</h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-3xl">
            Complete your application for the 2025 intake. Use the dropdown fields where required and upload your documents securely.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.85fr]">
          <section className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-slate-400 text-sm uppercase tracking-[0.3em]">Application form</p>
                <h2 className="text-3xl font-bold text-white">Tell us about yourself</h2>
                <p className="text-slate-400 max-w-2xl">
                  Choose your program, enter your contact details, and attach required transcripts and ID. We will review your application and follow up within 48 hours.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-8 text-center">
                  <p className="text-2xl font-semibold text-white mb-3">Application submitted!</p>
                  <p className="text-slate-300 mb-6">
                    Thank you, {formData.fullName || "applicant"}. Your application has been received and an admissions counselor will contact you shortly.
                  </p>
                  <Link href="/" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                    Back to Home
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium text-slate-300">Preferred program</span>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                      >
                        {programs.map((program) => (
                          <option key={program} value={program} className="bg-slate-950 text-white">
                            {program}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-slate-300">Highest qualification</span>
                      <select
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleInputChange}
                        className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                      >
                        {qualifications.map((qualification) => (
                          <option key={qualification} value={qualification} className="bg-slate-950 text-white">
                            {qualification}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium text-slate-300">Full name</span>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                      />
                      {errors.fullName && <p className="mt-2 text-sm text-rose-400">{errors.fullName}</p>}
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-slate-300">Email address</span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="hello@example.com"
                        className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                      />
                      {errors.email && <p className="mt-2 text-sm text-rose-400">{errors.email}</p>}
                    </label>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium text-slate-300">Phone number</span>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                      />
                      {errors.phone && <p className="mt-2 text-sm text-rose-400">{errors.phone}</p>}
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-slate-300">Nationality</span>
                      <select
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                      >
                        {countries.map((country) => (
                          <option key={country} value={country} className="bg-slate-950 text-white">
                            {country}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-sm font-medium text-slate-300">Academic transcript</span>
                      <input
                        type="file"
                        name="transcriptFile"
                        accept=".pdf,.jpg,.png"
                        onChange={handleFileChange}
                        className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-slate-200 outline-none transition focus:border-indigo-500"
                      />
                      {formData.transcriptFile && (
                        <p className="mt-2 text-sm text-slate-300">Uploaded: {formData.transcriptFile.name}</p>
                      )}
                      {errors.transcriptFile && <p className="mt-2 text-sm text-rose-400">{errors.transcriptFile}</p>}
                    </label>

                    <label className="block">
                      <span className="text-sm font-medium text-slate-300">Government ID</span>
                      <input
                        type="file"
                        name="idFile"
                        accept=".pdf,.jpg,.png"
                        onChange={handleFileChange}
                        className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-slate-200 outline-none transition focus:border-indigo-500"
                      />
                      {formData.idFile && (
                        <p className="mt-2 text-sm text-slate-300">Uploaded: {formData.idFile.name}</p>
                      )}
                      {errors.idFile && <p className="mt-2 text-sm text-rose-400">{errors.idFile}</p>}
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-sm font-medium text-slate-300">Additional notes</span>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tell us about your career goals, portfolio links, or scholarship needs."
                      className="mt-2 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 text-base font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? "Submitting application..." : "Submit application"}
                  </button>
                </form>
              )}
            </div>
          </section>

          <aside className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-indigo-300 mb-2">Apply for 2025</p>
              <h2 className="text-3xl font-bold text-white">Submit your application</h2>
            </div>

            <div className="space-y-5">
              {[
                { label: "Program selection", active: true },
                { label: "Personal information", active: true },
                { label: "Academic transcripts", active: !!formData.transcriptFile },
                { label: "Document upload", active: !!formData.idFile },
                { label: "Final review", active: submitted },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-3xl border p-4 ${item.active ? "border-indigo-500/30 bg-indigo-500/10" : "border-white/10 bg-white/[0.03]"}`}
                >
                  <p className="text-slate-300 text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <p className="text-slate-300 leading-relaxed mb-4">
                Need help choosing the right program? Our admissions team is available to answer questions and make sure your application is complete.
              </p>
              <p className="text-slate-300 font-semibold">Email us:</p>
              <p className="text-slate-400">admissions@jguni.in</p>
            </div>

            <Link href="/" className="mt-8 inline-flex items-center justify-center w-full rounded-xl border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15">
              Back to Home
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
