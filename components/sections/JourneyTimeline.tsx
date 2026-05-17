"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, FileText, GraduationCap, MessageSquare } from "lucide-react";
import { journeySteps } from "@/data";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/AnimationWrapper";

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText className="h-5 w-5" />,
  ClipboardCheck: <ClipboardCheck className="h-5 w-5" />,
  MessageSquare: <MessageSquare className="h-5 w-5" />,
  GraduationCap: <GraduationCap className="h-5 w-5" />,
};

export default function JourneyTimeline() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <FadeUp>
            <p className="institutional-label mb-3">Admissions Path</p>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              A clearer route from enquiry to enrollment.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Simple steps, plain language, and no fake complexity.
            </p>
          </FadeUp>
        </div>

        <StaggerContainer className="grid gap-4 md:grid-cols-4">
          {journeySteps.map((step) => (
            <StaggerItem key={step.step}>
              <motion.article
                whileHover={{ y: -4 }}
                className="h-full rounded-xl border border-slate-900/10 bg-[#f8f7f3] p-6"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-lg text-white"
                    style={{ backgroundColor: step.color }}
                  >
                    {iconMap[step.icon]}
                  </div>
                  <span className="text-sm font-black text-slate-400">
                    {step.step}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-black text-slate-950">{step.title}</h3>
                <p className="leading-7 text-slate-600">{step.description}</p>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
