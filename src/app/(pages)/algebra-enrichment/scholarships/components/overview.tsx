import { useT } from "@/context/language-context"
import { Award } from "lucide-react"
import { SharedNumberedGrid } from "@/components/shared-numbered-grid"
import { SharedIconGrid } from "@/components/shared-icon-grid"

// ================= 1. วัตถุประสงค์ (Objectives) =================
export function ScholarshipObjectives() {
  const t = useT()
  const objectives = t("algebraScholarships.overview.objectives.items", { returnObjects: true }) as string[]

  // แปลง Array ของสตริงให้อยู่ในรูปแบบที่ SharedNumberedGrid รองรับ
  const items = objectives.map((text, idx) => ({
    key: String(idx),
    text: text,
  }))

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
        <SharedNumberedGrid
          items={items}
          translationKey="algebraScholarships.overview.objectives"
          gridClassName="space-y-4"
        />
      </div>
    </section>
  )
}

// ================= 2. คุณสมบัติผู้สมัคร (Eligibility) =================
export function ScholarshipEligibility() {
  const t = useT()
  const eligibility = t("algebraScholarships.overview.eligibility.items", { returnObjects: true }) as string[]

  // แปลง Array ของสตริงให้อยู่ในรูปแบบที่ SharedNumberedGrid รองรับ
  const items = eligibility.map((text, idx) => ({
    key: String(idx),
    text: text,
    className: idx === 0 ? "md:col-span-2" : "",
  }))

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
        <SharedNumberedGrid
          items={items}
          translationKey="algebraScholarships.overview.eligibility"
        />
      </div>
    </section>
  )
}

// ================= 3. อัตราค่าใช้จ่ายสนับสนุนทุนการศึกษา (Funding Rates) =================
export function ScholarshipDetails() {
  const t = useT()
  const details = t("algebraScholarships.overview.details.items", { returnObjects: true }) as Array<{
    title: string
    desc: string
  }>

  // แปลงรายละเอียดทุนให้อยู่ในโครงสร้างที่ SharedIconGrid รองรับ
  const fundingItems = details.map((item, idx) => ({
    key: String(idx),
    title: item.title,
    desc: item.desc,
  }))

  return (
    <section className="py-10 bg-background">
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

        {/* เลย์เอาต์รายละเอียดทุนในลักษณะการ์ดแบบ Funding Rates โดยใช้ตัวกลาง */}
        <SharedIconGrid
          items={fundingItems}
          icon={<Award className="h-5 w-5" />}
          gridClassName="grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
        />
      </div>
    </section>
  )
}

// ================= 4. ข้อผูกพันของผู้รับทุน (Obligations) =================
export function ScholarshipObligations() {
  const t = useT()
  const obligations = t("algebraScholarships.overview.obligations.items", { returnObjects: true }) as string[]

  // แปลง Array ของสตริงให้อยู่ในรูปแบบที่ SharedNumberedGrid รองรับ
  const items = obligations.map((text, idx) => ({
    key: String(idx),
    text: text,
  }))

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
        <SharedNumberedGrid
          items={items}
          translationKey="algebraScholarships.overview.obligations"
          numberBgClassName="bg-accent/15"
        />
      </div>
    </section>
  )
}

// ================= 5. หลักสูตรที่เข้าศึกษา (Curriculum) =================
export function ScholarshipCurriculum() {
  const t = useT()
  const curriculums = t("algebraScholarships.overview.curriculum.items", { returnObjects: true }) as string[]

  // แปลง Array ของสตริงให้อยู่ในรูปแบบที่ SharedNumberedGrid รองรับ
  const items = curriculums.map((text, idx) => ({
    key: String(idx),
    text: text,
  }))

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
        <SharedNumberedGrid
          items={items}
          translationKey="algebraScholarships.overview.curriculum"
        />
      </div>
    </section>
  )
}
