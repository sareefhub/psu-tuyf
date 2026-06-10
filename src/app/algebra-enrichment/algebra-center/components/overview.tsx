"use client"

import { useT } from "@/components/language-context"
import { Users } from "lucide-react"

// ================= 1. วัตถุประสงค์ (Objectives) =================
export function CenterObjectives() {
  const t = useT()
  const objectives = t("algebraCenter.overview.objectives.items", { returnObjects: true }) as string[]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์สากลเดียวกับ B.Sc. Scholarships */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("algebraCenter.overview.objectives.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("algebraCenter.overview.objectives.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงผลวัตถุประสงค์แบบการ์ดกริด */}
        <div className="grid gap-6 md:grid-cols-2">
          {objectives.map((item, index) => (
            <div
              key={item}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm space-y-3 hover:border-accent/30 transition-all flex gap-3 items-start"
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
    </section>
  )
}

// ================= 2. ภารกิจหลัก (Core Mission) =================
export function CenterMissions() {
  const t = useT()
  const missions = t("algebraCenter.overview.missions.items", { returnObjects: true }) as string[]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์สากลเดียวกับ B.Sc. Scholarships */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("algebraCenter.overview.missions.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("algebraCenter.overview.missions.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงผลภารกิจหลักแบบการ์ดกริด */}
        <div className="grid gap-6 md:grid-cols-2">
          {missions.map((item, index) => (
            <div
              key={item}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm space-y-3 hover:border-accent/30 transition-all flex gap-3 items-start"
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

// ================= 3. บุคลากรประจำศูนย์ (Personnel) =================
export function CenterPersonnel() {
  const t = useT()
  const personnel = t("algebraCenter.overview.personnel.items", { returnObjects: true }) as Array<{
    role: string
    desc: string
  }>

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์สากลเดียวกับ B.Sc. Scholarships */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("algebraCenter.overview.personnel.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("algebraCenter.overview.personnel.desc")}
          </p>
        </div>

        {/* เลย์เอาต์การแสดงผลข้อมูลบุคลากรแบบการ์ด 4 คอลัมน์ เลียนแบบสไตล์ส่วนสนับสนุนทุนการศึกษา */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {personnel.map((item) => (
            <div
              key={item.role}
              className="bg-card border border-border/50 rounded-2xl p-6 text-center shadow-sm flex flex-col justify-between hover:border-accent/30 transition-all"
            >
              {/* ไอคอนกลมกึ่งกลางการ์ด */}
              <div className="flex justify-center mb-4">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Users className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-primary text-sm mb-2">
                  {item.role}
                </h3>
                <p className="text-xs text-muted-foreground/90 leading-relaxed font-semibold">
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

// ================= 4. กิจกรรมสำคัญ (Key Activities) =================
export function CenterActivities() {
  const t = useT()
  const activities = t("algebraCenter.overview.activities.items", { returnObjects: true }) as string[]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์สากลเดียวกับ B.Sc. Scholarships */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("algebraCenter.overview.activities.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("algebraCenter.overview.activities.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงผลกิจกรรมสำคัญแบบการ์ดกริด */}
        <div className="grid gap-6 md:grid-cols-2">
          {activities.map((item, index) => (
            <div
              key={item}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm space-y-3 hover:border-accent/30 transition-all flex gap-3 items-start"
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
    </section>
  )
}
