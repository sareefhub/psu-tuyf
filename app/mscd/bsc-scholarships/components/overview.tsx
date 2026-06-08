"use client"

import { useT } from "@/components/language-context"

export function ProjectOverview() {
  const t = useT()
  
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* ข้อมูลรายละเอียดโครงการด้านซ้าย */}
          <div className="lg:col-span-2 space-y-6">
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

          {/* ตารางข้อมูลสถิติการดำเนินงานด้านขวา */}
          <div className="bg-secondary/40 border border-border/50 rounded-3xl p-6 sm:p-8 flex flex-col justify-center space-y-6">
            <h3 className="font-bold text-primary text-base border-b border-border/60 pb-3">
              {t("ข้อมูลการดำเนินงาน", "Project Information")}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <span className="text-2xl font-extrabold text-accent">2564</span>
                <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                  {t("ปีที่เริ่มต้น", "Start Year")}
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-extrabold text-accent">2568</span>
                <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                  {t("ปีที่สิ้นสุด", "End Year")}
                </p>
              </div>
              <div className="col-span-2 space-y-1 pt-2 border-t border-border/30">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-primary">12</span>
                  <span className="text-xs font-semibold text-muted-foreground">{t("คน", "Recipients")}</span>
                </div>
                <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                  {t("ผู้รับทุนการศึกษาแล้ว", "Total Recipients to Date")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
