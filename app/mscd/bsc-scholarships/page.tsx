"use client"

import { LanguageProvider } from "@/components/language-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BscHero } from "./components/hero"
import { ProjectOverview } from "./components/overview"
import { BenefitsAndEligibility } from "./components/benefits-eligibility"
import { SelectionTimeline } from "./components/timeline"

// คอมโพเนนต์แสดงผลหน้าข้อมูลทุนการศึกษาปริญญาตรี (B.Sc. Scholarships)
// โดยแยกเป็นส่วนต่าง ๆ (Modular Components) เพื่อความง่ายในการบำรุงรักษา
function BscScholarshipsContent() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* ส่วนหัวของเว็บไซต์ */}
      <SiteHeader />

      <main className="flex-1">
        {/* ส่วนแบนเนอร์ด้านบนสุด */}
        <BscHero />

        {/* ส่วนข้อมูลภาพรวมโครงการ */}
        <ProjectOverview />

        {/* ส่วนสิทธิประโยชน์และเกณฑ์คุณสมบัติ */}
        <BenefitsAndEligibility />

        {/* ส่วนกำหนดการจัดกิจกรรมของโครงการ */}
        <SelectionTimeline />
      </main>

      {/* ส่วนท้ายของเว็บไซต์ */}
      <SiteFooter />

      {/* ปุ่มเลื่อนกลับขึ้นด้านบน */}
      <ScrollToTop />
    </div>
  )
}

export default function BscScholarshipsPage() {
  return (
    <LanguageProvider>
      <BscScholarshipsContent />
    </LanguageProvider>
  )
}
