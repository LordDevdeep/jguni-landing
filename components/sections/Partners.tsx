"use client";

import { motion } from "framer-motion";
import { partners } from "@/data";

function PartnerMark({ name }: { name: string }) {
  if (name === "Microsoft") {
    return (
      <div className="flex flex-col items-center gap-2 xl:flex-row xl:gap-2.5">
        <div className="grid h-6 w-6 grid-cols-2 gap-1 sm:h-7 sm:w-7">
          <span className="bg-[#f25022]" />
          <span className="bg-[#7fba00]" />
          <span className="bg-[#00a4ef]" />
          <span className="bg-[#ffb900]" />
        </div>
        <span className="text-sm font-semibold tracking-tight text-[#5f6368] sm:text-base xl:text-lg">
          Microsoft
        </span>
      </div>
    );
  }

  if (name === "Amazon") {
    return (
      <div className="relative pb-2">
        <span className="text-xl font-bold tracking-tight text-[#232f3e] sm:text-2xl">
          amazon
        </span>
        <span className="absolute bottom-0 left-7 h-3 w-12 rounded-[50%] border-b-[3px] border-[#ff9900] sm:left-8 sm:w-14" />
      </div>
    );
  }

  if (name === "IBM") {
    return (
      <span
        className="text-2xl font-black tracking-[0.08em] text-transparent sm:text-3xl"
        style={{
          background:
            "repeating-linear-gradient(180deg, #1f70c1 0 3px, transparent 3px 6px)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
        }}
      >
        IBM
      </span>
    );
  }

  if (name === "Google") {
    return (
      <span className="text-xl font-bold tracking-tight sm:text-2xl">
        <span className="text-[#4285f4]">G</span>
        <span className="text-[#ea4335]">o</span>
        <span className="text-[#fbbc05]">o</span>
        <span className="text-[#4285f4]">g</span>
        <span className="text-[#34a853]">l</span>
        <span className="text-[#ea4335]">e</span>
      </span>
    );
  }

  return (
    <span className="text-base font-black tracking-tight text-[#5f6368] sm:text-xl">
      {name}
    </span>
  );
}

export default function Partners() {
  return (
    <section className="border-y border-slate-900/10 bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="institutional-label mb-2">Alumni Outcomes</p>
            <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Graduates move into respected teams and companies
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Alumni and placement outcomes across technology, consulting,
            product, and enterprise teams.
          </p>
        </div>

        <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-slate-900/10 bg-[#fbfaf7] sm:grid-cols-4 lg:grid-cols-8">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="flex h-24 flex-col items-center justify-center gap-3 border-b border-r border-slate-900/10 p-3 last:border-r-0 sm:h-28 sm:p-4 lg:border-b-0"
            >
              <PartnerMark name={partner.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
