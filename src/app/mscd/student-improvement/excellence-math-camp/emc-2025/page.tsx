"use client"

import { MainLayout } from "@/layout/main-layout"
import { useT } from "@/components/language-context"

// คอมโพเนนต์หน้าย่อยสำหรับแสดงรายละเอียดย่อยโครงการ Excellence Math Camp 2025 (ปี 2568)
export default function ExcellenceMathCamp2025Page() {
  const t = useT()

  return (
    <MainLayout className="animate-fade-in bg-slate-50/50 dark:bg-slate-950/20">
      
      {/* ===== 1. Hero Section: แบนเนอร์หัวข้อโครงการ (ธีมเดียวกับ BscHero) ===== */}
      <section className="bg-primary text-primary-foreground relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary/95" />
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight">
            <span className="block text-primary-foreground">
              Excellence Math Camp 2025
            </span>
            <span className="block text-primary-foreground/80 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-2 tracking-wide font-sans">
              ภายใต้โครงการ PSU-TUYF: Mathematics for Sustainable Community Development
            </span>
          </h1>
        </div>
      </section>

      {/* ===== 2. Overview Section: ข้อความเตรียมอัปเดตข้อมูล ===== */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-6 text-center space-y-4">
          <h2 className="text-2xl font-bold text-primary">
            อยู่ระหว่างจัดเตรียมข้อมูล
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground/80 max-w-lg mx-auto">
            ขณะนี้รายละเอียดการอบรมและกิจกรรมของโครงการ Excellence Math Camp ประจำปี 2568 กำลังอยู่ระหว่างการรวบรวมและจะอัปเดตให้แสดงผลในเร็วๆ นี้
          </p>
        </div>
      </section>

    </MainLayout>
  )
}
