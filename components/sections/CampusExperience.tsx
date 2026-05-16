"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { campusImages } from "@/data";
import { FadeUp } from "@/components/ui/AnimationWrapper";

export default function CampusExperience() {
  return (
    <section id="campus" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
          <FadeUp>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-widest mb-5">
              Campus Life
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Experience a
              <br />
              <span className="gradient-text">World-Class Campus</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span className="text-sm">Rajkot, Gujarat, India</span>
            </div>
          </FadeUp>
        </div>

        {/* Horizontal scroll gallery */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[#020617] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[#020617] to-transparent pointer-events-none" />

          <div className="flex gap-5 overflow-x-auto pb-4 no-scrollbar snap-x snap-mandatory">
            {campusImages.map((img, i) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative flex-shrink-0 w-72 sm:w-80 h-72 rounded-3xl overflow-hidden cursor-pointer group snap-center"
              >
                {/* Gradient background (placeholder for images) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${img.bg}`}
                />

                {/* Pattern overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 40%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
                  }}
                />

                {/* Emoji icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500">
                  {img.emoji}
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    initial={{ y: 10, opacity: 0.7 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="transition-all duration-300"
                  >
                    <h3 className="text-white font-bold text-xl mb-1">
                      {img.title}
                    </h3>
                    <p className="text-white/60 text-sm mb-3">{img.subtitle}</p>
                    <motion.div
                      className="flex items-center gap-1.5 text-white/70 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 3 }}
                    >
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/60 text-xs font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <FadeUp delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: "50+", label: "Acres Campus", icon: "🏛️" },
              { value: "200+", label: "Classrooms & Labs", icon: "🔬" },
              { value: "5000+", label: "Library Books", icon: "📚" },
              { value: "24/7", label: "Hostel Facilities", icon: "🏠" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-5 rounded-2xl glass-light border border-white/5"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-xs text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
