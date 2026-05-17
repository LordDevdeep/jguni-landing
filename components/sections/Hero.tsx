"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Loader,
  MapPin,
  Play,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useNavigationLoading } from "@/hooks/useNavigationLoading";

const heroStats = [
  { label: "Programs", value: "45+", icon: <BookOpen className="h-5 w-5" /> },
  { label: "Students", value: "15k+", icon: <Users className="h-5 w-5" /> },
  { label: "Recruiters", value: "500+", icon: <Building2 className="h-5 w-5" /> },
];

export default function Hero() {
  const { navigate, isLoading } = useNavigationLoading();
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);

  const handleNavigate = (href: string) => {
    setLoadingTarget(href);
    navigate(href);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] overflow-hidden border-b border-slate-900/10 bg-[#f8f7f3] pt-24 sm:pt-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[#172033] lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-[46%]" />
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(180deg,rgba(248,247,243,1)_0%,rgba(248,247,243,0.98)_62%,rgba(248,247,243,0)_100%)] lg:bg-[linear-gradient(90deg,rgba(248,247,243,1)_0%,rgba(248,247,243,0.95)_48%,rgba(248,247,243,0)_70%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.03fr_0.97fr] lg:px-8 lg:pb-20 lg:pt-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-rose-900/15 bg-white/70 px-4 py-2 text-sm font-bold text-rose-900 shadow-sm sm:mb-7"
          >
            <Award className="h-4 w-4" />
            Admissions open for 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="max-w-3xl text-4xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl"
          >
            Learn with purpose. Graduate with direction.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8"
          >
            JG University brings together career-focused programs, practical labs,
            mentoring, campus life, and placement support for students who want a
            serious academic foundation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <button
              type="button"
              onClick={() => handleNavigate("/apply")}
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-rose-900 px-6 py-3.5 text-base font-extrabold text-white shadow-[0_18px_38px_rgba(159,18,57,0.22)] transition hover:bg-rose-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loadingTarget === "/apply" && isLoading ? (
                <Loader className="h-5 w-5 animate-spin" />
              ) : (
                <ArrowRight className="h-5 w-5" />
              )}
              Start Application
            </button>
            <button
              type="button"
              onClick={() => handleNavigate("/campus-tour")}
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-900/15 bg-white px-6 py-3.5 text-base font-extrabold text-slate-900 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Play className="h-4 w-4" />
              View Campus
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-8 grid max-w-2xl grid-cols-1 overflow-hidden rounded-xl border border-slate-900/10 bg-white xs:grid-cols-3 sm:mt-10"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="border-b border-slate-900/10 p-4 last:border-b-0 xs:border-b-0 xs:border-r xs:last:border-r-0">
                <div className="mb-3 flex text-rose-900">{stat.icon}</div>
                <p className="text-2xl font-black text-slate-950">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.18 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-xl border border-white/20 bg-slate-900 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1100&q=82"
              alt="Students walking on a university campus"
              className="h-[340px] w-full object-cover sm:h-[520px]"
            />
          </div>
          <div className="absolute -bottom-7 left-4 right-4 rounded-xl border border-slate-900/10 bg-white p-4 shadow-xl sm:left-8 sm:right-auto sm:w-80 sm:p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-bold text-slate-500">
              <MapPin className="h-4 w-4 text-rose-900" />
              Gujarat, India
            </div>
            <p className="text-base font-black text-slate-950 sm:text-lg">
              Campus life with labs, studios, events, clubs, and academic mentoring.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
