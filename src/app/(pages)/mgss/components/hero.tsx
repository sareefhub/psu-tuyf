"use client"

import { useT } from "@/context/language-context"
import { SharedPageBanner } from "@/components/shared-page-banner"

// คอมโพเนนต์แบนเนอร์หลักหน้าโครงการสนับสนุนนักศึกษาระดับบัณฑิตศึกษา (MGSS)
export function MgssHero() {
  const t = useT()

  return (
    <SharedPageBanner
      title={t("programDetails.mgss.hero_title")}
      englishTitle={t("programDetails.mgss.sub")}
      description={t("programs.mgss.desc")}
    />
  )
}
