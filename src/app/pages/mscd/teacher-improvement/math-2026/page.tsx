"use client"

import { TeacherTrainingTemplate } from "../components/teacher-training-template"

// ข้อมูลกำหนดการ/ประกาศของปี 2569 (2026)
const announcements2026 = [
  {
    title: "โครงการอบรมครูคณิตศาสตร์ ประจำปี 2569",
    date: "เมษายน 2569",
    size: "250 KB",
    fileUrl: "#",
  },
] as const

// หน้ารายละเอียดโครงการอบรมครูคณิตศาสตร์ ประจำปี 2569 (2026)
export default function TeacherTraining2026Page() {
  return (
    <TeacherTrainingTemplate
      year="2026"
      translationKey="mtt2026"
      imageFolder="mtt-2026"
      announcements={announcements2026}
      galleryImages={[]} // ส่งอาร์เรย์ว่างเพื่อป้องกัน Error 404 เนื่องจากในระบบยังไม่มีไฟล์รูปของปี 2026
    />
  )
}
