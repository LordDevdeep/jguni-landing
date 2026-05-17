"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Loader } from "lucide-react";
import { useState } from "react";
import { useNavigationLoading } from "@/hooks/useNavigationLoading";
import { FadeUp } from "@/components/ui/AnimationWrapper";

export default function CTASection() {
  const { navigate, isLoading } = useNavigationLoading();
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);

  const handleNavigate = (href: string) => {
    setLoadingTarget(href);
    navigate(href);
  };

  return (
    <section id="contact" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <FadeUp>
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-xl border border-slate-900/10 bg-[#172033] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 text-white sm:p-12">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-amber-300">
              Admissions
            </p>
            <h2 className="max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
              Talk to admissions before you choose your program.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Get guidance on eligibility, fees, scholarships, documents, and
              the right academic path for your goals.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.button
                type="button"
                onClick={() => handleNavigate("/apply")}
                disabled={isLoading}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-extrabold text-slate-950 transition hover:bg-slate-100 disabled:opacity-70"
              >
                {loadingTarget === "/apply" && isLoading ? (
                  <Loader className="h-4 w-4 animate-spin" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
                Apply Now
              </motion.button>
              <motion.button
                type="button"
                onClick={() => handleNavigate("/brochure")}
                disabled={isLoading}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-white/10 disabled:opacity-70"
              >
                <FileText className="h-4 w-4" />
                Download Brochure
              </motion.button>
            </div>
          </div>

          <div className="bg-[#f8f7f3] p-8 sm:p-12">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-rose-900">
                Admissions Desk
              </p>
              <div className="space-y-5 text-slate-700">
                <div>
                  <p className="text-sm font-bold text-slate-500">Email</p>
                  <p className="font-black text-slate-950">admissions@jguni.in</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500">Office Hours</p>
                  <p className="font-black text-slate-950">Mon to Sat, 10 AM to 5 PM</p>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-500">Support</p>
                  <p className="font-black text-slate-950">
                    Program selection, fee guidance, documents, scholarships
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
