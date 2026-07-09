import React from "react"
import { SiteHeader } from "./site-header"
import { SiteFooter } from "./site-footer"
import { ScrollToTop } from "./scroll-to-top"

interface MainLayoutProps {
  children: React.ReactNode
  className?: string // อนุญาตให้เพิ่มคลาสเพิ่มเติม เช่น animate-fade-in
}

// เลย์เอาต์หลักของเว็บไซต์ (MainLayout) สำหรับแชร์โครงร่าง SiteHeader, SiteFooter และ ScrollToTop ร่วมกัน
export function MainLayout({ children, className = "" }: MainLayoutProps) {
  return (
    <div className={`min-h-screen bg-background text-foreground flex flex-col font-sans ${className}`}>
      {/* ส่วนหัวแสดงเมนูนำทาง */}
      <SiteHeader />

      {/* ส่วนเนื้อหาหลักของหน้าเว็บ */}
      <main className="flex-1">
        {children}
      </main>

      {/* ส่วนท้ายแสดงข้อมูลลิขสิทธิ์และการติดต่อ */}
      <SiteFooter />

      {/* ปุ่มกดด่วนเพื่อเลื่อนหน้าจอกลับขึ้นไปด้านบน */}
      <ScrollToTop />
    </div>
  )
}
