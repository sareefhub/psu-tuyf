"use client"

import { useLanguage } from "@/components/language-context"

// -----------------------------------------------------------------------------
// 1. คอมโพเนนต์ RecipientsDirectory (จำนวนนักเรียนที่ได้รับทุน)
// -----------------------------------------------------------------------------
export function RecipientsDirectory() {
  const { lang } = useLanguage();

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อแสดงข้อมูลหลัก */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {lang === "en" ? "Active Scholarship Recipients" : "จำนวนนักเรียนที่ได้รับทุน"}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {lang === "en"
              ? "List of graduate students currently studying and receiving scholarships under the MGSS project"
              : "รายชื่อของนักศึกษาระดับบัณฑิตศึกษาที่กำลังศึกษาและได้รับทุนการศึกษาโครงการ MGSS ในปัจจุบัน"}
          </p>
        </div>
      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// 2. คอมโพเนนต์ GraduatedDirectory (จำนวนนักเรียนทุนที่สำเร็จการศึกษา)
// -----------------------------------------------------------------------------
export function GraduatedDirectory() {
  const { lang } = useLanguage();

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อแสดงข้อมูลหลัก */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {lang === "en" ? "Graduated Scholarship Recipients" : "จำนวนนักเรียนทุนที่สำเร็จการศึกษา"}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {lang === "en"
              ? "List of graduate scholarship recipients who have successfully completed their degrees under the MGSS project"
              : "รายชื่อของนักศึกษาทุนโครงการ MGSS ที่ประสบความสำเร็จในการสำเร็จการศึกษาระดับบัณฑิตศึกษา"}
          </p>
        </div>
      </div>
    </section>
  );
}
