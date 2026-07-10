"use client"

import { useT } from "@/context/language-context"
import { SharedAnnouncements } from "@/components/program-detail-template"
import { SharedEmptyState } from "@/components/shared/shared-empty-state"

// ข้อมูลประกาศเอกสาร PDF ของค่ายพีชคณิต (ตั้งค่าเป็นอาร์เรย์ว่างตามฟีดแบคผู้ใช้ที่ยังไม่ต้องการให้มีรายการประกาศในขณะนี้)
const announcementsData: Array<{ key: string; size: string; fileUrl: string }> = []

/**
 * คอมโพเนนต์แสดงผลประกาศและดาวน์โหลดไฟล์ของค่ายอบรมพีชคณิต
 * ปรับปรุงโดยการซ่อนข้อมูลเอกสารและแสดงหน้าตาสำหรับกรณีไม่มีเอกสารประกาศให้สวยงามและพรีเมียม
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

  // หากไม่มีข้อมูลประกาศในขณะนี้ ให้แสดงข้อความสไตล์ดีไซน์พิเศษที่สวยงามและรองรับสองภาษา
  if (announcements.length === 0) {
    return (
      <section className="py-10 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              {t("algebraCamps.announcements.title")}
            </h2>
            <p className="text-sm text-muted-foreground/80">
              {t("algebraCamps.announcements.desc")}
            </p>
          </div>
          
          {/* เรียกใช้งานคอมโพเนนต์ตัวกลางเมื่อไม่มีข้อมูลประกาศ */}
          <SharedEmptyState
            title={t("ยังไม่มีประกาศและข่าวสารในขณะนี้", "No announcements available at this time")}
            description={t("ขณะนี้อยู่ระหว่างการจัดเตรียมข้อมูลรับสมัครและเอกสารของโครงการ กรุณาติดตามประกาศในภายหลัง", "We are currently preparing application details and documents. Please check back later.")}
          />
        </div>
      </section>
    )
  }

  return (
    <SharedAnnouncements
      translationKey="algebraCamps"
      announcements={announcements}
    />
  )
}
