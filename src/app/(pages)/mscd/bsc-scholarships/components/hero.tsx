"use client"

import { useT } from "@/context/language-context"
import { SharedPageBanner } from "@/components/shared-page-banner"

// คอมโพเนนต์แสดงแบนเนอร์ของโครงการทุนการศึกษาปริญญาตรี (B.Sc. Scholarships)
export function BscHero() {
  const t = useT()

  return (
    <SharedPageBanner
      title={t("bscScholarships.hero.title")}
      englishTitle={t("bscScholarships.hero.subtitle").replace(/^\(|\)$/g, "")} // ลบวงเล็บด้านนอกออกหากมี เพื่อป้องกันวงเล็บซ้อนกัน
      description={t("bscScholarships.hero.desc")}
    />
  )
}
