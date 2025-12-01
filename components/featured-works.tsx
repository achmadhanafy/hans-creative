import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import i18next from "i18next";
import { forwardRef } from "react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const featuredWorks = [
  {
    name: "CV Builder",
    img: "https://drive.google.com/uc?id=1Xa70jqidh_LCIBUFzimSt-Guyuew55Ph",
    year: 2025,
    category: "Web Application",
    tech: ["Next JS"],
    title: "CV Builder to create a CV within a minutes",
    description:
      "CV Builder is web application that provides users with a seamless experience to create and manage their CVs with prebuild templates. Users can easily create, edit, and download their CV as pdf, making it a convenient and efficient tool for job seekers and employers alike.",
    descriptionId:
      "CV Builder adalah aplikasi web yang memberikan pengalaman mudah bagi pengguna untuk membuat dan mengelola CV menggunakan template yang sudah disediakan. Pengguna dapat dengan mudah membuat, mengedit, dan mengunduh CV dalam bentuk PDF, menjadikannya alat yang praktis dan efisien bagi pencari kerja maupun perusahaan.",
    webUrl: "https://hans-cv-builder.vercel.app/",
    company: "Personal",
    className: "bg-gradient-to-b from-muted/10 to-blue-200 text-blue-900",
    buttonClassname:
      "border-blue-900 border-2 text-blue-900 hover:bg-blue-900 hover:text-primary-foreground",
  },
  {
    name: "Sagara AI ( Gemini API )",
    img: "https://drive.google.com/uc?id=10Jepnieklu8BKcVQ77rt3NfraiDr7Lfd",
    year: 2025,
    category: "Web Application",
    title: "Chatbot from Gemini API",
    tech: ["Next JS", "Express JS"],
    description:
      "Sagara AI is a generative text chatbot using the Gemini API. It handles multi-turn conversations to maintain context between the system and the user. It also stores your conversation history, making it easier to manage ongoing interactions.",
    descriptionId:
      "Sagara AI adalah chatbot generatif berbasis teks yang menggunakan Gemini API. Sistem ini mendukung percakapan multi-turn untuk menjaga konteks antara sistem dan pengguna. Riwayat percakapan juga disimpan sehingga memudahkan pengguna dalam mengelola interaksi yang sedang berlangsung.",
    webUrl: "https://sagara-chatbot.vercel.app/",
    company: "Personal",
    className: "bg-gradient-to-b from-blue-200 to-purple-300 text-purple-900",
    buttonClassname:
      "border-purple-900 border-2 text-purple-900 hover:bg-purple-900 hover:text-primary-foreground",
  },
];


const FeaturedWorks = forwardRef<HTMLDivElement>((_, ref) => {
   const { t } = useTranslation();
  return (
    <section id="featured-works" className="bg-muted/10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-24"
      >
        <div className="px-4 sm:px-6 lg:px-8 mb-8 max-w-[1300px] mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-left">
            {t("contributions.appsShowcase")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl text-left">
            {t("contributions.appsShowcaseDesc")}
          </p>
        </div>

        {featuredWorks?.map((item, i) => (
          <motion.div
            key={item.name}
            variants={itemVariants}
            className={cn(item.className, "text-left py-5")}
          >
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 ">
              <div className={cn("flex flex-col gap-8", i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row")}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="w-full h-[200px] md:w-7/12 md:h-[500px] relative"
                >
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="w-full object-contain"
                    fill
                  />
                </motion.div>
                <div className="w-full md:w-5/12">
                  <p className="text-4xl font-bold mb-2">{item.title}</p>
                  <p className="text-xs mb-5 font-light">{item.category}</p>
                  <p className="">{i18next.language === 'id' ? item.descriptionId : item.description}</p>
                  <a
                    href={item.webUrl}
                    target="_blank"
                    className={cn(
                      item.buttonClassname,
                      "w-fit mt-5 px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    )}
                  >
                    {t("hero.tryNow")} <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        <motion.div ref={ref}/>
      </motion.div>
    </section>
  );
})

export default FeaturedWorks;
