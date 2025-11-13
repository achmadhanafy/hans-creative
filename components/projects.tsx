"use client";

import { motion } from "framer-motion";
import i18next from "i18next";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import BrowserIcon from "./icon/browser";
import AndroidIcon from "./icon/android";
import AppleIcon from "./icon/apple";
import NpmIcon from "./icon/npm-icon";
import Marquee from "react-fast-marquee";
import {
  farmbyteLogo,
  ifgLifeLogo,
  jasindo,
  nuon,
  oneByIfg,
} from "@/assets/image";

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

const projects = [
  {
    name: "Life by IFG",
    category: "Mobile & Web Application",
    img: "https://drive.google.com/uc?id=12QEoPtHiI28zL8JR1nASc8hLm75-uWcS",
    year: 2023,
    tech: ["React Native", "Next JS"],
    webUrl: "https://www.life.id/",
    androidUrl:
      "https://play.google.com/store/apps/details?id=id.lifecustomer&hl=en",
    iosUrl: "https://apps.apple.com/id/app/life-by-ifg/id1627986095",
    description:
      "Insurance application official digital hub for IFG Life customers, enabling easy policy management. Users can view buy insurance subsription inside app, track insurance benefit due dates, and access information on any restructured transferred policies conveniently",
    url: "https://play.google.com/store/apps/details?id=id.lifecustomer&hl=en",
    company: "Paramatech",
  },
  {
    name: "Farmbyte Grow",
    img: "https://drive.google.com/uc?id=1CjTr9C3XRhanL5PAg_fU3x8C_DpIUyQq",
    year: 2024,
    category: "Mobile Application",
    tech: ["React Native"],
    description:
      "Seller Center platform for farmers to maximize profit and sell their crops to Farmbyte company. It provides crop advisory, farming logs, transparent market prices, and schedules harvest collection/logistics to optimize farm management and sales.",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.newfarmbytedigital.farmbyte&hl=en",
    iosUrl: "https://apps.apple.com/my/app/farmbyte-app/id6737538318",
    company: "Farmbyte",
  },
  {
    name: "One By IFG",
    img: "https://drive.google.com/uc?id=1_KIN9F-OMnG0fCGjvXBF72HRjRSk-Mpe",
    year: 2024,
    category: "Mobile Application",
    tech: ["React Native"],
    description:
      "One by IFG is an integrated platform offering various Insurance, Health, and Investment products. It provides instant registration, 24/7 access, and digital consultation to meet users' financial and health needs.",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.one.ifg&hl=en",
    iosUrl: "https://apps.apple.com/id/app/one-by-ifg/id1564248452",
    company: "Paramatech",
  },
  {
    name: "Astraotoshop",
    img: "https://drive.google.com/uc?id=1dRhzXCQmR1-06pAgA9FNZYrpFq7JfSD-",
    year: 2023,
    category: "Mobile Application",
    tech: ["React Native"],
    description:
      "Mobile marketplace for buying genuine car and motorcycle spare parts online offically by Astra Otoparts. It offers a vast product listing, vehicle-specific search, and booking services for professional installation",
    androidUrl:
      "https://play.google.com/store/apps/details?id=com.astraotoshop.b2c&hl=id",
    iosUrl: "https://apps.apple.com/id/app/astra-otoshop/id6450980881",
    url: "https://play.google.com/store/apps/details?id=com.astraotoshop.b2c&hl=id",
    company: "Paramatech",
  },
  {
    name: "LifeSpace",
    img: "https://drive.google.com/uc?id=10fHVBCyvhwtcHdpT4XDFACtwKNQLVPlw",
    year: 2022,
    tech: ["Next.js"],
    category: "Web Application",
    webUrl: "https://space.life.id/login",
    description:
      "This is an administrative portal used to manage user access and security within a system. Key functions include defining user roles (e.g., administrator, manager, user), assigning granular permissions to those roles, and controlling which users have the authority to view or modify sensitive data and system features.",
    url: "https://space.life.id/login",
    company: "Paramatech",
  },
  {
    name: "BeamSpace",
    category: "Web Application",
    img: "https://drive.google.com/uc?id=1GVjBs8g2ZLwP5SaTrdg4EqS06fEVXrAq",
    year: 2022,
    tech: ["GatsbyJS"],
    webUrl: "https://www.beamspace.com/sg",
    description:
      "This administrative portal is dedicated to overseeing all operational aspects of a physical warehouse or logistics center. It enables staff to manage inventory levels, track the movement of stock, optimize storage locations, process inbound and outbound shipments, and monitor overall performance and efficiency metrics.",
    url: "https://www.beamspace.com/sg",
    company: "ASEAN Fintech Group",
  },
  {
    name: "RN Adaptbyte",
    img: "https://drive.google.com/uc?id=1WwFZkLiA5xg3LcI-Kby6tadLAwy8alxT",
    year: 2025,
    category: "UI Library for React Native",
    tech: ["React Native", "Storybook", "NPM package"],
    description: "Custom RN component library for Farmbyte",
    webUrl: "https://seedbyte.netlify.app/",
    npmUrl: "https://www.npmjs.com/package/rn-adaptbyte",
    company: "Farmbyte",
  },
  {
    name: "Langit Musik Lite",
    img: "https://drive.google.com/uc?id=12LcSccuhJiMw4A17z-nzvVjeDIHwLDBi",
    year: 2025,
    category: "Mobile Application",
    tech: ["Flutter"],
    description:
      "Lite version of music streaming app, available for guest mode, free user and premium user with subscription. You can enjoy listen many indonesia songs in this platform",
    url: null,
    underDevelopment: true,
    company: "CODE Development Indonesia",
  },
  {
    name: "Farmbyte Harvest",
    img: "https://drive.google.com/uc?id=1TrItHXjlAA_IMN3Ab1r3ZswX_8AI2RX2",
    year: 2025,
    category: "Mobile Application",
    tech: ["React Native Expo"],
    description:
      "Marketplace for crop buyers in Malaysia, this application is in early stage of development",
    url: null,
    underDevelopment: true,
    company: "Farmbyte",
  },
  {
    name: "Nuun",
    category: "Mobile Application",
    img: "https://drive.google.com/uc?id=1cpSu2ICMa1QgR-iK08L8cjkklcrkZKqQ",
    year: 2024,
    tech: ["Swift UIKit"],
    description:
      "Smart CCTV app for device connection & control. User can possible to connect their smart cctv from Tuya or JFTech SDK. Enable to auto detect SDK by CCTV details. Monitor and control device, also smart user motion detection notification",
    url: null,
    underDevelopment: true,
    company: "CODE Development Indonesia",
  },
  {
    name: "My Jasindo",
    img: "https://drive.google.com/uc?id=16oe8DnllttEKl1IcylqZSKnUGtomaNa9",
    year: 2024,
    category: "Mobile Application",
    tech: ["React Native"],
    description:
      "Insurance app for subscription details for jasindo customers. Provide feature to see insurance detail coverage, beneficiary and subscription detail.",
    url: null,
    underDevelopment: true,
    company: "CODE Development Indonesia",
  },
];

export default function Projects() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const projectImages = [
    "/ecommerce-dashboard.png",
    "/fitness-tracking-app.png",
    "/analytics-dashboard-saas.jpg",
    "/social-media-management-platform.png",
    "/healthcare-patient-portal-app.jpg",
    "/ai-content-generation-tool.png",
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </motion.div>
        <Marquee pauseOnHover speed={50} className="my-12 mx-[-30px]">
          {/* your logos/components here */}
          {clients.map((item) => (
            <div
              style={{ width: window.innerWidth / clients.length }}
              className="mr-8 md:mr-0"
            >
              <Image
                key={item.name}
                src={item.img}
                alt={item.name}
                className="w-[150px] h-[150px] md:w-[150px] md:h-[150px] object-contain"
              />
            </div>
          ))}
        </Marquee>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="flex flex-col group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <motion.div
                  className="w-full h-full"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={project.img}
                    loading="eager"
                    alt={project.name}
                    className="w-full h-full object-contain"
                    fill
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 text-white font-medium"
                  >
                    {t("projects.viewProject")} <ExternalLink size={16} />
                  </motion.button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 grow flex flex-col">
                <p className="text-sm text-primary font-medium mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {/* Bottom */}
                <div className="grow flex flex-col justify-end">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Open Site */}
                  <div className="mt-5">
                    <div className="flex flex-wrap gap-3">
                      {project.webUrl && (
                        <div
                          className="flex p-2 bg-white hover:bg-primary text-primary hover:text-white border-primary border-1 items-center rounded-md cursor-pointer"
                          onClick={() => window.open(project.webUrl, "_blank")}
                        >
                          <BrowserIcon />
                          <span className="text-xs ml-2 font-bold">Web</span>
                        </div>
                      )}
                      {project.androidUrl && (
                        <div
                          className="flex p-2 bg-white hover:bg-primary text-primary hover:text-white border-primary border-1 items-center rounded-md cursor-pointer"
                          onClick={() =>
                            window.open(project.androidUrl, "_blank")
                          }
                        >
                          <AndroidIcon />
                          <span className="text-xs ml-2 font-bold">
                            Android
                          </span>
                        </div>
                      )}
                      {project.iosUrl && (
                        <div
                          className="flex p-2 bg-white hover:bg-primary text-primary hover:text-white border-primary border-1 items-center rounded-md cursor-pointer"
                          onClick={() => window.open(project.iosUrl, "_blank")}
                        >
                          <AppleIcon />
                          <span className="text-xs ml-2 font-bold">iOS</span>
                        </div>
                      )}
                      {project.underDevelopment && (
                        <div
                          className="flex p-2 bg-white text-primary border-primary border-1 items-center rounded-md"
                          onClick={() => window.open(project.iosUrl, "_blank")}
                        >
                          <span className="text-xs ml-2 font-bold">
                            {t("projects.underDevelopment")}
                          </span>
                        </div>
                      )}
                      {project.npmUrl && (
                        <div
                          className="flex p-2 bg-white hover:bg-primary text-primary hover:text-white border-primary border-1 items-center rounded-md cursor-pointer"
                          onClick={() => window.open(project.npmUrl, "_blank")}
                        >
                          <NpmIcon />
                          <span className="text-xs ml-2 font-bold">NPM</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
