"use client"

import { useT } from "@/context/language-context"
import { SharedSubHero } from "@/components/shared-sub-hero"

// คอมโพเนนต์แบนเนอร์หลักหน้าโครงการเสริมสร้างความเข้มแข็งทางพีชคณิต (Algebra Enrichment Project)
export function AlgebraHero() {
  const t = useT()

  return (
    <SharedSubHero
      title={t("programDetails.algebra.title")}
      englishTitle={t("programDetails.algebra.sub")}
      description={t("programs.algebra.desc")}
    />
  )
}
