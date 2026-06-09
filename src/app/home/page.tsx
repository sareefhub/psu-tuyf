import { MainLayout } from "@/layout/main-layout"
import { HeroSection } from "./components/hero-section"
import { ProgramsSection } from "./components/programs-section"
import { AboutSection } from "./components/about-section"
import { ProgramDetails } from "./components/program-details"

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <ProgramsSection />
      <AboutSection />
      <ProgramDetails />
    </MainLayout>
  )
}

