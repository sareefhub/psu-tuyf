"use client"

import { useLanguage, useT } from "@/context/language-context"
import { ProgramCard } from "@/components/program-card"
import { CarouselWrapper } from "@/components/carousel-wrapper"
import { SharedOverview } from "@/components/shared-overview"

// คอมโพเนนต์แสดงรายละเอียดและข้อมูลภาพรวมโครงการสนับสนุนนักศึกษาระดับบัณฑิตศึกษา (MGSS)
// ปรับปรุงสไตล์และเลย์เอาต์การแสดงผล (หัวข้อใหญ่, ย่อหน้า, ลิสต์รายการย่อย) ให้สอดคล้องกับหน้า MSCD ตามภาพตัวอย่างของผู้ใช้
export function MgssOverview() {
  const { lang } = useLanguage()
  const t = useT()

  // ดึงลิสต์รายชื่อหลักสูตรคณิตศาสตร์ 3 หลักสูตรจากระบบแปลภาษา (Array Localization)
  const items = t("programDetails.mgss.items", { returnObjects: true }) as string[]

  // ข้อมูลการ์ดนักศึกษาทุนทั้ง 3 หลักสูตร เรียงลำดับจากซ้ายไปขวา: ป.โท ปัตตานี -> ป.โท หาดใหญ่ -> ป.เอก หาดใหญ่
  const cards = [
    {
      id: "mgss-0",
      image: "/images/mgss/master-student-pattani.png",
      title: lang === "en" ? "M.Sc. Students (Pattani Campus)" : "นักศึกษาระดับปริญญาโท (วิทยาเขตปัตตานี)",
      href: "/mgss/msc-pattani",
      priority: true, // โหลดรูปปัตตานีล่วงหน้าเพื่อเพิ่มประสิทธิภาพความเร็ว (LCP)
    },
    {
      id: "mgss-1",
      image: "/images/mgss/master-student-hatyai.png",
      title: lang === "en" ? "M.Sc. Students (Hat Yai Campus)" : "นักศึกษาระดับปริญญาโท (วิทยาเขตหาดใหญ่)",
      href: "/mgss/msc-hatyai",
      priority: true, // โหลดรูปหาดใหญ่ล่วงหน้าเพื่อลดความล่าช้าในการโหลดหน้าเว็บ
    },
    {
      id: "mgss-2",
      image: "/images/mgss/phd-student-hatyai.png",
      title: lang === "en" ? "Ph.D. Students (Hat Yai Campus)" : "นักศึกษาระดับปริญญาเอก (วิทยาเขตหาดใหญ่)",
      href: "/mgss/phd-hatyai",
      priority: true, // โหลดรูปหาดใหญ่ล่วงหน้าเพื่อลดความล่าช้าในการโหลดหน้าเว็บ
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6 space-y-12 animate-fade-in">

        {/* ===== ส่วนที่ 1: รายละเอียดข้อความวัตถุประสงค์โครงการและหลักสูตร (ดีไซน์สไตล์เดียวกับหน้า MSCD) ===== */}
        <div className="space-y-6">

          {/* หัวข้อหลักและคำอธิบายวัตถุประสงค์หลักของโครงการ MGSS */}
          <SharedOverview
            translationKey="programDetails.mgss"
            descKeys={["desc", "stats_desc"]}
            noSectionWrapper={true}
          />

          {/* แสดงรายชื่อหลักสูตร 3 หลักสูตร พร้อมสัญลักษณ์จุดกลมและหมายเลขข้อนำหน้า */}
          <div className="space-y-6 border-l border-border/80 pl-6 mt-6">
            {items.map((item, idx) => (
              <div key={item} className="space-y-2">
                {/* หัวข้อหลักสูตรตัวหนาสไตล์เดียวกับ MSCD */}
                <h3 className="text-base font-bold text-primary flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {idx + 1}. {item}
                </h3>
              </div>
            ))}
          </div>

          {/* ข้อความวิสัยทัศน์ในอนาคตของโครงการ */}
          <p className="text-base leading-relaxed text-muted-foreground/90 text-pretty pt-2">
            {t("programDetails.mgss.future_desc")}
          </p>

        </div>

        {/* ===== เส้นคั่นระหว่างเนื้อหาและส่วนของการ์ดหลักสูตร ===== */}
        <hr className="border-border/60" />

        {/* ===== ส่วนที่ 2: การ์ดหลักสูตรทั้ง 3 ใบพร้อมรูปภาพและปุ่มดูรายละเอียด ===== */}
        <CarouselWrapper desktopCols={3}>
          {cards.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="scroll-mt-24 transition-all duration-300 hover:scale-[1.01]"
            >
              <ProgramCard
                title={card.title}
                image={card.image}
                href={card.href}
                moreDetailText={t("programs.more_detail")}
                ariaLabel={t("programs.view_details_aria", { abbr: card.title })}
                priority={card.priority}
              />
            </div>
          ))}
        </CarouselWrapper>

      </div>
    </section>
  )
}
