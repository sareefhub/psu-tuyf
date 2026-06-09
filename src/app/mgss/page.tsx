"use client"

import { MainLayout } from "@/layout/main-layout"
import { MgssHero } from "./components/hero"
import { MgssOverview } from "./components/overview"

// คอมโพเนนต์ภายในสำหรับหน้าหลักของโครงการ MGSS
function MgssLandingContent() {
  return (
    <MainLayout>
      {/* ส่วนแบนเนอร์หลักด้านบน */}
      <MgssHero />

      {/* ส่วนการ์ดหลักสูตรของโครงการ MGSS */}
      <MgssOverview />
    </MainLayout>
  )
}

// ส่งออกหน้าเพจหลัก
export default function MgssLandingPage() {
  return <MgssLandingContent />
}
