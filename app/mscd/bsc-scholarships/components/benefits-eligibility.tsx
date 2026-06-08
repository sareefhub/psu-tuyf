"use client"

import { useT } from "@/components/language-context"
import { Check, CheckCircle2, Award } from "lucide-react"

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

// ================= 1. ส่วนคุณสมบัติของผู้สมัครทุน =================
export function EligibilitySection() {
  const t = useT()

  return (
    <section className="py-10 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {/* หัวข้อสไตล์หน้าแรก */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("คุณสมบัติของผู้สมัครทุน", "Applicant Eligibility Criteria")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t(
              "ผู้สมัครขอรับทุนการศึกษาโครงการ B.Sc. Scholarships จะต้องมีคุณสมบัติคุณสมบัติดังต่อไปนี้",
              "Applicants must meet the following criteria to be eligible for the scholarship",
            )}
          </p>
        </div>

        {/* เลย์เอาต์แสดงผลคุณสมบัติ 7 ข้อ */}
        <div className="grid gap-6 md:grid-cols-2">
          {eligibilityData.map((req, index) => {
            const isFirst = index === 0
            return (
              <div
                key={index}
                className={`bg-card border border-border/50 rounded-2xl p-6 shadow-sm space-y-3 hover:border-accent/30 transition-all ${
                  isFirst ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex gap-3 items-start">
                  <span className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-xs text-foreground/90 leading-relaxed font-semibold">
                    {t(req.labelTh, req.labelEn)}
                  </p>
                </div>
                {req.subItemsTh && (
                  <ul className="pl-9 list-disc space-y-1.5 border-t border-border/40 pt-3 mt-1">
                    {t(req.subItemsTh, req.subItemsEn).map((sub, sIdx) => (
                      <li key={sIdx} className="text-[11px] text-muted-foreground leading-relaxed">
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ================= 2. ส่วนข้อปฏิบัติสำหรับผู้ที่ได้รับเลือกเข้ารับทุน =================
export function ObligationsSection() {
  const t = useT()

  return (
    <section className="py-10 bg-background animate-fade-in max-w-4xl mx-auto px-6">
      <div className="space-y-6">
        {/* หัวข้อสไตล์หน้าแรก */}
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t(
              "ข้อปฏิบัติสำหรับผู้ที่ได้รับเลือกเข้ารับทุน",
              "Obligations & Conditions for Recipients",
            )}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t(
              "นักเรียนทุนในโครงการ PSU-TUYF (MSCD) จะต้องปฏิบัติตามเงื่อนไขหลักเกณฑ์ดังต่อไปนี้",
              "Recipient conditions and requirements for students under the PSU-TUYF (MSCD) scholarship program",
            )}
          </p>
        </div>

        {/* คำชี้แจงเบื้องต้น */}
        <p className="text-xs text-muted-foreground leading-relaxed text-center px-4">
          {t(
            "นักเรียนที่ได้รับการคัดเลือกเพื่อรับทุนในโครงการ จะต้องเป็นผู้ที่มีสิทธิ์ศึกษาในหลักสูตรระดับปริญญาตรี วท.บ. คณิตศาสตร์และวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตปัตตานี ทำสัญญาตามที่ทุนกำหนด และปฏิบัติตามเงื่อนไขอย่างเคร่งครัด ดังนี้:",
            "Selected students must be eligible to study in the B.Sc. Mathematics & Computer Science program, Faculty of Science and Technology, PSU Pattani Campus, sign the agreement, and comply with these rules:",
          )}
        </p>

        {/* แผงแสดงผลข้อปฏิบัติ 2 ส่วน */}
        <div className="grid gap-6 md:grid-cols-2">
          {obligationsData.map((ob, index) => (
            <div
              key={index}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm space-y-4 hover:border-accent/30 transition-all"
            >
              <div className="flex gap-3 items-start">
                <span className="h-6 w-6 rounded-full bg-accent/15 flex items-center justify-center text-xs font-bold text-accent flex-shrink-0">
                  {index + 1}
                </span>
                <p className="text-xs text-foreground/90 leading-relaxed font-semibold">
                  {t(ob.labelTh, ob.labelEn)}
                </p>
              </div>
              {ob.subItemsTh && (
                <ul className="pl-9 list-disc space-y-1.5 border-t border-border/40 pt-3">
                  {t(ob.subItemsTh, ob.subItemsEn).map((sub, sIdx) => (
                    <li
                      key={sIdx}
                      className="text-[11px] text-muted-foreground leading-relaxed font-semibold"
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
    </section>
  )
}

// ================= 3. ส่วนอัตราค่าใช้จ่ายสนับสนุนทุนการศึกษา =================
export function FundingSection() {
  const t = useT()

  return (
    <section className="py-10 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {/* หัวข้อสไตล์หน้าแรก */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("อัตราค่าใช้จ่ายสนับสนุนทุนการศึกษา", "Scholarship Funding & Allowances")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t(
              "สิทธิประโยชน์และมูลค่าเงินทุนการศึกษาที่นักเรียนทุนในโครงการจะได้รับตลอดหลักสูตร",
              "Financial allowances and tuition funding details provided to recipients throughout the program",
            )}
          </p>
        </div>

        {/* อัตราค่าใช้จ่ายสนับสนุนการ์ด 4 ช่อง */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefitsData.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border/50 rounded-2xl p-6 text-center shadow-sm flex flex-col justify-between hover:border-accent/30 transition-all"
            >
              <div className="flex justify-center mb-4">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Award className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-primary text-sm mb-2">
                  {t(item.titleTh, item.titleEn)}
                </h3>
                <p className="text-xs text-muted-foreground/90 leading-relaxed font-semibold">
                  {t(item.descTh, item.descEn)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
