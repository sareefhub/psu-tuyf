"use client"

import { TeacherTrainingTemplate } from "../components/teacher-training-template"

// ข้อมูลกำหนดการ/ประกาศของปี 2565 (2022)
const announcements2022 = [
  {
    title: "โครงการอบรมครูคณิตศาสตร์ ประจำปี 2565",
    date: "ตุลาคม 2565",
    size: "250 KB",
    fileUrl: "#",
  },
] as const

// หน้ารายละเอียดโครงการอบรมครูคณิตศาสตร์ ประจำปี 2565 (2022)
export default function TeacherTraining2022Page() {
  return (
    <TeacherTrainingTemplate
      year="2022"
      translationKey="mtt2022"
      imageFolder="mtt-2022"
      announcements={announcements2022}
      galleryImages={[]} // ส่งอาร์เรย์ว่างเพื่อป้องกัน Error 404 เนื่องจากในระบบยังไม่มีไฟล์รูปของปี 2022
    />
  )
}
