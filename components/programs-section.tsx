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
    image: "/images/mscd.png",
    titleTh: "การพัฒนาชุมชนอย่างยั่งยืนด้วยคณิตศาสตร์",
    titleEn: "Mathematics for Sustainable Community Development",
    descTh:
      "พัฒนาศักยภาพทางคณิตศาสตร์ในทุกระดับชั้น ทั้งนักเรียน นักศึกษา และครู เพื่อรากฐานการพัฒนาชุมชนอย่างยั่งยืน",
    descEn:
      "Developing mathematical potential at all levels — students, undergraduates, and teachers — to build a foundation for sustainable community development.",
  },
  {
    id: "mgss",
    abbr: "MGSS",
    image: "/images/mgss.png",
    titleTh: "สนับสนุนนักศึกษาระดับบัณฑิตศึกษาในสาขาคณิตศาสตร์",
    titleEn: "Mathematical Graduated Students Supporting Project",
    descTh:
      "ส่งเสริมการวิจัยและการเรียนการสอน พร้อมทุนสนับสนุนนักศึกษาที่มีศักยภาพสูงในระดับบัณฑิตศึกษา",
    descEn:
      "Promoting research and teaching, with funding to support highly capable students in graduate-level studies.",
  },
  {
    id: "algebra",
    abbr: "Algebra Enrichment",
    image: "/images/algebra-enrichment.png",
    titleTh: "เสริมสร้างความเข้มแข็งทางพีชคณิต",
    titleEn: "Algebra Enrichment Project",
    descTh:
      "ยกระดับความรู้ด้านพีชคณิตในประเทศไทย และจัดตั้งศูนย์พีชคณิตภาคใต้เป็นศูนย์กลางการเรียนรู้และวิจัย",
    descEn:
      "Enhancing algebra knowledge in Thailand and establishing a southern Algebra Center as a hub for learning and research.",
  },
]

export function ProgramsSection() {
  const t = useT()

  return (
    <section id="programs" className="bg-secondary/30 flex min-h-[calc(100vh-4rem)] items-center py-20 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-6 w-full">
        {/* ส่วนหัวข้อหลักของโครงการ */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t("3 โครงการหลักภายใต้ PSU-TUYF", "Three Main Projects under PSU-TUYF")}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground/80">
            {t(
              "โครงการที่มุ่งเน้นการยกระดับคุณภาพการศึกษาและการวิจัยในสาขาคณิตศาสตร์",
              "Projects dedicated to elevating the quality of education and research in mathematics.",
            )}
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
                  {t(p.titleTh, p.titleEn)}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground/75">
                  {t(p.descTh, p.descEn)}
                </p>

                {/* ลิงก์รายละเอียดแบบคลีน (Text Link พร้อมไอคอนขยับได้เมื่อ Hover และแก้ไข Linter: aria-label) */}
                <Button
                  render={<a href={`#${p.id}`} aria-label={t(`ดูรายละเอียดของโครงการ ${p.abbr}`, `View details of ${p.abbr} project`)} />}
                  nativeButton={false}
                  variant="link"
                  className="mt-6 p-0 h-auto justify-start font-semibold text-primary hover:text-accent hover:no-underline"
                >
                  {t("ดูรายละเอียด", "More Detail")}
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


