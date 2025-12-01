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
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Home() {
  const featuredWorkRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax Contribution
  const { scrollYProgress: heroYProgress } = useScroll({ target: heroRef });
  const yHero = useParallax(heroYProgress, 550);

  // Parallax Contact
  const { scrollYProgress: featuredWorksYProgress } = useScroll({
    target: featuredWorkRef,
  });
  const yFeaturedWork = useParallax(featuredWorksYProgress, 400);

  const yHeroPosition = useSpring(yHero, {
    stiffness: 50,
    damping: 20,
  });

  const yFeaturedPosition = useSpring(yFeaturedWork, {
    stiffness: 50,
    damping: 20,
  });

  if (!i18next.isInitialized) return null;
  return (
    <main className="min-h-screen bg-background text-foreground scroll-smooth">
      <Header />
      <Hero ref={heroRef} />
      <motion.div
        className="z-10"
        initial={{ visibility: "hidden", y:0 }}
        animate={{ visibility: "visible" }}
        style={{ y: yHeroPosition, marginBottom: -550 }}
      >
        <Contributions />
      </motion.div>
      <LandingDesign />
      <Stats />
      <FeaturedWorks ref={featuredWorkRef} />
      <motion.div // Hide until scroll progress is measured
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y: yFeaturedPosition }}
      >
        <Contact />
      </motion.div>
      <Footer />
    </main>
  );
}
