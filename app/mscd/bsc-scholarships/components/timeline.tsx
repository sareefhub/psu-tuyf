"use client"

import { useT } from "@/components/language-context"
import { Calendar } from "lucide-react"

// ================= ข้อมูลกำหนดการคัดเลือก =================
const timelineData = [
  {
    dateTh: "เมษายน - พฤษภาคม",
    dateEn: "April - May",
    titleTh: "รับสมัครและยื่นเอกสารการสมัคร",
    titleEn: "Application & Document Submission",
    descTh:
      "ส่งใบสมัครขอรับทุนตามแบบฟอร์มที่ระบุ พร้อมแนบใบรายงานผลการศึกษา (Transcript) และเอกสารแนะนำตัว",
    descEn:
      "Submit the scholarship application form along with latest academic transcripts and personal profile.",
  },
  {
    dateTh: "ต้นเดือนมิถุนายน",
    dateEn: "Early June",
    titleTh: "การสอบสัมภาษณ์และพิจารณาคัดเลือก",
    titleEn: "Interview & Review Phase",
    descTh:
      "ประกาศรายชื่อผู้มีสิทธิ์เข้ารับการสัมภาษณ์ และสอบสัมภาษณ์โดยคณะกรรมการผู้ทรงคุณวุฒิของโครงการ",
    descEn:
      "List of qualified candidates announced, followed by interviews with the project selection committee.",
  },
  {
    dateTh: "กลางเดือนมิถุนายน",
    dateEn: "Mid-June",
    titleTh: "ประกาศรายชื่อผู้ได้รับทุนและปฐมนิเทศ",
    titleEn: "Final Announcement & Orientation",
    descTh: "ประกาศผลผู้ผ่านการคัดเลือกเข้ารับทุน และเข้าร่วมปฐมนิเทศผู้ได้รับทุนประจำปีการศึกษา",
    descEn:
      "Announcement of scholarship recipients followed by the annual scholarship orientation.",
  },
]

export function SelectionTimeline() {
  const t = useT()

  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Calendar className="h-5 w-5 text-accent" />
            <h2 className="text-2xl font-bold text-primary sm:text-3xl">
              {t("ปฏิทินและขั้นตอนการรับทุน", "Application Timeline")}
            </h2>
          </div>
          <p className="text-sm text-muted-foreground/80">
            {t(
              "ขั้นตอนดำเนินการรับสมัครและพิจารณาคัดเลือกผู้ได้รับทุนการศึกษา",
              "Key phases of the application, review, and selection process.",
            )}
          </p>
        </div>

        <div className="relative border-l-2 border-accent/25 pl-8 ml-4 sm:ml-6 space-y-10">
          {timelineData.map((step, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-background border-2 border-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <div>
                <span className="text-xs font-bold text-accent uppercase tracking-wider block">
                  {t(step.dateTh, step.dateEn)}
                </span>
                <h3 className="text-lg font-bold text-primary mt-1">
                  {t(step.titleTh, step.titleEn)}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {t(step.descTh, step.descEn)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
