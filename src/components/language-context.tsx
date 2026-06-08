"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useTranslation } from "react-i18next"
import i18n from "@/lib/i18n" // นำเข้าตั้งค่าเริ่มต้นของ i18n

type Lang = "th" | "en"

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("th")

  // ดึงภาษาที่บันทึกไว้ใน localStorage ขึ้นมาใช้หลังเมาท์เสร็จ (เพื่อป้องกัน Hydration Mismatch ของ Next.js)
  useEffect(() => {
    const savedLang = localStorage.getItem("app-lang") as Lang | null
    if (savedLang === "th" || savedLang === "en") {
      setLangState(savedLang)
      i18n.changeLanguage(savedLang)
    }
  }, [])

  // ฟังก์ชันสลับภาษาที่จะจัดเก็บค่าใน localStorage และอัปเดตสถานะของ i18next ไปพร้อมกัน
  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    i18n.changeLanguage(newLang)
    if (typeof window !== "undefined") {
      localStorage.setItem("app-lang", newLang)
    }
  }

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
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
  const { t, i18n: i18nInstance } = useTranslation("common")

  return function translate(keyOrTh: any, enOrOptions?: any, options?: any): any {
    // หากส่งสองพารามิเตอร์และตัวที่สองไม่ใช่ object จะถือว่าเป็นแบบดั้งเดิม (Inline Translation)
    if (enOrOptions !== undefined && typeof enOrOptions !== "object") {
      return i18nInstance.language === "en" ? enOrOptions : keyOrTh
    }
    // แบบคีย์ JSON
    if (typeof keyOrTh === "string") {
      const opts = typeof enOrOptions === "object" ? enOrOptions : options
      return t(keyOrTh, opts)
    }
    return keyOrTh
  }
}
