"use client"

import { useT } from "@/context/language-context"
import { ProgramCard } from "@/components/program-card"
import { CarouselWrapper } from "@/components/carousel-wrapper"
import { SharedOverview } from "@/components/shared-overview"

// คอมโพเนนต์แสดงข้อมูลภาพรวมโครงการพัฒนาครูคณิตศาสตร์
export function TeacherOverview() {
  const t = useT()

  return (
    <section className="py-16 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        {/* ===== ส่วนที่ 1: เนื้อหาข้อความอธิบายโครงการ ===== */}
        <SharedOverview
          translationKey="teacherImprovement"
          descKeys={["desc1"]}
          noSectionWrapper={true}
        />

        {/* ===== เส้นคั่นเลียนแบบจากรูปแบบของหน้าหลัก /mscd เพื่อความสม่ำเสมอของ UI ===== */}
        <hr className="border-border/60" />

        {/* ===== ส่วนที่ 2: การ์ดโครงการอบรมแต่ละปีการศึกษาแสดงในรูปแบบ Grid 3 คอลัมน์ (ขยายขนาดรูปภาพขึ้น 4% เพื่อซ่อนขอบกรอบสีฟ้าที่ติดมากับตัวไฟล์ภาพจริง) ===== */}
        <CarouselWrapper desktopCols={3} containerClassName="w-full [&_img]:scale-[1.04]">
          {/* แสดงการ์ดสำหรับแต่ละปีการศึกษา เรียงลำดับจากใหม่สุดไปเก่าสุด */}
          <ProgramCard
            title="Math 2026"
            image="/images/mscd/teacher-improvement/mathematics-teacher-training/mtt-2026.png"
            href="/mscd/teacher-improvement/math-2026"
            moreDetailText={t("programs.more_detail")}
          />
          <ProgramCard
            title="Math 2024"
            image="/images/mscd/teacher-improvement/mathematics-teacher-training/mtt-2024.png"
            href="/mscd/teacher-improvement/math-2024"
            moreDetailText={t("programs.more_detail")}
          />
          <ProgramCard
            title="Math 2022"
            image="/images/mscd/teacher-improvement/mathematics-teacher-training/mtt-2022.png"
            href="/mscd/teacher-improvement/math-2022"
            moreDetailText={t("programs.more_detail")}
          />
        </CarouselWrapper>
      </div>
    </section>
  )
}
