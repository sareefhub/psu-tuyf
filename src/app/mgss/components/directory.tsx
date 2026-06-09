"use client"

import { useLanguage } from "@/components/language-context"
import Image from "next/image"

// ลิสต์เส้นทางรูปภาพสถิตินักศึกษาทุนปัจจุบัน (1, 2, 3)
const activeImages = [
  "/images/mgss/student-stats-1.png",
  "/images/mgss/student-stats-2.png",
  "/images/mgss/student-stats-3.png"
] as const;

// ลิสต์เส้นทางรูปภาพสถิตินักศึกษาทุนที่สำเร็จการศึกษา (4, 5, 6)
const graduatedImages = [
  "/images/mgss/student-stats-4.png",
  "/images/mgss/student-stats-5.png",
  "/images/mgss/student-stats-6.png"
] as const;

// -----------------------------------------------------------------------------
// 1. คอมโพเนนต์ RecipientsDirectory (จำนวนนักเรียนที่ได้รับทุน)
// -----------------------------------------------------------------------------
export function RecipientsDirectory() {
  const { lang } = useLanguage();

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
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

        {/* แสดงผลรูปภาพกราฟสถิตินักศึกษาทุนปัจจุบัน 1, 2, 3 เรียงกันในแนวตั้ง (Vertical Stack) เพื่อความเรียบร้อยและอ่านง่าย */}
        <div className="space-y-10 max-w-4xl mx-auto">
          {activeImages.map((src, index) => (
            <div
              key={src}
              className="bg-card border border-border/40 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center"
            >
              <div className="relative w-full max-w-3xl aspect-[16/9]">
                <Image
                  src={src}
                  alt={`Active Scholar Stats Chart ${index + 1}`}
                  fill
                  sizes="(max-w-4xl) 100vw, 800px"
                  className="object-contain rounded-2xl"
                />
              </div>
            </div>
          ))}
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
      <div className="mx-auto max-w-7xl px-6 space-y-12">
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

        {/* แสดงผลรูปภาพกราฟสถิติผู้สำเร็จการศึกษา 4, 5, 6 เรียงกันในแนวตั้ง (Vertical Stack) เพื่อความเรียบร้อยและอ่านง่าย */}
        <div className="space-y-10 max-w-4xl mx-auto">
          {graduatedImages.map((src, index) => (
            <div
              key={src}
              className="bg-card border border-border/40 rounded-3xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 p-6 flex flex-col items-center"
            >
              <div className="relative w-full max-w-3xl aspect-[16/9]">
                <Image
                  src={src}
                  alt={`Graduated Scholar Stats Chart ${index + 1}`}
                  fill
                  sizes="(max-w-4xl) 100vw, 800px"
                  className="object-contain rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
