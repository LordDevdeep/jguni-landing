"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, Sparkles, Loader } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useNavigationLoading } from "@/hooks/useNavigationLoading";
import { FadeUp } from "@/components/ui/AnimationWrapper";

export default function CTASection() {
  const router = useRouter();
  const { navigate, isLoading } = useNavigationLoading();
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);

  const handleNavigate = (href: string) => {
    setLoadingTarget(href);
    navigate(href);
  };
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.2, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[100px]"
          style={{ background: "radial-gradient(circle, #6366f1, #8b5cf6, transparent)" }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-indigo-500/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-violet-500/10"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <FadeUp>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/15 border border-indigo-500/25 text-indigo-300 text-sm font-semibold mb-8"
          >
            <Sparkles className="w-4 h-4" />
            Admissions Open for 2025-26
          </motion.div>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.1}>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
            <span className="text-white">Your Future</span>
            <br />
            <span className="gradient-text glow-text-indigo">Starts Here</span>
          </h2>
        </FadeUp>

        {/* Subtext */}
        <FadeUp delay={0.2}>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Join 15,000+ students who chose excellence. Applications for 2025-26
            are now open. Secure your seat today.
          </p>
        </FadeUp>

        {/* CTA Buttons */}
        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <motion.button
              type="button"
              onClick={() => handleNavigate("/apply")}
              disabled={isLoading}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 50px rgba(99,102,241,0.6), 0 0 100px rgba(139,92,246,0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              className="relative group flex items-center gap-2.5 px-10 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold text-lg overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.35)] disabled:opacity-70 disabled:cursor-not-allowed transition-opacity"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {loadingTarget === "/apply" && isLoading ? (
                <Loader className="w-5 h-5 relative z-10 animate-spin" />
              ) : (
                <Zap className="w-5 h-5 relative z-10" />
              )}
              <span className="relative z-10">Apply Now — Free</span>
              {!(loadingTarget === "/apply" && isLoading) && (
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              )}
            </motion.button>

            <motion.button
              type="button"
              onClick={() => handleNavigate("/brochure")}
              disabled={isLoading}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-10 py-4 rounded-2xl glass-light border border-white/10 text-white font-semibold text-lg hover:bg-white/5 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loadingTarget === "/brochure" && isLoading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Loading...
                </>
              ) : (
                <>Download Brochure</>
              )}
            </motion.button>
          </div>
        </FadeUp>

        {/* Trust signals */}
        <FadeUp delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500">
            {[
              "✅ No Application Fee",
              "✅ Scholarship Available",
              "✅ 100% Placement Support",
              "✅ EMI-Friendly Fees",
            ].map((item) => (
              <span key={item} className="hover:text-slate-300 transition-colors">
                {item}
              </span>
            ))}
          </div>
        </FadeUp>

        {/* Newsletter */}
        <FadeUp delay={0.5}>
          <div className="mt-16 max-w-md mx-auto">
            <p className="text-slate-400 text-sm mb-4">
              Get updates on programs, scholarships & campus events
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-semibold text-sm"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
