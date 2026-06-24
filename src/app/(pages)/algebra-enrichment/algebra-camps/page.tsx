"use client"

import { useState } from "react"
import { useT } from "@/components/language-context"
import { MainLayout } from "@/layout/main-layout"
import { TabNavigation } from "@/components/tab-navigation"
import { CampTarget, CampDetails, CampEligibility } from "./components/overview"
import { CampAnnouncements } from "./components/announcements" // นำเข้าคอมโพเนนต์แสดงประกาศข่าวสารของค่ายพีชคณิต

type TabId = "target" | "details" | "eligibility" | "announcements" // เพิ่มประเภทแท็บสำหรับประกาศข่าวสาร

// คอมโพเนนต์แสดงหน้าของค่ายเสริมสร้างความเข้มแข็งทางพีชคณิต (Algebra Camps)
export default function AlgebraCampsPage() {
  const t = useT()
  const [activeTab, setActiveTab] = useState<TabId>("target")

  // รายการคีย์ภาษาสำหรับปุ่มแท็บสลับแสดงข้อมูลของค่ายพีชคณิต (ดึงชื่อมาจาก locales JSON)
  const tabs = [
    { id: "target", key: "algebraCamps.overview.target.title" },
    { id: "details", key: "algebraCamps.overview.details.title" },
    { id: "eligibility", key: "algebraCamps.overview.eligibility.title" },
    { id: "announcements", key: "algebraCamps.announcements.title" }, // แท็บแสดงส่วนงานประกาศข่าวสาร
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
              {t("algebraCamps.hero.title")}
            </span>
            <span className="block text-primary-foreground/80 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-2 tracking-wide font-sans">
              ({t("algebraCamps.hero.subtitle")})
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-pretty text-sm font-light leading-relaxed text-primary-foreground/80 sm:text-base">
            {t("algebraEnrichment.camps.objective")}
          </p>
        </div>
      </section>

      {/* ข้อมูลแนะนำเบื้องต้นของค่ายพีชคณิต (แสดงด้านบนสุดเหนือแท็บเหมือนหน้าอื่นๆ) */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary leading-snug">
              {t("algebraCamps.overview.title")}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground/90 text-pretty">
              {t("algebraCamps.overview.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* เรียกใช้งานแถบนำทางสลับแท็บกลางในการเลือกแสดงผล */}
      <TabNavigation
        tabs={tabs.map((tab) => ({ id: tab.id, label: t(tab.key) }))}
        activeTab={activeTab}
        setActiveTab={(id) => setActiveTab(id as TabId)}
      />

      {/* แสดงเนื้อหาความถูกต้องตรงตามการเลือกของแต่ละแท็บ */}
      <div className="transition-all duration-300">
        {activeTab === "target" && <CampTarget />}
        {activeTab === "details" && <CampDetails />}
        {activeTab === "eligibility" && <CampEligibility />}
        {activeTab === "announcements" && <CampAnnouncements />} {/* แสดงประกาศข่าวสารเมื่อเลือกแท็บนี้ */}
      </div>
    </MainLayout>
  )
}
