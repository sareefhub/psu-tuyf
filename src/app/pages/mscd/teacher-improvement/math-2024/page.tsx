"use client"

import { TeacherTrainingTemplate } from "../components/teacher-training-template"

// ข้อมูลกำหนดการ/ประกาศของปี 2567 (2024)
const announcements2024 = [
  {
    title: "โครงการอบรมครูคณิตศาสตร์ ประจำปี 2567",
    date: "ตุลาคม 2567",
    size: "250 KB",
    fileUrl: "#",
  },
] as const

// หน้ารายละเอียดโครงการอบรมครูคณิตศาสตร์ ประจำปี 2567 (2024)
export default function TeacherTraining2024Page() {
  return (
    <TeacherTrainingTemplate
      year="2024"
      translationKey="mtt2024"
      imageFolder="mtt-2024"
      announcements={announcements2024}
      galleryImages={[]} // ส่งอาร์เรย์ว่างเพื่อป้องกัน Error 404 เนื่องจากในระบบยังไม่มีไฟล์รูปของปี 2024
    />
  )
}
