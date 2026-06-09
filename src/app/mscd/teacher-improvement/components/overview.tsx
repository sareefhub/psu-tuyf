"use client"

import { useT } from "@/components/language-context"

// คอมโพเนนต์แสดงข้อมูลภาพรวมโครงการพัฒนาครูคณิตศาสตร์
export function TeacherOverview() {
  const t = useT()

  return (
    <section className="py-16 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              {t("teacherImprovement.overview.title")}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground/90 text-pretty">
              {t("teacherImprovement.overview.desc1")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
