"use client"

import { ProgramCard } from "@/components/program-card"
import { useT } from "@/context/language-context"
import { CarouselWrapper } from "@/components/carousel-wrapper"
import { SharedOverview } from "@/components/shared-overview"

import { SharedSubHero } from "@/components/shared-sub-hero"

// 1. ส่วนแบนเนอร์ Hero ด้านบนสุด เลียนแบบธีมแบบเดียวกับ Excellence Math Camp
function SanchonHero() {
  const t = useT()
  return (
    <SharedSubHero
      title={t("mathSanchon.hero.title")}
      description={t("mathSanchon.hero.subtitle")}
    />
  )
}

// 2. ส่วนข้อมูลภาพรวมโครงการคณิตศาสตร์สัญจร
function SanchonOverview() {
  const t = useT()
  return (
    <section className="py-16 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 space-y-6">
        <SharedOverview
          translationKey="mathSanchon"
          noSectionWrapper={true}
          className="space-y-4"
        />
        
        <div className="space-y-3 pt-4 border-t border-muted/30">
          <h3 className="text-lg font-bold text-primary">
            {t("mathSanchon.overview.objectivesTitle")}
          </h3>
          <div className="space-y-4 border-l border-border/80 pl-6 mt-3">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-primary flex items-start gap-2 leading-relaxed text-pretty">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                <span>1. {t("mathSanchon.overview.obj1")}</span>
              </h4>
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-primary flex items-start gap-2 leading-relaxed text-pretty">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                <span>2. {t("mathSanchon.overview.obj2")}</span>
              </h4>
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-primary flex items-start gap-2 leading-relaxed text-pretty">
                <span className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                <span>3. {t("mathSanchon.overview.obj3")}</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function MathSanchonPage() {
  const t = useT()

  return (
    <div className="bg-slate-50/50 dark:bg-slate-950/20">
      {/* 1. ส่วนแบนเนอร์ Hero */}
      <SanchonHero />

      {/* 2. ส่วนคำอธิบายภาพรวมของโครงการ */}
      <SanchonOverview />

      {/* เส้นคั่นส่วนกลางเพื่อแยกเนื้อหาและระบบการ์ดอย่างสวยงาม */}
      <div className="mx-auto max-w-7xl px-6">
        <hr className="border-border/60" />
      </div>

      {/* 3. ส่วนแสดงผลการ์ดโครงการอบรมแต่ละปีการศึกษา (แสดงแบบ Grid 3 คอลัมน์สำหรับ 3 ปี) */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <CarouselWrapper desktopCols={3} containerClassName="[&_img]:scale-[1.04]">
            <ProgramCard
              title={t("mathSanchon.years.ms2025")}
              image="/images/mscd/student-improvement/match-sanchon/ms-2025.png"
              href="/mscd/student-improvement/math-sanchon/ms-2025"
              moreDetailText={t("programs.more_detail")}
            />
            <ProgramCard
              title={t("mathSanchon.years.ms2024")}
              image="/images/mscd/student-improvement/match-sanchon/ms-2024.png"
              href="/mscd/student-improvement/math-sanchon/ms-2024"
              moreDetailText={t("programs.more_detail")}
            />
            <ProgramCard
              title={t("mathSanchon.years.ms2023")}
              image="/images/mscd/student-improvement/match-sanchon/ms-2023.png"
              href="/mscd/student-improvement/math-sanchon/ms-2023"
              moreDetailText={t("programs.more_detail")}
            />
          </CarouselWrapper>
        </div>
      </section>
    </div>
  )
}
