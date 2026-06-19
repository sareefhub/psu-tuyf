"use client"

import { useT } from "@/components/language-context"
import { SharedAnnouncements } from "@/components/program-detail-template"

// รายการคีย์ประกาศเอกสาร
const announcementKeys = ["item1", "item2"] as const

/**
 * คอมโพเนนต์แสดงผลประกาศและจดหมายข่าวฝั่งโครงการพัฒนาครู
 * ปรับปรุงโดยการยุบรวมโค้ดไปเรียกใช้คอมโพเนนต์ SharedAnnouncements ที่เป็นตัวกลางของทั้งระบบ
 */
export function AnnouncementsSection() {
  const t = useT()

  // แปลงคีย์ประกาศและ i18n ให้สอดคล้องกับอินเตอร์เฟซ SharedAnnouncementItem ของตัวกลาง
  const announcements = announcementKeys.map((key) => ({
    title: t(`teacherImprovement.announcements.items.${key}.title`),
    date: t(`teacherImprovement.announcements.items.${key}.date`),
    size: "N/A", // เนื่องจากหน้านี้ไม่มีการจัดเก็บขนาดไฟล์จึงระบุเป็น N/A
    fileUrl: "#", // เนื่องจากยังไม่มีไฟล์จริง จึงส่งเป็น '#' เพื่อให้ตัวกลางแสดง Modal แจ้งเตือนเมื่อต้องการเปิดไฟล์
  }))

  return (
    <SharedAnnouncements
      translationKey="teacherImprovement"
      announcements={announcements}
    />
  )
}
