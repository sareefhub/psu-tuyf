"use client"

import { useT } from "@/components/language-context"
import { Award, FileText, Check } from "lucide-react"

// ================= ข้อมูลสิทธิ์ประโยชน์และคุณสมบัติ =================
const benefitsData = [
  {
    titleTh: "การสนับสนุนค่าธรรมเนียมการศึกษา",
    titleEn: "Tuition Fee Support",
    descTh: "ครอบคลุมค่าเล่าเรียนและค่าธรรมเนียมการศึกษาตลอดปีการศึกษาตามจริง",
    descEn: "Covers all tuition fees and registration fees throughout the academic year."
  },
  {
    titleTh: "เงินสนับสนุนค่าครองชีพรายเดือน",
    titleEn: "Monthly Stipend",
    descTh: "ช่วยค่าครองชีพรายเดือนเพื่อช่วยบรรเทาภาระค่าใช้จ่ายของนักศึกษาระหว่างศึกษา",
    descEn: "Provides monthly allowance to cover students' personal and living expenses."
  },
  {
    titleTh: "การเข้าร่วมสัมมนาและฝึกอบรมทางวิชาการ",
    titleEn: "Academic Camps & Seminars",
    descTh: "โอกาสเข้าร่วมกิจกรรมค่ายพัฒนาทักษะ กิจกรรมวิชาการ และงานวิจัยร่วมกับเครือข่ายของโครงการ",
    descEn: "Opportunities to join skill development camps, academic seminars, and collaborative research networks."
  }
]

const eligibilityData = [
  {
    labelTh: "กำลังศึกษาระดับปริญญาตรี ชั้นปีที่ 1-4 สาขาวิชาคณิตศาสตร์ คณะวิทยาศาสตร์และเทคโนโลยี ม.อ. ปัตตานี",
    labelEn: "Enrolled as an undergraduate student (Years 1-4) in Mathematics, Faculty of Science and Technology, PSU Pattani"
  },
  {
    labelTh: "มีเกรดเฉลี่ยสะสม (GPAX) ไม่ต่ำกว่า 2.75 และมีผลการเรียนวิชาเฉพาะด้านคณิตศาสตร์ในเกณฑ์ดี",
    labelEn: "Cumulative GPAX of at least 2.75, with good academic performance in mathematics courses"
  },
  {
    labelTh: "มีความประพฤติดี ตั้งใจศึกษาเล่าเรียน และยินดีมีส่วนร่วมในกิจกรรมบริการสังคม",
    labelEn: "Good conduct, dedicated to studies, and willing to participate in community services"
  },
  {
    labelTh: "พร้อมเข้าร่วมโครงการพัฒนาและกิจกรรมวิชาการต่าง ๆ ที่ทางโครงการ PSU-TUYF จัดขึ้น",
    labelEn: "Ready to participate in academic development and activities organized by PSU-TUYF"
  }
]

export function BenefitsAndEligibility() {
  const t = useT()
  
  return (
    <section className="py-16 bg-secondary/20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* การ์ดสิทธิ์ประโยชน์ที่จะได้รับ */}
          <div className="bg-card border border-border/60 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Award className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-primary">
                  {t("สิทธิ์ประโยชน์ที่จะได้รับ", "Scholarship Benefits")}
                </h2>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                {t(
                  "ทุนการศึกษานี้สนับสนุนโดยกองทุนการกุศล TUYF ครอบคลุมสิทธิประโยชน์รอบด้าน เพื่อให้นักศึกษาทุ่มเทกับการเรียนได้อย่างเต็มประสิทธิภาพ",
                  "Fully supported by the TUYF Charitable Trust Fund, providing comprehensive benefits for students to focus entirely on their studies."
                )}
              </p>
              <ul className="space-y-4">
                {benefitsData.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-3 w-3" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">
                        {t(item.titleTh, item.titleEn)}
                      </h3>
                      <p className="text-xs text-muted-foreground/80 mt-1">
                        {t(item.descTh, item.descEn)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* การ์ดคุณสมบัติผู้สมัครขอรับทุน */}
          <div className="bg-card border border-border/60 rounded-3xl p-8 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <FileText className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-primary">
                {t("คุณสมบัติผู้สมัครขอรับทุน", "Eligibility Criteria")}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              {t(
                "ผู้ที่จะได้รับการพิจารณาเสนอชื่อเพื่อรับทุนการศึกษา จะต้องมีคุณสมบัติดังต่อไปนี้",
                "To be considered for the scholarship, applicants must meet the following criteria:"
              )}
            </p>
            <div className="space-y-4">
              {eligibilityData.map((req, index) => (
                <div key={index} className="flex gap-3 items-start border-b border-border/40 pb-3 last:border-b-0 last:pb-0">
                  <span className="text-accent font-semibold text-sm">0{index + 1}.</span>
                  <p className="text-sm text-foreground/95">
                    {t(req.labelTh, req.labelEn)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
