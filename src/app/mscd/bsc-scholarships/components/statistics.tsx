"use client"

import { useT } from "@/components/language-context"
// นำเข้า Image และไฟล์ภาพสถิติแบบ Static เพื่อใช้ประโยชน์ในการคำนวณอัตราส่วนภาพ ป้องกันปัญหา CLS
import Image from "next/image"
import statsImg1 from "../../../../../public/images/mscd/bsc-scholarships/scholarship-student-stats-1.png"
import statsImg2 from "../../../../../public/images/mscd/bsc-scholarships/scholarship-student-stats-2.png"
import statsImg3 from "../../../../../public/images/mscd/bsc-scholarships/scholarship-student-stats-3.png"

export function SelectionStatistics() {
  const t = useT()

  // อาเรย์ข้อมูลรูปภาพสถิตินักเรียนทุน (ใช้ตัวแปรภาพที่นำเข้าแบบ Static)
  const statsImages = [
    {
      src: statsImg1,
      altKey: "bscScholarships.statistics.alt1",
    },
    {
      src: statsImg2,
      altKey: "bscScholarships.statistics.alt2",
    },
    {
      src: statsImg3,
      altKey: "bscScholarships.statistics.alt3",
    },
  ]

  return (
    <section className="py-10 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {/* หัวข้อสถิติแบบ Clean Clean สไตล์หน้าแรก */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("bscScholarships.statistics.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("bscScholarships.statistics.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงภาพกราฟสถิติ 3 คอลัมน์แบบแบนและคลีน */}
        <div className="grid gap-8 md:grid-cols-3">
          {statsImages.map((image) => (
            <div key={image.altKey} className="flex items-center justify-center overflow-hidden">
              <Image
                src={image.src}
                alt={t(image.altKey)}
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
