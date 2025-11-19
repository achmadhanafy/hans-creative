"use client";
import { icHansFitnessDekstop, icTravelLux } from "@/assets/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import CarouselContainer from "./ui/carousel-container";

const SLIDES = [
  {
    title: "Hans Fitness",
    imgUrl: icHansFitnessDekstop,
    themeColor: "#ff8d03",
    url: "/hans-fitness",
    description: "Fitness Club Landing Website"
  },
  {
    title: "Travel Lux",
    imgUrl: icTravelLux,
    themeColor: "#3F51B5",
    url: "/travel-lux",
    description: "Agency Website - Tour & Travel"
  },
];

const ProjectCard = ({
  project,
}: {
  project: {
    title: string;
    imgUrl: string | StaticImageData;
    themeColor: string;
    url: string;
    description:string
  };
}) => {
  const { t } = useTranslation();
  return (
    <motion.div
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="flex-shrink-0 bg-white rounded-xl shadow-2xl overflow-hidden ring-1 ring-gray-900/5"
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
          className={`flex items-center justify-between p-4 gap-5 bg-opacity-10`}
        >
          <span className="font-semibold">{project.description}</span>
          <Link className="cursor-pointer" href={project.url} target="_blank">
            <span
              className={cn(
                `px-6 py-2 rounded-full text-sm font-medium text-white`
              )}
              style={{ backgroundColor: project.themeColor }}
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
      className="py-20 bg-muted/10 relative z-0 items-center relative flex flex-col w-full"
    >
      <div className="z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="mb-12 z-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        >
           <h2 className="text-4xl text-black sm:text-5xl font-bold text-center max-w-[800px] text-left">
              {t("landingDesign.title")}
            </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <CarouselContainer
            datas={SLIDES}
            renderSlide={(data) => (
              <ProjectCard key={`${data?.title}`} project={data} />
            )}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default LadingDesign;
