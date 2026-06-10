import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  abbr?: string            // ชื่อย่อโครงการ (เช่น MSCD) (มีหรือไม่มีก็ได้)
  title: string            // หัวข้อหลักของการ์ด
  description?: string     // คำอธิบายรายละเอียด (มีหรือไม่มีก็ได้)
  image: string            // พาธรูปภาพประกอบ
  imageAspect?: "16/10" | "square" // อัตราส่วนรูปภาพ (ค่าเริ่มต้น 16/10)
  imageFit?: "contain" | "cover"   // การจัดวางรูปภาพ (ค่าเริ่มต้น contain)
  href?: string            // ลิงก์ปลายทาง (หากใส่ค่ามาจะเรนเดอร์ลิงก์ล่องหนครอบทั้งการ์ดเพื่อให้คลิกง่าย)
  moreDetailText: string   // ข้อความแสดงรายละเอียด เช่น "ดูรายละเอียด"
  ariaLabel?: string       // ข้อความอธิบายสำหรับผู้ใช้ Screen Reader
  priority?: boolean       // ลำดับความสำคัญในการโหลดภาพประกอบ (ค่าเริ่มต้น false)
}

// คอมโพเนนต์การ์ดแสดงโครงการ/หลักสูตร (ProjectCard - การ์ดแบบที่ 1)
// ออกแบบมาเพื่อใช้งานร่วมกันหลายหน้าเพื่อลดความซ้ำซ้อนของโค้ดสไตล์ Clean Code
export function ProjectCard({
  abbr,
  title,
  description,
  image,
  imageAspect = "16/10",
  imageFit = "contain",
  href,
  moreDetailText,
  ariaLabel,
  priority = false,
}: Readonly<ProjectCardProps>) {
  // วิเคราะห์สไตล์การแสดงผลของรูปภาพตามค่าที่ส่งเข้ามา
  const aspectClass = imageAspect === "square" ? "aspect-square" : "aspect-16/10"
  const fitClass = imageFit === "cover" ? "object-cover" : "object-contain p-4"

  return (
    <article className="relative group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-300 hover:border-border hover:shadow-sm">
      {/* ส่วนแสดงรูปภาพประกอบของการ์ด */}
      <div className={`relative ${aspectClass} w-full overflow-hidden bg-muted/20`}>
        <Image
          src={image}
          alt={abbr || title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`${fitClass} transition-opacity duration-300 group-hover:opacity-90`}
          priority={priority}
        />
      </div>

      {/* ส่วนรายละเอียดเนื้อหาของการ์ด */}
      <div className="flex flex-1 flex-col p-6">
        {/* ชื่อย่อหรือ Tag หัวข้อโครงการ (แสดงผลเมื่อมีข้อมูล) */}
        {abbr && (
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/85">
            {abbr}
          </span>
        )}

        {/* ชื่อหัวข้อโครงการหลัก */}
        <h3 className={`${abbr ? "mt-2" : ""} text-lg font-bold leading-snug text-primary transition-colors group-hover:text-accent`}>
          {title}
        </h3>

        {/* ข้อความอธิบายรายละเอียดเพิ่มเติม (แสดงผลเมื่อมีข้อมูล) */}
        {description && (
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground/75">
            {description}
          </p>
        )}

        {/* ลิงก์/ปุ่มกดสำหรับเปิดดูข้อมูลเพิ่มเติม */}
        <div className="mt-6 inline-flex items-center text-sm font-semibold text-primary group-hover:text-accent transition-colors">
          {moreDetailText}
          <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>

        {/* ลิงก์ล่องหนคลุมการ์ดทั้งหมดเพื่อขยายพื้นที่คลิกให้เต็มแผ่นการ์ด (ทำงานเมื่อมีลิงก์ href) */}
        {href && (
          <Link
            href={href}
            className="after:absolute after:inset-0 after:z-10"
            aria-label={ariaLabel || title}
          />
        )}
      </div>
    </article>
  )
}
