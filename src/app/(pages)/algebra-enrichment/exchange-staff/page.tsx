"use client"

import { useState } from "react"
import { useT } from "@/context/language-context"
import { TabNavigation } from "@/components/tab-navigation"
import { ExchangeActivities, ExchangeRequirements } from "./components/overview"

type TabId = "activities" | "requirements"

// คอมโพเนนต์แสดงหน้าของโครงการแลกเปลี่ยนบุคลากรและทุนวิจัยในต่างประเทศ (Exchange Staff)
export default function AlgebraExchangeStaffPage() {
  const t = useT()
  const [activeTab, setActiveTab] = useState<TabId>("activities")

  // รายการคีย์ภาษาสำหรับปุ่มแท็บสลับแสดงข้อมูล (ดึงชื่อมาจาก locales JSON)
  const tabs = [
    { id: "activities", key: "algebraExchange.overview.activities.title" },
    { id: "requirements", key: "algebraExchange.overview.requirements.title" },
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
              {t("algebraExchange.hero.title")}
            </span>
            <span className="block text-primary-foreground/80 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-2 tracking-wide font-sans">
              ({t("algebraExchange.hero.subtitle")})
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-pretty text-sm font-light leading-relaxed text-primary-foreground/80 sm:text-base">
            {t("algebraEnrichment.exchange.objective")}
          </p>
        </div>
      </section>

      {/* ข้อมูลแนะนำเบื้องต้นของโครงการแลกเปลี่ยนบุคลากร (แสดงด้านบนสุดเหนือแท็บเหมือนหน้าอื่นๆ) */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-primary leading-snug">
              {t("algebraExchange.overview.title")}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground/90 text-pretty">
              {t("algebraExchange.overview.desc")}
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
        {activeTab === "activities" && <ExchangeActivities />}
        {activeTab === "requirements" && <ExchangeRequirements />}
      </div>
    </>
  )
}
