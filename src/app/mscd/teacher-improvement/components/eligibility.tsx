"use client"

import { useT } from "@/components/language-context"

// คีย์รายการคุณสมบัติครู
const eligibilityKeys = ["item1", "item2", "item3", "item4"] as const

export function EligibilitySection() {
  const t = useT()

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์พรีเมียม */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("teacherImprovement.eligibility.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            {t("teacherImprovement.eligibility.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงรายการคุณสมบัติ 4 ข้อ */}
        <div className="grid gap-6 md:grid-cols-2">
          {eligibilityKeys.map((key, index) => {
            return (
              <div
                key={key}
                className="bg-card border border-border/50 rounded-2xl p-6 shadow-xs hover:border-accent/30 transition-all duration-300 flex gap-4 items-start"
              >
                <span className="h-6 w-6 rounded-full bg-accent/15 flex items-center justify-center text-xs font-bold text-accent shrink-0">
                  {index + 1}
                </span>
                <p className="text-xs text-foreground/90 leading-relaxed font-semibold">
                  {t(`teacherImprovement.eligibility.items.${key}`)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
