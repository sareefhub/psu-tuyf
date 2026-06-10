"use client"

import { useT } from "@/components/language-context"
import { Award } from "lucide-react"

// ================= 1. วัตถุประสงค์ (Objectives) =================
export function ScholarshipObjectives() {
  const t = useT()
  const objectives = t("algebraScholarships.overview.objectives.items", { returnObjects: true }) as string[]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อวัตถุประสงค์จัดกึ่งกลางสไตล์สากล */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("algebraScholarships.overview.objectives.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("algebraScholarships.overview.objectives.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงผลวัตถุประสงค์ */}
        <div className="max-w-4xl mx-auto">
          {objectives.map((item, index) => (
            <div
              key={item}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm space-y-3 hover:border-accent/30 transition-all flex gap-3 items-start"
            >
              <span className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent shrink-0">
                {index + 1}
              </span>
              <p className="text-xs text-foreground/90 leading-relaxed font-semibold">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ================= 2. คุณสมบัติผู้สมัคร (Eligibility) =================
export function ScholarshipEligibility() {
  const t = useT()
  const eligibility = t("algebraScholarships.overview.eligibility.items", { returnObjects: true }) as string[]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์สากล */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("algebraScholarships.overview.eligibility.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("algebraScholarships.overview.eligibility.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงคุณสมบัติเป็นกริดการ์ด 2 คอลัมน์ (ข้อแรกขยายเต็มความกว้างเพื่อความสวยงามสไตล์ B.Sc. Scholarships) */}
        <div className="grid gap-6 md:grid-cols-2">
          {eligibility.map((item, index) => {
            const isFirst = index === 0
            return (
              <div
                key={item}
                className={`bg-card border border-border/50 rounded-2xl p-6 shadow-sm space-y-3 hover:border-accent/30 transition-all flex gap-3 items-start ${
                  isFirst ? "md:col-span-2" : ""
                }`}
              >
                <span className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent shrink-0">
                  {index + 1}
                </span>
                <p className="text-xs text-foreground/90 leading-relaxed font-semibold">
                  {item}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ================= 3. รายละเอียดทุนการศึกษา (Details) =================
export function ScholarshipDetails() {
  const t = useT()
  const details = t("algebraScholarships.overview.details.items", { returnObjects: true }) as Array<{
    title: string
    desc: string
  }>

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์สากล */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("algebraScholarships.overview.details.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("algebraScholarships.overview.details.desc")}
          </p>
        </div>

        {/* เลย์เอาต์รายละเอียดทุนในลักษณะการ์ดแบบ Funding Rates */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {details.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border/50 rounded-2xl p-6 text-center shadow-sm flex flex-col justify-between hover:border-accent/30 transition-all"
            >
              {/* ไอคอนกลมกึ่งกลางการ์ด */}
              <div className="flex justify-center mb-4">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Award className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-primary text-sm mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground/90 leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ================= 4. ข้อผูกพันของผู้รับทุน (Obligations) =================
export function ScholarshipObligations() {
  const t = useT()
  const obligations = t("algebraScholarships.overview.obligations.items", { returnObjects: true }) as string[]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์สากล */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("algebraScholarships.overview.obligations.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("algebraScholarships.overview.obligations.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงข้อปฏิบัติแบบการ์ดกริด 2 คอลัมน์ */}
        <div className="grid gap-6 md:grid-cols-2">
          {obligations.map((item, index) => (
            <div
              key={item}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm space-y-3 hover:border-accent/30 transition-all flex gap-3 items-start"
            >
              <span className="h-6 w-6 rounded-full bg-accent/15 flex items-center justify-center text-xs font-bold text-accent shrink-0">
                {index + 1}
              </span>
              <p className="text-xs text-foreground/90 leading-relaxed font-semibold">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ================= 5. หลักสูตรที่เข้าศึกษา (Curriculum) =================
export function ScholarshipCurriculum() {
  const t = useT()
  const curriculums = t("algebraScholarships.overview.curriculum.items", { returnObjects: true }) as string[]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์สากล */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("algebraScholarships.overview.curriculum.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("algebraScholarships.overview.curriculum.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงหลักสูตรที่เข้าศึกษา */}
        <div className="grid gap-6 md:grid-cols-2">
          {curriculums.map((item, index) => (
            <div
              key={item}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm space-y-3 hover:border-accent/30 transition-all flex gap-3 items-start"
            >
              <span className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent shrink-0">
                {index + 1}
              </span>
              <p className="text-xs text-foreground/90 leading-relaxed font-semibold">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
