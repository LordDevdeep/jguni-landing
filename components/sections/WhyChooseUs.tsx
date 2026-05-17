"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Briefcase, Cpu, Globe, Rocket } from "lucide-react";
import { whyChooseUs } from "@/data";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrapper";

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="h-6 w-6" />,
  Globe: <Globe className="h-6 w-6" />,
  Briefcase: <Briefcase className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
  Rocket: <Rocket className="h-6 w-6" />,
  Award: <Award className="h-6 w-6" />,
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-[#172033] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <FadeUp>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-amber-300">
              Why JG University
            </p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              Student support that feels specific.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg leading-8 text-slate-300">
              This section now reads like academic infrastructure instead of
              generic “future-ready” marketing cards.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item) => (
            <StaggerItem key={item.id}>
              <motion.article
                whileHover={{ y: -4 }}
                className="h-full rounded-xl border border-white/10 bg-white/[0.06] p-6"
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg text-white"
                  style={{ backgroundColor: item.accentColor }}
                >
                  {iconMap[item.icon]}
                </div>
                <h3 className="mb-3 text-xl font-black">{item.title}</h3>
                <p className="leading-7 text-slate-300">{item.description}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
