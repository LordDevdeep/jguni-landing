"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Building, BookOpen, TrendingUp } from "lucide-react";
import { stats } from "@/data";
import { FadeUp } from "@/components/ui/AnimationWrapper";

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6" />,
  Building: <Building className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
};

function CountUp({
  target,
  suffix,
  started,
}: {
  target: number;
  suffix: string;
  started: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 2200;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * easeOut));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };

    requestAnimationFrame(animate);
  }, [target, started]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/40 via-violet-950/30 to-blue-950/40" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-5">
              Impact Numbers
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Numbers That Speak
              <br />
              <span className="gradient-text">For Themselves</span>
            </h2>
          </FadeUp>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative group rounded-3xl p-7 text-center overflow-hidden cursor-default"
              style={{
                background: "rgba(13,24,71,0.6)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(99,102,241,0.12)",
              }}
            >
              {/* Hover glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(99,102,241,0.12), transparent 70%)",
                }}
              />

              {/* Icon */}
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  {iconMap[stat.icon]}
                </div>
              </div>

              {/* Value */}
              <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2 tabular-nums">
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  started={inView}
                />
              </div>

              {/* Label */}
              <p className="text-slate-400 text-sm font-medium relative z-10">
                {stat.label}
              </p>

              {/* Animated border bottom */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 + i * 0.1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
