"use client"

import { CampTemplate } from "../components/camp-template"

// ข้อมูลประกาศข่าวสารสำหรับโครงการปี 2567 (2024)
const announcementsData = [
  {
    title: "ประกาศรายชื่อนักเรียนที่มีสิทธิ์เข้าร่วมโครงการอบรม (40 คน และตัวสำรอง 10 คน)",
    date: "6 พฤษภาคม 2567",
    size: "142 KB",
    fileUrl: "#", // ลิงก์ตัวอย่างสำหรับประกาศ
  },
  {
    title: "ประกาศรายละเอียดการรับสมัครนักเรียนเข้าร่วมค่าย Pre-Olympics Math ประจำปี 2567",
    date: "10 มีนาคม 2567",
    size: "115 KB",
    fileUrl: "#", // ลิงก์ตัวอย่างสำหรับประกาศ
  }
] as const

// แสดงผลหน้าหลักโดยส่งค่าคอนฟิกปี 2024 ไปให้เทมเพลตตัวกลางประมวลผล
export default function PreOlympics2024Page() {
  return (
    <CampTemplate
      year="2024"
      translationKey="pom2024"
      imageFolder="pom-2024"
      announcements={announcementsData}
    />
  )
}
