"use client"

import { Check } from "lucide-react"
import { useT } from "@/components/language-context"

const details = [
  {
    id: "mscd",
    number: "01",
    abbr: "MSCD",
    titleTh: "โครงการพัฒนาชุมชนอย่างยั่งยืนด้วยคณิตศาสตร์",
    titleEn: "Mathematics for Sustainable Community Development (MSCD) Project",
    subTh: "Mathematics for Sustainable Community Development",
    subEn: "โครงการพัฒนาชุมชนอย่างยั่งยืนด้วยคณิตศาสตร์",
    descTh:
      "มุ่งเน้นการพัฒนาศักยภาพทางคณิตศาสตร์ในหลายระดับชั้น ทั้งนักเรียนระดับมัธยมศึกษา นักศึกษาระดับปริญญาตรี และครูคณิตศาสตร์ เพื่อเสริมสร้างรากฐานความรู้และทักษะที่จำเป็นสำหรับการพัฒนาชุมชนอย่างยั่งยืน แบ่งการดำเนินการเป็น 3 ส่วนหลัก",
    descEn:
      "This project focuses on developing mathematical potential at various levels, including secondary school students, undergraduate students, and mathematics teachers in secondary schools. Its goal is to strengthen the foundational knowledge and essential skills needed for sustainable community development. The project is divided into three main components:",
    itemsTh: [
      "การให้ทุนการศึกษาแก่นักศึกษาระดับปริญญาตรี",
      "โครงการเพื่อการพัฒนานักเรียนระดับมัธยมศึกษา",
      "โครงการอบรมครูคณิตศาสตร์",
    ],
    itemsEn: [
      "Scholarships for undergraduate students",
      "Projects for developing secondary school students",
      "Projects for developing secondary school mathematics teachers",
    ],
  },
  {
    id: "mgss",
    number: "02",
    abbr: "MGSS",
    titleTh: "โครงการสนับสนุนนักศึกษาระดับบัณฑิตศึกษาในสาขาคณิตศาสตร์",
    titleEn: "Mathematical Graduated Students Supporting (MGSS) Project",
    subTh: "Mathematical Graduated Students Supporting Project",
    subEn: "โครงการสนับสนุนนักศึกษาระดับบัณฑิตศึกษาในสาขาคณิตศาสตร์",
    descTh:
      "ส่งเสริมและพัฒนาการวิจัยและการเรียนการสอนในสาขาคณิตศาสตร์และคณิตศาสตร์ประยุกต์ ช่วยเหลือนักศึกษาไทยและต่างชาติที่มีศักยภาพสูงและมีความสนใจในการทำวิจัยขั้นสูงและศึกษาต่อในระดับบัณฑิตศึกษา ณ สาขาวิชาคณิตศาสตร์ มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตหาดใหญ่ และวิทยาเขตปัตตานี ปัจจุบันมีหลักสูตรคณิตศาสตร์ 3 หลักสูตร",
    descEn:
      "This project aims to promote and develop research and teaching in mathematics and applied mathematics. It receives funding to assist highly capable Thai and international students who are interested in advanced research and pursuing graduate studies in mathematics, statistics, and applied mathematics at PSU Hat Yai and Pattani campuses. Currently, the university offers three mathematics curricula:",
    itemsTh: [
      "หลักสูตรปรัชญาดุษฎีบัณฑิต สาขาคณิตศาสตร์ (วิทยาเขตหาดใหญ่)",
      "หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาคณิตศาสตร์ (วิทยาเขตหาดใหญ่)",
      "หลักสูตรวิทยาศาสตรมหาบัณฑิต สาขาคณิตศาสตร์ประยุกต์และนวัตกรรมการสอนคณิตศาสตร์ (วิทยาเขตปัตตานี)",
    ],
    itemsEn: [
      "Doctor of Philosophy Program in Mathematics (Hat Yai Campus)",
      "Master of Science Program in Mathematics (Hat Yai Campus)",
      "Master of Science Program in Applied Mathematics and Mathematics Teaching Innovation (Pattani Campus)",
    ],
  },
  {
    id: "algebra",
    number: "03",
    abbr: "Algebra Enrichment",
    titleTh: "โครงการเสริมสร้างความเข้มแข็งทางพีชคณิต",
    titleEn: "Algebra Enrichment Project",
    subTh: "Algebra Enrichment Project (2024–2028)",
    subEn: "โครงการเสริมสร้างความเข้มแข็งทางพีชคณิต (2567–2571)",
    descTh:
      "มีวัตถุประสงค์เพื่อส่งเสริมและพัฒนาการศึกษาด้านพีชคณิต โดยได้รับทุนสนับสนุนจากกองทุนการกุศล PSU-TUYF เพื่อยกระดับความรู้และความสามารถด้านพีชคณิตในประเทศไทย และจัดตั้งศูนย์พีชคณิตในภาคใต้ให้เป็นศูนย์กลางการเรียนรู้และวิจัยที่สำคัญ ซึ่งประกอบด้วย 4 โครงการย่อย",
    descEn:
      "This project aims to promote and develop algebra education. Supported by the PSU-TUYF Charitable Trust Fund, the PSU-TUYF Algebra Enrichment Project (2024–2028) seeks to enhance knowledge and skills in algebra within Thailand and establish an Algebra Center in the southern region as a key hub for learning and research. The project consists of four sub-projects:",
    itemsTh: [
      "ศูนย์พีชคณิตภาคใต้: จัดตั้งศูนย์แลกเปลี่ยนองค์ความรู้ และส่งเสริมความเข้าใจเชิงลึกในด้านพีชคณิต",
      "ทุนการศึกษาระดับปริญญาตรี ด้านพีชคณิต: ให้ทุนการศึกษาแก่นักศึกษาที่มีความรู้ ความสามารถโดดเด่นด้านพีชคณิต",
      "ค่ายเสริมสร้างความเข้มแข็งทางพีชคณิต: จัดค่ายระยะสั้น เพื่อถ่ายทอดความรู้พื้นฐานและแนวคิดขั้นสูงให้แก่นักเรียนชั้นมัธยมศึกษาด้านพีชคณิต เช่น ทฤษฎีเซต ตรรกศาสตร์ ทฤษฎีจำนวน เป็นต้น",
      "โครงการแลกเปลี่ยนบุคลากรและทุนวิจัยในต่างประเทศ: ให้ทุนสนับสนุนบุคลากรของมหาวิทยาลัยสงขลานครินทร์ เพื่อเรียนรู้ภาษา ศึกษาดูงาน และทำวิจัยด้านพีชคณิตในต่างประเทศ",
    ],
    itemsEn: [
      "Algebra Center: Established to be a center for knowledge exchange and to promote a deeper understanding of algebra.",
      "Algebra Scholarship: Provides scholarships to highly skilled students in algebra.",
      "Algebra Camps: Organizes short-term camps to impart foundational knowledge and advanced concepts in algebra to secondary school students, covering topics like Set Theory, Logic, and Number Theory.",
      "Exchange Staff: Provides funding for Prince of Songkla University personnel to attend language training, study tours, and conduct research in algebra abroad.",
    ],
  },
]

export function ProgramDetails() {
  const t = useT()

  return (
    <section className="py-8">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col gap-6">
          {details.map((d) => (
            <article
              key={d.id}
              id={d.id}
              className="scroll-mt-20 rounded-3xl border border-border bg-card p-8 sm:p-10"
            >
              <div className="flex flex-col gap-6 lg:flex-row">
                <div className="flex items-start gap-4 lg:w-2/5">
                  <span className="text-4xl font-bold text-accent/40">{d.number}</span>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                      {d.abbr}
                    </span>
                    <h3 className="mt-1 text-balance text-xl font-bold leading-snug text-primary">
                      {t(d.titleTh, d.titleEn)}
                    </h3>
                    <p className="mt-1 text-sm italic text-muted-foreground">
                      {t(d.subTh, d.subEn)}
                    </p>
                  </div>
                </div>

                <div className="lg:w-3/5">
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {t(d.descTh, d.descEn)}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {t(d.itemsTh, d.itemsEn).map((item, index) => (
                      <li
                        key={item}
                        id={`${d.id}-${index}`}
                        className="flex scroll-mt-24 items-start gap-3"
                      >
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="text-sm leading-relaxed text-foreground">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
