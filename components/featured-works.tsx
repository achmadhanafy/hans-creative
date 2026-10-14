import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import {
  Pencil,
  Eye,
  Download,
  MonitorSmartphone,
  Calendar,
  Globe,
  LineChart,
  Bot,
  Receipt,
  PieChart,
} from "lucide-react";
import { forwardRef } from "react";
import Link from "next/link";

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
    badge: "PROJECT SHOWCASE",
    name: "CV Builder",
    subtitle: "Build Your Professional CV in Minutes",
    subtitleId: "Buat CV Profesional Anda dalam Hitungan Menit",
    description:
      "CV Builder is a web application that helps users create professional, tailored CVs quickly and easily. With a user-friendly interface and real-time preview, users can build, customize, and download their CVs in minutes.",
    descriptionId:
      "CV Builder adalah aplikasi web yang membantu pengguna membuat CV profesional yang disesuaikan dengan cepat dan mudah. Dengan antarmuka yang ramah pengguna dan pratinjau waktu nyata, pengguna dapat membuat, menyesuaikan, dan mengunduh CV mereka dalam hitungan menit.",
    features: [
      {
        icon: Pencil,
        title: "Easy to Use",
        titleId: "Mudah Digunakan",
        desc: "Intuitive form-based interface for a smooth CV building experience.",
        descId:
          "Antarmuka berbasis formulir yang intuitif untuk pengalaman membuat CV yang lancar.",
      },
      {
        icon: Eye,
        title: "Live Preview",
        titleId: "Pratinjau Langsung",
        desc: "Real-time preview ensures your CV looks perfect.",
        descId: "Pratinjau waktu nyata memastikan CV Anda terlihat sempurna.",
      },
      {
        icon: Download,
        title: "Export as PDF",
        titleId: "Ekspor sebagai PDF",
        desc: "Download your CV in PDF format with one click.",
        descId: "Unduh CV Anda dalam format PDF dengan satu klik.",
      },
      {
        icon: MonitorSmartphone,
        title: "Responsive Design",
        titleId: "Desain Responsif",
        desc: "Fully responsive experience across desktop and mobile.",
        descId: "Pengalaman responsif penuh di desktop dan seluler.",
      },
    ],
    webUrl: "https://cvbuilder.hanstudio.app/",
    displayUrl: "cvbuilder.hanstudio.app",
    img: "/images/apps/cv-builder-1.webp",
    textColor: "text-blue-600",
    badgeColor: "bg-blue-100",
    className:
      "bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-950/20 dark:to-transparent",
  },
  {
  badge: "PROJECT SHOWCASE",
  name: "InvestPick",
  subtitle: "IDX Portfolio Tracker & AI Analytics Engine",
  subtitleId: "Pelacak Portofolio IDX & Mesin Analisis Berbasis AI",
  description:
    "InvestPick is an advanced stock portfolio tracking and analytics platform tailored for the Indonesian Stock Exchange (IDX). It features real-time position tracking, automated ledger management, and AI-driven technical and fundamental analysis to deliver actionable trading signals.",
  descriptionId:
    "InvestPick adalah platform pelacakan dan analisis portofolio saham tingkat lanjut yang dirancang khusus untuk Bursa Efek Indonesia (BEI). Dilengkapi dengan pelacakan posisi real-time, manajemen pembukuan otomatis, serta analisis teknikal dan fundamental berbasis AI untuk memberikan sinyal investasi yang terukur.",
  features: [
    {
      icon: LineChart,
      title: "Real-Time Portfolio Tracking",
      titleId: "Pelacakan Portofolio Real-Time",
      desc: "Track holdings, cost basis, asset allocation, and unrealized/realized P&L dynamically.",
      descId:
        "Pantau kepemilikan saham, harga rata-rata, alokasi aset, serta P&L yang belum dan sudah direalisasikan secara dinamis.",
    },
    {
      icon: Bot,
      title: "AI Trade Analysis Engine",
      titleId: "Mesin Analisis Transaksi AI",
      desc: "Evaluate portfolio impact, technical risk metrics, and position concentration before executing trades.",
      descId:
        "Evaluasi dampak portofolio, metrik risiko teknikal, dan konsentrasi posisi sebelum melakukan transaksi.",
    },
    {
      icon: Receipt,
      title: "Deterministic Ledger",
      titleId: "Pembukuan Deterministik",
      desc: "Accurate weighted-average cost basis recalculation with cash balance impact simulation.",
      descId:
        "Rekalkulasi harga rata-rata secara presisi dengan simulasi dampak terhadap saldo kas RDN.",
    },
    {
      icon: PieChart,
      title: "Sector & Asset Allocation",
      titleId: "Alokasi Sektor & Aset",
      desc: "Visualize single-stock limits and sector exposure to keep risk within target caps.",
      descId:
        "Visualisasikan batasan saham tunggal dan paparan sektor untuk menjaga risiko tetap dalam batas target.",
    },
  ],
  webUrl: "https://investpick.hanstudio.app/",
  displayUrl: "investpick.hanstudio.app",
  img: "/images/apps/investpick-showcase.webp",
  textColor: "text-[#10b981]",
  badgeColor: "bg-[#10b981]/20",
  className:
    "bg-gradient-to-b from-emerald-50/50 to-transparent dark:from-emerald-950/20 dark:to-transparent",
}
];

const FeaturedWorks = forwardRef<HTMLDivElement>((_, ref) => {
  const { t, i18n } = useTranslation();

  return (
    <section
      id="featured-works"
      className="bg-background pt-24 pb-12 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-4 sm:px-6 lg:px-8 max-w-[1300px] mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-left">
          {t("contributions.appsShowcase", "Apps Showcase")}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl text-left">
          {t(
            "contributions.appsShowcaseDesc",
            "Explore some of the applications we've built.",
          )}
        </p>
      </motion.div>

      <div className="space-y-12">
        {featuredWorks.map((item, i) => (
          <motion.div
            key={item.name}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={cn(
              "w-full py-12 lg:py-16 sm:rounded-3xl sm:mx-6 lg:mx-8 max-w-[1300px] xl:mx-auto border-y sm:border border-border/50 shadow-sm",
              item.className,
            )}
          >
            <div className="px-4 sm:px-8 lg:px-12">
              <div
                className={cn(
                  "flex flex-col lg:flex-row gap-12 lg:gap-16 items-center",
                  i % 2 !== 0 ? "lg:flex-row-reverse" : "",
                )}
              >
                {/* Left Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-8">
                  {/* Header Area */}
                  <div className="flex flex-col gap-4">
                    <div
                      className={cn(
                        "w-fit px-4 py-1.5 rounded-md text-sm font-bold tracking-wider",
                        item.textColor,
                        item.badgeColor,
                      )}
                    >
                      {item.badge}
                    </div>

                    <div className="flex flex-col gap-2">
                      <h3 className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
                        {item.name}
                      </h3>
                      <p
                        className={cn(
                          "text-xl sm:text-2xl font-semibold",
                          item.textColor,
                        )}
                      >
                        {i18n.language === "id"
                          ? item.subtitleId
                          : item.subtitle}
                      </p>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {i18n.language === "id"
                        ? item.descriptionId
                        : item.description}
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
                    {item.features.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <div key={idx} className="flex gap-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-background shadow-sm rounded-xl flex items-center justify-center border border-border">
                            <Icon
                              className={cn(item.textColor)}
                              size={24}
                              strokeWidth={2}
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <h4 className="font-semibold text-foreground">
                              {i18n.language === "id"
                                ? feature.titleId
                                : feature.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-snug">
                              {i18n.language === "id"
                                ? feature.descId
                                : feature.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Footer links / details */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-4 pt-6 border-t border-border">
                    <a
                      href={item.webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-muted-foreground font-medium transition-colors group"
                    >
                      <Globe
                        size={18}
                        className={cn("transition-colors", item.textColor)}
                      />
                      Live Demo:{" "}
                      <span
                        className={cn("group-hover:underline", item.textColor)}
                      >
                        {item.displayUrl}
                      </span>
                    </a>
                  </div>
                </div>

                {/* Right Content / Image */}
                <Link
                  href={item.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full lg:w-1/2 relative flex justify-center items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative w-full aspect-square max-w-[600px]"
                  >
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-fill drop-shadow-2xl rounded-2xl"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div ref={ref} />
    </section>
  );
});

export default FeaturedWorks;
