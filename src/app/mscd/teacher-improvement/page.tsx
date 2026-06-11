"use client"

import { MainLayout } from "@/layout/main-layout"
import { TeacherHero } from "./components/hero"
import { TeacherOverview } from "./components/overview"

// คอมโพเนนต์แสดงผลหน้าหลักสำหรับโครงการพัฒนาครูคณิตศาสตร์ (Teacher Improvement)
export default function TeacherImprovementPage() {
  return (
    <MainLayout className="animate-fade-in">
      {/* ส่วนแบนเนอร์ด้านบนสุด */}
      <TeacherHero />

      {/* ส่วนข้อมูลภาพรวมโครงการประวัติความเป็นมาและวัตถุประสงค์หลัก */}
      <TeacherOverview />
    </MainLayout>
  )
}
