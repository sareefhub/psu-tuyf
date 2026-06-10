"use client"

import { useT } from "@/components/language-context"

// คอมโพเนนต์แสดงข้อมูลแนะนำ วัตถุประสงค์ ภารกิจหลัก บุคลากร และกิจกรรมสำคัญของศูนย์พีชคณิต (Algebra Center)
export function CenterOverview() {
  const t = useT()

  // ดึงข้อมูลรายการต่าง ๆ จากไฟล์ locales JSON
  const objectives = t("algebraCenter.overview.objectives.items", { returnObjects: true }) as string[]
  const missions = t("algebraCenter.overview.missions.items", { returnObjects: true }) as string[]
  const personnel = t("algebraCenter.overview.personnel.items", { returnObjects: true }) as Array<{
    role: string
    desc: string
  }>
  const activities = t("algebraCenter.overview.activities.items", { returnObjects: true }) as string[]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 space-y-10">
        
        {/* แนะนำศูนย์พีชคณิต */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary leading-snug">
            {t("algebraCenter.overview.title")}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground/90 text-pretty">
            {t("algebraCenter.overview.desc")}
          </p>
        </div>

        {/* 1. วัตถุประสงค์ */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-primary">
            {t("algebraCenter.overview.objectives.title")}
          </h3>
          <div className="space-y-4 border-l border-border/80 pl-6 mt-3">
            {objectives.map((item, idx) => (
              <div key={item} className="space-y-1">
                <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {idx + 1}. {item}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* 2. ภารกิจหลัก */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-primary">
            {t("algebraCenter.overview.missions.title")}
          </h3>
          <div className="space-y-4 border-l border-border/80 pl-6 mt-3">
            {missions.map((item, idx) => (
              <div key={item} className="space-y-1">
                <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {idx + 1}. {item}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* 3. บุคลากรประจำศูนย์ */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-primary">
            {t("algebraCenter.overview.personnel.title")}
          </h3>
          <div className="space-y-4 border-l border-border/80 pl-6 mt-3">
            {personnel.map((item, idx) => (
              <div key={item.role} className="space-y-1">
                <h4 className="text-sm font-bold text-primary flex items-start sm:items-center gap-2 flex-wrap sm:flex-nowrap">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 mt-2 sm:mt-0" />
                  <span className="shrink-0">{idx + 1}. {item.role}:</span>
                  <span className="font-normal text-muted-foreground/90 pl-6 sm:pl-0">{item.desc}</span>
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* 4. กิจกรรมสำคัญ */}
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-primary">
            {t("algebraCenter.overview.activities.title")}
          </h3>
          <div className="space-y-4 border-l border-border/80 pl-6 mt-3">
            {activities.map((item, idx) => (
              <div key={item} className="space-y-1">
                <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {idx + 1}. {item}
                </h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
