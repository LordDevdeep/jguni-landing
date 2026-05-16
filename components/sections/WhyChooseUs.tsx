"use client";

import { motion } from "framer-motion";
import {
  BookOpen, Globe, Briefcase, Cpu, Rocket, Award,
} from "lucide-react";
import { whyChooseUs } from "@/data";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrapper";

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-7 h-7" />,
  Globe: <Globe className="w-7 h-7" />,
  Briefcase: <Briefcase className="w-7 h-7" />,
  Cpu: <Cpu className="w-7 h-7" />,
  Rocket: <Rocket className="w-7 h-7" />,
  Award: <Award className="w-7 h-7" />,
};

const sizeClass: Record<string, string> = {
  large: "lg:col-span-2",
  medium: "lg:col-span-1",
  small: "lg:col-span-1",
};

export default function WhyChooseUs() {
  return (
    <section className="section-padding relative">
      {/* Section glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/6 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-semibold uppercase tracking-widest mb-5">
              Why JG University
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              An Ecosystem Built for
              <br />
              <span className="gradient-text">Excellence</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
              Every feature, resource, and program is designed to maximize your
              potential and accelerate your career trajectory.
            </p>
          </FadeUp>
        </div>

        {/* Bento Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyChooseUs.map((item) => (
            <StaggerItem key={item.id} className={sizeClass[item.size]}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group rounded-3xl p-7 h-full overflow-hidden cursor-pointer"
                style={{
                  background: "rgba(13,24,71,0.45)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Gradient bg */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50 group-hover:opacity-90 transition-opacity duration-500`}
                />

                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${item.accentColor}12, transparent 60%)`,
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{
                      background: `${item.accentColor}15`,
                      border: `1px solid ${item.accentColor}25`,
                      color: item.accentColor,
                      boxShadow: `0 0 20px ${item.accentColor}10`,
                    }}
                  >
                    {iconMap[item.icon]}
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {item.description}
                  </p>

                  {/* Accent line */}
                  <motion.div
                    className="mt-6 h-0.5 rounded-full"
                    style={{ background: `linear-gradient(90deg, ${item.accentColor}60, transparent)` }}
                    initial={{ width: "0%" }}
                    whileInView={{ width: "60%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                </div>

                {/* Corner decoration */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10"
                  style={{ background: item.accentColor }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
