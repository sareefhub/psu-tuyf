"use client"

import { useLanguage } from "@/context/language-context"
import { SharedEmptyState } from "@/components/shared/shared-empty-state"

// ข้อมูลข้อความหัวข้อประกาศโครงการ MGSS
const announcementsData = {
  th: {
    title: "ประกาศของโครงการ",
    desc: "เอกสารชี้แจง แบบฟอร์มใบสมัคร และเอกสารประกอบการขอรับทุนการศึกษาโครงการ MGSS ระดับบัณฑิตศึกษา",
    emptyTitle: "ยังไม่มีประกาศและข่าวสารในขณะนี้",
    emptyDesc: "ขณะนี้อยู่ระหว่างการจัดเตรียมข้อมูลรับสมัครและเอกสารของโครงการ กรุณาติดตามประกาศในภายหลัง",
  },
  en: {
    title: "Project Announcements",
    desc: "Official announcements, application forms, and required documents for the MGSS graduate scholarship program",
    emptyTitle: "No announcements available at this time",
    emptyDesc: "We are currently preparing application details and documents. Please check back later.",
  }
};

export function AnnouncementsSection() {
  const { lang } = useLanguage();
  const current = announcementsData[lang] || announcementsData.th;

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อแสดงข้อมูลหลัก */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {current.title}
          </h2>
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            {current.desc}
          </p>
        </div>

        {/* แสดงกล่องแจ้งเตือนเมื่อยังไม่มีประกาศและข่าวสารโดยใช้คอมโพเนนต์ตัวกลาง */}
        <SharedEmptyState
          title={current.emptyTitle}
          description={current.emptyDesc}
        />
      </div>
    </section>
  );
}
