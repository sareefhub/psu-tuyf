"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Lang = "th" | "en"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("th")
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}

/** Pick a value based on the active language. */
export function useT() {
  const { lang } = useLanguage()
  return function t<T>(th: T, en: T): T {
    return lang === "th" ? th : en
  }
}
