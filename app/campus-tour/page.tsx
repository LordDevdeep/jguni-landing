import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Play } from "lucide-react";
import { campusImages } from "@/data";

export default function CampusTourPage() {
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

        <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="institutional-label mb-3">Campus Experience</p>
            <h1 className="max-w-3xl text-5xl font-black tracking-tight text-slate-950">
              Campus tour.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore learning spaces, labs, studios, event venues, and student
              life areas that support academic and personal growth.
            </p>
          </div>
          <div className="rounded-xl border border-slate-900/10 bg-white p-5">
            <p className="mb-2 flex items-center gap-2 text-sm font-extrabold text-rose-900">
              <MapPin className="h-4 w-4" />
              Gujarat, India
            </p>
            <p className="text-slate-600">Campus visit slots are available through admissions.</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-900/10 bg-slate-950">
          <div className="relative h-[420px]">
            <img
              src={campusImages[0].image}
              alt="JG University campus"
              className="h-full w-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <button className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-950">
                <Play className="h-5 w-5" />
              </button>
              <h2 className="text-3xl font-black">Virtual tour coming soon</h2>
              <p className="mt-2 max-w-2xl text-slate-200">
                Until then, use the campus gallery and admissions desk to plan a
                guided visit.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {campusImages.slice(1, 4).map((space) => (
            <article key={space.id} className="overflow-hidden rounded-xl border border-slate-900/10 bg-white">
              <img src={space.image} alt={space.title} className="h-44 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-black text-slate-950">{space.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{space.detail}</p>
              </div>
            </article>
          ))}
        </div>

        <Link
          href="/apply"
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-rose-900 px-6 py-3.5 text-sm font-extrabold text-white"
        >
          Start Your Application
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
