"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { MgssHero } from "./components/hero"
import { MgssOverview } from "./components/overview"

// นำเข้าแท็บนำทางตัวกลาง (Shared TabNavigation Component)
import { TabNavigation } from "@/components/tab-navigation"

// นำเข้าคอมโพเนนต์เนื้อหา 4 หัวข้อใหม่ของหน้าโครงการ MGSS
import { RecipientsDirectory, GraduatedDirectory } from "./components/directory"
import { PublicationsSection } from "./components/publications"
import { AnnouncementsSection } from "./components/announcements"

type TabId = "recipients" | "graduated" | "publications" | "announcements"

// คอมโพเนนต์ภายในสำหรับหน้าหลักของโครงการ MGSS
function MgssLandingContent() {
  const { lang } = useLanguage()
  const [activeTab, setActiveTab] = useState<TabId>("recipients")

  // ข้อมูลปุ่มเมนูแท็บนำทาง 4 หัวข้อใหม่ รองรับการแปลภาษา TH/EN แบบไดนามิก
  const tabs = lang === "en"
    ? ([
        { id: "recipients", label: "Scholarship Recipients" },
        { id: "graduated", label: "Graduated Scholars" },
        { id: "publications", label: "Publication List" },
        { id: "announcements", label: "Project Announcements" },
      ] as const)
    : ([
        { id: "recipients", label: "จำนวนนักเรียนที่ได้รับทุน" },
        { id: "graduated", label: "จำนวนนักเรียนทุนที่สำเร็จการศึกษา" },
        { id: "publications", label: "Publication List" },
        { id: "announcements", label: "ประกาศของโครงการ" },
      ] as const)

  return (
    <>
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
        {activeTab === "recipients" && <RecipientsDirectory />}
        {activeTab === "graduated" && <GraduatedDirectory />}
        {activeTab === "publications" && <PublicationsSection />}
        {activeTab === "announcements" && <AnnouncementsSection />}
      </div>
    </>
  )
}

// ส่งออกหน้าเพจหลัก
export default function MgssLandingPage() {
  return <MgssLandingContent />
}
