"use client"

import { MainLayout } from "@/layout/main-layout"
import { MscdHero } from "./components/hero"
import { MscdOverview } from "./components/overview"

function MscdLandingContent() {
  return (
    <MainLayout>
      {/* ส่วนแบนเนอร์หลักด้านบน */}
      <MscdHero />

      {/* ส่วนข้อมูลภาพรวมของโครงการ MSCD เลียนแบบหน้าเว็บเก่าในรูปแบบพรีเมียม */}
      <MscdOverview />
    </MainLayout>
  )
}

export default function MscdLandingPage() {
  return <MscdLandingContent />
}

