"use client"

import { SanchonTemplate } from "../components/sanchon-template"

// ข้อมูลกำหนดการ/ประกาศแยกตามแต่ละโรงเรียนของปี 2567 (2024)
const announcements2024 = [
  {
    title: "โครงการอบรมคณิตศาสตร์สัญจร ประจำปี 2567",
    date: "กรกฎาคม 2567",
    size: "250 KB",
    fileUrl: "#",
  },
] as const

// หน้ารายละเอียดโครงการคณิตศาสตร์สัญจร ประจำปี 2567 (2024)
export default function MathSanchon2024Page() {
  return (
    <SanchonTemplate
      year="2024"
      translationKey="ms2024"
      imageFolder="ms-2024"
      announcements={announcements2024}
      galleryImages={[]} // ส่งอาร์เรย์ว่างเพื่อป้องกัน Error 404 เนื่องจากในระบบยังไม่มีไฟล์รูปของปี 2024
    />
  )
}
