"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Building, TrendingUp, Users } from "lucide-react";
import { stats } from "@/data";
import { FadeUp } from "@/components/ui/AnimationWrapper";

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="h-5 w-5" />,
  Building: <Building className="h-5 w-5" />,
  BookOpen: <BookOpen className="h-5 w-5" />,
  TrendingUp: <TrendingUp className="h-5 w-5" />,
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
    const duration = 1400;
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(target * eased));
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
    <section ref={ref} className="bg-[#f8f7f3] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="institutional-label mb-2">At a Glance</p>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                The scale behind the student experience
              </h2>
            </div>
            <p className="max-w-lg text-slate-600">
              Clear, scan-friendly facts for families and applicants.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-slate-900/10 bg-white lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="border-b border-r border-slate-900/10 p-6 last:border-r-0 lg:border-b-0"
            >
              <div className="mb-6 flex text-rose-900">{iconMap[stat.icon]}</div>
              <p className="text-4xl font-black tabular-nums text-slate-950">
                <CountUp target={stat.value} suffix={stat.suffix} started={inView} />
              </p>
              <p className="mt-2 text-sm font-bold uppercase tracking-wide text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
