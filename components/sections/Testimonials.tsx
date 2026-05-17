"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
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
      setCurrent((value) => (value + 1) % testimonials.length);
    }, 5200);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding bg-[#f8f7f3]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <FadeUp>
            <p className="institutional-label mb-3">Student Stories</p>
            <h2 className="text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Alumni voices, kept credible.
            </h2>
          </FadeUp>
        </div>

        <div className="surface overflow-hidden rounded-xl">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
              transition={{ duration: 0.35 }}
              className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[0.75fr_1.25fr]"
            >
              <div className="rounded-xl bg-[#172033] p-7 text-white">
                <Quote className="mb-8 h-10 w-10 text-amber-300" />
                <div className="mb-5 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-2xl font-black">{t.name}</p>
                <p className="mt-2 font-semibold text-slate-300">{t.role}</p>
                <p className="mt-1 text-sm font-bold text-amber-300">
                  {t.program} / {t.batch}
                </p>
              </div>

              <div className="flex flex-col justify-between">
                <p className="text-2xl leading-10 text-slate-800">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="mt-8 flex items-center justify-between">
                  <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => goTo(i, i > current ? 1 : -1)}
                        className={`h-2 rounded-full transition-all ${
                          i === current ? "w-9 bg-rose-900" : "w-2 bg-slate-300"
                        }`}
                        aria-label={`Show testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => goTo(current - 1, -1)}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-900/10 bg-white"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => goTo(current + 1, 1)}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-900/10 bg-white"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
