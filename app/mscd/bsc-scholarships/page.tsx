"use client"

import { useState } from "react"
import { LanguageProvider, useT } from "@/components/language-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BscHero } from "./components/hero"
import { ProjectOverview } from "./components/overview"
import { SelectionStatistics } from "./components/statistics"
import { SelectionDirectory } from "./components/directory"
import { EligibilitySection, ObligationsSection, FundingSection } from "./components/benefits-eligibility"
import { SelectionAnnouncements } from "./components/announcements"

type TabId = "stats" | "directory" | "eligibility" | "obligations" | "funding" | "announcements"

// คอมโพเนนต์แสดงผลหน้าข้อมูลทุนการศึกษาปริญญาตรี (B.Sc. Scholarships)
// โดยใช้ระบบแท็บนำทางระดับสากล (Global Tabs) ในการควบคุมเนื้อหาทั้ง 6 หัวข้อตามรูปแบบของหน้าแรก
function BscScholarshipsContent() {
  const t = useT()
  const [activeTab, setActiveTab] = useState<TabId>("stats")

  // ข้อมูลของปุ่มแท็บนำทางทั้ง 6 หัวข้อ
  const tabs = [
    { id: "stats", labelTh: "สถิตินักเรียนทุน", labelEn: "Scholarship Statistics" },
    { id: "directory", labelTh: "ทำเนียบนักเรียนทุน", labelEn: "Recipients Directory" },
    { id: "eligibility", labelTh: "คุณสมบัติของผู้สมัครทุน", labelEn: "Eligibility Criteria" },
    { id: "obligations", labelTh: "ข้อปฏิบัติสำหรับผู้ที่ได้รับเลือกเข้ารับทุน", labelEn: "Obligations & Conditions" },
    { id: "funding", labelTh: "อัตราค่าใช้จ่ายสนับสนุนทุนการศึกษา", labelEn: "Scholarship Funding" },
    { id: "announcements", labelTh: "ประกาศ", labelEn: "Announcements" }
  ] as const

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* ส่วนหัวของเว็บไซต์ */}
      <SiteHeader />

      <main className="flex-1">
        {/* ส่วนแบนเนอร์ด้านบนสุด */}
        <BscHero />

        {/* ส่วนข้อมูลภาพรวมโครงการ */}
        <ProjectOverview />

        {/* แถบนำทางแบบแคปซูลกลมมนคุมธีมหน้าแรก (Global Tab Bar) */}
        <section className="py-8 bg-background border-t border-border/40">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex justify-center">
              <div className="inline-flex items-center bg-secondary/50 border border-border/50 p-1.5 rounded-full overflow-x-auto max-w-full scrollbar-none">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`rounded-full px-5 py-2.5 text-[11px] sm:text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-accent/15 text-accent shadow-sm"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {t(tab.labelTh, tab.labelEn)}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* แสดงผลเนื้อหาของหัวข้อที่เลือกสลับเปลี่ยน */}
        <div className="transition-all duration-300">
          {activeTab === "stats" && <SelectionStatistics />}
          {activeTab === "directory" && <SelectionDirectory />}
          {activeTab === "eligibility" && <EligibilitySection />}
          {activeTab === "obligations" && <ObligationsSection />}
          {activeTab === "funding" && <FundingSection />}
          {activeTab === "announcements" && <SelectionAnnouncements />}
        </div>
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
