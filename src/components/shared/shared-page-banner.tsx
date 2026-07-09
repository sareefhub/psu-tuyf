import { ReactNode } from "react"

interface SharedPageBannerProps {
  /** หัวข้อหลักประจำหน้าเพจโครงการ (Title) */
  readonly title: string | ReactNode
  /** หัวข้อย่อยภาษาอังกฤษที่จะนำมาแสดงในวงเล็บแถวที่สอง (English/Secondary Title) - ระบุหรือไม่ระบุก็ได้ */
  readonly englishTitle?: string
  /** ข้อความบรรยายสั้นด้านล่างแบนเนอร์ (Short Description) - ระบุหรือไม่ระบุก็ได้ */
  readonly description?: string | ReactNode
}

/**
 * คอมโพเนนต์ตัวกลางสำหรับแบนเนอร์ส่วนหัวของหน้าเพจย่อยทั้งหมด (Global Sub-page Banner)
 * ปรับปรุงระบบแสงเบลอ สี และขนาดตัวอักษรให้อยู่ในจุดเดียวเพื่อความง่ายในการควบคุมระบบดีไซน์ทั้งเว็บไซต์
 */
export function SharedPageBanner({ title, englishTitle, description }: SharedPageBannerProps) {
  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden py-16 lg:py-20 animate-fade-in">
      {/* เกรเดียนต์พื้นหลังคุมโทนพรีเมียมสีน้ำเงินเข้ม */}
      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/95 to-primary/90" />
      
      {/* เอฟเฟกต์แสงสะท้อนเบลอสองมุมเพื่อความมีมิติหรูหรา */}
      <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -left-20 -bottom-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight">
          <span className="block text-primary-foreground">{title}</span>
          {englishTitle && (
            <span className="block text-primary-foreground/80 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-2 tracking-wide font-sans">
              ({englishTitle})
            </span>
          )}
        </h1>

        {description && (
          <p className="mt-6 max-w-3xl text-pretty text-sm font-light leading-relaxed text-primary-foreground/80 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
