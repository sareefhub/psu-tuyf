import { ReactNode } from "react"
import { useT } from "@/context/language-context"

export interface NumberedGridItem {
  /** คีย์อ้างอิงสำหรับดึงข้อมูลคำแปลภาษา (เช่น "item1", "item2") */
  readonly key: string
  /** ข้อความแปลสำเร็จรูปที่ต้องการแสดงโดยตรง (ถ้ามี จะไม่วิ่งไปค้นหาจากคีย์แปลภาษา) */
  readonly text?: string
  /** มีรายการรายละเอียดข้อย่อยแสดงด้านล่างหรือไม่ (เช่น true/false) */
  readonly hasSubItems?: boolean
  /** รายการข้อความย่อย (ใช้ระบุแบบส่งข้อมูลข้อความดิบหรือแปลสำเร็จรูปโดยตรง) */
  readonly subItems?: readonly string[] | string[]
  /** คลาส CSS เพิ่มเติมสำหรับปรับแต่งการ์ดรายตัว (เช่น md:col-span-2) */
  readonly className?: string
}

interface SharedNumberedGridProps {
  /** ข้อมูลข้อกำหนดหรือวัตถุประสงค์แต่ละกล่อง */
  readonly items: readonly NumberedGridItem[] | NumberedGridItem[]
  /** คีย์แปลภาษาหลัก (เช่น "bscScholarships.eligibility" หรือ "about.overview") */
  readonly translationKey: string
  /** คีย์แปลภาษาของรายการย่อยด้านใน (เช่น "subItems1" สำหรับคุณสมบัติ หรือ "subItems2" สำหรับข้อปฏิบัติ) */
  readonly subItemsTranslationKey?: string
  /** คลาสสำหรับกำหนดจำนวนคอลัมน์และระยะห่างของ Grid (Default: grid gap-6 md:grid-cols-2) */
  readonly gridClassName?: string
  /** คลาสสำหรับกำหนดสีพื้นหลังวงกลมลำดับตัวเลข (Default: bg-accent/10) */
  readonly numberBgClassName?: string
  /** คลาสสำหรับตกแต่งข้อความเนื้อหาหลัก (Default: text-base text-foreground/90 leading-relaxed font-normal) */
  readonly itemTextClassName?: string
  /** คลาสสำหรับตกแต่งข้อความรายการย่อยด้านใน (Default: text-sm text-muted-foreground leading-relaxed font-normal) */
  readonly subItemTextClassName?: string
}

/**
 * คอมโพเนนต์ตัวกลางควบคุมแผงกล่องการ์ดเนื้อหาเรียงลำดับตัวเลข (Global Numbered Cards Grid)
 * รวบการกำหนดกรอบการ์ด สแปนตัวเลขวงกลม ขนาดฟอนต์ และอนิเมชันโฮเวอร์ให้เหมือนกันทั้งเว็บไซต์
 */
export function SharedNumberedGrid({
  items,
  translationKey,
  subItemsTranslationKey,
  gridClassName = "grid gap-6 md:grid-cols-2",
  numberBgClassName = "bg-accent/10",
  itemTextClassName = "text-base text-foreground/90 leading-relaxed font-normal",
  subItemTextClassName = "text-sm text-muted-foreground leading-relaxed font-normal",
}: SharedNumberedGridProps) {
  const t = useT()

  return (
    <div className={gridClassName}>
      {items.map((item, index) => {
        // ดึงข้อความหลัก (ถ้าส่ง text เข้ามาตรงๆ ให้ใช้ตัวนั้น หากไม่มีให้ไปแปลผ่าน i18n key)
        const mainText = item.text ?? t(`${translationKey}.items.${item.key}`)

        return (
          <div
            key={item.key}
            className={`bg-card border border-border/50 rounded-2xl p-6 shadow-xs space-y-3 hover:border-accent/30 transition-all duration-300 flex flex-col justify-between ${item.className ?? ""}`}
          >
            <div className="space-y-3 w-full">
              <div className="flex gap-4 items-start">
                {/* วงกลมตัวเลขลำดับ (1, 2, 3...) */}
                <span className={`h-6 w-6 rounded-full ${numberBgClassName} flex items-center justify-center text-xs font-bold text-accent shrink-0`}>
                  {index + 1}
                </span>
                
                {/* ข้อความคุณสมบัติหรือวัตถุประสงค์หลัก */}
                <p className={itemTextClassName}>
                  {mainText}
                </p>
              </div>

              {/* รายการข้อความย่อยภายในกล่องการ์ด (Bullet lists) */}
              {item.hasSubItems && (
                <ul className="pl-9 list-disc space-y-1.5 border-t border-border/40 pt-3 mt-1 animate-fade-in">
                  {item.subItems ? (
                    // 1. ดึงข้อความจากอาร์เรย์ subItems ที่ถูกแปลผ่าน prop มาโดยตรง
                    item.subItems.map((sub) => (
                      <li key={sub} className={subItemTextClassName}>
                        {sub}
                      </li>
                    ))
                  ) : subItemsTranslationKey ? (
                    // 2. ดึงข้อความจากคีย์ i18n JSON อัตโนมัติ
                    (t(`${translationKey}.${subItemsTranslationKey}`, { returnObjects: true }) as string[]).map((sub) => (
                      <li key={sub} className={subItemTextClassName}>
                        {sub}
                      </li>
                    ))
                  ) : null}
                </ul>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
