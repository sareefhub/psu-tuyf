"use client"

import { CampTemplate } from "../components/camp-template"

// ข้อมูลประกาศข่าวสารสำหรับโครงการ Excellence Math Camp 2025 (ปี 2568)
const announcementsData = [
  {
    title: "รายละเอียดโครงการค่าย Excellence Math Camp 2025",
    date: "1 มีนาคม 2568",
    size: "245 KB",
    fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/emc-2025/รายละเอียดโครงการ.pdf",
  },
  {
    title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าอบรม (รับ 40 คน และสำรอง 10 คน)",
    date: "29 เมษายน 2568",
    size: "145 KB",
    fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/emc-2025/ประกาศรายชื่อผู้มีสิทธิ์เข้าอบรม.pdf",
  },
  {
    title: "ประกาศเรียกลำดับสำรองผู้มีสิทธิ์เข้าอบรม",
    date: "5 พฤษภาคม 2568",
    size: "115 KB",
    fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/emc-2025/ประกาศเรียกลำดับสำรองผู้มีสิทธิ์เข้าอบรม.pdf",
  },
  {
    title: "ข้อปฏิบัติสำหรับนักเรียนที่เข้าร่วมโครงการ",
    date: "10 พฤษภาคม 2568",
    size: "132 KB",
    fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/emc-2025/ข้อปฏิบัติสำหรับนักเรียนที่เข้าร่วมโครงการ.pdf",
  },
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
