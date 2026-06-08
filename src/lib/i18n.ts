import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import thCommon from "../../public/locales/th/common.json"
import enCommon from "../../public/locales/en/common.json"

// ทรัพยากรคำแปลสำหรับแต่ละภาษา
// ใช้การ import แบบสแตติกเพื่อความรวดเร็วและรองรับ SSR ไร้ปัญหาเรื่องเครือข่าย
const resources = {
  th: {
    common: thCommon,
  },
  en: {
    common: enCommon,
  },
}

// ตรวจสอบสถานะการเริ่มต้นใช้งาน (Initialization) เพื่อความปลอดภัยและหลีกเลี่ยงการตั้งค่าซ้ำซ้อนขณะพัฒนา (Next.js HMR)
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "th", // ตั้งภาษาไทยเป็นภาษาหลักเริ่มต้น
    fallbackLng: "th", // กรณีไม่มีคีย์ให้กลับมาแสดงภาษาไทย
    ns: ["common"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false, // React ป้องกันการโจมตี XSS ในตัวอยู่แล้ว
    },
    react: {
      useSuspense: false, // ปิด suspense เพื่อความง่ายในการใช้งานบน SSR ร่วมกับ Client Hydration
    },
  })
}

export default i18n
