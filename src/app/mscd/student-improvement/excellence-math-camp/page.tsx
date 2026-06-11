"use client"

import { MainLayout } from "@/layout/main-layout"
import { ProgramCard } from "@/components/program-card"
import { useT } from "@/components/language-context"

// 1. ส่วนแบนเนอร์ Hero ด้านบนสุดเลียนแบบธีม bsc-scholarships
function CampHero() {
  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden py-16 lg:py-20 animate-fade-in">
      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary/95" />
      <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 relative z-10 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          Excellence Math Camp
        </h1>
        <p className="max-w-3xl text-sm font-light leading-relaxed text-primary-foreground/80 sm:text-base">
          โครงการอบรมเข้มเพื่อความเป็นเลิศทางคณิตศาสตร์ ภายใต้การสนับสนุนจากกองทุนสนับสนุนการกุศล TUYF
        </p>
      </div>
    </section>
  )
}

// 2. ส่วนข้อมูลภาพรวมโครงการเบื้องต้น
function CampOverview() {
  return (
    <section className="py-16 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold text-primary mb-6">
          โครงการอบรมเข้มเพื่อความเป็นเลิศทางคณิตศาสตร์ (Excellence Math Camp)
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground/90 text-pretty">
          <p>
            โครงการอบรมเข้มเพื่อความเป็นเลิศทางคณิตศาสตร์ (Excellence Math Camp) หรือที่รู้จักกันในชื่อเดิมว่า &quot;Pre-Olympics&quot; มุ่งเน้นการพัฒนาศักยภาพทางคณิตศาสตร์ขั้นสูง ให้แก่นักเรียนระดับมัธยมศึกษา เพื่อเตรียมความพร้อมสำหรับการแข่งขันคณิตศาสตร์ทั้งในระดับประเทศและนานาชาติ พร้อมทั้งเสริมสร้างทักษะกระบวนการทางคณิตศาสตร์ให้แข็งแกร่งยิ่งขึ้น ในช่วงปี 2566-2567 โครงการเน้นการเตรียมความพร้อมนักเรียนสู่เวทีโอลิมปิกคณิตศาสตร์เป็นหลัก และตั้งแต่ปี 2568 เป็นต้นไป โครงการได้ขยายขอบเขตเพื่อรองรับการแข่งขันคณิตศาสตร์ในเวทีอื่น ๆ ที่หลากหลายมากขึ้น
          </p>
          <p>
            ผู้เข้าร่วมโครงการจะได้รับการ ติวเข้มจากผู้เชี่ยวชาญ การฝึกฝนโจทย์ที่ซับซ้อนและหลากหลาย รวมถึงการสร้างเครือข่ายนักเรียนที่มีความสนใจในคณิตศาสตร์เดียวกัน โครงการนี้ ไม่มีค่าใช้จ่าย โดยจะสนับสนุนค่าอาหารกลางวัน อาหารเย็น อาหารว่าง และค่าที่พักตลอดระยะเวลา 10 วันของการอบรม เพื่อให้นักเรียนสามารถมุ่งเน้นการเรียนรู้และพัฒนาตนเองได้อย่างเต็มที่
          </p>
        </div>
      </div>
    </section>
  )
}

export default function ExcellenceMathCampPage() {
  const t = useT()

  return (
    <MainLayout className="animate-fade-in bg-slate-50/50 dark:bg-slate-950/20">
      {/* 1. ส่วนแบนเนอร์ Hero */}
      <CampHero />

      {/* 2. ส่วนคำอธิบายภาพรวมของค่ายอบรม */}
      <CampOverview />

      {/* เส้นคั่นส่วนกลางเพื่อแยกเนื้อหาและระบบการ์ดอย่างสวยงาม */}
      <div className="mx-auto max-w-7xl px-6">
        <hr className="border-border/60" />
      </div>

      {/* 3. ส่วนแสดงผลการ์ดโครงการอบรมแต่ละปีการศึกษา (แสดงแบบ Grid 4 คอลัมน์) */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full">
            <ProgramCard
              title="Excellence Math Camp 2026"
              image="/images/mscd/student-improvement/excellence-match-camp/emc-2026.png"
              href="#"
              moreDetailText={t("programs.more_detail")}
              imageFit="contain"
              imageBg="bg-white dark:bg-muted/10"
            />
            <ProgramCard
              title="Excellence Math Camp 2025"
              image="/images/mscd/student-improvement/excellence-match-camp/emc-2025.png"
              href="#"
              moreDetailText={t("programs.more_detail")}
              imageFit="contain"
              imageBg="bg-white dark:bg-muted/10"
            />
            <ProgramCard
              title="Pre-Olympics Math 2024"
              image="/images/mscd/student-improvement/excellence-match-camp/pom-2024.png"
              href="#"
              moreDetailText={t("programs.more_detail")}
              imageFit="contain"
              imageBg="bg-white dark:bg-muted/10"
            />
            <ProgramCard
              title="Pre-Olympics Math 2023"
              image="/images/mscd/student-improvement/excellence-match-camp/pom-2023.png"
              href="#"
              moreDetailText={t("programs.more_detail")}
              imageFit="contain"
              imageBg="bg-white dark:bg-muted/10"
            />
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
