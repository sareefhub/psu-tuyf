"use client"

import { useLanguage, useT } from "@/components/language-context"
import { ProgramCard } from "@/components/program-card"

// คอมโพเนนต์แสดงการ์ดหลักสูตรของโครงการ MGSS (ไม่มีเนื้อหาอธิบายภาพรวมตามคำขอ)
export function MgssOverview() {
  const { lang } = useLanguage()
  const t = useT()

  // ข้อมูลการ์ดทั้ง 3 หลักสูตรของบัณฑิตศึกษา (เรียงลำดับใหม่: Master Pattani -> Master Hatyai -> Ph.D.)
  const cards = [
    {
      id: "master-pattani",
      image: "/images/mgss/master-student-pattani.png",
      title: lang === "en" ? "M.Sc. Students (Pattani Campus)" : "นักศึกษาระดับปริญญาโท (วิทยาเขตปัตตานี)",
      href: "#",
    },
    {
      id: "master-hatyai",
      image: "/images/mgss/master-student-hatyai.png",
      title: lang === "en" ? "M.Sc. Students (Hat Yai Campus)" : "นักศึกษาระดับปริญญาโท (วิทยาเขตหาดใหญ่)",
      href: "#",
    },
    {
      id: "phd-hatyai",
      image: "/images/mgss/phd-student-hatyai.png",
      title: lang === "en" ? "Ph.D. Students (Hat Yai Campus)" : "นักศึกษาระดับปริญญาเอก (วิทยาเขตหาดใหญ่)",
      href: "#", // ยังไม่ต้องใส่ลิงก์ปลายทางเนื่องจากยังไม่มีหน้าข้อมูลย่อย
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* แสดงเฉพาะส่วนการ์ดโครงการย่อยทั้ง 3 ใบ */}
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <ProgramCard
              key={card.id}
              title={card.title}
              image={card.image}
              href={card.href}
              moreDetailText={t("programs.more_detail")}
              ariaLabel={t("programs.view_details_aria", { abbr: card.title })}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
