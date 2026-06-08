"use client"

import { useState } from "react"
import { useT } from "@/components/language-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { MscdHero } from "./components/hero"
import { MscdOverview } from "./components/overview"
import { ScholarshipsSummarySection } from "./components/scholarships-summary"
import { StudentImprovementSection } from "./components/student-improvement"
import { TeacherImprovementSection } from "./components/teacher-improvement"

// ประเภทไอดีสำหรับแท็บควบคุมแต่ละหัวข้อโครงการย่อย
type TabId = "scholarships" | "students" | "teachers"

function MscdLandingContent() {
  const t = useT()
  const [activeTab, setActiveTab] = useState<TabId>("scholarships")

  // ดึงหัวข้อของแต่ละแท็บจากระบบแปลภาษา i18n อย่างปลอดภัย
  const rawItems = t("programDetails.mscd.items", { returnObjects: true })
  const mscdItems = Array.isArray(rawItems) ? rawItems : [
    "การให้ทุนการศึกษาแก่นักศึกษาระดับปริญญาตรี",
    "โครงการเพื่อการพัฒนานักเรียนระดับมัธยมศึกษา",
    "โครงการอบรมครูคณิตศาสตร์"
  ]

  // โครงสร้างข้อมูลแท็บที่แมปไอดีกับข้อความจากระบบภาษา
  const tabs = [
    { id: "scholarships", label: mscdItems[0] || "B.Sc. Scholarships" },
    { id: "students", label: mscdItems[1] || "Student Improvement" },
    { id: "teachers", label: mscdItems[2] || "Teacher Improvement" },
  ] as const

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* ส่วนหัวสำหรับนำทาง */}
      <SiteHeader />

      <main className="flex-1">
        {/* ส่วนแบนเนอร์หลักด้านบน */}
        <MscdHero />

        {/* ส่วนข้อมูลภาพรวมของโครงการ MSCD */}
        <MscdOverview />

        {/* แถบเมนูนำทาง (Tab Bar) ควบคุมการเปลี่ยนเนื้อหาโครงการย่อย */}
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
                      {tab.label}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ส่วนการแสดงผลเนื้อหาของโครงการย่อยตามแท็บที่เลือก */}
        <section className="py-10 bg-background">
          <div className="mx-auto max-w-7xl px-6">
            <div className="transition-all duration-300">
              {activeTab === "scholarships" && <ScholarshipsSummarySection />}
              {activeTab === "students" && <StudentImprovementSection />}
              {activeTab === "teachers" && <TeacherImprovementSection />}
            </div>
          </div>
        </section>
      </main>

      {/* ส่วนท้ายแสดงข้อมูลการติดต่อและลิขสิทธิ์ */}
      <SiteFooter />

      {/* ปุ่มด่วนสำหรับเลื่อนหน้าจอกลับขึ้นด้านบนสุด */}
      <ScrollToTop />
    </div>
  )
}

export default function MscdLandingPage() {
  return <MscdLandingContent />
}
