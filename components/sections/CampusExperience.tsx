"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, MapPin, Trees, Users } from "lucide-react";
import { campusImages } from "@/data";
import { FadeUp } from "@/components/ui/AnimationWrapper";

const campusFacts = [
  { value: "50+", label: "Acres of learning spaces", icon: <Trees className="h-5 w-5" /> },
  { value: "200+", label: "Classrooms, studios, and labs", icon: <Building2 className="h-5 w-5" /> },
  { value: "60+", label: "Student clubs and activities", icon: <Users className="h-5 w-5" /> },
];

export default function CampusExperience() {
  return (
    <section id="campus" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <FadeUp>
            <p className="institutional-label mb-3">Campus Life</p>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              A campus section with real places, not emoji placeholders.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="rounded-xl border border-slate-900/10 bg-[#f8f7f3] p-5">
              <div className="mb-2 flex items-center gap-2 text-sm font-extrabold text-rose-900">
                <MapPin className="h-4 w-4" />
                Gujarat, India
              </div>
              <p className="text-slate-600">
                Labs, studios, clubs, events, mentoring spaces, and student
                support are treated as part of the academic experience.
              </p>
            </div>
          </FadeUp>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {campusImages.slice(0, 3).map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group overflow-hidden rounded-xl border border-slate-900/10 bg-white shadow-sm"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="mb-1 text-sm font-bold text-white/75">
                    {item.subtitle}
                  </p>
                  <h3 className="text-2xl font-black text-white">{item.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="mb-4 leading-7 text-slate-600">{item.detail}</p>
                <button className="inline-flex items-center gap-2 text-sm font-extrabold text-rose-900">
                  Explore space
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5 sm:grid-cols-3">
            {campusFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-slate-900/10 bg-[#f8f7f3] p-5"
              >
                <div className="mb-4 flex text-rose-900">{fact.icon}</div>
                <p className="text-3xl font-black text-slate-950">{fact.value}</p>
                <p className="mt-1 text-sm font-semibold leading-6 text-slate-600">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-slate-900/10">
            {campusImages.slice(3).map((item) => (
              <div key={item.id} className="relative min-h-44">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/35" />
                <p className="absolute bottom-3 left-3 right-3 text-sm font-black text-white">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
