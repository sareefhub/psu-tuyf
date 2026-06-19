"use client"

import { useT } from "@/components/language-context"
import { AlertCircle } from "lucide-react"

// ================= 1. กิจกรรมในโครงการ (Exchange Activities) =================
export function ExchangeActivities() {
  const t = useT()
  const items = t("algebraExchange.overview.activities.items", { returnObjects: true }) as Array<{
    title: string
    desc: string
  }>

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์สากลจัดกึ่งกลาง */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("algebraExchange.overview.activities.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("algebraExchange.overview.activities.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงกิจกรรมในโครงการ 2 กิจกรรมหลัก */}
        <div className="space-y-6">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm space-y-3 hover:border-accent/30 transition-all"
            >
              {/* แถวบน: ตัวเลขและหัวข้อหลักตัวหนา */}
              <div className="flex gap-3 items-start">
                <span className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent shrink-0">
                  {index + 1}
                </span>
                <p className="text-xs text-foreground/90 leading-relaxed font-bold">
                  {item.title}
                </p>
              </div>
              
              {/* แถวล่าง: เส้นคั่นและรายละเอียดตัวเล็กสีเทาปกติ ไม่หนา (สไตล์เดียวกับรูปภาพตัวอย่าง) */}
              <div className="pl-9 border-t border-border/40 pt-3 mt-1">
                <p className="text-[11px] text-muted-foreground leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ================= 2. เงื่อนไขและหมายเหตุ (Exchange Requirements) =================
export function ExchangeRequirements() {
  const t = useT()

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์สากลจัดกึ่งกลาง */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("algebraExchange.overview.requirements.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("algebraExchange.overview.requirements.desc")}
          </p>
        </div>

        <div>
          {/* กล่องหมายเหตุ Alert Box สีเหลืองอำพันแบบหรูหรา */}
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6 flex gap-4 items-start shadow-xs">
            <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                {t("common.important_note", { defaultValue: "หมายเหตุสำคัญ" })}
              </p>
              <p className="text-xs text-muted-foreground/95 leading-relaxed font-semibold">
                {t("algebraExchange.overview.requirements.note")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
