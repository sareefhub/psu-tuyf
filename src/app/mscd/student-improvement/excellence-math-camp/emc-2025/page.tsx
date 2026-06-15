"use client"

import { CampTemplate } from "../components/camp-template"

// ข้อมูลประกาศข่าวสารสำหรับโครงการ Excellence Math Camp 2025 (ปี 2568)
const announcementsData = [
  {
    title: "ประกาศรายชื่อนักเรียนที่มีสิทธิ์เข้าร่วมโครงการอบรม (รับ 40 คน และสำรอง 10 คน)",
    date: "29 เมษายน 2568",
    size: "145 KB",
    fileUrl: "#", // ลิงก์ตัวอย่างสำหรับประกาศ
  },
  {
    title: "ประกาศรายละเอียดการรับสมัครนักเรียนเข้าร่วมค่าย Excellence Math Camp ประจำปี 2568",
    date: "1 มีนาคม 2568",
    size: "120 KB",
    fileUrl: "#", // ลิงก์ตัวอย่างสำหรับประกาศ
  }
] as const

// รายชื่อรูปคะแนน Post-Test ที่มีอยู่จริงในระบบ (มี 3 รูป)
const postTestImages = [
  "/images/mscd/student-improvement/excellence-match-camp/emc-2025/post-test-1.png",
  "/images/mscd/student-improvement/excellence-match-camp/emc-2025/post-test-2.png",
  "/images/mscd/student-improvement/excellence-match-camp/emc-2025/post-test-3.png",
] as const

// แสดงผลหน้ารายละเอียดของปี 2025 (2568) โดยส่งคอนฟิกไปประมวลผลที่คอมโพเนนต์ตัวกลาง
export default function ExcellenceMathCamp2025Page() {
  return (
    <CampTemplate
      year="2025"
      translationKey="emc2025"
      imageFolder="emc-2025"
      announcements={announcementsData}
      postTestImages={postTestImages}
    />
  )
}
