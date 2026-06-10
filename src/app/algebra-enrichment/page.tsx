"use client"

import { MainLayout } from "@/layout/main-layout"
import { AlgebraHero } from "./components/hero"

// คอมโพเนนต์ภายในสำหรับหน้าหลักของโครงการเสริมสร้างความเข้มแข็งทางพีชคณิต (Algebra Enrichment)

// ลบส่วนรายละเอียดโครงการย่อยด้านล่างออกตามที่ผู้ใช้ต้องการ
function AlgebraLandingContent() {
  return (
    <MainLayout className="animate-fade-in">
      {/* ส่วนแบนเนอร์หลักด้านบน */}
      <AlgebraHero />
    </MainLayout>
  )
}

// ส่งออกหน้าเพจหลัก
export default function AlgebraLandingPage() {
  return <AlgebraLandingContent />
}

