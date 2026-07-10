import React, { ReactNode } from "react"
import { AlertCircle } from "lucide-react"

interface SharedEmptyStateProps {
  /** หัวข้อแสดงผลเมื่อไม่มีข้อมูล (เช่น 'ยังไม่มีประกาศในขณะนี้') */
  readonly title: ReactNode;
  /** รายละเอียดเพิ่มเติม (ถ้ามี) */
  readonly description?: ReactNode;
  /** ไอคอนแสดงผล (ค่าเริ่มต้นคือ <AlertCircle className="h-6 w-6" />) */
  readonly icon?: ReactNode;
  /** คลาสเพิ่มเติมสำหรับควบคุมสไตล์ของ container ด้านนอกสุด */
  readonly className?: string;
}

// คอมโพเนนต์ตัวกลางสำหรับแสดงกล่องสถานะว่างเปล่า/ไม่มีข้อมูล (Shared Empty State Card)
// ใช้แชร์ดีไซน์ร่วมกันในหน้าเว็บต่าง ๆ เช่น เมื่อยังไม่มีข้อมูลประกาศ เอกสาร หรือข่าวสาร
export function SharedEmptyState({
  title,
  description,
  icon = <AlertCircle className="h-6 w-6" />,
  className = "max-w-xl mx-auto p-8 rounded-3xl border border-dashed border-border/80 bg-card flex flex-col items-center text-center space-y-4",
}: SharedEmptyStateProps) {
  return (
    <div className={className}>
      {/* วงกลมรอบไอคอนแสดงผล */}
      <div className="h-12 w-12 rounded-2xl bg-secondary/50 flex items-center justify-center text-muted-foreground/60">
        {icon}
      </div>

      {/* ข้อความหลักและรายละเอียดเพิ่มเติม */}
      <div className="space-y-1">
        <h3 className="font-bold text-primary text-sm sm:text-base">
          {title}
        </h3>
        {description && (
          <p className="text-xs sm:text-sm text-muted-foreground/75 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
