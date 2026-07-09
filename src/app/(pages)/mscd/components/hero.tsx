"use client"

import { useT } from "@/context/language-context"
import { SharedPageBanner } from "@/components/shared-page-banner"

// คอมโพเนนต์แสดงแบนเนอร์หลักหน้าโครงการพัฒนาชุมชนอย่างยั่งยืนด้วยคณิตศาสตร์ (MSCD)
export function MscdHero() {
  const t = useT()

  return (
    <SharedPageBanner
      title={t("programDetails.mscd.hero_title")}
      englishTitle={t("programDetails.mscd.sub")}
      description={t("programs.mscd.desc")}
    />
  )
}
