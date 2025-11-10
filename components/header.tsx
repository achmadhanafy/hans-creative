"use client"

import { logo } from "@/assets/image"
import { motion } from "framer-motion"
import { Menu, Globe } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function Header() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [showLangMenu, setShowLangMenu] = useState(false)

  const navItems = [
    { label: t("header.about"), href: "#about" },
    { label: t("header.projects"), href: "#projects" },
    { label: t("header.contact"), href: "#contact" },
  ]

  const changeLanguage = (lng: string) => {
    localStorage.setItem('lang', lng)
    i18n.changeLanguage(lng)
    setShowLangMenu(false)
  }

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="w-12 h-12 bg-transparent rounded-lg flex items-center justify-center relative">
            <Image className="w-full h-full object-contain" alt='logo' fill  src={logo}/>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Language Selector & CTA */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
            >
              <Globe size={18} className="text-primary" />
              <span className="text-sm font-medium">{i18n.language === 'en' ? 'English' : 'Indonesia' }</span>
            </motion.button>

            {showLangMenu && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute right-0 mt-2 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => changeLanguage("en")}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-muted transition-colors ${
                    i18n.language === "en" ? "bg-primary/10 text-primary font-medium" : ""
                  }`}
                >
                  English (EN)
                </button>
                <button
                  onClick={() => changeLanguage("id")}
                  className={`w-full px-4 py-2 text-sm text-left hover:bg-muted transition-colors border-t border-border ${
                    i18n.language === "id" ? "bg-primary/10 text-primary font-medium" : ""
                  }`}
                >
                  Bahasa Indonesia (ID)
                </button>
              </motion.div>
            )}
          </div>

          <motion.a
          href="#contact"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            {t("header.getStarted")}
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <Menu size={20} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border p-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex gap-2 pt-4 border-t border-border">
                <button
                  onClick={() => changeLanguage("en")}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    i18n.language === "en"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("id")}
                  className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    i18n.language === "id"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  Indonesia
                </button>
              </div>
              <a href="#contact" className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors">
                {t("header.getStarted")}
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}
