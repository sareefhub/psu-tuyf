"use client"

import { TeacherTrainingTemplate } from "../components/teacher-training-template"

// ข้อมูลกำหนดการ/ประกาศของปี 2567 (2024)
const announcements2024 = [
  {
    title: "ประกาศเเละใบรับสมัครอบรมครูคณิตศาสตร์ 2567",
    date: "สิงหาคม 2567",
    size: "248 KB",
    fileUrl: "/documents/mscd/teacher-improvement/mathematics-teacher-training/mtt-2024/ประกาศเเละใบรับสมัคร-2567.pdf",
  },
  {
    title: "หนังสือเชิญส่งผู้แทนครูเข้าร่วมการอบรม",
    date: "กันยายน 2567",
    size: "155 KB",
    fileUrl: "/documents/mscd/teacher-improvement/mathematics-teacher-training/mtt-2024/หนังสือเชิญ.pdf",
  },
  {
    title: "ประกาศรายชื่อคุณครูที่ผ่านการคัดเลือกเข้ารับการอบรม",
    date: "ตุลาคม 2567",
    size: "138 KB",
    fileUrl: "/documents/mscd/teacher-improvement/mathematics-teacher-training/mtt-2024/ประกาศรายชื่อคุณครูที่ผ่านการคัดเลือก.pdf",
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
