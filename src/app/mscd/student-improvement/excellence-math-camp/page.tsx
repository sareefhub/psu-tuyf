"use client"

import { MainLayout } from "@/layout/main-layout"
import { ProgramCard } from "@/components/program-card"
import { useT } from "@/components/language-context"

// 1. ส่วนแบนเนอร์ Hero ด้านบนสุดเลียนแบบธีม bsc-scholarships
function CampHero() {
  const t = useT()
  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden py-16 lg:py-20 animate-fade-in">
      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary/95" />
      <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 relative z-10 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          {t("excellenceMathCamp.hero.title")}
        </h1>
        <p className="max-w-3xl text-sm font-light leading-relaxed text-primary-foreground/80 sm:text-base">
          {t("excellenceMathCamp.hero.subtitle")}
        </p>
      </div>
    </section>
  )
}

// 2. ส่วนข้อมูลภาพรวมโครงการเบื้องต้น
function CampOverview() {
  const t = useT()
  return (
    <section className="py-16 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t("excellenceMathCamp.overview.title")}
        </h2>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground/90 text-pretty">
          <p>
            {t("excellenceMathCamp.overview.desc1")}
          </p>
          <p>
            {t("excellenceMathCamp.overview.desc2")}
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
              title={t("excellenceMathCamp.years.emc2026")}
              image="/images/mscd/student-improvement/excellence-match-camp/emc-2026.png"
              href="/mscd/student-improvement/excellence-math-camp/emc-2026"
              moreDetailText={t("programs.more_detail")}
              imageFit="contain"
              imageBg="bg-white dark:bg-muted/10"
            />
            <ProgramCard
              title={t("excellenceMathCamp.years.emc2025")}
              image="/images/mscd/student-improvement/excellence-match-camp/emc-2025.png"
              href="/mscd/student-improvement/excellence-math-camp/emc-2025"
              moreDetailText={t("programs.more_detail")}
              imageFit="contain"
              imageBg="bg-white dark:bg-muted/10"
            />
            <ProgramCard
              title={t("excellenceMathCamp.years.pom2024")}
              image="/images/mscd/student-improvement/excellence-match-camp/pom-2024.png"
              href="/mscd/student-improvement/excellence-math-camp/pom-2024"
              moreDetailText={t("programs.more_detail")}
              imageFit="contain"
              imageBg="bg-white dark:bg-muted/10"
            />
            <ProgramCard
              title={t("excellenceMathCamp.years.pom2023")}
              image="/images/mscd/student-improvement/excellence-match-camp/pom-2023.png"
              href="/mscd/student-improvement/excellence-math-camp/pom-2023"
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
