"use client"

import { useT } from "@/components/language-context"
import { SharedAnnouncements } from "@/components/program-detail-template"

// ข้อมูลประกาศเอกสาร PDF ของค่ายพีชคณิต พร้อมคีย์คำแปลจาก JSON
const announcementsData = [
  {
    key: "item1",
    size: "125 KB",
    fileUrl: "#", // ใช้ # เป็นค่าจำลองไว้จนกว่าจะมีไฟล์เอกสารจริงอัปโหลดเข้ามา
  },
  {
    key: "item2",
    size: "98 KB",
    fileUrl: "#",
  },
  {
    key: "item3",
    size: "115 KB",
    fileUrl: "#",
  },
]

/**
 * คอมโพเนนต์แสดงผลประกาศและดาวน์โหลดไฟล์ของค่ายอบรมพีชคณิต
 * ปรับปรุงโดยการยุบรวมโค้ดไปเรียกใช้คอมโพเนนต์ SharedAnnouncements ที่เป็นตัวกลางของทั้งระบบ
 */
export function CampAnnouncements() {
  const t = useT()

  // แปลงข้อมูลจาก announcementsData ให้สอดคล้องกับอินเตอร์เฟซ SharedAnnouncementItem ของตัวกลาง
  const announcements = announcementsData.map((item) => ({
    title: t(`algebraCamps.announcements.items.${item.key}.title`),
    date: t(`algebraCamps.announcements.items.${item.key}.date`),
    size: item.size,
    fileUrl: item.fileUrl,
  }))

  return (
    <SharedAnnouncements
      translationKey="algebraCamps"
      announcements={announcements}
    />
  )
}
