"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Zap, Star, Users, TrendingUp, BookOpen, ChevronRight, Loader } from "lucide-react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useNavigationLoading } from "@/hooks/useNavigationLoading";

const floatingCards = [
  {
    id: 1,
    icon: <Users className="w-4 h-4 text-indigo-400" />,
    label: "Active Students",
    value: "15,000+",
    change: "+24% this year",
    color: "indigo",
    pos: "top-8 right-0",
  },
  {
    id: 2,
    icon: <TrendingUp className="w-4 h-4 text-emerald-400" />,
    label: "Placement Rate",
    value: "98%",
    change: "↑ 3% vs last year",
    color: "emerald",
    pos: "top-40 -left-8",
  },
  {
    id: 3,
    icon: <Star className="w-4 h-4 text-amber-400" />,
    label: "Avg Package",
    value: "₹12 LPA",
    change: "Top 10 in India",
    color: "amber",
    pos: "bottom-16 right-4",
  },
  {
    id: 4,
    icon: <BookOpen className="w-4 h-4 text-cyan-400" />,
    label: "Programs",
    value: "45+",
    change: "Across disciplines",
    color: "cyan",
    pos: "bottom-40 -left-4",
  },
];

const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

const particles = Array.from({ length: 20 }, (_, i) => {
  const base = seededRandom(i + 1);
  return {
    id: i,
    x: (seededRandom(base * 100 + i) * 100).toFixed(2),
    y: (seededRandom(base * 200 + i) * 100).toFixed(2),
    size: (seededRandom(base * 300 + i) * 3 + 1).toFixed(2),
    duration: seededRandom(base * 400 + i) * 4 + 4,
    delay: seededRandom(base * 500 + i) * 3,
  };
});

export default function Hero() {
  const router = useRouter();
  const { navigate, isLoading } = useNavigationLoading();
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleNavigate = (href: string) => {
    setLoadingTarget(href);
    navigate(href);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient blobs */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.2, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.05, 1, 1.05], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-cyan-500 rounded-full blur-[100px]"
        />

        {/* Floating particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-indigo-400/30 will-change-transform"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: `${p.size}px`, height: `${p.size}px` }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: p.duration + 2,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Rotating ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] will-change-transform">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-full h-full rounded-full border border-indigo-500/[0.06]"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-10 rounded-full border border-violet-500/[0.06]"
          />
        </div>
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* LEFT: Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-indigo-400"
              />
              Ranked #1 in Innovation 2024
              <ChevronRight className="w-3.5 h-3.5" />
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-6">
                <span className="text-white">Shape Your</span>
                <br />
                <span className="gradient-text">Future</span>
                <br />
                <span className="text-white">Here</span>
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-slate-400 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              Where brilliance meets ambition. JG University offers world-class
              education in AI, Design, Cybersecurity and beyond — preparing
              leaders who define the next decade.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.button
              type="button"
              onClick={() => handleNavigate("/apply")}
              disabled={isLoading}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 40px rgba(99,102,241,0.5), 0 0 80px rgba(139,92,246,0.2)",
              }}
              whileTap={{ scale: 0.97 }}
              className="relative group flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-base overflow-hidden shadow-[0_0_30px_rgba(99,102,241,0.3)] disabled:opacity-70 disabled:cursor-not-allowed transition-opacity"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {loadingTarget === "/apply" && isLoading ? (
                <Loader className="w-4 h-4 relative z-10 animate-spin" />
              ) : (
                <Zap className="w-4 h-4 relative z-10" />
              )}
              <span className="relative z-10">Apply for 2025</span>
              {!(loadingTarget === "/apply" && isLoading) && (
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              )}
            </motion.button>

            <motion.button
              type="button"
              onClick={() => handleNavigate("/campus-tour")}
              disabled={isLoading}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl glass-light text-white font-medium text-base hover:bg-white/5 transition-colors border border-white/10 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                {loadingTarget === "/campus-tour" && isLoading ? (
                  <Loader className="w-3.5 h-3.5 text-white animate-spin" />
                ) : (
                  <Play className="w-3.5 h-3.5 text-white ml-0.5" />
                )}
              </div>
              Watch Campus Tour
            </motion.button>
          </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-6 mt-10 pt-8 border-t border-white/5"
            >
              <div className="flex -space-x-2">
                {["AB", "KR", "PS", "MN", "SJ"].map((initials, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-[#020617]"
                    style={{
                      background: `hsl(${i * 60 + 220}, 70%, 50%)`,
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-400">
                  <span className="text-white font-semibold">4.9/5</span> from 8,200+ alumni
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Visual System */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="relative h-[500px] lg:h-[600px] hidden lg:block"
          >
            {/* Floating stat cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.id}
                className={`absolute ${card.pos}`}
                animate={{ y: [0, i % 2 === 0 ? -10 : 10, 0] }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.8,
                }}
              >
                <div
                  className="rounded-2xl p-3.5 min-w-[160px]"
                  style={{
                    background: "rgba(13,24,71,0.8)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  }}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center">
                      {card.icon}
                    </div>
                    <span className="text-xs text-slate-400">{card.label}</span>
                  </div>
                  <p className="text-lg font-bold text-white mb-0.5">{card.value}</p>
                  <p className="text-[11px] text-slate-500">{card.change}</p>
                </div>
              </motion.div>
            ))}

            {/* Orbiting dots */}
            <div className="absolute inset-0 pointer-events-none">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8 + i * 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 2,
                  }}
                  style={{ width: 180 + i * 80, height: 180 + i * 80, marginLeft: -(90 + i * 40), marginTop: -(90 + i * 40) }}
                >
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: 6 - i,
                      height: 6 - i,
                      top: 0,
                      left: "50%",
                      background: i === 0 ? "#6366f1" : i === 1 ? "#8b5cf6" : "#3b82f6",
                      boxShadow: `0 0 10px ${i === 0 ? "#6366f1" : i === 1 ? "#8b5cf6" : "#3b82f6"}`,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
        <p className="text-[10px] text-slate-500 tracking-widest uppercase">Scroll</p>
      </motion.div>
    </section>
  );
}
