"use client"

import { useT } from "@/components/language-context"
import { SharedAnnouncements } from "@/components/program-detail-template"

// ข้อมูลประกาศเอกสาร PDF ของศูนย์พีชคณิต พร้อมคีย์คำแปลจาก JSON
const announcementsData = [
  {
    key: "item1",
    size: "262 KB",
    fileUrl: "/documents/algebra-enrichment/algebra-center/รายละเอียดประกาศรับสมัครงาน.pdf",
  },
  {
    key: "item2",
    size: "154 KB",
    fileUrl: "/documents/algebra-enrichment/algebra-center/ใบสมัครงาน.pdf",
  },
]

/**
 * คอมโพเนนต์แสดงผลประกาศรับสมัครงานของศูนย์พีชคณิต
 * ปรับปรุงโดยการยุบรวมโค้ดไปเรียกใช้คอมโพเนนต์ SharedAnnouncements ที่เป็นตัวกลางของทั้งระบบ
 */
export function CenterAnnouncements() {
  const t = useT()

  // แปลงข้อมูลจาก announcementsData ให้สอดคล้องกับอินเตอร์เฟซ SharedAnnouncementItem ของตัวกลาง
  const announcements = announcementsData.map((item) => ({
    title: t(`algebraCenter.announcements.items.${item.key}.title`),
    date: t(`algebraCenter.announcements.items.${item.key}.date`),
    size: item.size,
    fileUrl: item.fileUrl,
  }))

  return (
    <SharedAnnouncements
      translationKey="algebraCenter"
      announcements={announcements}
    />
  )
}
