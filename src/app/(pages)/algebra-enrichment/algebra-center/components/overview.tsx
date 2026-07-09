import { useT } from "@/context/language-context"
import { Users } from "lucide-react"
import { SharedNumberedGrid } from "@/components/shared-numbered-grid"
import { SharedIconGrid } from "@/components/shared-icon-grid"

// ================= 1. วัตถุประสงค์ (Objectives) =================
export function CenterObjectives() {
  const t = useT()
  const objectives = t("algebraCenter.overview.objectives.items", { returnObjects: true }) as string[]

  // แปลง Array ของสตริงให้อยู่ในรูปแบบที่ SharedNumberedGrid รองรับ
  const items = objectives.map((text, idx) => ({
    key: String(idx),
    text: text,
  }))

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์สากลเดียวกับ B.Sc. Scholarships */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("algebraCenter.overview.objectives.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("algebraCenter.overview.objectives.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงผลวัตถุประสงค์แบบการ์ดกริดใช้ขนาดตัวอักษรร่วมกับระบบหลัก */}
        <SharedNumberedGrid
          items={items}
          translationKey="algebraCenter.overview.objectives"
        />
      </div>
    </section>
  )
}

// ================= 2. ภารกิจหลัก (Core Mission) =================
export function CenterMissions() {
  const t = useT()
  const missions = t("algebraCenter.overview.missions.items", { returnObjects: true }) as string[]

  // แปลง Array ของสตริงให้อยู่ในรูปแบบที่ SharedNumberedGrid รองรับ
  const items = missions.map((text, idx) => ({
    key: String(idx),
    text: text,
  }))

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์สากลเดียวกับ B.Sc. Scholarships */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("algebraCenter.overview.missions.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("algebraCenter.overview.missions.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงผลภารกิจหลักแบบการ์ดกริดใช้ขนาดตัวอักษรร่วมกับระบบหลัก */}
        <SharedNumberedGrid
          items={items}
          translationKey="algebraCenter.overview.missions"
          numberBgClassName="bg-accent/15"
        />
      </div>
    </section>
  )
}

// ================= 3. บุคลากรประจำศูนย์ (Personnel) =================
export function CenterPersonnel() {
  const t = useT()
  const personnel = t("algebraCenter.overview.personnel.items", { returnObjects: true }) as Array<{
    role: string
    desc: string
  }>

  // แปลงรายละเอียดบุคลากรให้อยู่ในโครงสร้างที่ SharedIconGrid รองรับ
  const items = personnel.map((item, idx) => ({
    key: String(idx),
    title: item.role,
    desc: item.desc,
  }))

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์สากลเดียวกับ B.Sc. Scholarships */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("algebraCenter.overview.personnel.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("algebraCenter.overview.personnel.desc")}
          </p>
        </div>

        {/* เลย์เอาต์การแสดงผลข้อมูลบุคลากรแบบการ์ด 4 คอลัมน์โดยใช้ตัวกลาง */}
        <SharedIconGrid
          items={items}
          icon={<Users className="h-5 w-5" />}
        />
      </div>
    </section>
  )
}

// ================= 4. กิจกรรมสำคัญ (Key Activities) =================
export function CenterActivities() {
  const t = useT()
  const activities = t("algebraCenter.overview.activities.items", { returnObjects: true }) as string[]

  // แปลง Array ของสตริงให้อยู่ในรูปแบบที่ SharedNumberedGrid รองรับ
  const items = activities.map((text, idx) => ({
    key: String(idx),
    text: text,
  }))

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์สากลเดียวกับ B.Sc. Scholarships */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("algebraCenter.overview.activities.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("algebraCenter.overview.activities.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงผลกิจกรรมสำคัญแบบการ์ดกริดใช้ขนาดตัวอักษรร่วมกับระบบหลัก */}
        <SharedNumberedGrid
          items={items}
          translationKey="algebraCenter.overview.activities"
        />
      </div>
    </section>
  )
}
