"use client";

import { motion } from "framer-motion";
import {
  Brain, Shield, Database, Palette, Plane, TrendingUp,
  ArrowRight, Clock, GraduationCap, Loader
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useNavigationLoading } from "@/hooks/useNavigationLoading";
import { programs } from "@/data";
import { StaggerContainer, StaggerItem, FadeUp } from "@/components/ui/AnimationWrapper";

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Palette: <Palette className="w-6 h-6" />,
  Plane: <Plane className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
};

export default function Programs() {
  const router = useRouter();
  const { navigate, isLoading } = useNavigationLoading();
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);

  const handleNavigate = (href: string) => {
    setLoadingTarget(href);
    navigate(href);
  };
  return (
    <section id="programs" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold uppercase tracking-widest mb-5">
              Explore Programs
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Programs Built for
              <br />
              <span className="gradient-text">Tomorrow's Leaders</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Choose from a curated set of future-forward programs designed in
              partnership with industry leaders and global institutions.
            </p>
          </FadeUp>
        </div>

        {/* Programs Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((program) => (
            <StaggerItem key={program.id}>
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group h-full"
              >
                {/* Glow on hover */}
                <motion.div
                  className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${program.accentColor}40, ${program.accentColor}20)`,
                  }}
                />

                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => handleNavigate("/programs")}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") handleNavigate("/programs");
                  }}
                  className="relative h-full rounded-2xl p-6 flex flex-col overflow-hidden cursor-pointer"
                  style={{
                    background: "rgba(13,24,71,0.5)",
                    backdropFilter: "blur(8px)",
                    border: `1px solid rgba(255,255,255,0.06)`,
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      program.accentColor + "40";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(255,255,255,0.06)";
                  }}
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-50 group-hover:opacity-80 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon + Level */}
                    <div className="flex items-start justify-between mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{
                          background: `${program.accentColor}20`,
                          border: `1px solid ${program.accentColor}30`,
                          color: program.accentColor,
                        }}
                      >
                        {iconMap[program.icon]}
                      </div>
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{
                          background: `${program.accentColor}15`,
                          color: program.accentColor,
                          border: `1px solid ${program.accentColor}25`,
                        }}
                      >
                        {program.level}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                      {program.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">
                      {program.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {program.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/[0.05]">
                      <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{program.duration}</span>
                      </div>
                      <motion.div
                        className="flex items-center gap-1.5 text-xs font-semibold"
                        style={{ color: program.accentColor }}
                        whileHover={{ x: 3 }}
                      >
                        Explore <ArrowRight className="w-3.5 h-3.5" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA */}
        <FadeUp delay={0.3}>
          <div className="text-center mt-14">
            <motion.button
              type="button"
              onClick={() => handleNavigate("/programs")}
              disabled={isLoading}
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(99,102,241,0.3)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass-light border border-white/10 text-white font-medium hover:bg-white/5 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loadingTarget === "/programs" && isLoading ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" />
                  Loading Programs...
                </>
              ) : (
                <>
                  <GraduationCap className="w-4 h-4" />
                  View All 45+ Programs
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
