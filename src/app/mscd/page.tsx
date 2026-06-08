"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { MscdHero } from "./components/hero"
import { MscdOverview } from "./components/overview"

function MscdLandingContent() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* ส่วนหัวสำหรับนำทาง */}
      <SiteHeader />

      <main className="flex-1">
        {/* ส่วนแบนเนอร์หลักด้านบน */}
        <MscdHero />

        {/* ส่วนข้อมูลภาพรวมของโครงการ MSCD เลียนแบบหน้าเว็บเก่าในรูปแบบพรีเมียม */}
        <MscdOverview />
      </main>

      {/* ส่วนท้ายแสดงข้อมูลการติดต่อและลิขสิทธิ์ */}
      <SiteFooter />

      {/* ปุ่มด่วนสำหรับเลื่อนหน้าจอกลับขึ้นด้านบนสุด */}
      <ScrollToTop />
    </div>
  )
}

export default function MscdLandingPage() {
  return <MscdLandingContent />
}
