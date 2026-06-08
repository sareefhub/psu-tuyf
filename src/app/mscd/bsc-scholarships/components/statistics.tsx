"use client"

import { useT } from "@/components/language-context"

export function SelectionStatistics() {
  const t = useT()

  // อาเรย์ข้อมูลรูปภาพสถิตินักเรียนทุน
  const statsImages = [
    {
      src: "/images/mscd/bsc-scholarships/scholarship-student-stats-1.png",
      altKey: "bscScholarships.statistics.alt1",
    },
    {
      src: "/images/mscd/bsc-scholarships/scholarship-student-stats-2.png",
      altKey: "bscScholarships.statistics.alt2",
    },
    {
      src: "/images/mscd/bsc-scholarships/scholarship-student-stats-3.png",
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
            <div key={image.src} className="flex items-center justify-center overflow-hidden">
              <img
                src={image.src}
                alt={t(image.altKey)}
                className="w-full h-auto object-contain rounded-2xl"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
