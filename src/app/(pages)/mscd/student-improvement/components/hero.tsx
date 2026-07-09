"use client"

import { useT, useLanguage } from "@/context/language-context"
import { SharedSubHero } from "@/components/shared-sub-hero"

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
    subtitle = titleFull.split(" (")[1].replace(/\)$/, "")
  } else if (lang === "th") {
    subtitle = "Student Improvement"
  }

  return (
    <SharedSubHero
      title={title}
      englishTitle={subtitle}
      description={
        <span className="flex flex-col gap-2">
          <span className="block font-medium text-primary-foreground">
            {t("studentImprovement.hero.subtitle")}
          </span>
          <span className="block text-primary-foreground/90">
            {t("studentImprovement.hero.desc")}
          </span>
        </span>
      }
    />
  )
}
