"use client"

import { useT } from "@/components/language-context"

export function ProjectOverview() {
  const t = useT()
  
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              {t("เกี่ยวกับโครงการทุนการศึกษา B.Sc. Scholarships", "About B.Sc. Scholarships Program")}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground/90 text-pretty">
              {t(
                "โครงการทุนการศึกษา PSU-TUYF มุ่งมั่นที่จะสร้างนักคณิตศาสตร์ที่มีคุณภาพเพื่อตอบสนองความต้องการของสังคม โดยมอบทุนการศึกษาให้กับนักศึกษาไทยและนักเรียนกัมพูชาในระดับปริญญาตรี ผู้รับทุนทุกคนจะได้รับการพัฒนาศักยภาพด้านคณิตศาสตร์อย่างต่อเนื่อง เพื่อเตรียมความพร้อมสำหรับอนาคต ไม่ว่าจะเป็นการเป็นครูคณิตศาสตร์ในโรงเรียนสอนศาสนาอิสลามทางภาคใต้ของประเทศไทย หรือกลับไปมีส่วนร่วมในการพัฒนาประเทศกัมพูชาต่อไป",
                "The PSU-TUYF Scholarship Program is committed to cultivating high-quality mathematicians to meet societal needs by awarding scholarships to Thai and Cambodian undergraduate students. All scholarship recipients will receive continuous mathematical capacity building to prepare them for the future, whether becoming mathematics teachers in Islamic schools in Southern Thailand, or returning to contribute to the development of Cambodia."
              )}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground/90 text-pretty">
              {t(
                "โครงการนี้เริ่มต้นขึ้นในปี พ.ศ. 2564 โดยการสนับสนุนจากกองทุนการกุศล PSU-TUYF และจะดำเนินไปจนถึงปี พ.ศ. 2568 โดยมีนักศึกษาที่ได้รับคัดเลือกให้รับทุนแล้ว 12 คน และโครงการยังคงมุ่งหวังที่จะสร้างนักคณิตศาสตร์ที่มีศักยภาพ เพื่อเป็นกำลังสำคัญในการพัฒนาประเทศต่อไป",
                "This project commenced in 2021 with support from the PSU-TUYF Charitable Trust Fund and will run until 2025. Currently, 12 students have been selected to receive this scholarship. The project continues to strive to build capable mathematicians to be a crucial driving force for the future development of both nations."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
