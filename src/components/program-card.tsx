import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProgramCardProps {
  title: string            // หัวข้อหลักของการ์ด
  image: string            // พาธรูปภาพประกอบ (สไตล์รูปสี่เหลี่ยมจัตุรัส)
  href: string             // ลิงก์ปลายทางสำหรับกดเปิดหน้ารายละเอียด
  moreDetailText: string   // ข้อความปุ่มดูรายละเอียด เช่น "ดูรายละเอียด"
  ariaLabel?: string       // ข้อความอธิบายสำหรับผู้ใช้ Screen Reader
  priority?: boolean       // ลำดับความสำคัญในการโหลดภาพประกอบ (ค่าเริ่มต้น false)
  imageFit?: "cover" | "contain" // เพิ่มเติม: ปรับลักษณะการแสดงผลรูปภาพ
  imageBg?: string         // เพิ่มเติม: ปรับสีพื้นหลังของกล่องรูปภาพ
}

// คอมโพเนนต์การ์ดแสดงโครงการย่อยสไตล์สี่เหลี่ยมจัตุรัส (ProgramCard - การ์ดแบบที่ 2)
// ใช้สำหรับแสดงหน้ารวมหัวข้อย่อยและลิงก์ไปยังหน้านั้น ๆ เช่น ในหน้าโครงการ MSCD
export function ProgramCard({
  title,
  image,
  href,
  moreDetailText,
  ariaLabel,
  priority = false,
  imageFit = "cover",
  imageBg = "bg-muted/20",
}: Readonly<ProgramCardProps>) {
  const fitClass = imageFit === "contain" ? "object-contain p-4" : "object-cover"
  return (
    <article className="relative group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-300 hover:border-border hover:shadow-sm">
      {/* รูปภาพโครงการสไตล์สี่เหลี่ยมจัตุรัสและจัดวางตามที่กำหนด */}
      <div className={`relative aspect-square w-full overflow-hidden ${imageBg}`}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className={`${fitClass} transition-opacity duration-300 group-hover:opacity-90`}
          priority={priority}
        />
      </div>

      {/* ส่วนหัวข้อหลักและปุ่มนำทางดูรายละเอียด */}
      <div className="flex flex-col p-6 space-y-4">
        <h3 className="text-lg font-bold leading-snug text-primary transition-colors group-hover:text-accent">
          {title}
        </h3>

        {/* ปุ่มแสดงสัญลักษณ์นำทางไปยังหน้าลิงก์ปลายทาง */}
        <div className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
          {moreDetailText}
          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>

        {/* ลิงก์ล่องหนสำหรับคลุมแผ่นการ์ดทั้งหมดเพื่อให้ผู้ใช้สามารถคลิกส่วนใดของการ์ดก็ได้ */}
        <Link
          href={href}
          className="after:absolute after:inset-0 after:z-10"
          aria-label={ariaLabel || title}
        />
      </div>
    </article>
  )
}
