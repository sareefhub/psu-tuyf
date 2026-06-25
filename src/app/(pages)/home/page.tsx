import { MainLayout } from "@/layout/main-layout"
import { HeroSection } from "./components/hero-section"
import { ProgramsSection } from "./components/programs-section"
import { AboutSection } from "./components/about-section"
import { ProgramDetails } from "./components/program-details"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      
      {/* ส่วนแนะนำโครงการย่อย 3 โครงการหลัก */}
      <ScrollReveal>
        <ProgramsSection />
      </ScrollReveal>
      
      {/* ส่วนสถิติและข้อมูลความเป็นมาของโครงการ */}
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>
      
      {/* ส่วนข้อมูลรายละเอียดเจาะลึกของแต่ละโครงการ */}
      <ScrollReveal>
        <ProgramDetails />
      </ScrollReveal>
    </MainLayout>
  )
}

