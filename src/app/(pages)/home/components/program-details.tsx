"use client"

import { Check } from "lucide-react"
import { useT } from "@/context/language-context"

const details = [
  {
    id: "mscd",
    number: "01",
    abbr: "MSCD",
    titleKey: "programDetails.mscd.title",
    subKey: "programDetails.mscd.sub",
    descKey: "programDetails.mscd.desc",
    itemsKey: "programDetails.mscd.items",
  },
  {
    id: "mgss",
    number: "02",
    abbr: "MGSS",
    titleKey: "programDetails.mgss.title",
    subKey: "programDetails.mgss.sub",
    descKey: "programDetails.mgss.desc",
    itemsKey: "programDetails.mgss.items",
  },
  {
    id: "algebra",
    number: "03",
    abbr: "Algebra Enrichment",
    titleKey: "programDetails.algebra.title",
    subKey: "programDetails.algebra.sub",
    descKey: "programDetails.algebra.desc",
    itemsKey: "programDetails.algebra.items",
  },
]

export function ProgramDetails() {
  const t = useT()

  return (
    <section className="py-8">
      {/* ปรับขนาดความกว้างสูงสุดให้เป็น max-w-7xl เพื่อให้ขอบซ้ายขวาตรงกับส่วน HeroSection */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6">
          {details.map((d) => (
            <article
              key={d.id}
              id={d.id}
              className="scroll-mt-20 rounded-3xl border border-border bg-card p-8 sm:p-10"
            >
              <div className="flex flex-col gap-4">
                <span className="text-4xl font-extrabold text-accent/30 block font-mono">
                  {d.number}
                </span>
                <h3 className="text-balance text-xl font-bold leading-snug text-primary">
                  {t(d.titleKey)}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground/85">
                  {t(d.descKey)}
                </p>
                <ul className="mt-2 space-y-3.5">
                  {(() => {
                    const items = t(d.itemsKey, { returnObjects: true })
                    const itemsArray = Array.isArray(items) ? items : []
                    return itemsArray.map((item, index) => (
                      <li
                        key={item}
                        id={`${d.id}-${index}`}
                        className="flex scroll-mt-24 items-start gap-3"
                      >
                        <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
                          <Check className="h-3 w-3" />
                        </span>
                        <span className="text-sm leading-relaxed text-foreground">{item}</span>
                      </li>
                    ))
                  })()}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
