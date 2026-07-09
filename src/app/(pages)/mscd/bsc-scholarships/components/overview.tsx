"use client"

import { SharedOverview } from "@/components/shared-overview"

export function ProjectOverview() {
  return (
    <SharedOverview
      translationKey="bscScholarships"
      descKeys={["desc1", "desc2"]}
    />
  )
}
