"use client"

import { MainLayout } from "@/layout/main-layout"
import { AlgebraHero } from "./components/hero"
import { AlgebraOverview } from "./components/overview"

// คอมโพเนนต์ภายในสำหรับหน้าหลักของโครงการเสริมสร้างความเข้มแข็งทางพีชคณิต (Algebra Enrichment)
function AlgebraLandingContent() {
  return (
    <MainLayout className="animate-fade-in">
      {/* ส่วนแบนเนอร์หลักด้านบน */}
      <AlgebraHero />

      {/* ส่วนเนื้อหาหลักและข้อมูลภาพรวมโครงการพีชคณิต */}
      <AlgebraOverview />
    </MainLayout>
  )
}

// ส่งออกหน้าเพจหลัก
export default function AlgebraLandingPage() {
  return <AlgebraLandingContent />
}

