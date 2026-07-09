"use client"

import { useState } from "react"
import { GraduationCap, ArrowRight, User } from "lucide-react"
import Image from "next/image"

// คำนิยามประเภทข้อมูล Props ของการ์ดนักเรียนทุนสากลกลาง
interface StudentCardProps {
  /** ชื่อนักเรียนทุน */
  name: string
  /** เส้นทางรูปภาพ */
  image?: string
  /** บทบาท/ตำแหน่ง (เช่น นักศึกษาปีที่ 1) */
  role: string
  /** วิทยาเขตที่ศึกษา */
  campus: string
  /** ข้อความปุ่มดูรายละเอียดเพิ่มเติมที่แปลแล้ว */
  moreDetailText: string
  /** ข้อความจำลองบนพื้นที่เมื่อไม่มีรูปถ่ายที่แปลแล้ว */
  photoPlaceholderText?: string
  /** ป้ายหมวดหมู่หรือสัญชาติด้านบนภาพ (ตัวเลือก) */
  categoryBadge?: string
  /** กำหนดให้โหลดรูปภาพก่อน (สำหรับรูปแรกๆ เพื่อลดค่า LCP) */
  priority?: boolean
  /** ฟังก์ชันการทำงานเมื่อคลิกดูรายละเอียด */
  onDetailClick?: () => void
}

export function StudentCard({
  name,
  image,
  role,
  campus,
  moreDetailText,
  photoPlaceholderText = "PHOTO",
  categoryBadge,
  priority = false,
  onDetailClick,
}: Readonly<StudentCardProps>) {
  // สถานะตรวจสอบการโหลดรูปภาพล้มเหลว
  const [imgError, setImgError] = useState(false)

  // ผูกฟังก์ชันคลิกกับกล่องการ์ดหลักในรูปแบบปุ่มของ HTML เพื่อเพิ่ม UX ในการนำทาง
  return (
    <button 
      className="group bg-card border border-border/50 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer text-left w-full focus:outline-hidden focus:ring-2 focus:ring-accent"
      onClick={onDetailClick}
    >
      {/* ส่วนแสดงรูปถ่ายนักศึกษา */}
      <div className="relative aspect-4/5 bg-linear-to-tr from-accent/5 via-primary/5 to-pink-500/5 flex flex-col items-center justify-center border-b border-border/40 overflow-hidden w-full">
        {image && !imgError ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-w: 640px) 100vw, (max-w: 768px) 50vw, (max-w: 1024px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority={priority}
            onError={() => setImgError(true)} // สลับไปใช้ placeholder เมื่อเกิดความผิดพลาดในการโหลดรูปภาพ
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/5" />
            <div className="relative z-10 flex flex-col items-center p-6 text-muted-foreground/60 w-full">
              <div className="h-20 w-20 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-primary/70 mb-3 group-hover:scale-105 transition-transform duration-300">
                <User className="h-8 w-8 text-primary/70" />
              </div>
              {categoryBadge && (
                <span className="text-[9px] font-bold uppercase tracking-widest text-primary/70 bg-white/70 px-2 py-0.5 rounded border border-border/40">
                  {categoryBadge}
                </span>
              )}
            </div>
          </>
        )}
      </div>

      {/* ส่วนรายละเอียดข้อมูลผู้ได้รับทุน */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 w-full">
        <div className="space-y-1.5">
          <h4 className="font-bold text-primary text-base leading-snug group-hover:text-accent transition-colors duration-300">
            {name}
          </h4>
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            {role}
          </p>
          <p className="text-xs font-semibold text-muted-foreground/75 flex items-center gap-1">
            <GraduationCap className="h-3.5 w-3.5 text-accent" />
            {campus}
          </p>
        </div>

        {/* ปุ่มดูรายละเอียดเพิ่มเติมสไตล์ Link (ใช้ span เพื่อความถูกต้องทางโครงสร้าง HTML5 ป้องกัน nested button) */}
        <span className="inline-flex items-center p-0 h-auto justify-start font-semibold text-sm text-primary hover:text-accent hover:no-underline mt-2">
          {moreDetailText}
          <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  )
}
