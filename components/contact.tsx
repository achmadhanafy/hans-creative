"use client";

import type React from "react";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CopyCheck, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    message: "",
  });
  const [showCopied, setShowCopied] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ message: "" });

    window.location.href = `mailto:achmadhanafy@gmail.com?subject=${encodeURIComponent(
      "Get In Touch"
    )}&body=${formData.message}`;
  };

  const contactMethods = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "achmadhanafy@gmail.com",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+6289635019520",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: "West Java, Indonesia 16320",
    },
  ];

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

  const handleCopyPress = async (name: string, value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      setShowCopied(name);
      setTimeout(() => {
        setShowCopied(null);
      }, 2000);
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative min-h-screen" style={{marginBottom: -400}}>
      <div className="max-w-7xl mx-auto mt-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <motion.button
                  onClick={() => handleCopyPress(method.label, method.value)}
                  key={i}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="group flex gap-4 p-4 rounded-lg hover:bg-card transition-colors w-full text-left cursor-pointer"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="flex item-center gap-5">
                      <p className="text-sm text-muted-foreground">
                        {method.label}
                      </p>
                      {showCopied === method.label && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="flex items-center gap-3 transition"
                        >
                          <span className="text-xs text-green-600">
                            {t("contact.copied")}
                          </span>
                          <CopyCheck className="text-green-600" size={20} />
                        </motion.div>
                      )}
                    </div>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {method.value}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-card border border-border rounded-xl p-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">
                {t("contact.message")}
              </label>
              <textarea
                placeholder={t("contact.messagePlaceholder")}
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                {t("contact.sendEmail")} <Mail size={18} />
              </motion.button>
              <motion.a
                target="_blank"
                href={`https://wa.me/6289635019520?text=${formData.message}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                {t("contact.sendMessage")} <MessageCircle size={18} />
              </motion.a>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
