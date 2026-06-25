"use client"

import { useState, useRef } from "react"
import { useT } from "@/components/language-context"
import { ProjectCard } from "@/components/project-card"

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
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  // คำนวณหาการ์ดใบที่เลื่อนมาใกล้จุดกึ่งกลางของหน้าจอมือถือมากที่สุดขณะกำลังเลื่อนการ์ด
  const handleScroll = () => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const children = container.children
    if (children.length === 0) return

    const containerCenter = container.scrollLeft + container.clientWidth / 2
    let closestIndex = 0
    let minDistance = Infinity

    for (let i = 0; i < children.length; i++) {
      const child = children[i] as HTMLElement
      const childCenter = child.offsetLeft + child.clientWidth / 2
      const distance = Math.abs(containerCenter - childCenter)
      if (distance < minDistance) {
        minDistance = distance
        closestIndex = i
      }
    }
    setActiveCardIndex(closestIndex)
  }

  // ฟังก์ชันสำหรับเลื่อนหน้าจอไปยังตำแหน่งการ์ดใบที่เลือกเมื่อคลิกที่จุดนำทาง
  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const child = container.children[index] as HTMLElement
    if (child) {
      container.scrollTo({
        left: child.offsetLeft - (container.clientWidth - child.clientWidth) / 2,
        behavior: "smooth",
      })
    }
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

        {/* ตารางแสดงการ์ดโครงการ (เลื่อนซ้าย-ขวาบนมือถือแบบจัดกึ่งกลางหน้าจอทีละ 1 การ์ด และแสดงเป็น Grid 3 คอลัมน์บนเดสก์ท็อป) */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="mt-16 flex overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory -mx-6 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-x-visible md:pb-0"
        >
          {programs.map((p) => (
            <div
              key={p.id}
              className="min-w-full px-6 snap-center snap-always md:min-w-0 md:px-0"
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
                href={p.href}
                priority={p.id === "mscd"}
              />
            </div>
          ))}
        </div>

        {/* จุดแสดงสถานะและการนำทางสไลด์บนมือถือ (Mobile Indicator Dots - แสดงเฉพาะขนาดหน้าจอ md:hidden) */}
        <div className="mt-6 flex justify-center gap-2 md:hidden">
          {programs.map((_, idx) => (
            <button
              key={_.id}
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                idx === activeCardIndex ? "w-6 bg-primary" : "w-2.5 bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
