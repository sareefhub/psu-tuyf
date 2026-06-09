"use client"

import { useState } from "react"
import { useT } from "@/components/language-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { StudentHero } from "./components/hero"
import { StudentOverview } from "./components/overview"
import { StudentActivities } from "./components/activities"
import { TargetSchoolsStatistics } from "./components/statistics"
import { StudentEligibility } from "./components/eligibility"
import { StudentBenefits } from "./components/benefits"
import { StudentAnnouncements } from "./components/announcements"

type TabId = "activities" | "stats" | "eligibility" | "benefits" | "announcements"

// คอมโพเนนต์แสดงผลหน้าหลักสำหรับโครงการพัฒนาศักยภาพนักเรียน (Student Improvement)
// โดยใช้ระบบแท็บนำทางระดับสากล (Global Tabs) ในการควบคุมเนื้อหาทั้ง 5 หัวข้อตามรูปแบบของหน้าแรก
function StudentImprovementContent() {
  const t = useT()
  const [activeTab, setActiveTab] = useState<TabId>("activities")

  // ข้อมูลของปุ่มแท็บนำทางทั้ง 5 หัวข้อ (ดึงค่าจากไฟล์แปลภาษา JSON)
  const tabs = [
    { id: "activities", key: "studentImprovement.tabs.activities" },
    { id: "stats", key: "studentImprovement.tabs.stats" },
    { id: "eligibility", key: "studentImprovement.tabs.eligibility" },
    { id: "benefits", key: "studentImprovement.tabs.benefits" },
    { id: "announcements", key: "studentImprovement.tabs.announcements" },
  ] as const

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans animate-fade-in">
      {/* ส่วนหัวของเว็บไซต์ */}
      <SiteHeader />

      <main className="flex-1">
        {/* ส่วนแบนเนอร์ด้านบนสุด */}
        <StudentHero />

        {/* ส่วนข้อมูลภาพรวมโครงการ */}
        <StudentOverview />

        {/* แถบนำทางแบบแคปซูลกลมมนคุมธีมหน้าแรก (Global Tab Bar) */}
        <section className="py-8 bg-background border-t border-border/40">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex justify-center">
              <div className="inline-flex items-center bg-secondary/50 border border-border/50 p-1.5 rounded-full overflow-x-auto max-w-full scrollbar-none">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`rounded-full px-3 py-1.5 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs md:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-accent/15 text-accent shadow-sm"
                          : "text-muted-foreground hover:text-primary"
                      }`}
                    >
                      {t(tab.key)}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* แสดงผลเนื้อหาของหัวข้อที่เลือกสลับเปลี่ยน */}
        <div className="transition-all duration-300">
          {activeTab === "activities" && <StudentActivities />}
          {activeTab === "stats" && <TargetSchoolsStatistics />}
          {activeTab === "eligibility" && <StudentEligibility />}
          {activeTab === "benefits" && <StudentBenefits />}
          {activeTab === "announcements" && <StudentAnnouncements />}
        </div>
      </main>

      {/* ส่วนท้ายของเว็บไซต์ */}
      <SiteFooter />

      {/* ปุ่มเลื่อนกลับขึ้นด้านบน */}
      <ScrollToTop />
    </div>
  )
}

export default function StudentImprovementPage() {
  return <StudentImprovementContent />
}
