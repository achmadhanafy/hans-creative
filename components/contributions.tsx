"use client"

import { motion } from "framer-motion"
import { Code, Smartphone, Zap, Users } from "lucide-react"

export default function Contributions() {
  const contributions = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Building responsive, performant websites and web applications using modern technologies and best practices.",
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Creating native and cross-platform mobile applications that users love with intuitive interfaces.",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, scalability, and efficiency to ensure the best user experience.",
    },
    {
      icon: Users,
      title: "AI Solutions",
      description:
        "Harnessing the power of artificial intelligence to deliver innovative, data-driven solutions that optimize processes, enhance decision-making, and drive business growth.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Contributions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in delivering comprehensive technology solutions that drive business success
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contributions.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 5 }}
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                >
                  <Icon className="text-primary" size={24} />
                </motion.div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
