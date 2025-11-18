"use client";
import { icHansFitnessDekstop } from "@/assets/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const ProjectCard = ({
  project,
}: {
  project: {
    title: string;
    imgUrl: string | StaticImageData;
    themeColor: string;
    url: string;
  };
}) => {
  const { t } = useTranslation();
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="max-w-[400px] md:max-w-[800px] md:w-[800px] flex-shrink-0 bg-white rounded-xl shadow-2xl overflow-hidden ring-1 ring-gray-900/5 cursor-pointer"
    >
      {/* Card Top (Browser Bar) */}
      <div className="max-w-screen">
        <div className="flex items-center gap-2 p-3 bg-gray-100 border-b border-gray-200">
          <div className="w-3 h-3 rounded-full bg-red-400"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <div className="w-3 h-3 rounded-full bg-green-400"></div>
          <div className="ml-2 px-3 py-0.5 rounded-full text-xs text-gray-600 bg-gray-200">
            {project.title}
          </div>
        </div>

        {/* Card Image (Placeholder) */}
        <div className="aspect-[16/10] bg-gray-50 relative">
          <Image
            alt={`${project.title} website preview`}
            src={project.imgUrl}
            fill
          />
        </div>

        {/* Card Footer */}
        <div
          className={`flex items-center justify-between p-4 gap-5 ${project.themeColor} bg-opacity-10`}
        >
          <span className="font-semibold">Fitness Club Landing Website</span>
          <Link href={project.url}>
            <span
              className={cn(
                `px-3 py-1 rounded-full text-sm font-medium text-white`,
                `bg-${project.themeColor.replace("bg-", "text-")}`
              )}
            >
              {t("verbs.open")}
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

function LadingDesign() {
  const { t } = useTranslation();
  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/10 relative z-0 items-center relative flex flex-col"
    >
      <div className="max-w-7xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="text-center mb-12 z-10"
        >
          <h2 className="text-4xl text-black sm:text-5xl font-bold mb-4 text-left max-w-[500px]">
            {t("landingDesign.title")}
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y:0 }}
          className="flex flex-col items-center"
        >
          <ProjectCard
            project={{
              title: "Hans Fitness",
              imgUrl: icHansFitnessDekstop,
              themeColor: "orange-500",
              url: "/hans-fitness",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default LadingDesign;
