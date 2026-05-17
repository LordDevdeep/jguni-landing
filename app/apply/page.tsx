"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";

const programs = [
  "B.Tech Artificial Intelligence",
  "B.Des Interaction Design",
  "B.Tech Cybersecurity",
  "BBA Aviation Management",
  "B.Sc Data Science",
  "B.Com Commerce & Finance",
];

const qualifications = [
  "High School Diploma",
  "Associate Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "Professional Certification",
];

const countries = ["India", "United States", "United Kingdom", "Canada", "Australia", "Other"];

const fieldClass =
  "mt-2 w-full rounded-lg border border-slate-900/10 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-rose-900";

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

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
          <p className="institutional-label mb-3">Admissions</p>
          <h1 className="max-w-3xl text-5xl font-black tracking-tight text-slate-950">
            Apply to JG University.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Complete your application details and upload the required documents.
            The admissions team will review and follow up.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr]">
          <section className="rounded-xl border border-slate-900/10 bg-white p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="rounded-xl border border-emerald-600/20 bg-emerald-50 p-8 text-center">
                <p className="mb-3 text-2xl font-black text-slate-950">Application submitted</p>
                <p className="mb-6 text-slate-600">
                  Thank you, {formData.fullName || "applicant"}. An admissions counselor will contact you shortly.
                </p>
                <Link href="/" className="rounded-lg bg-rose-900 px-6 py-3 text-sm font-extrabold text-white">
                  Back to Home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <p className="mb-2 text-sm font-black uppercase tracking-[0.16em] text-rose-900">
                    Application Form
                  </p>
                  <h2 className="text-3xl font-black text-slate-950">Tell us about yourself</h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label>
                    <span className="text-sm font-bold text-slate-700">Preferred program</span>
                    <select name="program" value={formData.program} onChange={handleInputChange} className={fieldClass}>
                      {programs.map((program) => (
                        <option key={program} value={program}>{program}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    <span className="text-sm font-bold text-slate-700">Highest qualification</span>
                    <select name="qualification" value={formData.qualification} onChange={handleInputChange} className={fieldClass}>
                      {qualifications.map((qualification) => (
                        <option key={qualification} value={qualification}>{qualification}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label>
                    <span className="text-sm font-bold text-slate-700">Full name</span>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Your full name" className={fieldClass} />
                    {errors.fullName && <p className="mt-2 text-sm font-semibold text-rose-700">{errors.fullName}</p>}
                  </label>
                  <label>
                    <span className="text-sm font-bold text-slate-700">Email address</span>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="hello@example.com" className={fieldClass} />
                    {errors.email && <p className="mt-2 text-sm font-semibold text-rose-700">{errors.email}</p>}
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label>
                    <span className="text-sm font-bold text-slate-700">Phone number</span>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 43210" className={fieldClass} />
                    {errors.phone && <p className="mt-2 text-sm font-semibold text-rose-700">{errors.phone}</p>}
                  </label>
                  <label>
                    <span className="text-sm font-bold text-slate-700">Nationality</span>
                    <select name="nationality" value={formData.nationality} onChange={handleInputChange} className={fieldClass}>
                      {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label>
                    <span className="text-sm font-bold text-slate-700">Academic transcript</span>
                    <input type="file" name="transcriptFile" accept=".pdf,.jpg,.png" onChange={handleFileChange} className={fieldClass} />
                    {formData.transcriptFile && <p className="mt-2 text-sm text-slate-600">Uploaded: {formData.transcriptFile.name}</p>}
                    {errors.transcriptFile && <p className="mt-2 text-sm font-semibold text-rose-700">{errors.transcriptFile}</p>}
                  </label>
                  <label>
                    <span className="text-sm font-bold text-slate-700">Government ID</span>
                    <input type="file" name="idFile" accept=".pdf,.jpg,.png" onChange={handleFileChange} className={fieldClass} />
                    {formData.idFile && <p className="mt-2 text-sm text-slate-600">Uploaded: {formData.idFile.name}</p>}
                    {errors.idFile && <p className="mt-2 text-sm font-semibold text-rose-700">{errors.idFile}</p>}
                  </label>
                </div>

                <label className="block">
                  <span className="text-sm font-bold text-slate-700">Additional notes</span>
                  <textarea name="notes" value={formData.notes} onChange={handleInputChange} rows={5} placeholder="Career goals, portfolio links, or scholarship needs." className={fieldClass} />
                </label>

                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-lg bg-rose-900 px-7 py-3.5 text-sm font-extrabold text-white transition hover:bg-rose-800 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "Submitting application..." : "Submit application"}
                </button>
              </form>
            )}
          </section>

          <aside className="rounded-xl border border-slate-900/10 bg-[#172033] p-6 text-white sm:p-8">
            <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-amber-300">
              Application checklist
            </p>
            <h2 className="mb-7 text-3xl font-black">Before you submit</h2>
            <div className="space-y-3">
              {[
                { label: "Program selected", active: true },
                { label: "Personal information", active: true },
                { label: "Academic transcript", active: !!formData.transcriptFile },
                { label: "Government ID", active: !!formData.idFile },
                { label: "Final review", active: submitted },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-lg border p-4 ${
                    item.active ? "border-white/20 bg-white/10" : "border-white/10 bg-white/[0.04]"
                  }`}
                >
                  <p className="text-sm font-bold">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl bg-white/10 p-5">
              <p className="leading-7 text-slate-200">
                Need help choosing the right program? The admissions team can
                help with eligibility, fees, scholarships, and documents.
              </p>
              <p className="mt-4 font-black">admissions@jguni.in</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
