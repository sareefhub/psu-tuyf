"use client"

import { CampTemplate } from "../components/camp-template"

// ข้อมูลประกาศข่าวสารสำหรับโครงการ Excellence Math Camp 2026 (ปี 2569)
const announcementsData = [
  {
    title: "รายละเอียดโครงการค่าย Excellence Math Camp 2026",
    date: "1 มีนาคม 2569",
    size: "248 KB",
    fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/emc-2026/รายละเอียดโครงการ.pdf",
  },
  {
    title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าร่วมโครงการ",
    date: "31 มีนาคม 2569",
    size: "148 KB",
    fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/emc-2026/ประกาศรายชื่อผู้มีสิทธิ์เข้าร่วมโครงการ.pdf",
  },
  {
    title: "ประกาศรายชื่อสำรองนักเรียนที่มีสิทธิ์เข้าร่วมโครงการ",
    date: "5 เมษายน 2569",
    size: "125 KB",
    fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/emc-2026/ประกาศรายชื่อสำรองนักเรียนที่มีสิทธิ์เข้าร่วมโครงการ.pdf",
  },
] as const

// รายชื่อรูปคะแนน Post-Test ที่มีอยู่จริงในระบบ (มี 3 รูป)
const postTestImages = [
  "/images/mscd/student-improvement/excellence-match-camp/emc-2026/post-test-1.png",
  "/images/mscd/student-improvement/excellence-match-camp/emc-2026/post-test-2.png",
  "/images/mscd/student-improvement/excellence-match-camp/emc-2026/post-test-3.png",
] as const

// แสดงผลหน้ารายละเอียดของปี 2026 (2569) โดยส่งคอนฟิกไปประมวลผลที่คอมโพเนนต์ตัวกลาง
export default function ExcellenceMathCamp2026Page() {
  return (
    <CampTemplate
      year="2026"
      translationKey="emc2026"
      imageFolder="emc-2026"
      announcements={announcementsData}
      postTestImages={postTestImages}
    />
  )
}
