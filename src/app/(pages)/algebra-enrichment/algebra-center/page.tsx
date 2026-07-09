"use client"

import { useState } from "react"
import { useT } from "@/context/language-context"
import { TabNavigation } from "@/components/tab-navigation"
import {
  CenterObjectives,
  CenterMissions,
  CenterPersonnel,
  CenterActivities,
} from "./components/overview"
import { CenterAnnouncements } from "./components/announcements"

type TabId = "objectives" | "missions" | "personnel" | "activities" | "announcements"

// คอมโพเนนต์แสดงหน้าของศูนย์พีชคณิตภาคใต้ (Algebra Center)
export default function AlgebraCenterPage() {
  const t = useT()
  const [activeTab, setActiveTab] = useState<TabId>("objectives")

  // คีย์ตัวแปรแท็บนำทาง 5 แท็บหลักจาก locales JSON
  const tabs = [
    { id: "objectives", key: "algebraCenter.overview.objectives.title" },
    { id: "missions", key: "algebraCenter.overview.missions.title" },
    { id: "personnel", key: "algebraCenter.overview.personnel.title" },
    { id: "activities", key: "algebraCenter.overview.activities.title" },
    { id: "announcements", key: "algebraCenter.announcements.title" },
  ] as const

  return (
    <>
      {/* ส่วนแบนเนอร์หลักด้านบน (Hero Section) */}
      <section className="bg-primary text-primary-foreground relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/95 to-primary/90" />
        
        {/* แสงสะท้อนทรงกลมจางๆ ช่วยเพิ่มมิติให้กับพื้นหลัง */}
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -left-20 -bottom-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight">
            <span className="block text-primary-foreground">
              {t("algebraCenter.hero.title")}
            </span>
            <span className="block text-primary-foreground/80 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-2 tracking-wide font-sans">
              ({t("algebraCenter.hero.subtitle")})
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-pretty text-sm font-light leading-relaxed text-primary-foreground/80 sm:text-base">
            {t("algebraEnrichment.center.objective")}
          </p>
        </div>
      </section>

      {/* ข้อมูลแนะนำเบื้องต้นของศูนย์พีชคณิต (แสดงด้านบนสุดเหนือแท็บ) */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary leading-snug">
              {t("algebraCenter.overview.title")}
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground/90 text-pretty">
              {t("algebraCenter.overview.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* เรียกใช้งานแถบนำทางสลับแท็บการแสดงผล */}
      <TabNavigation
        tabs={tabs.map((tab) => ({ id: tab.id, label: t(tab.key) }))}
        activeTab={activeTab}
        setActiveTab={(id) => setActiveTab(id as TabId)}
      />

      {/* แสดงผลเนื้อหาของหัวข้อที่ถูกสลับเปลี่ยนตามการเลือกของแท็บ */}
      <div className="transition-all duration-300">
        {activeTab === "objectives" && <CenterObjectives />}
        {activeTab === "missions" && <CenterMissions />}
        {activeTab === "personnel" && <CenterPersonnel />}
        {activeTab === "activities" && <CenterActivities />}
        {activeTab === "announcements" && <CenterAnnouncements />}
      </div>
    </>
  )
}
