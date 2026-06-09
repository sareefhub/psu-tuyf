"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-context"
import { MainLayout } from "@/layout/main-layout"
import { MgssHero } from "./components/hero"
import { MgssOverview } from "./components/overview"

// นำเข้าแท็บนำทางตัวกลาง (Shared TabNavigation Component)
import { TabNavigation } from "@/components/tab-navigation"

// นำเข้าคอมโพเนนต์เนื้อหาย่อยทั้ง 4 หมวดของหน้าโครงการ MGSS
import { FundingSection } from "./components/funding"
import { EligibilitySection } from "./components/eligibility"
import { SelectionDirectory } from "./components/directory"
import { AnnouncementsSection } from "./components/announcements"

type TabId = "funding" | "eligibility" | "directory" | "announcements"

// คอมโพเนนต์ภายในสำหรับหน้าหลักของโครงการ MGSS
function MgssLandingContent() {
  const { lang } = useLanguage()
  const [activeTab, setActiveTab] = useState<TabId>("funding")

  // ข้อมูลปุ่มเมนูแท็บนำทาง รองรับการแปลภาษาแบบกำหนดเองภายใน (เนื่องจากไม่มี Key ใน JSON)
  const tabs = lang === "en"
    ? ([
        { id: "funding", label: "Funding & Support" },
        { id: "eligibility", label: "Eligibility Criteria" },
        { id: "directory", label: "Scholars Directory" },
        { id: "announcements", label: "Announcements & Forms" },
      ] as const)
    : ([
        { id: "funding", label: "ทุนและค่าใช้จ่ายสนับสนุน" },
        { id: "eligibility", label: "คุณสมบัติผู้สมัครรับทุน" },
        { id: "directory", label: "ทำเนียบนักศึกษาทุน" },
        { id: "announcements", label: "ประกาศและเอกสาร" },
      ] as const)

  return (
    <MainLayout className="animate-fade-in">
      {/* ส่วนแบนเนอร์หลักด้านบน */}
      <MgssHero />

      {/* ส่วนการ์ดหลักสูตรของโครงการ MGSS */}
      <MgssOverview />

      {/* เรียกใช้งานคอมโพเนนต์กลาง TabNavigation เพื่อแสดงแถบนำทางรูปแคปซูลกลมมน */}
      <TabNavigation
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={(id) => setActiveTab(id as TabId)}
      />

      {/* แสดงเนื้อหารายละเอียดของหัวข้อแท็บที่กำลังเปิดใช้งาน */}
      <div className="transition-all duration-300">
        {activeTab === "funding" && <FundingSection />}
        {activeTab === "eligibility" && <EligibilitySection />}
        {activeTab === "directory" && <SelectionDirectory />}
        {activeTab === "announcements" && <AnnouncementsSection />}
      </div>
    </MainLayout>
  )
}

// ส่งออกหน้าเพจหลัก
export default function MgssLandingPage() {
  return <MgssLandingContent />
}
