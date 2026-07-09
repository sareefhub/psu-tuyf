"use client"

import { useT } from "@/context/language-context"
import { ProjectCard } from "@/components/project-card"
import { CarouselWrapper } from "@/components/carousel-wrapper"

// โครงสร้างข้อมูลโครงการ 3 โครงการหลัก พร้อมระบุพาธรูปภาพและลิงก์เชื่อมโยงปลายทาง
const programs = [
  {
    id: "mscd",
    abbr: "MSCD",
    image: "/images/icon/mscd.png",
    titleKey: "programs.mscd.title",
    descKey: "programs.mscd.desc",
    href: "/mscd",
  },
  {
    id: "mgss",
    abbr: "MGSS",
    image: "/images/icon/mgss.png",
    titleKey: "programs.mgss.title",
    descKey: "programs.mgss.desc",
    href: "/mgss",
  },
  {
    id: "algebra",
    abbr: "Algebra Enrichment",
    image: "/images/icon/algebra-enrichment.png",
    titleKey: "programs.algebra.title",
    descKey: "programs.algebra.desc",
    href: "/algebra-enrichment",
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
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground/80 text-base">
            {t("programs.subtitle")}
          </p>
        </div>

        {/* เรียกใช้ CarouselWrapper สำหรับจัดการสไลด์บนมือถือ และระบบ Grid บนเดสก์ท็อป */}
        <CarouselWrapper desktopCols={3} containerClassName="mt-16">
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
              href={p.href}
              priority={p.id === "mscd"}
            />
          ))}
        </CarouselWrapper>
      </div>
    </section>
  )
}
