"use client"

import { useT } from "@/context/language-context"
import { ReactNode } from "react"

interface SharedOverviewProps {
  /** คีย์หลักของหน้าย่อยที่ใช้ในการดึงข้อมูลแปลภาษาของคำบรรยาย (เช่น "bscScholarships") */
  readonly translationKey: string
  /** ลำดับคีย์ข้อความคำอธิบายย่อยที่จะดึงมาวนลูป (Default: ["desc1", "desc2", "desc3"]) */
  readonly descKeys?: readonly string[]
  /** หัวข้อหลัก (Title) หากไม่ระบุจะดึงจากคีย์แปลภาษาอัตโนมัติหรือใช้ค่า Default */
  readonly title?: string | ReactNode
  /** หากเป็น true จะไม่แสดงโครงครอบ <section py-16> ภายนอก ทำให้สามารถนำไปฝังในเซกชันย่อยอื่นได้ */
  readonly noSectionWrapper?: boolean
  /** คลาสภายนอกเพิ่มเติม */
  readonly className?: string
}

/**
 * คอมโพเนนต์ตัวกลางแสดงผลเนื้อหารายละเอียดข้อมูลโครงการเบื้องต้น (Global Project Overview)
 * รวบการกำหนดขนาดฟอนต์ คลาสตัวหนา และระยะเว้นวรรคให้อยู่ในจุดเดียวเพื่อความง่ายในการควบคุมสไตล์ทั้งระบบ
 */
export function SharedOverview({
  translationKey,
  descKeys,
  title,
  noSectionWrapper = false,
  className = "space-y-4",
}: SharedOverviewProps) {
  const t = useT()
  const keys = descKeys ?? ["desc1", "desc2", "desc3"]

  // ค้นหาหัวข้ออย่างปลอดภัย ป้องกันบั๊กสลับประเภทของ custom hook t (Inline vs Key-based)
  let displayTitle: ReactNode = ""
  if (title) {
    displayTitle = title
  } else {
    // 1. ลองดึงจากคีย์ที่มี .overview.title คั่นกลาง (เช่น bscScholarships.overview.title)
    const keyWithOverview = `${translationKey}.overview.title`
    const valWithOverview = t(keyWithOverview)
    
    if (valWithOverview && valWithOverview !== keyWithOverview) {
      displayTitle = valWithOverview
    } else {
      // 2. ลองดึงจากคีย์ตรงๆ (เช่น algebraScholarships.title)
      const keyDirect = `${translationKey}.title`
      const valDirect = t(keyDirect)
      if (valDirect && valDirect !== keyDirect) {
        displayTitle = valDirect
      } else {
        // 3. ใช้ค่าเริ่มต้นของระบบแปลภาษาไทย/อังกฤษแบบ inline
        displayTitle = t("ข้อมูลโครงการเบื้องต้น", "Project Overview")
      }
    }
  }

  const contentElements = (
    <div className={className}>
      <h2 className="text-2xl font-bold text-primary">
        {displayTitle}
      </h2>
      <div className="space-y-4 text-base leading-relaxed text-muted-foreground/90 text-pretty">
        {keys.map((key) => {
          // 1. ตรวจสอบคำแปลจากคีย์ที่มี .overview. (เช่น bscScholarships.overview.desc1)
          const keyWithOverview = `${translationKey}.overview.${key}`
          const valWithOverview = t(keyWithOverview)
          if (valWithOverview && valWithOverview !== keyWithOverview) {
            return <p key={key}>{valWithOverview}</p>
          }

          // 2. ตรวจสอบคำแปลจากคีย์ตรงๆ (เช่น algebraScholarships.desc1)
          const keyDirect = `${translationKey}.${key}`
          const valDirect = t(keyDirect)
          if (valDirect && valDirect !== keyDirect) {
            return <p key={key}>{valDirect}</p>
          }

          return null
        })}
      </div>
    </div>
  )

  if (noSectionWrapper) {
    return contentElements
  }

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="space-y-6">
          {contentElements}
        </div>
      </div>
    </section>
  )
}
