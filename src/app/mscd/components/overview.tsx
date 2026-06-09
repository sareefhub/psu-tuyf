"use client"

import { useT } from "@/components/language-context"
import { ProgramCard } from "@/components/program-card"

// คอมโพเนนต์แสดงภาพรวมและวัตถุประสงค์หลักของโครงการ MSCD
// — ส่วนบน: การ์ด 3 ใบ + ปุ่มดูรายละเอียด
// — ส่วนล่าง: เนื้อหาข้อความอธิบายโครงการหลักและโครงการย่อยทั้ง 3
export function MscdOverview() {
  const t = useT()

  // ข้อมูลการ์ด 3 ส่วนหลักสไตล์การ์ดหน้าแรก
  const cards = [
    {
      id: "scholarships" as const,
      image: "/images/mscd/bsc-scholarships.png",
      title: "B.Sc. Scholarships",
    },
    {
      id: "students" as const,
      image: "/images/mscd/student-improvement.png",
      title: "Student Improvement",
    },
    {
      id: "teachers" as const,
      image: "/images/mscd/teacher-improvement.png",
      title: "Teacher Improvement",
    },
  ]

  // ข้อมูลโครงการย่อยทั้ง 3 สำหรับส่วนเนื้อหาด้านล่าง
  const subprojects = [
    {
      id: "scholarships",
      titleKey: "programDetails.mscd.subprojects.scholarships.title",
      descKey: "programDetails.mscd.subprojects.scholarships.desc",
    },
    {
      id: "student",
      titleKey: "programDetails.mscd.subprojects.student.title",
      descKey: "programDetails.mscd.subprojects.student.desc",
    },
    {
      id: "teacher",
      titleKey: "programDetails.mscd.subprojects.teacher.title",
      descKey: "programDetails.mscd.subprojects.teacher.desc",
    },
  ]

  // ฟังก์ชันช่วยหาค่าพาธของหน้าหลักสูตรย่อยแต่ละหน้า
  const getCardHref = (id: "scholarships" | "students" | "teachers") => {
    switch (id) {
      case "scholarships":
        return "/mscd/bsc-scholarships"
      case "students":
        return "/mscd/student-improvement"
      case "teachers":
        return "/mscd/teacher-improvement"
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6 space-y-12">

        {/* ===== ส่วนที่ 1: เนื้อหาข้อความอธิบายโครงการหลักและโครงการย่อย (ปรับสไตล์ให้กลมกลืนกับธีม B.Sc. Scholarships) ===== */}
        <div className="space-y-6">

          {/* หัวข้อหลักของโครงการ MSCD */}
          <h2 className="text-2xl font-bold text-primary leading-snug">
            {t("programDetails.mscd.title")}{" "}
            <span className="font-normal text-muted-foreground">
              ({t("programDetails.mscd.sub")})
            </span>
          </h2>

          {/* คำอธิบายภาพรวมโครงการ */}
          <p className="text-sm leading-relaxed text-muted-foreground/90 text-pretty">
            {t("programDetails.mscd.desc")}
          </p>

          {/* รายละเอียดโครงการย่อยทั้ง 3 ข้อ */}
          <div className="space-y-6 border-l border-border/80 pl-6 mt-6">
            {subprojects.map((sub) => (
              <div key={sub.id} className="space-y-2">
                {/* หัวข้อโครงการย่อย */}
                <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {t(sub.titleKey)}
                </h3>
                {/* คำอธิบายโครงการย่อย */}
                <p className="pl-3.5 text-sm leading-relaxed text-muted-foreground/90 text-pretty">
                  {t(sub.descKey)}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* ===== เส้นคั่น ===== */}
        <hr className="border-border/60" />

        {/* ===== ส่วนที่ 2: การ์ด 3 ใบพร้อมรูปภาพและปุ่มดูรายละเอียด (ย้ายมาอยู่ด้านล่าง) ===== */}
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <ProgramCard
              key={card.id}
              title={card.title}
              image={card.image}
              href={getCardHref(card.id)}
              moreDetailText={t("programs.more_detail")}
              ariaLabel={t("programs.view_details_aria", { abbr: card.title })}
              priority={card.id === "scholarships"}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
