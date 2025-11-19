"use client";

import { logo } from "@/assets/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: Github, href: "#", label: t("footer.github") },
    { icon: Linkedin, href: "#", label: t("footer.linkedin") },
    { icon: Twitter, href: "#", label: t("footer.twitter") },
    { icon: Mail, href: "#", label: t("footer.email") },
  ];

  const footerLinks = [
    { label: t("footer.about"), href: "#about" },
    { label: t("header.projects"), href: "#" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-16 h-16 bg-white p-2 rounded-lg flex items-center justify-center relative">
                <Image
                  alt="logo"
                  src={logo}
                  className="w-full h-full object-contain"
                  fill
                  sizes="64px"
                />
              </div>
              <span className="font-bold text-lg">Hans Digital Studio</span>
            </div>
            <p className="text-sm opacity-75">{t("footer.tagline")}</p>
          </motion.div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-4">
            {footerLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-sm hover:opacity-100 opacity-75 transition-opacity"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary-foreground/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm opacity-75"
          >
            {t("footer.copyright")}
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="mr-4">
                <p className="mt-3 font-bold text-sm">@Founder</p>
                <Link
                  className="text-blue-300 text-sm font-semibold"
                  href="https://achmad-hanafy-portofolio.vercel.app/"
                  target="_black"
                >
                  Achmad Hanafy
                </Link>
              </div>
              <motion.a
                href="https://www.linkedin.com/in/achmad-hanafy/"
                whileHover={{ y: -4 }}
                target="_black"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((social, i) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -4 }}
                  className="w-10 h-10 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              )
            })}
          </motion.div> */}
        </div>
      </div>
    </footer>
  );
}
