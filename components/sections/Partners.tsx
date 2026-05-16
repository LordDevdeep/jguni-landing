"use client";

import { motion } from "framer-motion";
import { partners } from "@/data";

const partnerList = [...partners, ...partners]; // duplicate for seamless loop

export default function Partners() {
  return (
    <section className="py-16 relative overflow-hidden border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-500 uppercase tracking-widest font-medium"
        >
          Trusted by alumni at world-class companies
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#020617] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#020617] to-transparent pointer-events-none" />

        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [0, -50 * partners.length] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-12 whitespace-nowrap"
            style={{ width: "max-content" }}
          >
            {partnerList.map((partner, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-indigo-500/20 transition-colors group cursor-pointer flex-shrink-0"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center">
                  <span className="text-indigo-300 font-bold text-xs">{partner.logo}</span>
                </div>
                <span className="text-slate-400 group-hover:text-slate-200 transition-colors font-medium text-sm">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
