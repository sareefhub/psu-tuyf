"use client"

import { useT } from "@/components/language-context"

export function BscHero() {
  const t = useT()
  
  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden py-16 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/95" />
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="mb-4">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium text-primary-foreground/90">
            MSCD
          </span>
        </div>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t("ทุนการศึกษาระดับปริญญาตรี (B.Sc. Scholarships)", "B.Sc. Scholarships (Undergraduate)")}
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-base font-light leading-relaxed text-primary-foreground/80 sm:text-lg">
          {t(
            "มุ่งมั่นสร้างนักคณิตศาสตร์ที่มีคุณภาพเพื่อตอบสนองความต้องการของสังคม โดยมอบทุนการศึกษาให้กับนักศึกษาไทยและนักเรียนกัมพูชาในระดับปริญญาตรีเพื่อพัฒนาศักยภาพอย่างต่อเนื่อง",
            "Committed to cultivating high-quality mathematicians to meet societal needs by awarding scholarships to Thai and Cambodian undergraduate students for continuous capacity building."
          )}
        </p>
      </div>
    </section>
  )
}
