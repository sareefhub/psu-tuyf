"use client"

import { useT } from "@/components/language-context"
import { Award, FileText, Check, CheckCircle2 } from "lucide-react"

// ================= ข้อมูลอัตราค่าใช้จ่ายสนับสนุนทุนการศึกษา =================
const benefitsData = [
  {
    titleTh: "ค่าธรรมเนียมการศึกษา",
    titleEn: "Tuition Fees",
    descTh: "จ่ายตามจริงที่มหาวิทยาลัยกำหนด",
    descEn: "Paid in full as actual expenses set by the university.",
  },
  {
    titleTh: "ค่าใช้จ่ายส่วนตัว",
    titleEn: "Personal Allowance",
    descTh: "6,000 บาท/เดือน",
    descEn: "6,000 THB/month.",
  },
  {
    titleTh: "ค่าหนังสือหรือสื่อสนับสนุนการศึกษา",
    titleEn: "Books & Educational Materials",
    descTh: "8,000 บาท/ปี",
    descEn: "8,000 THB/year.",
  },
  {
    titleTh: "ค่าตอบแทนสนับสนุนการนำเสนอผลงาน",
    titleEn: "Academic Presentation Support",
    descTh: "20,000 บาท ตลอดหลักสูตร (ในงานวิชาการระดับชาติหรือนานาชาติ)",
    descEn: "20,000 THB throughout the curriculum for national or international conferences.",
  },
]

// ================= ข้อมูลคุณสมบัติของผู้สมัครทุน =================
const eligibilityData = [
  {
    labelTh:
      "เป็นผู้ที่สมัครโครงการรับนักศึกษาคณะวิทยาศาสตร์และเทคโนโลยี TCAS1 รอบ 1/1 หรือ 1/2 (แฟ้มสะสมผลงาน) สาขาคณิตศาสตร์และวิทยาการคอมพิวเตอร์ โดยผ่านโครงการ ดังนี้:",
    labelEn:
      "Applied for Faculty of Science and Technology admission in TCAS Round 1 (1/1 or 1/2 Portfolio) for Mathematics and Computer Science through one of the following projects:",
    subItemsTh: [
      "โครงการรับนักศึกษาวิธีพิเศษเพื่อเข้าศึกษาในคณะวิทยาศาสตร์และเทคโนโลยี",
      "โครงการรับนักเรียนจากโรงเรียนสังกัดสมาคมสมาพันธ์โรงเรียนเอกชนภาคใต้เพื่อเข้าศึกษาในคณะวิทยาศาสตร์และเทคโนโลยี",
      "โครงการรับนักเรียนที่มีผลการเรียนดี เข้าศึกษาระดับปริญญาตรี ในมหาวิทยาลัยสงขลานครินทร์",
      "โครงการส่งเสริมผู้มีคุณธรรม จริยธรรม บําเพ็ญประโยชน์ช่วยเหลือสังคมเข้าศึกษาระดับปริญญาตรี",
    ],
    subItemsEn: [
      "Special Admission Project for Faculty of Science and Technology",
      "Southern Association of Private Schools Confederation Project",
      "High Academic Achievement Student Admission Project (PSU)",
      "Moral, Ethics, and Public Service Promotion Admission Project",
    ],
  },
  {
    labelTh:
      "กำลังศึกษาในระดับชั้นมัธยมศึกษาปีที่ 6 หรือสำเร็จการศึกษาจากโรงเรียนเอกชนสอนศาสนาอิสลามในสามจังหวัดชายแดนใต้ (ปัตตานี ยะลา และนราธิวาส)",
    labelEn:
      "Currently in Grade 12 (M.6) or graduated from an Islamic private school in the three southern border provinces (Pattani, Yala, Narathiwat).",
  },
  {
    labelTh:
      "มีผลการเรียนสะสม (GPAX) ไม่ต่ำกว่า 3.00 และผลการเรียนเฉลี่ย 5 ภาคการศึกษาวิชาคณิตศาสตร์ไม่ต่ำกว่า 2.50",
    labelEn:
      "Cumulative GPAX of at least 3.00, and a 5-semester average grade in Mathematics of at least 2.50.",
  },
  {
    labelTh:
      "เป็นผู้มีสุขภาพกายและจิตเป็นปกติ ไม่เป็นโรคติดต่อหรือโรคร้ายแรงที่เป็นอุปสรรคต่อการเรียน",
    labelEn:
      "In good physical and mental health, with no contagious or severe illnesses that obstruct studies.",
  },
  {
    labelTh: "เป็นผู้มีใจรักในวิชาคณิตศาสตร์และมีเจตคติที่ดีต่ออาชีพที่เกี่ยวกับการศึกษา",
    labelEn:
      "Possess a passion for mathematics and a positive attitude towards education-related careers.",
  },
  {
    labelTh:
      "เป็นผู้มีความรับผิดชอบ มีความเป็นผู้นำ สำนึกรักบ้านเกิด และอยากพัฒนาบ้านเกิดของตนเอง หรือ ชุมชนในพื้นที่สามจังหวัดชายแดนใต้",
    labelEn:
      "Responsible, possessing leadership qualities, local consciousness, and a desire to develop their hometown or community in the three southern border provinces.",
  },
  {
    labelTh: "เป็นผู้ยินดีปฏิบัติตามเงื่อนไขและข้อผูกพันที่โครงการกำหนด",
    labelEn: "Willing to comply with all terms and conditions set by the program.",
  },
]

// ================= ข้อมูลข้อปฏิบัติสำหรับผู้ที่ได้รับเลือกเข้ารับทุน =================
const obligationsData = [
  {
    labelTh:
      "เป็นผู้มีความขยันหมั่นเพียรในการศึกษาและมีความประพฤติดี โดยในทุกภาคการศึกษาจะต้องรายงานผลการศึกษาและได้รับการรับรองความประพฤติจากอาจารย์ที่ปรึกษา ประธานหลักสูตร หัวหน้าสาขาวิชาคณิตศาสตร์และวิทยาการคอมพิวเตอร์ ตามแบบฟอร์มที่โครงการทุนกำหนด",
    labelEn:
      "Show diligence in studies and good conduct. In each semester, recipients must submit academic results and conduct certifications from their advisor, program chair, and department head according to the form specified by the scholarship project.",
  },
  {
    labelTh:
      "ลงทะเบียนเรียนตามแผนการศึกษาของหลักสูตร หากนอกเหนือจากนั้น จะต้องได้รับความเห็นชอบจากคณะกรรมการโครงการ และมีผลการเรียนตามที่กำหนด ดังนี้:",
    labelEn:
      "Register according to the program curriculum plan. Any deviation must be approved by the project committee. Academic performance must meet the following criteria:",
    subItemsTh: [
      "มีผลการเรียนในแต่ละภาคการศึกษา (GPA) ไม่ต่ำกว่า 2.50",
      "มีผลการเรียนสะสม (GPAX) ไม่ต่ำกว่า 2.50",
    ],
    subItemsEn: ["GPA in each semester not less than 2.50", "Cumulative GPAX not less than 2.50"],
  },
]

export function BenefitsAndEligibility() {
  const t = useT()

  return (
    <section className="py-16 bg-secondary/20">
      <div className="mx-auto max-w-6xl px-6 space-y-10">
        {/* เลย์เอาต์ 2 คอลัมน์สำหรับสิทธิประโยชน์และเกณฑ์ผู้สมัคร */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* การ์ดสิทธิ์ประโยชน์ที่จะได้รับ (อัตราค่าใช้จ่ายสนับสนุนทุนการศึกษา) */}
          <div className="bg-card border border-border/60 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Award className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold text-primary">
                  {t("อัตราค่าใช้จ่ายสนับสนุนทุนการศึกษา", "Scholarship Funding & Allowances")}
                </h2>
              </div>
              <p className="text-xs text-muted-foreground mb-6">
                {t(
                  "นักเรียนทุนในโครงการ PSU-TUYF: Mathematics for Sustainable Community Development จะได้รับทุนสนับสนุนดังต่อไปนี้:",
                  "Scholarship recipients under the PSU-TUYF (MSCD) program will receive the following financial support:",
                )}
              </p>
              <ul className="space-y-5">
                {benefitsData.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
                      <Check className="h-3 w-3" />
                    </span>
                    <div>
                      <h3 className="font-bold text-foreground text-sm">
                        {t(item.titleTh, item.titleEn)}
                      </h3>
                      <p className="text-xs text-muted-foreground/90 mt-1">
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
                {t("คุณสมบัติของผู้สมัครทุน", "Applicant Eligibility Criteria")}
              </h2>
            </div>
            <p className="text-xs text-muted-foreground mb-6">
              {t(
                "ผู้สมัครขอรับทุนการศึกษาจะต้องมีคุณสมบัติดังต่อไปนี้:",
                "Applicants must meet the following criteria to be eligible for the scholarship:",
              )}
            </p>
            <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
              {eligibilityData.map((req, index) => (
                <div
                  key={index}
                  className="space-y-2 border-b border-border/40 pb-3 last:border-b-0 last:pb-0"
                >
                  <div className="flex gap-3 items-start">
                    <span className="text-accent font-bold text-sm">0{index + 1}.</span>
                    <p className="text-xs text-foreground/90 leading-relaxed font-semibold">
                      {t(req.labelTh, req.labelEn)}
                    </p>
                  </div>
                  {/* แสดงรายการย่อยของโครงการถ้ามี */}
                  {req.subItemsTh && (
                    <ul className="pl-8 list-disc space-y-1">
                      {t(req.subItemsTh, req.subItemsEn).map((sub, sIdx) => (
                        <li
                          key={sIdx}
                          className="text-[10px] text-muted-foreground leading-relaxed"
                        >
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* การ์ดแถวเดี่ยวเต็มความกว้างสำหรับข้อปฏิบัติสำหรับผู้ที่ได้รับเลือกเข้ารับทุน */}
        <div className="bg-card border border-border/60 rounded-3xl p-8 sm:p-10 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <h2 className="text-xl font-bold text-primary">
              {t(
                "ข้อปฏิบัติสำหรับผู้ที่ได้รับเลือกเข้ารับทุน",
                "Obligations & Conditions for Recipients",
              )}
            </h2>
          </div>

          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            {t(
              "นักเรียนที่ได้รับการคัดเลือกเพื่อรับทุนในโครงการ PSU-TUYF: Mathematics for Sustainable Community Development จะต้องเป็นผู้ที่มีสิทธิ์ศึกษาในหลักสูตรระดับปริญญาตรี วท.บ. คณิตศาสตร์และวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตปัตตานี และทำสัญญาตามที่ทุนกำหนดและปฏิบัติตามเงื่อนไขของการเป็นนักเรียนทุน ดังนี้:",
              "Selected students under the PSU-TUYF (MSCD) program must be eligible to study in the Bachelor of Science Program in Mathematics and Computer Science, Faculty of Science and Technology, PSU Pattani Campus, and sign the scholarship agreement to comply with the following recipient conditions:",
            )}
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {obligationsData.map((ob, index) => (
              <div
                key={index}
                className="bg-secondary/20 rounded-2xl p-5 border border-border/40 space-y-3"
              >
                <div className="flex gap-3 items-start">
                  <span className="h-6 w-6 rounded-full bg-accent/15 flex items-center justify-center text-xs font-bold text-accent flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-xs text-foreground/90 leading-relaxed font-semibold">
                    {t(ob.labelTh, ob.labelEn)}
                  </p>
                </div>
                {/* แสดงผลรายการย่อยระบุเกรดที่กำหนด */}
                {ob.subItemsTh && (
                  <ul className="pl-9 list-disc space-y-1.5">
                    {t(ob.subItemsTh, ob.subItemsEn).map((sub, sIdx) => (
                      <li
                        key={sIdx}
                        className="text-[10px] text-muted-foreground leading-relaxed font-semibold"
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
