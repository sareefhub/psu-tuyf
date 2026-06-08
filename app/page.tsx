import { LanguageProvider } from "@/components/language-context"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ProgramsSection } from "@/components/programs-section"
import { AboutSection } from "@/components/about-section"
import { ProgramDetails } from "@/components/program-details"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen font-sans">
        <SiteHeader />
        <main>
          <HeroSection />
          <ProgramsSection />
          <AboutSection />
          <ProgramDetails />
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  )
}
