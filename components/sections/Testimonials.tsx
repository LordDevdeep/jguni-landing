"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data";
import { FadeUp } from "@/components/ui/AnimationWrapper";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const goTo = (index: number, dir: number) => {
    setDirection(dir);
    setCurrent((index + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 100 : -100, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -100 : 100, opacity: 0, scale: 0.95 }),
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeUp>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-widest mb-5">
              Student Stories
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5">
              Hear From Our
              <br />
              <span className="gradient-text">Alumni</span>
            </h2>
          </FadeUp>
        </div>

        {/* Main testimonial */}
        <div className="relative overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative rounded-3xl p-8 sm:p-12"
              style={{
                background: "rgba(13,24,71,0.6)",
                backdropFilter: "blur(8px)",
                border: `1px solid ${t.accentColor}25`,
                boxShadow: `0 0 40px ${t.accentColor}05`,
              }}
            >
              {/* Quote icon */}
              <div
                className="absolute top-8 right-8 w-12 h-12 rounded-2xl flex items-center justify-center opacity-20"
                style={{ background: t.accentColor }}
              >
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-200 text-xl sm:text-2xl leading-relaxed mb-10 font-light">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.accentColor}, ${t.accentColor}80)` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-bold text-lg">{t.name}</p>
                  <p className="text-slate-400 text-sm">{t.role}</p>
                  <p className="text-xs mt-0.5" style={{ color: t.accentColor }}>
                    {t.program} • {t.batch}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
                style={{ width: i === current ? "32px" : "8px", background: "rgba(255,255,255,0.15)" }}
              >
                {i === current && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute inset-0 rounded-full"
                    style={{ background: t.accentColor }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-3">
            <motion.button
              onClick={() => goTo(current - 1, -1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-xl glass-light border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => goTo(current + 1, 1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-xl glass-light border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Thumbnail row */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((test, i) => (
            <motion.button
              key={test.id}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold text-white transition-all"
              style={{
                background: i === current
                  ? `linear-gradient(135deg, ${test.accentColor}, ${test.accentColor}80)`
                  : "rgba(255,255,255,0.06)",
                border: i === current
                  ? `1px solid ${test.accentColor}50`
                  : "1px solid rgba(255,255,255,0.08)",
                opacity: i === current ? 1 : 0.5,
              }}
            >
              {test.avatar}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
