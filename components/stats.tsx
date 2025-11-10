import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};


function calculateYearsDiff(date1: Date, date2: Date): number {
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();

  let yearsDiff = year2 - year1;

  // Adjust for cases where the full year hasn't passed yet in the later date
  if (date2.getMonth() < date1.getMonth() || 
      (date2.getMonth() === date1.getMonth() && date2.getDate() < date1.getDate())) {
    yearsDiff--;
  }

  return yearsDiff;
}

function Stats() {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={itemVariants}
      className="grid grid-cols-3 gap-8 bg-primary p-6 lg:p-8"
    >
      {[
        { number: "15+", label: t("hero.projects") },
        { number: `${calculateYearsDiff(new Date('03-01-2022'), new Date())}+`, label: t("hero.experience") },
        { number: "100%", label: t("hero.satisfaction") },
      ].map((stat, i) => (
        <div key={i} className="text-center">
          <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
            {stat.number}
          </div>
          <div className="text-sm text-white">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  );
}

export default Stats;
