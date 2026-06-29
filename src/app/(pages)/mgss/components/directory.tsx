"use client"

import { useLanguage } from "@/context/language-context"
import Image from "next/image"

// นำเข้าไฟล์ภาพสถิติแบบ Static เพื่อใช้ประโยชน์ในการคำนวณอัตราส่วนภาพ ป้องกันปัญหา CLS
import statsImg1 from "../../../../../public/images/mgss/student-stats-1.png"
import statsImg2 from "../../../../../public/images/mgss/student-stats-2.png"
import statsImg3 from "../../../../../public/images/mgss/student-stats-3.png"
import statsImg4 from "../../../../../public/images/mgss/student-stats-4.png"
import statsImg5 from "../../../../../public/images/mgss/student-stats-5.png"
import statsImg6 from "../../../../../public/images/mgss/student-stats-6.png"

// อาเรย์ข้อมูลรูปภาพสถิตินักศึกษาทุนปัจจุบัน (ใช้ภาพที่นำเข้าแบบ Static)
const activeImages = [
  {
    src: statsImg1,
    id: "active-stats-1",
  },
  {
    src: statsImg2,
    id: "active-stats-2",
  },
  {
    src: statsImg3,
    id: "active-stats-3",
  },
] as const;

// อาเรย์ข้อมูลรูปภาพสถิตินักศึกษาทุนที่สำเร็จการศึกษา (ใช้ภาพที่นำเข้าแบบ Static)
const graduatedImages = [
  {
    src: statsImg4,
    id: "graduated-stats-4",
  },
  {
    src: statsImg5,
    id: "graduated-stats-5",
  },
  {
    src: statsImg6,
    id: "graduated-stats-6",
  },
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

        {/* เลย์เอาต์แสดงภาพกราฟสถิติ 3 คอลัมน์แบบแบนและคลีน ตามดีไซน์สถิตินักเรียนทุนเดิม */}
        <div className="grid gap-8 md:grid-cols-3">
          {activeImages.map((image, index) => (
            <div key={image.id} className="flex items-center justify-center overflow-hidden">
              <Image
                src={image.src}
                alt={`Active Student Stats Chart ${index + 1}`}
                className="w-full h-auto object-contain rounded-2xl"
              />
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

        {/* เลย์เอาต์แสดงภาพกราฟสถิติ 3 คอลัมน์แบบแบนและคลีน ตามดีไซน์สถิตินักเรียนทุนเดิม */}
        <div className="grid gap-8 md:grid-cols-3">
          {graduatedImages.map((image, index) => (
            <div key={image.id} className="flex items-center justify-center overflow-hidden">
              <Image
                src={image.src}
                alt={`Graduated Scholar Stats Chart ${index + 1}`}
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
