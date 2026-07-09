import React from "react"
import { MainLayout } from "@/components/main-layout"

interface PagesLayoutProps {
  readonly children: React.ReactNode
}

// เลย์เอาต์หลักสำหรับทุกหน้าย่อยในกลุ่ม (pages)
export default function PagesLayout({ children }: PagesLayoutProps) {
  return (
    // ครอบเนื้อหาด้วย MainLayout เพียงจุดเดียวของกลุ่มหน้าเพจทั้งหมด
    <MainLayout className="animate-fade-in">
      {children}
    </MainLayout>
  )
}
