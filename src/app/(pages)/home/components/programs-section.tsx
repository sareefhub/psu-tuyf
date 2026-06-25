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

  // ดึงที่อยู่ลิงก์ตาม ID โครงการย่อย เพื่อนำทางผู้ใช้ไปยังหน้านั้นๆ
  const getProgramHref = (id: string) => {
    if (id === "mscd") return "/mscd"
    if (id === "mgss") return "/mgss"
    if (id === "algebra") return "/algebra-enrichment" // ลิงก์ไปยังหน้าหลักของโครงการพีชคณิต
    return undefined
  }

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

        {/* ตารางแสดงการ์ดโครงการ (เลื่อนซ้าย-ขวาบนมือถือแบบมี Snap และแสดงเป็น Grid 3 คอลัมน์บนเดสก์ท็อป) */}
        <div className="mt-16 flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-x-visible md:pb-0">
          {programs.map((p) => (
            <div
              key={p.id}
              className="min-w-[85vw] sm:min-w-[340px] md:min-w-0 snap-start snap-always"
            >
              <ProjectCard
                abbr={p.abbr}
                title={t(p.titleKey)}
                description={t(p.descKey)}
                image={p.image}
                imageAspect="16/10"
                imageFit="contain"
                moreDetailText={t("programs.more_detail")}
                ariaLabel={t("programs.view_details_aria", { abbr: p.abbr })}
                href={getProgramHref(p.id)}
                priority={p.id === "mscd"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
