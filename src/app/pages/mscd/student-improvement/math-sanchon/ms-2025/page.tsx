"use client"

import { SanchonTemplate } from "../components/sanchon-template"

// ข้อมูลกำหนดการ/ประกาศแยกตามแต่ละโรงเรียนของปี 2568 (2025)
const announcements2025 = [
  {
    title: "โครงการอบรมคณิตศาสตร์สัญจร ประจำปี 2568",
    date: "กรกฎาคม 2568",
    size: "250 KB",
    fileUrl: "#",
  },
] as const

// หน้ารายละเอียดโครงการคณิตศาสตร์สัญจร ประจำปี 2568 (2025)
export default function MathSanchon2025Page() {
  return (
    <SanchonTemplate
      year="2025"
      translationKey="ms2025"
      imageFolder="ms-2025"
      announcements={announcements2025}
      galleryImages={[]} // ส่งอาร์เรย์ว่างเพื่อป้องกัน Error 404 เนื่องจากในระบบยังไม่มีไฟล์รูปของปี 2025
    />
  )
}
