"use client"

import { useT } from "@/components/language-context"
import { ProjectCard } from "@/components/project-card"

// โครงสร้างข้อมูลโครงการ 3 โครงการหลัก พร้อมระบุพาธรูปภาพของแต่ละโครงการ
const programs = [
  {
    id: "mscd",
    abbr: "MSCD",
    image: "/images/icon/mscd.png",
    titleKey: "programs.mscd.title",
    descKey: "programs.mscd.desc",
  },
  {
    id: "mgss",
    abbr: "MGSS",
    image: "/images/icon/mgss.png",
    titleKey: "programs.mgss.title",
    descKey: "programs.mgss.desc",
  },
  {
    id: "algebra",
    abbr: "Algebra Enrichment",
    image: "/images/icon/algebra-enrichment.png",
    titleKey: "programs.algebra.title",
    descKey: "programs.algebra.desc",
  },
]

export function ProgramsSection() {
  const t = useT()

  return (
    <section
      id="programs"
      className="bg-secondary/30 flex min-h-[calc(100vh-4rem)] items-center py-20 scroll-mt-16"
    >
      <div className="mx-auto max-w-7xl px-6 w-full">
        {/* ส่วนหัวข้อหลักของโครงการ */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t("programs.title")}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground/80">
            {t("programs.subtitle")}
          </p>
        </div>

        {/* ตารางแสดงการ์ดโครงการ (3 คอลัมน์) ในดีไซน์ที่โปร่งสบายและคลีน */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {programs.map((p) => (
            <ProjectCard
              key={p.id}
              abbr={p.abbr}
              title={t(p.titleKey)}
              description={t(p.descKey)}
              image={p.image}
              imageAspect="16/10"
              imageFit="contain"
              moreDetailText={t("programs.more_detail")}
              ariaLabel={t("programs.view_details_aria", { abbr: p.abbr })}
              href={p.id === "mscd" ? "/mscd" : undefined}
              priority={p.id === "mscd"}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
