import { MainLayout } from "@/layout/main-layout"
import { HeroSection } from "./components/hero-section"
import { ProgramsSection } from "./components/programs-section"
import { AboutSection } from "./components/about-section"
import { ProgramDetails } from "./components/program-details"

export default function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      
      {/* ส่วนแนะนำโครงการย่อย 3 โครงการหลัก */}
      <ProgramsSection />
      
      {/* ส่วนสถิติและข้อมูลความเป็นมาของโครงการ */}
      <AboutSection />
      
      {/* ส่วนข้อมูลรายละเอียดเจาะลึกของแต่ละโครงการ */}
      <ProgramDetails />
    </MainLayout>
  )
}

