"use client"

import { useT } from "@/components/language-context"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// คอมโพเนนต์แสดงภาพรวมและวัตถุประสงค์หลักของโครงการ MSCD พร้อมการ์ดนำทางตามดีไซน์สไตล์หน้าแรก
export function MscdOverview() {
  const t = useT()

  // ข้อมูลการ์ด 3 ส่วนหลักสไตล์การ์ดหน้าแรก (เฉพาะรูปภาพหัวข้อหลัก และปุ่มดูรายละเอียด)
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

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* ส่วนแสดงการ์ด 3 ใบย่อย ในดีไซน์ที่ถอดแบบจากหน้าแรก (มีเฉพาะหัวข้อไม่มีเนื้อหาคำอธิบาย) */}
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              className="relative group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-300 hover:border-border hover:shadow-sm"
            >
              {/* ส่วนหัวแสดงรูปภาพสัดส่วนสี่เหลี่ยมจัตุรัส แสดงผลเต็มพื้นที่การ์ดแบบดั้งเดิม */}
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

              {/* ส่วนรายละเอียดเนื้อหาแบบมินิมอล มีเฉพาะหัวข้อและปุ่มนำทาง */}
              <div className="flex flex-col p-6 space-y-4">
                <h3 className="text-lg font-bold leading-snug text-primary transition-colors group-hover:text-accent">
                  {card.title}
                </h3>

                {/* ปุ่มดูรายละเอียด - แสดงผลแบบลิงก์โดยจะทำงานร่วมกับ Link ล่องหนเมื่อเป็นโครงการที่มีอยู่จริง */}
                <div className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
                  {t("programs.more_detail")}
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                {/* หากเป็นโครงการ B.Sc. Scholarships ที่มีอยู่จริง จะเรนเดอร์ Link ล่องหนทับทั้งแผ่นการ์ดเพื่อให้กดได้ทั้งแผ่น */}
                {card.id === "scholarships" && (
                  <Link
                    href="/mscd/bsc-scholarships"
                    className="after:absolute after:inset-0 after:z-10"
                    aria-label={t("programs.view_details_aria", { abbr: card.title })}
                  />
                )}
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}


