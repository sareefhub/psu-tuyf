import React, { ReactNode } from "react"
import { Award } from "lucide-react"

export interface GridIconItem {
  readonly key: string;
  readonly title: string;
  readonly desc: string;
}

interface SharedIconGridProps {
  /** รายการข้อมูลการ์ดทั้งหมด (key, title, desc) */
  readonly items: readonly GridIconItem[] | GridIconItem[];
  /** ไอคอนกลางที่แสดงในการ์ดแต่ละใบ (ค่าเริ่มต้นคือ <Award className="h-5 w-5" />) */
  readonly icon?: ReactNode;
  /** คลาสเพิ่มเติมสำหรับควบคุม Grid Layout (เช่น 'lg:grid-cols-4' หรือ 'lg:grid-cols-5') */
  readonly gridClassName?: string;
}

// คอมโพเนนต์ตัวกลางสำหรับแผงการ์ดข้อมูลไอคอนวงกลมกึ่งกลาง (Shared Icon Grid Cards)
// ใช้แชร์ดีไซน์ร่วมกันในส่วน ค่าใช้จ่ายสนับสนุน, สิทธิประโยชน์, และข้อมูลบุคลากร
export function SharedIconGrid({
  items,
  icon = <Award className="h-5 w-5" />,
  gridClassName = "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
}: SharedIconGridProps) {
  return (
    <div className={gridClassName}>
      {items.map((item) => (
        /* ใช้ h-full เพื่อให้การ์ดมีความสูงเท่ากันทั้งหมดในแต่ละแถว และจัดกึ่งกลางเนื้อหา */
        <div
          key={item.key}
          className="h-full bg-card border border-border/50 rounded-2xl p-6 text-center shadow-sm flex flex-col items-center justify-center hover:border-accent/30 transition-all duration-300"
        >
          {/* กล่องวงกลมไอคอนกึ่งกลางการ์ด */}
          <div className="mb-4">
            <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              {icon}
            </div>
          </div>

          {/* เนื้อความการ์ด - อยู่ต่อจากไอคอนพอดี ไม่แยกห่างกัน */}
          <div>
            <h3 className="font-bold text-primary text-base mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground/90 leading-relaxed font-semibold">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
