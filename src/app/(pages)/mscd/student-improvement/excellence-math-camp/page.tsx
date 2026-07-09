"use client"

import { ProgramCard } from "@/components/program-card"
import { useT } from "@/context/language-context"
import { CarouselWrapper } from "@/components/carousel-wrapper"
import { SharedOverview } from "@/components/shared-overview"

import { SharedPageBanner } from "@/components/shared-page-banner"

// 1. ส่วนแบนเนอร์ Hero ด้านบนสุดเลียนแบบธีม bsc-scholarships
function CampHero() {
  const t = useT()
  return (
    <SharedPageBanner
      title={t("excellenceMathCamp.hero.title")}
      description={t("excellenceMathCamp.hero.subtitle")}
    />
  )
}

// 2. ส่วนข้อมูลภาพรวมโครงการเบื้องต้น
function CampOverview() {
  return (
    <SharedOverview
      translationKey="excellenceMathCamp"
      descKeys={["desc1", "desc2"]}
    />
  )
}

export default function ExcellenceMathCampPage() {
  const t = useT()

  return (
    <div className="bg-slate-50/50 dark:bg-slate-950/20">
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
          <CarouselWrapper desktopCols={4}>
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
          </CarouselWrapper>
        </div>
      </section>
    </div>
  )
}
