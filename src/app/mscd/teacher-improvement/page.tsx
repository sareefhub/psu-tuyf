"use client"

import { useState } from "react"
import { useT } from "@/components/language-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { TeacherHero } from "./components/hero"
import { TeacherOverview } from "./components/overview"
import { TeacherActivities } from "./components/activities"
import { TargetSchoolsStatistics } from "./components/statistics"
import { TeacherEligibility } from "./components/eligibility"
import { TeacherBenefits } from "./components/benefits"
import { TeacherAnnouncements } from "./components/announcements"

type TabId = "activities" | "stats" | "eligibility" | "benefits" | "announcements"

// คอมโพเนนต์แสดงผลหน้าหลักสำหรับโครงการพัฒนาครูคณิตศาสตร์ (Teacher Improvement)
// โดยใช้ระบบแท็บนำทางระดับสากล (Global Tabs) ในการควบคุมเนื้อหาทั้ง 5 หัวข้อตามรูปแบบของหน้าแรก
function TeacherImprovementContent() {
  const t = useT()
  const [activeTab, setActiveTab] = useState<TabId>("activities")

  // ข้อมูลของปุ่มแท็บนำทางทั้ง 5 หัวข้อ (ดึงค่าจากไฟล์แปลภาษา JSON)
  const tabs = [
    { id: "activities", key: "teacherImprovement.tabs.activities" },
    { id: "stats", key: "teacherImprovement.tabs.stats" },
    { id: "eligibility", key: "teacherImprovement.tabs.eligibility" },
    { id: "benefits", key: "teacherImprovement.tabs.benefits" },
    { id: "announcements", key: "teacherImprovement.tabs.announcements" },
  ] as const

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans animate-fade-in">
      {/* ส่วนหัวของเว็บไซต์ */}
      <SiteHeader />

      <main className="flex-1">
        {/* ส่วนแบนเนอร์ด้านบนสุด */}
        <TeacherHero />

        {/* ส่วนข้อมูลภาพรวมโครงการ */}
        <TeacherOverview />

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
          {activeTab === "activities" && <TeacherActivities />}
          {activeTab === "stats" && <TargetSchoolsStatistics />}
          {activeTab === "eligibility" && <TeacherEligibility />}
          {activeTab === "benefits" && <TeacherBenefits />}
          {activeTab === "announcements" && <TeacherAnnouncements />}
        </div>
      </main>

      {/* ส่วนท้ายของเว็บไซต์ */}
      <SiteFooter />

      {/* ปุ่มเลื่อนกลับขึ้นด้านบน */}
      <ScrollToTop />
    </div>
  )
}

export default function TeacherImprovementPage() {
  return <TeacherImprovementContent />
}
