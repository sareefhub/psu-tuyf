"use client"

import { useT } from "@/components/language-context"

export function BscHero() {
  const t = useT()

  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden py-16 lg:py-20">
      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary/95" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-4">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium text-primary-foreground/90">
            MSCD
          </span>
        </div>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight sm:leading-tight">
          <span className="inline-block">
            {t("bscScholarships.hero.title")}
          </span>{" "}
          <span className="inline-block">{t("bscScholarships.hero.subtitle")}</span>
        </h1>

        <p className="mt-4 max-w-2xl text-pretty text-base font-light leading-relaxed text-primary-foreground/80 sm:text-lg">
          {t("bscScholarships.hero.desc")}
        </p>
      </div>
    </section>
  )
}
