"use client"

import { CampTemplate } from "../components/camp-template"

// ข้อมูลประกาศข่าวสารสำหรับโครงการปี 2566 (2023)
const announcementsData = [
  {
    title: "รายละเอียดโครงการค่าย Pre-Olympics Math 2023",
    date: "15 มีนาคม 2566",
    size: "242 KB",
    fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/pom-2023/รายละเอียดโครงการ.pdf",
  },
  {
    title: "แบบฟอร์มส่งรายชื่อเข้าร่วมโครงการ",
    date: "20 มีนาคม 2566",
    size: "112 KB",
    fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/pom-2023/แบบฟอร์มส่งรายชื่อเข้าร่วมโครงการ.pdf",
  },
  {
    title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าอบรมค่าย Pre-Olympics",
    date: "10 เมษายน 2566",
    size: "135 KB",
    fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/pom-2023/ประกาศรายชื่อผู้มีสิทธิ์เข้าอบรมค่าย-PreOlympics.pdf",
  },
] as const

// รายชื่อรูปคะแนน Post-Test ที่มีอยู่จริงในระบบ
const postTestImages = [
  "/images/mscd/student-improvement/excellence-match-camp/pom-2023/post-test-1.png",
  "/images/mscd/student-improvement/excellence-match-camp/pom-2023/post-test-2.png",
] as const

// แสดงผลหน้าหลักโดยส่งค่าคอนฟิกปี 2023 ไปให้เทมเพลตตัวกลางประมวลผล
export default function PreOlympics2023Page() {
  return (
    <CampTemplate
      year="2023"
      translationKey="pom2023"
      imageFolder="pom-2023"
      announcements={announcementsData}
      postTestImages={postTestImages}
    />
  )
}
