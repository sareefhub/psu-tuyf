"use client"

import { useT } from "@/components/language-context"
import { Award, Layers, Users, Zap } from "lucide-react"

// คอมโพเนนต์แสดงผลหลักสูตรและการอบรมพัฒนาครูคณิตศาสตร์
export function TeacherActivities() {
  const t = useT()

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* ส่วนหัวข้อหลัก */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("teacherImprovement.activities.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("teacherImprovement.activities.desc")}
          </p>
        </div>

        {/* ตารางหลักสูตรการอบรมครู 2 หลักสูตรใหญ่ */}
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* หลักสูตรที่ 1: Active Learning */}
          <div className="group bg-card border border-border/50 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:border-accent/30 hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-105 transition-transform duration-300">
                  <Zap className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Active Learning
                </span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors">
                {t("teacherImprovement.activities.course1.title")}
              </h3>
              <p className="text-xs text-muted-foreground/90 leading-relaxed text-pretty font-semibold">
                {t("teacherImprovement.activities.course1.desc")}
              </p>
            </div>
            
            <div className="border-t border-border/40 pt-6 mt-8 flex flex-wrap items-center justify-between gap-y-3 text-[11px] text-muted-foreground/80 font-bold">
              <span className="flex items-center gap-1.5">
                <Layers className="h-4 w-4 text-accent/70" />
                หัวข้อ: กิจกรรม, บอร์ดเกม & โปรแกรม GSP/GeoGebra
              </span>
            </div>
          </div>

          {/* หลักสูตรที่ 2: Research & Evaluation */}
          <div className="group bg-card border border-border/50 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:border-accent/30 hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:scale-105 transition-transform duration-300">
                  <Award className="h-6 w-6" />
                </div>
                <span className="text-[10px] font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  PLC & Assessment
                </span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-3 leading-snug group-hover:text-accent transition-colors">
                {t("teacherImprovement.activities.course2.title")}
              </h3>
              <p className="text-xs text-muted-foreground/90 leading-relaxed text-pretty font-semibold">
                {t("teacherImprovement.activities.course2.desc")}
              </p>
            </div>

            <div className="border-t border-border/40 pt-6 mt-8 flex flex-wrap items-center justify-between gap-y-3 text-[11px] text-muted-foreground/80 font-bold">
              <span className="flex items-center gap-1.5">
                <Users className="h-4 w-4 text-accent/70" />
                หัวข้อ: วิจัยในชั้นเรียน, PLC & เทคโนโลยีวัดผลออนไลน์
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
