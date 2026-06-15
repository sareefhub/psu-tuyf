"use client"

import { useT } from "@/components/language-context"
import { Calendar, BookOpen, Presentation, Sparkles } from "lucide-react"

// คอมโพเนนต์แสดงข้อมูลกิจกรรมและค่ายคณิตศาสตร์สำหรับนักเรียน
export function ActivitiesSection() {
  const t = useT()

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อส่วนกิจกรรม */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("studentImprovement.activities.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            {t("studentImprovement.activities.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงการ์ดกิจกรรมค่าย 2 รุ่นหลัก */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* ค่ายคณิตศาสตร์แคมป์ รุ่นที่ 1 */}
          <div className="group relative bg-card border border-border/50 rounded-3xl p-8 shadow-xs hover:shadow-md hover:border-accent/40 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full group-hover:bg-accent/10 transition-all duration-300" />
            <div className="flex gap-4 items-start relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-primary leading-tight">
                  {t("studentImprovement.activities.camp1.title")}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground/90 font-medium">
                  {t("studentImprovement.activities.camp1.desc")}
                </p>
                <div className="flex items-center gap-2 text-xs text-accent font-semibold pt-2">
                  <Calendar className="h-4 w-4" />
                  <span>กิจกรรมพัฒนาทักษะวิชาการและการคิดสร้างสรรค์</span>
                </div>
              </div>
            </div>
          </div>

          {/* อบรมการเตรียมความพร้อมสู่มหาวิทยาลัย */}
          <div className="group relative bg-card border border-border/50 rounded-3xl p-8 shadow-xs hover:shadow-md hover:border-accent/40 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-all duration-300" />
            <div className="flex gap-4 items-start relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-6 w-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-primary leading-tight">
                  {t("studentImprovement.activities.camp2.title")}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground/90 font-medium">
                  {t("studentImprovement.activities.camp2.desc")}
                </p>
                <div className="flex items-center gap-2 text-xs text-primary font-semibold pt-2">
                  <Presentation className="h-4 w-4" />
                  <span>แนะแนวการศึกษาต่อระดับอุดมศึกษา</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
