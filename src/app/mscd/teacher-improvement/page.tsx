"use client"

import { useState } from "react"
import { useT } from "@/components/language-context"
import { MainLayout } from "@/layout/main-layout"
import { TeacherHero } from "./components/hero"
import { TeacherOverview } from "./components/overview"
import { TabNavigation } from "@/components/tab-navigation"
import { ActivitiesSection } from "./components/activities"
import { StatsSection } from "./components/stats"
import { EligibilitySection } from "./components/eligibility"
import { BenefitsSection } from "./components/benefits"
import { AnnouncementsSection } from "./components/announcements"

type TabId = "activities" | "stats" | "eligibility" | "benefits" | "announcements"

// คอมโพเนนต์แสดงผลหน้าหลักสำหรับโครงการพัฒนาครูคณิตศาสตร์ (Teacher Improvement)
// ปรับปรุงการแสดงผลให้ครอบคลุมระบบแถบแท็บนำทางระดับสากล 5 หัวข้อ โดยเรียกใช้งาน TabNavigation ที่เป็นตัวกลาง
export default function TeacherImprovementPage() {
  const t = useT()
  const [activeTab, setActiveTab] = useState<TabId>("activities")

  // ข้อมูลของปุ่มแท็บนำทางทั้ง 5 หัวข้อ (ดึงจากไฟล์ i18n JSON)
  const tabs = [
    { id: "activities", key: "teacherImprovement.tabs.activities" },
    { id: "stats", key: "teacherImprovement.tabs.stats" },
    { id: "eligibility", key: "teacherImprovement.tabs.eligibility" },
    { id: "benefits", key: "teacherImprovement.tabs.benefits" },
    { id: "announcements", key: "teacherImprovement.tabs.announcements" },
  ] as const

  return (
    <MainLayout className="animate-fade-in">
      {/* ส่วนแบนเนอร์ด้านบนสุด */}
      <TeacherHero />

      {/* ส่วนข้อมูลภาพรวมโครงการประวัติความเป็นมาและวัตถุประสงค์หลัก */}
      <TeacherOverview />

      {/* เรียกใช้งานแถบนำทางแบบแท็บกลาง (Tab Bar) เพื่อประหยัดโค้ดและคุมหน้าตาให้เหมือนกัน */}
      <TabNavigation
        tabs={tabs.map((tab) => ({ id: tab.id, label: t(tab.key) }))}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* แสดงผลเนื้อหาของหัวข้อที่เลือกสลับเปลี่ยน */}
      <div className="transition-all duration-300">
        {activeTab === "activities" && <ActivitiesSection />}
        {activeTab === "stats" && <StatsSection />}
        {activeTab === "eligibility" && <EligibilitySection />}
        {activeTab === "benefits" && <BenefitsSection />}
        {activeTab === "announcements" && <AnnouncementsSection />}
      </div>
    </MainLayout>
  )
}
