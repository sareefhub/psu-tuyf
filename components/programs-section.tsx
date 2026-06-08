"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useT } from "@/components/language-context"

const programs = [
  {
    id: "mscd",
    abbr: "MSCD",
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
    <section id="programs" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t("3 โครงการหลักภายใต้ PSU-TUYF", "Three Main Projects under PSU-TUYF")}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t(
              "โครงการที่มุ่งเน้นการยกระดับคุณภาพการศึกษาและการวิจัยในสาขาคณิตศาสตร์",
              "Projects dedicated to elevating the quality of education and research in mathematics.",
            )}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-lg font-bold text-primary-foreground">
                {p.abbr.charAt(0)}
              </div>
              <h3 className="mt-5 text-xl font-bold text-primary">{p.abbr}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{t(p.titleTh, p.titleEn)}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {t(p.descTh, p.descEn)}
              </p>
              <Button
                render={<a href={`#${p.id}`} />}
                nativeButton={false}
                variant="outline"
                className="mt-6 w-full rounded-full border-border"
              >
                {t("ดูรายละเอียด", "More Detail")}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
