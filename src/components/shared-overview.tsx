"use client"

import { useT } from "@/context/language-context"

export function SharedOverview({
  translationKey,
  descKeys,
}: Readonly<{
  translationKey: string;
  descKeys?: readonly string[];
}>) {
  const t = useT()
  const keys = descKeys ?? ["desc1", "desc2", "desc3"]

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              {t("ข้อมูลโครงการเบื้องต้น", "Project Overview")}
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground/90 text-pretty">
              {keys.map((key) => {
                const fullKey = `${translationKey}.${key}`
                const content = t(fullKey)
                if (content && content !== fullKey) {
                  return <p key={key}>{content}</p>
                }
                return null
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
