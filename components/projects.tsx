"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Application",
      description: "A full-featured e-commerce solution with inventory management and payment integration.",
      image: "/ecommerce-dashboard.png",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Fitness Tracking App",
      category: "Mobile Application",
      description: "Cross-platform mobile app for tracking workouts and nutrition with real-time insights.",
      image: "/fitness-tracking-app.png",
      tags: ["React Native", "Firebase", "iOS/Android"],
    },
    {
      title: "SaaS Analytics Dashboard",
      category: "Web Application",
      description: "Real-time analytics platform providing comprehensive business insights and reporting.",
      image: "/analytics-dashboard-saas.jpg",
      tags: ["Next.js", "PostgreSQL", "D3.js"],
    },
    {
      title: "Social Media Manager",
      category: "Web Application",
      description: "Centralized platform for managing multiple social media accounts and scheduling posts.",
      image: "/social-media-management-platform.png",
      tags: ["Vue.js", "Python", "Redis"],
    },
    {
      title: "Healthcare Portal",
      category: "Web & Mobile",
      description: "Secure patient management system with telemedicine capabilities and appointment scheduling.",
      image: "/healthcare-patient-portal-app.jpg",
      tags: ["React", "Express", "PostgreSQL"],
    },
    {
      title: "AI Content Generator",
      category: "Web Application",
      description: "AI-powered tool for generating optimized content for marketing campaigns and social media.",
      image: "/ai-content-generation-tool.png",
      tags: ["Next.js", "OpenAI", "Vercel"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Project Showcase</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful projects that demonstrate our expertise and commitment to excellence
          </p>
        </motion.div>

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
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 text-white font-medium"
                  >
                    View Project <ExternalLink size={16} />
                  </motion.button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <p className="text-sm text-primary font-medium mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
