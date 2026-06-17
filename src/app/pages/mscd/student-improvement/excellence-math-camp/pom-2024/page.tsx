"use client"

import { CampTemplate } from "../components/camp-template"

// ข้อมูลประกาศข่าวสารสำหรับโครงการปี 2567 (2024)
const announcementsData = [
  {
    title: "รายละเอียดโครงการค่าย Pre-Olympics Math 2024",
    date: "10 มีนาคม 2567",
    size: "245 KB",
    fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/pom-2024/รายละเอียดโครงการ.pdf",
  },
  {
    title: "รายละเอียดการสมัครสำหรับนักเรียน",
    date: "10 มีนาคม 2567",
    size: "135 KB",
    fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/pom-2024/รายละเอียดการสมัครสำหรับนักเรียน.pdf",
  },
  {
    title: "รายละเอียดการสมัครสำหรับครูผู้ประสานงาน",
    date: "10 มีนาคม 2567",
    size: "128 KB",
    fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/pom-2024/รายละเอียดการสมัครสำหรับครูผู้ประสานงาน.pdf",
  },
  {
    title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าอบรม (40 คน และตัวสำรอง 10 คน)",
    date: "6 พฤษภาคม 2567",
    size: "142 KB",
    fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/pom-2024/ประกาศรายชื่อผู้มีสิทธิ์เข้าอบรม.pdf",
  },
  {
    title: "ประกาศเรียกลำดับสำรองผู้มีสิทธิ์เข้าอบรม",
    date: "12 พฤษภาคม 2567",
    size: "118 KB",
    fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/pom-2024/ประกาศเรียกลำดับสำรองผู้มีสิทธิ์เข้าอบรม.pdf",
  },
  {
    title: "ข้อปฏิบัติสำหรับนักเรียนที่เข้าร่วมโครงการ",
    date: "18 พฤษภาคม 2567",
    size: "130 KB",
    fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/pom-2024/ข้อปฏิบัติสำหรับนักเรียนที่เข้าร่วมโครงการ.pdf",
  },
] as const

// รายชื่อรูปคะแนน Post-Test ที่มีอยู่จริงในระบบ (มี 1 รูป)
const postTestImages = [
  "/images/mscd/student-improvement/excellence-match-camp/pom-2024/post-test-1.png",
] as const

// แสดงผลหน้าหลักโดยส่งค่าคอนฟิกปี 2024 ไปให้เทมเพลตตัวกลางประมวลผล
export default function PreOlympics2024Page() {
  return (
    <CampTemplate
      year="2024"
      translationKey="pom2024"
      imageFolder="pom-2024"
      announcements={announcementsData}
      postTestImages={postTestImages}
    />
  )
}
