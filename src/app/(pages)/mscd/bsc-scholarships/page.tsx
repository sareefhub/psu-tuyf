"use client"

import { useState, useEffect } from "react"
import { useT } from "@/components/language-context"
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

import { TabNavigation } from "@/components/tab-navigation"

type TabId = "stats" | "directory" | "eligibility" | "obligations" | "funding" | "announcements"

// คอมโพเนนต์แสดงผลหน้าข้อมูลทุนการศึกษาปริญญาตรี (B.Sc. Scholarships)
// โดยใช้ระบบแท็บนำทางระดับสากล (Global Tabs) ในการควบคุมเนื้อหาทั้ง 6 หัวข้อตามรูปแบบของหน้าแรก
function BscScholarshipsContent() {
  const t = useT()
  const [activeTab, setActiveTab] = useState<TabId>("stats")

  // โหลดสถานะแท็บล่าสุดจาก sessionStorage เมื่อคอมโพเนนต์ Mount เพื่อเลี่ยง Hydration Mismatch
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTab = sessionStorage.getItem("bsc_active_tab") as TabId
      if (savedTab) {
        setActiveTab(savedTab)
      }
    }
  }, [])

  // บันทึกแท็บที่เลือกลง sessionStorage
  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId)
    sessionStorage.setItem("bsc_active_tab", tabId)
  }

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
    <>
      {/* ส่วนแบนเนอร์ด้านบนสุด */}
      <BscHero />

      {/* ส่วนข้อมูลภาพรวมโครงการ */}
      <ProjectOverview />

      {/* เรียกใช้งานแถบนำทางแบบแท็บกลาง (Tab Bar) เพื่อประหยัดโค้ดและคุมหน้าตาให้เหมือนกัน */}
      <TabNavigation
        tabs={tabs.map((tab) => ({ id: tab.id, label: t(tab.key) }))}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />

      {/* แสดงผลเนื้อหาของหัวข้อที่เลือกสลับเปลี่ยน */}
      <div className="transition-all duration-300">
        {activeTab === "stats" && <SelectionStatistics />}
        {activeTab === "directory" && <SelectionDirectory />}
        {activeTab === "eligibility" && <EligibilitySection />}
        {activeTab === "obligations" && <ObligationsSection />}
        {activeTab === "funding" && <FundingSection />}
        {activeTab === "announcements" && <SelectionAnnouncements />}
      </div>
    </>
  )
}

export default function BscScholarshipsPage() {
  return <BscScholarshipsContent />
}

