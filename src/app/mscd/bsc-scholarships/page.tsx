"use client"

import { useState } from "react"
import { useT } from "@/components/language-context"
import { MainLayout } from "@/layout/main-layout"
import { BscHero } from "./components/hero"
import { ProjectOverview } from "./components/overview"
import { SelectionStatistics } from "./components/statistics"
import { SelectionDirectory } from "./components/directory"
import {
  EligibilitySection,
  ObligationsSection,
  FundingSection,
} from "./components/benefits-eligibility"
import { SelectionAnnouncements } from "./components/announcements"

type TabId = "stats" | "directory" | "eligibility" | "obligations" | "funding" | "announcements"

// คอมโพเนนต์แสดงผลหน้าข้อมูลทุนการศึกษาปริญญาตรี (B.Sc. Scholarships)
// โดยใช้ระบบแท็บนำทางระดับสากล (Global Tabs) ในการควบคุมเนื้อหาทั้ง 6 หัวข้อตามรูปแบบของหน้าแรก
function BscScholarshipsContent() {
  const t = useT()
  const [activeTab, setActiveTab] = useState<TabId>("stats")

  // ข้อมูลของปุ่มแท็บนำทางทั้ง 6 หัวข้อ (ดึงค่าจากไฟล์แปลภาษา JSON)
  const tabs = [
    { id: "stats", key: "bscScholarships.tabs.stats" },
    { id: "directory", key: "bscScholarships.tabs.directory" },
    { id: "eligibility", key: "bscScholarships.tabs.eligibility" },
    { id: "obligations", key: "bscScholarships.tabs.obligations" },
    { id: "funding", key: "bscScholarships.tabs.funding" },
    { id: "announcements", key: "bscScholarships.tabs.announcements" },
  ] as const

  return (
    <MainLayout>
      {/* ส่วนแบนเนอร์ด้านบนสุด */}
      <BscHero />

      {/* ส่วนข้อมูลภาพรวมโครงการ */}
      <ProjectOverview />

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
        {activeTab === "stats" && <SelectionStatistics />}
        {activeTab === "directory" && <SelectionDirectory />}
        {activeTab === "eligibility" && <EligibilitySection />}
        {activeTab === "obligations" && <ObligationsSection />}
        {activeTab === "funding" && <FundingSection />}
        {activeTab === "announcements" && <SelectionAnnouncements />}
      </div>
    </MainLayout>
  )
}

export default function BscScholarshipsPage() {
  return <BscScholarshipsContent />
}

