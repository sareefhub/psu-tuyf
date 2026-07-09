"use client"

import { useT } from "@/context/language-context"

export function SharedObjectives({
  translationKey,
}: Readonly<{
  translationKey: string;
}>) {
  const t = useT()
  const objectives = t(`${translationKey}.objectivesList`, { returnObjects: true }) as string[]
  const title = t(`${translationKey}.objectivesTitle`)

  if (!objectives || !Array.isArray(objectives)) return null

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {title && title !== `${translationKey}.objectivesTitle` ? title : t("วัตถุประสงค์หลักของโครงการ", "Main Objectives")}
          </h2>
          <p className="text-base text-muted-foreground/80">
            {t("วัตถุประสงค์ที่มุ่งเน้นเพื่อยกระดับทักษะและการพัฒนาการศึกษาของโครงการ", "Objectives focusing on skill enhancement and educational development of the project")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {objectives.map((obj, index) => (
            <div
              key={obj}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-xs space-y-3 hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex gap-4 items-start">
                <span className="h-7 w-7 rounded-xl bg-accent/10 flex items-center justify-center text-xs font-bold text-accent shrink-0">
                  {index + 1}
                </span>
                <p className="text-base text-foreground/90 leading-relaxed font-semibold">
                  {obj}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
