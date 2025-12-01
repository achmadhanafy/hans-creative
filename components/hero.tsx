"use client";

import { headerCta } from "@/assets/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

const Hero = forwardRef<HTMLDivElement>((_, ref) => {

  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden pt-20 z-0 relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1300px] mx-auto px-4 sm:p-6 lg:p-8 z-10 text-center w-full"
      >
        <div className="flex flex-col md:flex-row w-full">
          <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
            <motion.div variants={itemVariants} className="inline-block my-6">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                {t("hero.badge")}
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-center md:text-left"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 text-center md:text-left"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#featured-works" className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                {t("hero.exploreWork")} <ArrowRight size={18} />
              </a>
              <a href="#about" className="px-8 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors">
                {t("hero.learnMore")}
              </a>
            </motion.div>
          </div>
          <motion.div
            ref={ref}
            className="self-center relative w-full md:w-8/12 aspect-square"
            animate={{
              y: [0, -20, 0], // moves up and down
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity, // infinite bounce
              ease: "easeInOut",
            }}
          >
            <Image
              src={headerCta}
              className="w-full h-full"
              alt="3d-cta"
              fill
              sizes="100%"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
})

export default Hero;