"use client"

import { useT } from "@/components/language-context"
import { Award, BookOpen, Compass, Share2 } from "lucide-react"

// คีย์ประโยชน์ที่ครูจะได้รับ
const benefitKeys = [
  { key: "certificate", icon: Award, color: "text-blue-500 bg-blue-500/10" },
  { key: "materials", icon: BookOpen, color: "text-amber-500 bg-amber-500/10" },
  { key: "allowance", icon: Compass, color: "text-emerald-500 bg-emerald-500/10" },
  { key: "network", icon: Share2, color: "text-indigo-500 bg-indigo-500/10" },
] as const

export function BenefitsSection() {
  const t = useT()

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์พรีเมียม */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("teacherImprovement.benefits.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            {t("teacherImprovement.benefits.desc")}
          </p>
        </div>

        {/* การ์ดสิทธิประโยชน์ที่จะได้รับ 4 ช่อง */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefitKeys.map(({ key, icon: Icon, color }) => (
            <div
              key={key}
              className="bg-card border border-border/50 rounded-2xl p-6 text-center shadow-xs flex flex-col justify-between hover:shadow-md hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${color}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-primary text-sm mb-2">
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
