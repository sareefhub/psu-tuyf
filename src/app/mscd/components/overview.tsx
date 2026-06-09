"use client"

import { useT } from "@/components/language-context"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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

        {/* ===== ส่วนที่ 1: เนื้อหาข้อความอธิบายโครงการหลักและโครงการย่อย (ย้ายขึ้นมาอยู่ข้างบนของการ์ด) ===== */}
        <div className="space-y-6 max-w-4xl">

          {/* หัวข้อหลักของโครงการ MSCD */}
          <h2 className="text-xl font-bold text-primary leading-snug">
            {t("programDetails.mscd.title")}{" "}
            <span className="font-normal text-muted-foreground">
              ({t("programDetails.mscd.sub")})
            </span>
          </h2>

          {/* คำอธิบายภาพรวมโครงการ */}
          <p className="text-sm leading-relaxed text-foreground/85">
            {t("programDetails.mscd.desc")}
          </p>

          {/* รายละเอียดโครงการย่อยทั้ง 3 ข้อ */}
          <div className="space-y-5">
            {subprojects.map((sub) => (
              <div key={sub.id} className="space-y-1.5">
                {/* หัวข้อโครงการย่อย — สีน้ำเงินเน้นชื่อ */}
                <h3 className="text-sm font-bold text-primary leading-snug">
                  {t(sub.titleKey)}
                </h3>
                {/* คำอธิบายโครงการย่อย — เยื้องซ้ายเล็กน้อยตามรูปต้นแบบ */}
                <p className="pl-4 text-sm leading-relaxed text-foreground/80">
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
            <article
              key={card.id}
              className="relative group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-300 hover:border-border hover:shadow-sm"
            >
              {/* รูปภาพโครงการ */}
              <div className="relative aspect-square w-full overflow-hidden bg-muted/20">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-opacity duration-300 group-hover:opacity-90"
                  priority={card.id === "scholarships"}
                />
              </div>

              {/* หัวข้อและปุ่มดูรายละเอียด */}
              <div className="flex flex-col p-6 space-y-4">
                <h3 className="text-lg font-bold leading-snug text-primary transition-colors group-hover:text-accent">
                  {card.title}
                </h3>

                {/* ปุ่มดูรายละเอียด */}
                <div className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  {t("programs.more_detail")}
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                {/* Link ล่องหนทับทั้งการ์ด รองรับทุกโครงการ */}
                <Link
                  href={getCardHref(card.id)}
                  className="after:absolute after:inset-0 after:z-10"
                  aria-label={t("programs.view_details_aria", { abbr: card.title })}
                />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
