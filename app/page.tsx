import Header from "@/components/header"
import Hero from "@/components/hero"
import Contributions from "@/components/contributions"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Contributions />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
