"use client"

import Image from "next/image" // นำเข้า Image สำหรับโหลดและจัดการรูปภาพอย่างมีประสิทธิภาพ
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useT } from "@/components/language-context"

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
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-300 hover:border-border hover:shadow-sm"
            >
              {/* ส่วนรูปภาพโครงการแบบเรียบง่ายและคลีน (แสดงสัดส่วนปกติ ไม่ซูม ไม่ครอป ด้วย object-contain และ p-4) */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-muted/20">
                <Image
                  src={p.image}
                  alt={p.abbr}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain p-4 transition-opacity duration-300 group-hover:opacity-90"
                  priority={p.id === "mscd"} // ให้ภาพแรกโหลดด้วยความสำคัญสูง
                />
              </div>

              {/* ส่วนเนื้อหาหลักในแบบมินิมอล */}
              <div className="flex flex-1 flex-col p-6">
                {/* แสดงชื่อย่อโครงการเป็น Tag ขนาดเล็กอยู่เหนือชื่อหลัก */}
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/85">
                  {p.abbr}
                </span>

                <h3 className="mt-2 text-lg font-bold leading-snug text-primary transition-colors group-hover:text-accent">
                  {t(p.titleKey)}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground/75">
                  {t(p.descKey)}
                </p>

                {/* ปุ่มดูรายละเอียดที่ถูกระงับการนำทางชั่วคราวด้วย e.preventDefault() เนื่องจากยังไม่มีหน้าข้อมูลย่อย */}
                <Button
                  render={
                    <a
                      href={`#${p.id}`}
                      onClick={(e) => e.preventDefault()}
                      aria-label={t("programs.view_details_aria", { abbr: p.abbr })}
                    />
                  }
                  nativeButton={false}
                  variant="link"
                  className="mt-6 p-0 h-auto justify-start font-semibold text-primary hover:text-accent hover:no-underline"
                >
                  {t("programs.more_detail")}
                  <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
