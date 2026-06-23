"use client"

import { useT } from "@/components/language-context"
import { SharedAnnouncements } from "@/components/program-detail-template"

// ข้อมูลประกาศเอกสาร PDF ของทุนการศึกษา พร้อมคีย์คำแปลจาก JSON
const announcementsData = [
  {
    key: "item1",
    size: "248 KB",
    fileUrl: "/documents/algebra-enrichment/scholarships/รายละเอียดประกาศรับสมัครทุนการศึกษา.pdf",
  },
  {
    key: "item2",
    size: "185 KB",
    fileUrl: "/documents/algebra-enrichment/scholarships/ใบสมัครทุนการศึกษา.pdf",
  },
]

/**
 * คอมโพเนนต์แสดงผลประกาศและดาวน์โหลดของโครงการทุนการศึกษาพีชคณิต
 * ปรับปรุงโดยการยุบรวมโค้ดไปเรียกใช้คอมโพเนนต์ SharedAnnouncements ที่เป็นตัวกลางของทั้งระบบ
 */
export function ScholarshipAnnouncements() {
  const t = useT()

  // แปลงข้อมูลจาก announcementsData ให้สอดคล้องกับอินเตอร์เฟซ SharedAnnouncementItem ของตัวกลาง
  const announcements = announcementsData.map((item) => ({
    title: t(`algebraScholarships.announcements.items.${item.key}.title`),
    date: t(`algebraScholarships.announcements.items.${item.key}.date`),
    size: item.size,
    fileUrl: item.fileUrl,
  }))

  return (
    <SharedAnnouncements
      translationKey="algebraScholarships"
      announcements={announcements}
    />
  )
}
