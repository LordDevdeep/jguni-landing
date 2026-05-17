"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Clock,
  Database,
  GraduationCap,
  Palette,
  Plane,
  Shield,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { programs } from "@/data";
import { useNavigationLoading } from "@/hooks/useNavigationLoading";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrapper";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="h-5 w-5" />,
  Shield: <Shield className="h-5 w-5" />,
  Database: <Database className="h-5 w-5" />,
  Palette: <Palette className="h-5 w-5" />,
  Plane: <Plane className="h-5 w-5" />,
  TrendingUp: <TrendingUp className="h-5 w-5" />,
};

export default function Programs() {
  const { navigate } = useNavigationLoading();
  const [activeProgram, setActiveProgram] = useState(programs[0]);

  return (
    <section id="programs" className="section-padding bg-[#f8f7f3]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-6 sm:mb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-8">
          <FadeUp>
            <p className="institutional-label mb-3">Academic Schools</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Programs that look like a university, not a template.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Each program card now shows the school, credential, duration,
              skill tags, and career direction so students can actually compare
              options at a glance.
            </p>
          </FadeUp>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <StaggerContainer className="grid gap-3">
            {programs.map((program) => (
              <StaggerItem key={program.id}>
                <button
                  type="button"
                  onClick={() => setActiveProgram(program)}
                  className={`w-full rounded-xl border p-3 text-left transition sm:p-4 ${
                    activeProgram.id === program.id
                      ? "border-rose-900 bg-white shadow-[0_18px_45px_rgba(23,32,51,0.11)]"
                      : "border-slate-900/10 bg-white/65 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white"
                      style={{ backgroundColor: program.accentColor }}
                    >
                      {iconMap[program.icon]}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-black text-slate-950">
                          {program.title}
                        </h3>
                        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-600">
                          {program.level}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-slate-500">
                        {program.school}
                      </p>
                    </div>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <motion.article
            key={activeProgram.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="surface overflow-hidden rounded-xl"
          >
            <div
              className="h-2"
              style={{ backgroundColor: activeProgram.accentColor }}
            />
            <div className="p-6 sm:p-8">
              <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.16em] text-rose-900">
                    {activeProgram.school}
                  </p>
                  <h3 className="text-2xl font-black tracking-tight text-slate-950 sm:text-4xl">
                    {activeProgram.title}
                  </h3>
                </div>
                <div className="rounded-xl border border-slate-900/10 bg-[#fbfaf7] p-4">
                  <div className="mb-1 flex items-center gap-2 text-sm font-bold text-slate-500">
                    <Clock className="h-4 w-4" />
                    Duration
                  </div>
                  <p className="text-xl font-black text-slate-950">
                    {activeProgram.duration}
                  </p>
                </div>
              </div>

              <p className="mb-7 text-lg leading-8 text-slate-600">
                {activeProgram.description}
              </p>

              <div className="mb-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-900/10 bg-white p-5">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Career Direction
                  </p>
                  <p className="font-bold leading-7 text-slate-900">
                    {activeProgram.outcome}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-900/10 bg-white p-5">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    Credential
                  </p>
                  <p className="font-bold leading-7 text-slate-900">
                    {activeProgram.level} degree program
                  </p>
                </div>
              </div>

              <div className="mb-8 flex flex-wrap gap-2">
                {activeProgram.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-900/10 bg-[#f8f7f3] px-3 py-1.5 text-sm font-bold text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => navigate("/apply")}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-rose-900 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-rose-800"
                >
                  <GraduationCap className="h-4 w-4" />
                  Apply for this Program
                </button>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
