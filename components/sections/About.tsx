"use client";

import { motion } from "framer-motion";
import { BookOpenCheck, GraduationCap, Landmark, UsersRound } from "lucide-react";
import { FadeUp } from "@/components/ui/AnimationWrapper";

const aboutCards = [
  {
    icon: <Landmark className="h-5 w-5" />,
    title: "UGC-approved university",
    text: "Built for higher education with a focus on relevant programmes and academic quality.",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Education legacy since 1965",
    text: "Inspired by the ASIA Charitable Trust's long-standing contribution to education.",
  },
  {
    icon: <BookOpenCheck className="h-5 w-5" />,
    title: "Knowledge beyond books",
    text: "A practical learning model with labs, projects, mentorship, and industry exposure.",
  },
  {
    icon: <UsersRound className="h-5 w-5" />,
    title: "Student-first ecosystem",
    text: "Support across counselling, placements, clubs, campus life, and career readiness.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#f8f7f3]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <FadeUp>
            <p className="institutional-label mb-3">About JG University</p>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              A new-age university with a real academic foundation.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              JG University is presented as a tech-driven, experiential learning
              campus inspired by the original institution's focus on knowledge
              beyond books, industry relevance, and student development.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              The redesign keeps the credibility of a university website while
              improving visual hierarchy, responsiveness, programme discovery,
              and the overall landing-page experience.
            </p>
          </FadeUp>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="rounded-xl border border-slate-900/10 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-rose-900 text-white">
                  {card.icon}
                </div>
                <h3 className="mb-2 text-lg font-black text-slate-950">
                  {card.title}
                </h3>
                <p className="leading-7 text-slate-600">{card.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
