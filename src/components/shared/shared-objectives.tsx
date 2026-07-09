import { useT } from "@/context/language-context"
import { SharedNumberedGrid } from "./shared-numbered-grid"

export function SharedObjectives({
  translationKey,
}: Readonly<{
  translationKey: string;
}>) {
  const t = useT()
  const objectives = t(`${translationKey}.objectivesList`, { returnObjects: true }) as string[]
  const title = t(`${translationKey}.objectivesTitle`)

  if (!objectives || !Array.isArray(objectives)) return null

  // แปลง Array ของสตริงให้อยู่ในรูปแบบที่ SharedNumberedGrid รองรับ
  const items = objectives.map((text, idx) => ({
    key: String(idx),
    text: text,
  }))

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {title && title !== `${translationKey}.objectivesTitle` ? title : t("วัตถุประสงค์หลักของโครงการ", "Main Objectives")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("วัตถุประสงค์ที่มุ่งเน้นเพื่อยกระดับทักษะและการพัฒนาการศึกษาของโครงการ", "Objectives focusing on skill enhancement and educational development of the project")}
          </p>
        </div>

        {/* เรียกใช้งาน SharedNumberedGrid ตัวกลางเพื่อแชร์ UX/UI ของระบบการ์ดตัวเลขเดียวกันทั้งหมด */}
        <SharedNumberedGrid
          items={items}
          translationKey={translationKey}
        />
      </div>
    </section>
  )
}
