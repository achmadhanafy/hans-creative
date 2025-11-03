"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" },
  ]

  const footerLinks = [
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ]

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
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="font-bold text-primary-foreground text-sm">HC</span>
              </div>
              <span className="font-bold text-lg">Hans Creative</span>
            </div>
            <p className="text-sm opacity-75">
              Crafting digital excellence through innovative web and mobile solutions.
            </p>
          </motion.div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-4">
            {footerLinks.slice(0, 2).map((link, i) => (
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

          <div className="grid grid-cols-2 gap-4">
            {footerLinks.slice(2, 4).map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (i + 2) * 0.1 }}
                viewport={{ once: true }}
                className="text-sm hover:opacity-100 opacity-75 transition-opacity"
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {footerLinks.slice(4).map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (i + 4) * 0.1 }}
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
            © 2025 Hans Creative. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
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
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
