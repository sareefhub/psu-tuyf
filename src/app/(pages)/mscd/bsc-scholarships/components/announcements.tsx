"use client"

import { useT } from "@/context/language-context"
import { bscAnnouncementsData } from "@/data/pages/mscd/bsc-scholarships/bsc-scholarships"
import { SharedAnnouncements } from "@/components/program-detail-template"

/**
 * คอมโพเนนต์แสดงผลประกาศผลและข่าวสารการคัดเลือกทุนการศึกษา BSC
 * ปรับปรุงโดยการยุบรวมโค้ดไปเรียกใช้คอมโพเนนต์ SharedAnnouncements ที่เป็นตัวกลางของทั้งระบบ
 */
export function SelectionAnnouncements() {
  const t = useT()

  // แปลงข้อมูลจาก bscAnnouncementsData ให้สอดคล้องกับอินเตอร์เฟซ SharedAnnouncementItem ของตัวกลาง
  const announcements = bscAnnouncementsData.map((item) => ({
    title: t(`bscScholarships.announcements.items.${item.key}.title`),
    date: t(`bscScholarships.announcements.items.${item.key}.date`),
    size: item.size,
    fileUrl: item.fileUrl,
  }))

  return (
    <SharedAnnouncements
      translationKey="bscScholarships"
      announcements={announcements}
    />
  )
}
