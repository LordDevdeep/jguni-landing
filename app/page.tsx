"use client";

import { lazy, Suspense } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";

const Partners = lazy(() => import("@/components/sections/Partners"));
const Programs = lazy(() => import("@/components/sections/Programs"));
const WhyChooseUs = lazy(() => import("@/components/sections/WhyChooseUs"));
const CampusExperience = lazy(() => import("@/components/sections/CampusExperience"));
const Stats = lazy(() => import("@/components/sections/Stats"));
const Testimonials = lazy(() => import("@/components/sections/Testimonials"));
const JourneyTimeline = lazy(() => import("@/components/sections/JourneyTimeline"));
const CTASection = lazy(() => import("@/components/sections/CTASection"));
const Footer = lazy(() => import("@/components/sections/Footer"));

const LoadingFallback = () => <div className="h-64" />;

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Global background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        <Suspense fallback={<LoadingFallback />}>
          <Partners />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Programs />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <WhyChooseUs />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <CampusExperience />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Stats />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <JourneyTimeline />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <CTASection />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Footer />
        </Suspense>
      </div>
    </main>
  );
}

