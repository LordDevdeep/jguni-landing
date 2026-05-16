"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap, Zap, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { navLinks } from "@/data";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useNavigationLoading } from "@/hooks/useNavigationLoading";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const router = useRouter();
  const { navigate, isLoading } = useNavigationLoading();
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(
    ["home", "programs", "campus", "testimonials", "contact"],
    80
  );

  const handleNavigate = (href: string) => {
    setLoadingTarget(href);
    navigate(href);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "py-3"
            : "py-5"
        )}
      >
        <div
          className={cn(
            "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
            scrolled &&
              "relative"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300",
              scrolled
                ? "bg-[rgba(2,6,23,0.85)] backdrop-blur-sm border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.05)]"
                : "bg-transparent"
            )}
          >
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2.5 cursor-pointer group"
              onClick={() => handleNavClick("#home")}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
              </div>
              <div>
                <span className="text-white font-bold text-lg tracking-tight">
                  JG<span className="gradient-text">Uni</span>
                </span>
                <p className="text-[10px] text-slate-400 leading-none -mt-0.5 tracking-widest uppercase">
                  University
                </p>
              </div>
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <motion.button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300",
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-white"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-white/[0.06] rounded-xl border border-indigo-500/20"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <motion.button
                type="button"
                onClick={() => handleNavigate("/apply")}
                disabled={isLoading}
                className="relative overflow-hidden flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold shadow-[0_0_20px_rgba(99,102,241,0.35)] disabled:opacity-70 disabled:cursor-not-allowed transition-opacity"
                whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(99,102,241,0.5)" }}
                whileTap={{ scale: 0.97 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {loadingTarget === "/apply" && isLoading ? (
                  <Loader className="w-3.5 h-3.5 relative z-10 animate-spin" />
                ) : (
                  <Zap className="w-3.5 h-3.5 relative z-10" />
                )}
                <span className="relative z-10">Apply Now</span>
              </motion.button>
            </div>

            {/* Mobile hamburger */}
            <motion.button
              className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[80px] left-4 right-4 z-40 rounded-2xl bg-[rgba(2,6,23,0.97)] backdrop-blur-2xl border border-indigo-500/20 shadow-2xl p-4"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all text-left text-sm font-medium"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="mt-2 pt-2 border-t border-white/5">
                <motion.button
                  type="button"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  onClick={() => handleNavigate("/apply")}
                  disabled={isLoading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-sm shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition-opacity flex items-center justify-center gap-2"
                >
                  {loadingTarget === "/apply" && isLoading ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    <>Apply Now ⚡</>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
