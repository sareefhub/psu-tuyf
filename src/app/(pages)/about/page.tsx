"use client"

import { useState } from "react"
import Image from "next/image" // นำเข้าคอมโพเนนต์แสดงผลรูปภาพของ Next.js
import { useT } from "@/context/language-context"
import { TabNavigation } from "@/components/tab-navigation"
import { FundHistory, FundObjectives } from "./components/overview"

type TabId = "history" | "objectives"

// คอมโพเนนต์แสดงหน้าเกี่ยวกับ PSU-TUYF (กองทุน PSU-TUYF Charitable Trust Fund)
// ใช้โครงสร้างแถบข้อมูลและแบนเนอร์เดียวกับหน้า Exchange Staff เพื่อควบคุมธีมของระบบ
export default function AboutFundPage() {
  const t = useT()
  const [activeTab, setActiveTab] = useState<TabId>("history")

  // รายการแท็บนำทางภาษาสำหรับการแสดงผลสลับส่วนข้อมูล
  const tabs = [
    { id: "history", key: "aboutFund.tabs.history" },
    { id: "objectives", key: "aboutFund.tabs.objectives" },
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
              {t("aboutFund.hero.title")}
            </span>
            <span className="block text-primary-foreground/80 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-2 tracking-wide font-sans">
              ({t("aboutFund.hero.subtitle")})
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-pretty text-sm font-light leading-relaxed text-primary-foreground/80 sm:text-base">
            {t("aboutFund.hero.desc")}
          </p>
        </div>
      </section>

      {/* ข้อมูลแนะนำเบื้องต้นของหน้ากองทุน */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* โลโก้แสดงทางซ้าย ปรับขนาด ใส่กรอบเส้นเล็ก และนำเอฟเฟกต์ซูมออกตามความต้องการของผู้ใช้ */}
            <div className="shrink-0">
              <div className="border border-border bg-white dark:bg-card rounded-3xl p-4 shadow-xs">
                <div className="relative h-40 w-40 sm:h-56 sm:w-56">
                  <Image
                     src="/images/logo/logo-psu-tuyf.png"
                    alt="PSU-TUYF Logo"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* รายละเอียดข้อความแสดงทางขวา */}
            <div className="flex-1 space-y-6">
              <h2 className="text-2xl font-bold text-primary leading-snug">
                {t("aboutFund.contentTitle")}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground/90 text-pretty">
                {t("aboutFund.history.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* เรียกใช้งานแถบนำทางสลับแท็บเพื่อดูข้อมูลเชิงลึกตามที่ผู้ใช้คลิกเลือก */}
      <TabNavigation
        tabs={tabs.map((tab) => ({ id: tab.id, label: t(tab.key) }))}
        activeTab={activeTab}
        setActiveTab={(id) => setActiveTab(id as TabId)}
      />

      {/* แสดงเนื้อหาตามแท็บที่เลือกด้วย Transition แอนิเมชัน */}
      <div className="transition-all duration-300">
        {activeTab === "history" && <FundHistory />}
        {activeTab === "objectives" && <FundObjectives />}
      </div>
    </>
  )
}
