"use client"

import { useT } from "@/components/language-context"
import { MapPin, Mail } from "lucide-react"

// คอมโพเนนต์แสดงหน้าติดต่อเรา (Contact Us)
// ออกแบบรูปแบบการ์ดข้อมูลติดต่อตามตัวอย่างต้นแบบของผู้ใช้
export default function ContactPage() {
  const t = useT()

  return (
    <>
      {/* ส่วนแบนเนอร์หลักด้านบน (Hero Section) */}
      <section className="bg-primary text-primary-foreground relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/95 to-primary/90" />
        
        {/* แสงสะท้อนทรงกลมจางๆ ช่วยเพิ่มมิติให้กับพื้นหลัง */}
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -left-20 -bottom-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight">
            <span className="block text-primary-foreground">
              {t("contactPage.hero.title")}
            </span>
            <span className="block text-primary-foreground/80 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-2 tracking-wide font-sans">
              ({t("contactPage.hero.subtitle")})
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-pretty text-sm font-light leading-relaxed text-primary-foreground/80 sm:text-base">
            {t("contactPage.hero.desc")}
          </p>
        </div>
      </section>

      {/* ส่วนเนื้อหาหลัก: แสดงผลการ์ดติดต่อ 2 ส่วนหลัก (ที่อยู่ และ อีเมล) */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2 max-w-4xl mx-auto">
            
            {/* กล่องการ์ดที่ 1: ข้อมูลที่อยู่ */}
            <div className="bg-card border border-border/60 rounded-2xl p-10 flex flex-col items-center text-center shadow-xs transition-all duration-300 hover:border-border hover:shadow-md">
              {/* ไอคอนหมุดปักแผนที่สลักวงกลมสีเทาตามตัวอย่างรูปภาพ */}
              <div className="h-16 w-16 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center text-muted-foreground/70 mb-6">
                <MapPin className="h-8 w-8" />
              </div>

              {/* ป้ายหัวข้อแถบสี่เหลี่ยมผืนผ้าสีน้ำเงินเข้มตัวหนังสือสีขาว */}
              <div className="w-full bg-primary text-primary-foreground py-2.5 px-4 rounded-md font-bold text-sm tracking-wide text-center mb-6">
                {t("contactPage.address.title")}
              </div>

              {/* ข้อมูลเนื้อหาที่อยู่แสดงจัดกึ่งกลางเลเยอร์ */}
              <div className="text-xs text-muted-foreground leading-relaxed font-semibold space-y-1">
                <p>{t("contactPage.address.room")}</p>
                <p>{t("contactPage.address.dept")}</p>
                <p>{t("contactPage.address.faculty")}</p>
                <p>{t("contactPage.address.university")}</p>
              </div>
            </div>

            {/* กล่องการ์ดที่ 2: ข้อมูลอีเมล */}
            <div className="bg-card border border-border/60 rounded-2xl p-10 flex flex-col items-center text-center shadow-xs transition-all duration-300 hover:border-border hover:shadow-md">
              {/* ไอคอนจดหมาย/ซองจดหมายสลักวงกลมสีเทาตามตัวอย่างรูปภาพ */}
              <div className="h-16 w-16 rounded-full border-2 border-muted-foreground/30 flex items-center justify-center text-muted-foreground/70 mb-6">
                <Mail className="h-8 w-8" />
              </div>

              {/* ป้ายหัวข้อแถบสี่เหลี่ยมผืนผ้าสีน้ำเงินเข้มตัวหนังสือสีขาว */}
              <div className="w-full bg-primary text-primary-foreground py-2.5 px-4 rounded-md font-bold text-sm tracking-wide text-center mb-6">
                {t("contactPage.email.title")}
              </div>

              {/* ลิงก์ช่องทางส่งอีเมลติดต่อประสานงาน */}
              <div className="flex items-center justify-center min-h-16">
                <a
                  href={`mailto:${t("contactPage.email.value")}`}
                  className="text-sm font-bold text-primary hover:text-accent transition-colors duration-300 break-all"
                >
                  {t("contactPage.email.value")}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
