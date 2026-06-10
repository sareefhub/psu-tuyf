"use client"

import { useState } from "react"
import { useT } from "@/components/language-context"
import { MainLayout } from "@/layout/main-layout"
import { TabNavigation } from "@/components/tab-navigation"
import { CenterOverview } from "./components/overview"
import { CenterAnnouncements } from "./components/announcements"

type TabId = "overview" | "announcements"

// คอมโพเนนต์แสดงหน้าของศูนย์พีชคณิตภาคใต้ (Algebra Center)
export default function AlgebraCenterPage() {
  const t = useT()
  const [activeTab, setActiveTab] = useState<TabId>("overview")

  // คีย์ตัวแปรแท็บนำทางจาก locales
  const tabs = [
    { id: "overview", key: "algebraCenter.tabs.overview" },
    { id: "announcements", key: "algebraCenter.tabs.announcements" },
  ] as const

  return (
    <MainLayout className="animate-fade-in">
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

      {/* เรียกใช้งานแถบนำทางสลับแท็บการแสดงผล */}
      <TabNavigation
        tabs={tabs.map((tab) => ({ id: tab.id, label: t(tab.key) }))}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* แสดงผลเนื้อหาของหัวข้อที่ถูกสลับเปลี่ยน */}
      <div className="transition-all duration-300">
        {activeTab === "overview" && <CenterOverview />}
        {activeTab === "announcements" && <CenterAnnouncements />}
      </div>
    </MainLayout>
  )
}
