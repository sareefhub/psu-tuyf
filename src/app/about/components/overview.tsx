"use client"

import { useT } from "@/components/language-context"

// ================= 1. ความเป็นมา (History) =================
// คอมโพเนนต์แสดงข้อมูลประวัติความเป็นมาของกองทุน
export function FundHistory() {
  const t = useT()

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* การ์ดแสดงความเป็นมาพร้อมขอบและเงาตามสไตล์ระบบ */}
        <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm space-y-4 hover:border-accent/30 transition-all duration-300">
          <h3 className="text-lg font-bold text-primary flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {t("aboutFund.history.title")}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground/90 text-pretty pl-4 border-l-2 border-accent/20">
            {t("aboutFund.history.desc")}
          </p>
        </div>
      </div>
    </section>
  )
}

// ================= 2. วัตถุประสงค์ (Objectives) =================
// คอมโพเนนต์แสดงรายการวัตถุประสงค์หลัก 4 ข้อของกองทุน
export function FundObjectives() {
  const t = useT()
  // ดึงรายการวัตถุประสงค์ที่เป็นอาร์เรย์ (Array) จาก JSON
  const objectives = t("aboutFund.objectives.items", { returnObjects: true }) as string[]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์สากลจัดกึ่งกลางเหมือนหน้าหลักสูตรอื่น */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("aboutFund.objectives.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("aboutFund.objectives.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงผลวัตถุประสงค์แบบการ์ดกริด 2 คอลัมน์ */}
        <div className="grid gap-6 md:grid-cols-2">
          {objectives.map((item, index) => (
            <div
              key={item}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm space-y-3 hover:border-accent/30 transition-all flex gap-3 items-start"
            >
              {/* ตัวเลขลำดับข้อดีไซน์กลมสีแบรนด์ */}
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
    </section>
  )
}
