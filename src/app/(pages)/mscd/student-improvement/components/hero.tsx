"use client"

import { useT, useLanguage } from "@/context/language-context"

// คอมโพเนนต์แสดงแบนเนอร์ของโครงการพัฒนาศักยภาพนักเรียน (Student Improvement)
export function StudentHero() {
  const t = useT()
  const { lang } = useLanguage()

  // ทำการแยกชื่อภาษาอังกฤษในวงเล็บออกมาเพื่อจัดสัดส่วนและขนาดตัวอักษรใหม่
  const titleFull = t("studentImprovement.hero.title")
  const title = titleFull.includes(" (") ? titleFull.split(" (")[0] : titleFull

  // หลีกเลี่ยงการใช้ nested ternary เพื่อให้โค้ดสะอาดและแก้ไขข้อเตือน SonarLint
  let subtitle = ""
  if (titleFull.includes(" (")) {
    subtitle = `(${titleFull.split(" (")[1]}`
  } else if (lang === "th") {
    subtitle = "(Student Improvement)"
  }

  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden py-16 lg:py-20 animate-fade-in">
      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary/95" />
      <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight">
          <span className="block text-primary-foreground">
            {title}
          </span>
          {subtitle && (
            <span className="block text-primary-foreground/80 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-2 tracking-wide font-sans">
              {subtitle}
            </span>
          )}
        </h1>

        <p className="mt-6 max-w-3xl text-pretty text-sm font-light leading-relaxed text-primary-foreground/80 sm:text-base flex flex-col gap-2">
          {/* ย้าย ภายใต้ PSU-TUYF... มาอยู่ที่จุดนี้ตามคำขอ */}
          <span className="block font-medium text-primary-foreground">
            {t("studentImprovement.hero.subtitle")}
          </span>
          <span className="block text-primary-foreground/90">
            {t("studentImprovement.hero.desc")}
          </span>
        </p>
      </div>
    </section>
  )
}
