"use client"

import { useT } from "@/components/language-context"

// คีย์ข้อมูลสำหรับดึงค่าคุณสมบัติจาก i18n JSON
const eligibilityKeys = ["item1", "item2", "item3", "item4"] as const

// คอมโพเนนต์แสดงผลคุณสมบัติครูผู้เข้าอบรมของโครงการพัฒนาครูคณิตศาสตร์
export function TeacherEligibility() {
  const t = useT()

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์หน้าแรก */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("teacherImprovement.eligibility.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("teacherImprovement.eligibility.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงผลคุณสมบัติ 4 ข้อ */}
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {eligibilityKeys.map((item, index) => (
            <div
              key={item}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm space-y-3 hover:border-accent/30 transition-all duration-300 flex items-start gap-4"
            >
              <span className="h-7 w-7 rounded-full bg-accent/10 flex items-center justify-center text-xs font-extrabold text-accent shrink-0 mt-0.5">
                {index + 1}
              </span>
              <p className="text-xs text-foreground/90 leading-relaxed font-semibold">
                {t(`teacherImprovement.eligibility.items.${item}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
