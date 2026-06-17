"use client"

import { useT } from "@/components/language-context"
import { ProgramCard } from "@/components/program-card"

// คอมโพเนนต์แสดงข้อมูลภาพรวมโครงการพัฒนาครูคณิตศาสตร์
export function TeacherOverview() {
  const t = useT()

  return (
    <section className="py-16 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        {/* ===== ส่วนที่ 1: เนื้อหาข้อความอธิบายโครงการ ===== */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              {t("teacherImprovement.overview.title")}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground/90 text-pretty">
              {t("teacherImprovement.overview.desc1")}
            </p>
          </div>
        </div>

        {/* ===== เส้นคั่นเลียนแบบจากรูปแบบของหน้าหลัก /mscd เพื่อความสม่ำเสมอของ UI ===== */}
        <hr className="border-border/60" />

        {/* ===== ส่วนที่ 2: การ์ดโครงการอบรมแต่ละปีการศึกษาแสดงในรูปแบบ Grid 3 คอลัมน์ (ขยายขนาดรูปภาพขึ้น 4% เพื่อซ่อนขอบกรอบสีฟ้าที่ติดมากับตัวไฟล์ภาพจริง) ===== */}
        <div className="grid gap-8 md:grid-cols-3 w-full [&_img]:scale-[1.04]">
          {/* แสดงการ์ดสำหรับแต่ละปีการศึกษา (ใช้ไฟล์ภาพใหม่จากการปรับปรุงโฟลเดอร์) */}
          <ProgramCard
            title="Math 2022"
            image="/images/mscd/teacher-improvement/mathematics-teacher-training/mtt-2022.png"
            href="/mscd/teacher-improvement/math-2022"
            moreDetailText={t("programs.more_detail")}
          />
          <ProgramCard
            title="Math 2024"
            image="/images/mscd/teacher-improvement/mathematics-teacher-training/mtt-2024.png"
            href="#"
            moreDetailText={t("programs.more_detail")}
          />
          <ProgramCard
            title="Math 2026"
            image="/images/mscd/teacher-improvement/mathematics-teacher-training/mtt-2026.png"
            href="#"
            moreDetailText={t("programs.more_detail")}
          />
        </div>
      </div>
    </section>
  )
}
