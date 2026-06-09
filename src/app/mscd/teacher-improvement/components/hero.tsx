"use client"

import { useT } from "@/components/language-context"

// คอมโพเนนต์แสดงแบนเนอร์ของโครงการพัฒนาครูคณิตศาสตร์ (Teacher Improvement)
export function TeacherHero() {
  const t = useT()

  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden py-16 lg:py-20 animate-fade-in">
      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary/95" />
      <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight">
          <span className="block text-primary-foreground">
            {t("teacherImprovement.hero.title")}
          </span>
          <span className="block text-primary-foreground/80 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-2 tracking-wide font-sans">
            {t("teacherImprovement.hero.subtitle")}
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-pretty text-sm font-light leading-relaxed text-primary-foreground/80 sm:text-base">
          {t("teacherImprovement.hero.desc")}
        </p>
      </div>
    </section>
  )
}
