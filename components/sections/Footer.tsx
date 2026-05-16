"use client";

import { motion } from "framer-motion";
import {
  GraduationCap, Twitter, Linkedin, Instagram, Youtube,
  MapPin, Phone, Mail, ArrowRight,
} from "lucide-react";
import { navLinks } from "@/data";

const footerLinks = {
  Programs: [
    "Artificial Intelligence",
    "Cybersecurity",
    "Data Science",
    "UI/UX Design",
    "Aviation",
    "Commerce",
  ],
  Campus: ["About Us", "Research Labs", "Sports Complex", "Hostels", "Library", "Events"],
  Admissions: [
    "How to Apply",
    "Scholarships",
    "Fee Structure",
    "Entrance Exam",
    "International Students",
    "FAQs",
  ],
};

const socials = [
  { icon: <Twitter className="w-4 h-4" />, label: "Twitter", href: "#" },
  { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", href: "#" },
  { icon: <Instagram className="w-4 h-4" />, label: "Instagram", href: "#" },
  { icon: <Youtube className="w-4 h-4" />, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.04]">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-indigo-900/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[200px] bg-violet-900/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white font-bold text-xl">
                  JG<span className="gradient-text">Uni</span>
                </span>
                <p className="text-[10px] text-slate-400 leading-none uppercase tracking-widest">
                  University
                </p>
              </div>
            </motion.div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              A premier institution shaping the next generation of innovators,
              leaders, and problem-solvers through world-class education and
              research.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              {[
                { icon: <MapPin className="w-4 h-4 flex-shrink-0" />, text: "Rajkot, Gujarat 360001, India" },
                { icon: <Phone className="w-4 h-4 flex-shrink-0" />, text: "+91 28123 45678" },
                { icon: <Mail className="w-4 h-4 flex-shrink-0" />, text: "admissions@jguni.in" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-start gap-3 text-slate-400 text-sm">
                  <span className="text-indigo-400 mt-0.5">{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-2.5 mt-6">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl glass-light border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/30 transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="text-slate-400 hover:text-white text-sm transition-colors flex items-center gap-0 hover:gap-1.5 group"
                      whileHover={{ x: 3 }}
                    >
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="w-3 h-3" />
                      </span>
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} JG University. All rights reserved.
            Built with ❤️ in India.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Use", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-slate-500 hover:text-slate-300 text-xs transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
