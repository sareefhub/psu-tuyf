"use client"

import { CampTemplate } from "../components/camp-template"

// ข้อมูลประกาศข่าวสารสำหรับโครงการ Excellence Math Camp 2026 (ปี 2569)
const announcementsData = [
  {
    title: "ประกาศรายชื่อนักเรียนที่มีสิทธิ์เข้าร่วมโครงการอบรม (รับ 40 คน และสำรอง 10 คน)",
    date: "31 มีนาคม 2569",
    size: "148 KB",
    fileUrl: "#", // ลิงก์ตัวอย่างสำหรับประกาศ
  },
  {
    title: "ประกาศรายละเอียดการรับสมัครนักเรียนเข้าร่วมค่าย Excellence Math Camp ประจำปี 2569",
    date: "1 มีนาคม 2569",
    size: "125 KB",
    fileUrl: "#", // ลิงก์ตัวอย่างสำหรับประกาศ
  }
] as const

// แสดงผลหน้ารายละเอียดของปี 2026 (2569) โดยส่งคอนฟิกไปประมวลผลที่คอมโพเนนต์ตัวกลาง
export default function ExcellenceMathCamp2026Page() {
  return (
    <CampTemplate
      year="2026"
      translationKey="emc2026"
      imageFolder="emc-2026"
      announcements={announcementsData}
    />
  )
}
