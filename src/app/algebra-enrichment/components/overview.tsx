"use client"

import { useLanguage, useT } from "@/components/language-context"
import { ProgramCard } from "@/components/program-card"

// คอมโพเนนต์แสดงภาพรวมและรายละเอียดของโครงการเสริมสร้างความเข้มแข็งทางพีชคณิต (Algebra Enrichment)
// ออกแบบตามโครงสร้างการจัดวางของหน้า MSCD และ MGSS ตามภาพตัวอย่าง
export function AlgebraOverview() {
  const { lang } = useLanguage()
  const t = useT()

  // ดึงรายการวัตถุประสงค์จากระบบแปลภาษา (i18n)
  const objectives = t("algebraEnrichment.objectives.items", { returnObjects: true }) as string[]

  // ดึงรายการประโยชน์ที่ได้รับจากระบบแปลภาษา (i18n)
  const benefits = t("algebraEnrichment.benefits.items", { returnObjects: true }) as Array<{
    title: string
    desc: string
  }>

  // ดึงรายละเอียดผลลัพธ์ของโครงการย่อยทั้ง 4 จากระบบแปลภาษา (i18n)
  const outcomes = t("algebraEnrichment.outcomes.items", { returnObjects: true }) as Array<{
    title: string
    desc: string
  }>

  // ข้อมูลโครงการย่อยทั้ง 4 สำหรับสร้างการ์ดลิงก์นำทาง
  const cards = [
    {
      id: "center",
      titleKey: "algebraCenter.hero.title",
      image: "/images/algebra/algebra-center.png",
      href: "/algebra-enrichment/algebra-center",
    },
    {
      id: "scholarships",
      titleKey: "algebraScholarships.hero.title",
      image: "/images/algebra/algebra-scholarships.png",
      href: "/algebra-enrichment/scholarships",
    },
    {
      id: "camps",
      titleKey: "algebraCamps.hero.title",
      image: "/images/algebra/algebra-camps.png",
      href: "/algebra-enrichment/algebra-camps",
    },
    {
      id: "exchange",
      titleKey: "algebraExchange.hero.title",
      image: "/images/algebra/algebra-exchange.png",
      href: "/algebra-enrichment/exchange-staff",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6 space-y-12 animate-fade-in">
        
        {/* ===== ส่วนที่ 1: เนื้อหาอธิบายข้อมูลภาพรวม วัตถุประสงค์ และประโยชน์ของโครงการ ===== */}
        <div className="space-y-6">
          
          {/* หัวข้อแสดงข้อมูลโครงการหลัก */}
          <h2 className="text-2xl font-bold text-primary leading-snug">
            {lang === "en" ? "About the Algebra Enrichment Project" : "เกี่ยวกับโครงการเสริมสร้างความเข้มแข็งทางพีชคณิต (Algebra Enrichment)"}
          </h2>

          {/* ข้อความอธิบายบทนำของโครงการ */}
          <p className="text-sm leading-relaxed text-muted-foreground/90 text-pretty">
            {t("algebraEnrichment.intro")}
          </p>

          {/* คำอธิบายการสนับสนุนจากคณะกรรมการที่ปรึกษา */}
          <p className="text-sm leading-relaxed text-muted-foreground/90 text-pretty">
            {t("algebraEnrichment.advisor.desc")}
          </p>

          {/* หัวข้อหลักการและเหตุผล */}
          <div className="space-y-3 pt-2">
            <h3 className="text-lg font-bold text-primary">
              {t("algebraEnrichment.rationale.title")}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground/90 text-pretty">
              {t("algebraEnrichment.rationale.desc")}
            </p>
          </div>

          {/* ส่วนของวัตถุประสงค์โครงการ */}
          <div className="space-y-3 pt-2">
            <h3 className="text-lg font-bold text-primary">
              {t("algebraEnrichment.objectives.title")}
            </h3>
            {/* แสดงรายการวัตถุประสงค์โดยมีขีดเส้นข้างซ้ายสีจางและจุดกลมสอดคล้องกับดีไซน์ระบบ */}
            <div className="space-y-4 border-l border-border/80 pl-6 mt-3">
              {objectives.map((item, idx) => (
                <div key={item} className="space-y-1">
                  <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {idx + 1}. {item}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* ส่วนของประโยชน์ที่จะได้รับจากโครงการ */}
          <div className="space-y-3 pt-2">
            <h3 className="text-lg font-bold text-primary">
              {t("algebraEnrichment.benefits.title")}
            </h3>
            {/* แสดงรายการประโยชน์แบบมีหัวข้อย่อยและคำอธิบาย สไตล์เดียวกับหน้า MSCD/MGSS */}
            <div className="space-y-6 border-l border-border/80 pl-6 mt-3">
              {benefits.map((item, idx) => (
                <div key={item.title} className="space-y-2">
                  <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {idx + 1}. {item.title}
                  </h4>
                  <p className="pl-3.5 text-sm leading-relaxed text-muted-foreground/90 text-pretty">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ส่วนรายละเอียดโครงการย่อย (4 โครงการย่อย) ตามคำแนะนำและรูปภาพที่ส่งเข้ามา */}
          <div className="space-y-3 pt-2">
            <h3 className="text-lg font-bold text-primary">
              {t("algebraEnrichment.outcomes.title")}
            </h3>
            {/* แสดงรายละเอียดโดยมีขีดเส้นข้างซ้ายและจัดรูปจุดกลมนำหัวข้อย่อย */}
            <div className="space-y-6 border-l border-border/80 pl-6 mt-3">
              {outcomes.map((item, idx) => (
                <div key={item.title} className="space-y-2">
                  <h4 className="text-sm font-bold text-primary flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {idx + 1}. {item.title}
                  </h4>
                  <p className="pl-3.5 text-sm leading-relaxed text-muted-foreground/90 text-pretty">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ข้อความบทสรุปปิดท้ายของโครงการย่อย */}
          <p className="text-sm leading-relaxed text-muted-foreground/90 text-pretty pt-2">
            {t("algebraEnrichment.outcomes.conclusion")}
          </p>

        </div>

        {/* ===== เส้นคั่นระหว่างเนื้อหาหลักและการ์ดโครงการย่อย ===== */}
        <hr className="border-border/60" />

        {/* ===== ส่วนที่ 2: แสดงการ์ดโครงการย่อยทั้ง 4 โครงการย่อย เพื่อเชื่อมโยงไปยังรายละเอียดของแต่ละส่วน ===== */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="scroll-mt-24 transition-all duration-300 hover:scale-[1.01]"
            >
              <ProgramCard
                title={t(card.titleKey)}
                image={card.image}
                href={card.href}
                moreDetailText={t("programs.more_detail")}
                ariaLabel={t("programs.view_details_aria", { abbr: t(card.titleKey) })}
                imageFit="contain"
                imageBg="bg-white"
                priority={card.id === "center"} // โหลดภาพตัวแรกสุดแบบล่วงหน้าเพื่อแก้ไขคำเตือน LCP
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
