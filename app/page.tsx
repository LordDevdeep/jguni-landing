"use client";

import { lazy, Suspense } from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";

const Partners = lazy(() => import("@/components/sections/Partners"));
const About = lazy(() => import("@/components/sections/About"));
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
    <main className="relative overflow-x-hidden bg-[#f8f7f3]">
      <div className="relative">
        <Navbar />
        <Hero />
        
        <Suspense fallback={<LoadingFallback />}>
          <Partners />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <About />
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

