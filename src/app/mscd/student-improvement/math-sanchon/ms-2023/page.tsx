"use client"

import { SanchonTemplate } from "../components/sanchon-template"

// ข้อมูลกำหนดการ/ประกาศแยกตามแต่ละโรงเรียนของปี 2566 (2023)
const announcements2023 = [
  {
    title: "กำหนดการคณิตศาสตร์สัญจร 2566 - โรงเรียนประสานวิทยามูลนิธิ (ปัตตานี)",
    date: "14 กรกฎาคม 2566",
    size: "245 KB",
    fileUrl: "#",
  },
  {
    title: "กำหนดการคณิตศาสตร์สัญจร 2566 - โรงเรียนสายบุรีอิสลามวิทยา (ปัตตานี)",
    date: "21 กรกฎาคม 2566",
    size: "248 KB",
    fileUrl: "#",
  },
  {
    title: "กำหนดการคณิตศาสตร์สัญจร 2566 - โรงเรียนธรรมวิทยามูลนิธิ (ยะลา)",
    date: "4 สิงหาคม 2566",
    size: "250 KB",
    fileUrl: "#",
  },
  {
    title: "กำหนดการคณิตศาสตร์สัญจร 2566 - โรงเรียนสตรีพัฒนศึกษา (ยะลา)",
    date: "18 สิงหาคม 2566",
    size: "242 KB",
    fileUrl: "#",
  },
  {
    title: "กำหนดการคณิตศาสตร์สัญจร 2566 - โรงเรียนอัตตัรกียะฮ์อิสลามียะฮ์ (นราธิวาส)",
    date: "1 กันยายน 2566",
    size: "255 KB",
    fileUrl: "#",
  },
] as const

// หน้ารายละเอียดโครงการคณิตศาสตร์สัญจร ประจำปี 2566 (2023)
export default function MathSanchon2023Page() {
  return (
    <SanchonTemplate
      year="2023"
      translationKey="ms2023"
      imageFolder="ms-2023"
      announcements={announcements2023}
      galleryImages={[]} // ส่งอาร์เรย์ว่างเพื่อป้องกัน Error 404 เนื่องจากในระบบยังไม่มีไฟล์รูปของปี 2023
    />
  )
}
