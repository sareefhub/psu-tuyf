"use client"

import { useT } from "@/context/language-context"

export function SharedHero({
  translationKey,
  titleKey,
  subtitleKey,
}: Readonly<{
  translationKey: string;
  titleKey?: string;
  subtitleKey?: string;
}>) {
  const t = useT()
  const keyTitle = titleKey ?? `${translationKey}.title`
  const keySubtitle = subtitleKey ?? `${translationKey}.subtitle`

  const titleFull = t(keyTitle)
  const title = titleFull.includes(" (") ? titleFull.split(" (")[0] : titleFull

  let inlineSubtitle = ""
  if (titleFull.includes(" (")) {
    inlineSubtitle = `(${titleFull.split(" (")[1]}`
  }

  const descSubtitle = t(keySubtitle)

  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden py-16 lg:py-20 animate-fade-in">
      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary/95" />
      <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight">
          <span className="block text-primary-foreground">
            {title}
          </span>
          {inlineSubtitle && (
            <span className="block text-primary-foreground/80 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-2 tracking-wide font-sans">
              {inlineSubtitle}
            </span>
          )}
        </h1>

        {descSubtitle && descSubtitle !== keySubtitle && (
          <p className="mt-6 max-w-3xl text-pretty text-sm font-medium leading-relaxed text-primary-foreground/90 sm:text-base">
            {descSubtitle}
          </p>
        )}
      </div>
    </section>
  )
}
