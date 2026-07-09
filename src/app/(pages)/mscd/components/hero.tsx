"use client"

import { useT } from "@/context/language-context"
import { SharedSubHero } from "@/components/shared-sub-hero"

// คอมโพเนนต์แสดงแบนเนอร์หลักหน้าโครงการพัฒนาชุมชนอย่างยั่งยืนด้วยคณิตศาสตร์ (MSCD)
export function MscdHero() {
  const t = useT()

  return (
    <SharedSubHero
      title={t("programDetails.mscd.hero_title")}
      englishTitle={t("programDetails.mscd.sub")}
      description={t("programs.mscd.desc")}
    />
  )
}
