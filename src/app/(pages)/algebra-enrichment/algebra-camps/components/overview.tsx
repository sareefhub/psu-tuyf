"use client"

import { useT } from "@/components/language-context"
import { AlertCircle } from "lucide-react"

// ================= 1. กลุ่มเป้าหมาย (Target Group) =================
export function CampTarget() {
  const t = useT()
  const items = t("algebraCamps.overview.target.items", { returnObjects: true }) as string[]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์สากลจัดกึ่งกลาง */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("algebraCamps.overview.target.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("algebraCamps.overview.target.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงผลข้อมูลกลุ่มเป้าหมาย */}
        <div className="max-w-4xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div
              key={item}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm flex gap-3 items-start hover:border-accent/30 transition-all"
            >
              {/* วงกลมตัวเลขแบบไม่มี Hover Effect (คงสีสว่างปกติ) */}
              <span className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent shrink-0">
                {index + 1}
              </span>
              {/* ปรับฟอนต์ตามขนาดข้อกำหนดของผู้สมัคร */}
              <p className="text-xs text-foreground/90 leading-relaxed font-semibold">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ================= 2. รายละเอียดการจัดค่าย (Camp Details) =================
export function CampDetails() {
  const t = useT()
  const items = t("algebraCamps.overview.details.items", { returnObjects: true }) as string[]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์สากลจัดกึ่งกลาง */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("algebraCamps.overview.details.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("algebraCamps.overview.details.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงรายละเอียดการจัดค่าย */}
        <div className="max-w-4xl mx-auto space-y-4">
          {items.map((item, index) => (
            <div
              key={item}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm flex gap-3 items-start hover:border-accent/30 transition-all"
            >
              <span className="h-6 w-6 rounded-full bg-accent/15 flex items-center justify-center text-xs font-bold text-accent shrink-0">
                {index + 1}
              </span>
              <p className="text-xs text-foreground/90 leading-relaxed font-semibold">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ================= 3. คุณสมบัติของผู้สมัคร (Eligibility & Portfolio) =================
export function CampEligibility() {
  const t = useT()
  const items = t("algebraCamps.overview.eligibility.items", { returnObjects: true }) as string[]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์สากลจัดกึ่งกลาง */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("algebraCamps.overview.eligibility.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("algebraCamps.overview.eligibility.desc")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* คำนำเสนอการส่งแฟ้มสะสมผลงาน */}
          <div className="bg-card border border-border/40 rounded-3xl p-6 md:p-8 shadow-xs space-y-6">
            <h3 className="text-sm font-bold text-primary">
              {t("algebraCamps.overview.eligibility.subDesc")}
            </h3>

            {/* แสดงรายการเอกสารในพอร์ตโฟลิโอ 4 ข้อหลัก */}
            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((item, index) => (
                <div
                  key={item}
                  className="bg-secondary/20 border border-border/30 rounded-2xl p-5 flex gap-3 items-start hover:border-accent/20 transition-all"
                >
                  <span className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-xs text-foreground/90 leading-relaxed font-semibold">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* กล่องหมายเหตุคำแนะนำจากคณะกรรมการจัดสอบสัมภาษณ์ */}
          <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-5 flex gap-3 items-start shadow-xs">
            <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="text-2xs font-bold text-amber-600 uppercase tracking-wider">
                {t("common.important_note", { defaultValue: "หมายเหตุ" })}
              </p>
              <p className="text-xs text-muted-foreground/90 leading-relaxed font-semibold">
                {t("algebraCamps.overview.eligibility.note")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
