"use client"

import { useT } from "@/components/language-context"
import { Award, BookOpen, Users, Compass } from "lucide-react"

const benefitKeys = ["certificate", "materials", "allowance", "network"] as const

// ฟังก์ชันระบุไอคอนและคลาสไอคอนเพื่อให้ตรงกับแต่ละข้อสไตล์พรีเมียม
const getBenefitIcon = (key: typeof benefitKeys[number]) => {
  switch (key) {
    case "certificate":
      return <Award className="h-5 w-5" />
    case "materials":
      return <BookOpen className="h-5 w-5" />
    case "allowance":
      return <Compass className="h-5 w-5" />
    case "network":
      return <Users className="h-5 w-5" />
  }
}

// คอมโพเนนต์แสดงผลประโยชน์และสิ่งสนับสนุนที่จะได้รับ
export function TeacherBenefits() {
  const t = useT()

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์หน้าแรก */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("teacherImprovement.benefits.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("teacherImprovement.benefits.desc")}
          </p>
        </div>

        {/* การ์ดสี่ช่องแสดงสิทธิประโยชน์และทักษะความรู้ */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {benefitKeys.map((key) => (
            <div
              key={key}
              className="bg-card border border-border/50 rounded-2xl p-6 text-center shadow-sm flex flex-col justify-between hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                  {getBenefitIcon(key)}
                </div>
              </div>
              <div>
                <h3 className="font-bold text-primary text-sm mb-2 group-hover:text-accent transition-colors">
                  {t(`teacherImprovement.benefits.items.${key}.title`)}
                </h3>
                <p className="text-xs text-muted-foreground/90 leading-relaxed font-semibold">
                  {t(`teacherImprovement.benefits.items.${key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
