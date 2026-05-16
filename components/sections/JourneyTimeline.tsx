"use client";

import { motion } from "framer-motion";
import {
  FileText, ClipboardCheck, MessageSquare, GraduationCap,
} from "lucide-react";
import { journeySteps } from "@/data";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrapper";

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-6 h-6" />,
  ClipboardCheck: <ClipboardCheck className="w-6 h-6" />,
  MessageSquare: <MessageSquare className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
};

export default function JourneyTimeline() {
  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-5">
              Your Journey
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
              From Application to
              <br />
              <span className="gradient-text">Graduation</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              A clear, simple path from where you are to where you want to be.
            </p>
          </FadeUp>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeySteps.map((step, i) => (
              <StaggerItem key={step.step}>
                <div className="relative flex flex-col items-center text-center lg:items-center group">
                  {/* Step number + icon */}
                  <div className="relative mb-6">
                    {/* Outer ring */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10 + i * 3, repeat: Infinity, ease: "linear" }}
                      className="absolute -inset-3 rounded-full border border-dashed opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ borderColor: step.color + "40" }}
                    />

                    {/* Icon circle */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}25, ${step.color}10)`,
                        border: `1px solid ${step.color}30`,
                        color: step.color,
                        boxShadow: `0 0 30px ${step.color}15`,
                      }}
                    >
                      {iconMap[step.icon]}
                    </motion.div>

                    {/* Step badge */}
                    <div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white z-20"
                      style={{ background: step.color }}
                    >
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                    {step.description}
                  </p>

                  {/* Arrow (except last) */}
                  {i < journeySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 text-slate-600 z-20">
                      →
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* CTA */}
        <FadeUp delay={0.4}>
          <div className="text-center mt-14">
            <motion.button
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 40px rgba(99,102,241,0.5)",
              }}
              whileTap={{ scale: 0.97 }}
              className="px-10 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-lg shadow-[0_0_30px_rgba(99,102,241,0.3)]"
            >
              Start Your Application
            </motion.button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
