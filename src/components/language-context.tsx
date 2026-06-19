"use client"

import { createContext, useContext, useState, useEffect, useMemo, useCallback, type ReactNode } from "react"
import { useTranslation } from "react-i18next"
import i18n from "@/lib/i18n" // นำเข้าตั้งค่าเริ่มต้นของ i18n

type Lang = "th" | "en"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [lang, setLang] = useState<Lang>("th")

  // ดึงภาษาที่บันทึกไว้ใน localStorage ขึ้นมาใช้หลังเมาท์เสร็จ (เพื่อป้องกัน Hydration Mismatch ของ Next.js)
  useEffect(() => {
    const savedLang = localStorage.getItem("app-lang") as Lang | null
    if (savedLang === "th" || savedLang === "en") {
      setLang(savedLang)
      i18n.changeLanguage(savedLang)
    }
  }, [])

  // ฟังก์ชันสลับภาษาที่จะจัดเก็บค่าใน localStorage และอัปเดตสถานะของ i18next ไปพร้อมกัน
  const handleSetLang = useCallback((newLang: Lang) => {
    setLang(newLang)
    i18n.changeLanguage(newLang)
    if (globalThis.window !== undefined) {
      localStorage.setItem("app-lang", newLang)
    }
  }, [])

  // จัดเก็บค่าใน Context Provider เพื่อไม่ให้ Object เปลี่ยนทุกครั้งที่เรนเดอร์ (ป้องกันการ Re-render ส่วนลูกโดยไม่จำเป็น)
  const contextValue = useMemo(() => ({ lang, setLang: handleSetLang }), [lang, handleSetLang])

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return ctx
}

/**
 * Custom Hook สำหรับเรียกใช้คำแปล
 * รองรับการทำงานแบบ Hybrid:
 * 1. แบบเดิม (Inline Fallback): t("ภาษาไทย", "English")
 * 2. แบบใหม่ (Key-based JSON): t("nav.home")
 */
export function useT() {
  const { t } = useTranslation("common")
  const { lang } = useLanguage()

  return function translate(keyOrTh: any, enOrOptions?: any, options?: any): any {
    // หากส่งสองพารามิเตอร์และตัวที่สองไม่ใช่ object จะถือว่าเป็นแบบดั้งเดิม (Inline Translation)
    if (enOrOptions !== undefined && typeof enOrOptions !== "object") {
      return lang === "en" ? enOrOptions : keyOrTh
    }
    // แบบคีย์ JSON
    if (typeof keyOrTh === "string") {
      const opts = typeof enOrOptions === "object" ? enOrOptions : options
      return t(keyOrTh, opts)
    }
    return keyOrTh
  }
}
