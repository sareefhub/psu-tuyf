"use client"

import { useT } from "@/context/language-context"
import { Calendar } from "lucide-react"

// ================= ข้อมูลกำหนดการคัดเลือก =================
const timelineData = [
  { key: "step1", id: "app-sub" },
  { key: "step2", id: "interview" },
  { key: "step3", id: "announcement" },
]

export function SelectionTimeline() {
  const t = useT()

  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Calendar className="h-5 w-5 text-accent" />
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              {t("bscScholarships.timeline.title")}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground/80">
            {t("bscScholarships.timeline.desc")}
          </p>
        </div>

        <div className="relative border-l-2 border-accent/25 pl-8 ml-4 sm:ml-6 space-y-10">
          {timelineData.map((step) => (
            <div key={step.id} className="relative">
              {/* จุดกลมนำสายตาบนไทม์ไลน์ จัดตำแหน่งให้อยู่กึ่งกลางเส้นพอดี โดยคำนวณระยะเยื้องซ้าย -left-[45px] */}
              <span className="absolute -left-[45px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-background border-2 border-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <div>
                <span className="text-xs font-bold text-accent uppercase tracking-wider block">
                  {t(`bscScholarships.timeline.steps.${step.key}.date`)}
                </span>
                <h3 className="text-lg font-bold text-primary mt-1">
                  {t(`bscScholarships.timeline.steps.${step.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {t(`bscScholarships.timeline.steps.${step.key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
