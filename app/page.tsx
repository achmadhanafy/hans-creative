"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Contributions from "@/components/contributions"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import i18next from "i18next"
import Stats from "@/components/stats"

export default function Home() {
      if (!i18next.isInitialized) return null
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Stats/>
      <Contributions />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
