"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import Contributions from "@/components/contributions";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import i18next from "i18next";
import Stats from "@/components/stats";
import FeaturedWorks from "@/components/featured-works";
import LandingDesign from "@/components/landing-design";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax for Hero
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.85]);
  const heroOpacity = useTransform(heroProgress, [0, 1], [1, 0.3]);
  const heroY = useTransform(heroProgress, [0, 1], [0, 100]);

  if (!i18next.isInitialized) return null;

  return (
    <main className="bg-background text-foreground relative">
      <Header />

      {/* Hero Section wrapper that stays fixed as we scroll past */}
      <div
        ref={heroRef}
        className="h-screen w-full sticky top-0 left-0 z-10 overflow-hidden"
      >
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
          className="w-full h-full transform-gpu origin-top"
        >
          <Hero />
        </motion.div>
      </div>

      <div className="relative z-10 bg-background rounded-t-[2.5rem] sm:rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.15)] border-t border-border/20 overflow-hidden">
        <Contributions />
        <LandingDesign />
        <Stats />
        <FeaturedWorks />
        <Contact />
      </div>

      <div className="relative z-20">
        <Footer />
      </div>
    </main>
  );
}
