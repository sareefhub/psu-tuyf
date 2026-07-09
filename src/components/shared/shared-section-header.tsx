import { ReactNode } from "react"

interface SharedSectionHeaderProps {
  /** หัวข้อหลัก (Title) รองรับทั้ง String และ ReactNode */
  readonly title: string | ReactNode
  /** คำชี้แจงหรือคำอธิบายใต้หัวข้อ (Description) รองรับทั้ง String และ ReactNode */
  readonly description?: string | ReactNode
  /** คลาสครอบคลุมภายนอก สำหรับควบคุม Margin และ Alignment */
  readonly className?: string
  /** คลาสสำหรับตกแต่งหัวข้อหลัก */
  readonly titleClassName?: string
  /** คลาสสำหรับตกแต่งคำอธิบาย */
  readonly descClassName?: string
}

/**
 * คอมโพเนนต์ตัวกลางสำหรับแสดงผลหัวข้อประจำเซกชันพร้อมคำบรรยายย่อย (Global Section Header)
 * ช่วยรวบการกำหนดขนาดฟอนต์ ระยะห่าง และการจัดกึ่งกลางไว้ที่เดียวเพื่อความง่ายในการปรับแต่งสไตล์ทั้งระบบ
 */
export function SharedSectionHeader({
  title,
  description,
  className = "text-center mx-auto mb-16 space-y-3",
  titleClassName = "text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl",
  descClassName = "text-sm text-muted-foreground/80",
}: SharedSectionHeaderProps) {
  return (
    <div className={className}>
      <h2 className={titleClassName}>{title}</h2>
      {description && <p className={descClassName}>{description}</p>}
    </div>
  )
}
