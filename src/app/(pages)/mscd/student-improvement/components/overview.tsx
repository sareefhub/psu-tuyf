"use client"

import { useT } from "@/context/language-context"
import { ProgramCard } from "@/components/program-card"
import { CarouselWrapper } from "@/components/carousel-wrapper"
import { SharedOverview } from "@/components/shared-overview"

// คอมโพเนนต์แสดงข้อมูลภาพรวมโครงการพัฒนาศักยภาพนักเรียน
export function StudentOverview() {
  const t = useT()

  return (
    <section className="py-16 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        {/* ===== ส่วนที่ 1: เนื้อหาข้อความอธิบายโครงการ ===== */}
        <SharedOverview
          translationKey="studentImprovement"
          noSectionWrapper={true}
        />

        {/* ===== เส้นคั่นเลียนแบบจากรูปแบบของหน้าหลัก /mscd เพื่อความสม่ำเสมอของ UI ===== */}
        <hr className="border-border/60" />

        {/* ===== ส่วนที่ 2: การ์ดโครงการย่อยแสดงในรูปแบบ Grid 2 คอลัมน์ ===== */}
        <CarouselWrapper desktopCols={2} containerClassName="max-w-4xl mx-auto w-full">
          <ProgramCard
            title="Excellence Math Camp"
            image="/images/mscd/student-improvement/excellence-match-camp.png"
            href="/mscd/student-improvement/excellence-math-camp"
            moreDetailText={t("programs.more_detail")}
            imageFit="contain"
            imageBg="bg-white dark:bg-muted/10"
          />
          <ProgramCard
            title="Math สัญจร"
            image="/images/mscd/student-improvement/match-sanchon.png"
            href="/mscd/student-improvement/math-sanchon"
            moreDetailText={t("programs.more_detail")}
            imageFit="contain"
            imageBg="bg-white dark:bg-muted/10"
          />
        </CarouselWrapper>
      </div>
    </section>
  )
}
