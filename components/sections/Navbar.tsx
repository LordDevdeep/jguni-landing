"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Loader, Menu, X } from "lucide-react";
import { navLinks } from "@/data";
import { useNavigationLoading } from "@/hooks/useNavigationLoading";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

const logoUrl = "https://jguni.in/images/logo-animation.svg";

export default function Navbar() {
  const { navigate, isLoading } = useNavigationLoading();
  const [loadingTarget, setLoadingTarget] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(
    ["home", "about", "programs", "campus", "testimonials", "contact"],
    88
  );

  const handleNavigate = (href: string) => {
    setLoadingTarget(href);
    navigate(href);
    setMobileOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-5"
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-xl border px-4 py-3 transition-all duration-300",
            scrolled
              ? "border-slate-900/10 bg-white/92 shadow-[0_16px_45px_rgba(23,32,51,0.12)] backdrop-blur-xl"
              : "border-transparent bg-white/72 backdrop-blur-md"
          )}
        >
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 text-left"
            aria-label="Go to home"
          >
            <img
              src={logoUrl}
              alt="JG University"
              className="h-12 w-10 object-contain"
            />
            <div className="leading-tight">
              <p className="text-base font-extrabold tracking-tight text-slate-950">
                JG University
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-800">
                Ahmedabad
              </p>
            </div>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors",
                    isActive
                      ? "bg-rose-900 text-white"
                      : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-950"
                  )}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              onClick={() => handleNavigate("/brochure")}
              className="rounded-lg border border-slate-900/10 px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-900/5"
            >
              Brochure
            </button>
            <button
              type="button"
              onClick={() => handleNavigate("/apply")}
              disabled={isLoading}
              className="inline-flex items-center gap-2 rounded-lg bg-rose-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-rose-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loadingTarget === "/apply" && isLoading && (
                <Loader className="h-4 w-4 animate-spin" />
              )}
              Apply Now
            </button>
          </div>

          <button
            type="button"
            className="rounded-lg border border-slate-900/10 p-2 text-slate-800 md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed left-4 right-4 top-[88px] z-40 rounded-xl border border-slate-900/10 bg-white p-3 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className="rounded-lg px-4 py-3 text-left text-sm font-bold text-slate-700 hover:bg-slate-100"
                >
                  {link.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => handleNavigate("/apply")}
                disabled={isLoading}
                className="mt-2 rounded-lg bg-rose-900 px-4 py-3 text-sm font-bold text-white disabled:opacity-70"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
