"use client"

import { useT } from "@/context/language-context"
import { SharedPageBanner } from "@/components/shared-page-banner"

// คอมโพเนนต์แบนเนอร์หลักหน้าโครงการเสริมสร้างความเข้มแข็งทางพีชคณิต (Algebra Enrichment Project)
export function AlgebraHero() {
  const t = useT()

  return (
    <SharedPageBanner
      title={t("programDetails.algebra.title")}
      englishTitle={t("programDetails.algebra.sub")}
      description={t("programs.algebra.desc")}
    />
  )
}
