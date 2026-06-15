"use client"

import { CampTemplate } from "../components/camp-template"

// ข้อมูลประกาศข่าวสารสำหรับโครงการปี 2566 (2023)
const announcementsData = [
  {
    title: "ประกาศรายชื่อนักเรียนที่มีสิทธิ์เข้าร่วมโครงการอบรม (80 คน และตัวสำรอง 40 คน)",
    date: "10 เมษายน 2566",
    size: "135 KB",
    fileUrl: "#", // ลิงก์ตัวอย่างสำหรับประกาศ
  },
  {
    title: "ประกาศรายละเอียดการรับสมัครนักเรียนเข้าร่วมค่าย Pre-Olympics Math ประจำปี 2566",
    date: "15 มีนาคม 2566",
    size: "112 KB",
    fileUrl: "#", // ลิงก์ตัวอย่างสำหรับประกาศ
  }
] as const

// แสดงผลหน้าหลักโดยส่งค่าคอนฟิกปี 2023 ไปให้เทมเพลตตัวกลางประมวลผล
export default function PreOlympics2023Page() {
  return (
    <CampTemplate
      year="2023"
      translationKey="pom2023"
      imageFolder="pom-2023"
      announcements={announcementsData}
    />
  )
}
