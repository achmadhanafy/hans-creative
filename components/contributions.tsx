"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Zap, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import {
  farmbyteLogo,
  ifgLifeLogo,
  jasindo,
  nuon,
  oneByIfg,
} from "@/assets/image";
import Image from "next/image";

const clients = [
  {
    name: "Farmbyte",
    img: farmbyteLogo,
  },
  {
    name: "IFG Life",
    img: ifgLifeLogo,
  },
  {
    name: "Jasindo",
    img: jasindo,
  },
  {
    name: "Nuon",
    img: nuon,
  },
  {
    name: "One by IFG",
    img: oneByIfg,
  },
];

export default function Contributions() {
  const { t } = useTranslation();

  const contributions = [
    {
      icon: Code,
      titleKey: "contributions.web.title",
      descKey: "contributions.web.description",
    },
    {
      icon: Smartphone,
      titleKey: "contributions.mobile.title",
      descKey: "contributions.mobile.description",
    },
    {
      icon: Zap,
      titleKey: "contributions.performance.title",
      descKey: "contributions.performance.description",
    },
    {
      icon: Users,
      titleKey: "contributions.collaboration.title",
      descKey: "contributions.collaboration.description",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t("contributions.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contributions.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contributions.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 5 }}
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                >
                  <Icon className="text-primary" size={24} />
                </motion.div>
                <h3 className="font-semibold text-lg mb-2">
                  {t(item.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(item.descKey)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <Marquee pauseOnHover speed={50} className="mt-12 mx-[-30px]">
        {/* your logos/components here */}
        {clients.map((item) => (
          <div style={{ width: window.innerWidth / clients.length }} className="mr-8 md:mr-0">
            <Image
              key={item.name}
              src={item.img}
              alt={item.name}
              className="w-[150px] h-[150px] md:w-[150px] md:h-[150px] object-contain"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
