"use client"

import { ProgramCard } from "@/components/program-card"
import { useT } from "@/context/language-context"
import { CarouselWrapper } from "@/components/carousel-wrapper"

// 1. ส่วนแบนเนอร์ Hero ด้านบนสุด เลียนแบบธีมแบบเดียวกับ Excellence Math Camp
function SanchonHero() {
  const t = useT()
  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden py-16 lg:py-20 animate-fade-in">
      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary/95" />
      <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 relative z-10 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          {t("mathSanchon.hero.title")}
        </h1>
        <p className="max-w-3xl text-sm font-light leading-relaxed text-primary-foreground/80 sm:text-base">
          {t("mathSanchon.hero.subtitle")}
        </p>
      </div>
    </section>
  )
}

// 2. ส่วนข้อมูลภาพรวมโครงการคณิตศาสตร์สัญจร
function SanchonOverview() {
  const t = useT()
  return (
    <section className="py-16 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl font-bold text-primary mb-6">
          {t("mathSanchon.overview.title")}
        </h2>
        <div className="space-y-6 text-base leading-relaxed text-muted-foreground/90 text-pretty">
          <p>
            {t("mathSanchon.overview.desc1")}
          </p>
          <p>
            {t("mathSanchon.overview.desc2")}
          </p>
          <p>
            {t("mathSanchon.overview.desc3")}
          </p>
          
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
