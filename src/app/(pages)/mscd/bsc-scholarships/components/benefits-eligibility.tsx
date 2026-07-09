"use client"

import { useT } from "@/context/language-context"
import { SharedSectionHeader } from "@/components/shared-section-header"
import { SharedNumberedGrid } from "@/components/shared-numbered-grid"
import { Award } from "lucide-react"

// คีย์ข้อมูลสำหรับดึงค่าคุณสมบัติจาก i18n JSON
const eligibilityKeys = [
  { key: "item1", hasSubItems: true, className: "md:col-span-2" },
  { key: "item2" },
  { key: "item3" },
  { key: "item4" },
  { key: "item5" },
  { key: "item6" },
  { key: "item7" },
] as const

// คีย์ข้อมูลสำหรับดึงค่าข้อปฏิบัติจาก i18n JSON
const obligationsKeys = [
  { key: "item1" },
  { key: "item2", hasSubItems: true },
] as const

// คีย์ข้อมูลสำหรับดึงค่าอัตราเงินทุนสนับสนุนจาก i18n JSON
const fundingKeys = ["tuition", "allowance", "books", "presentation"] as const

// ================= 1. ส่วนคุณสมบัติของผู้สมัครทุน =================
export function EligibilitySection() {
  const t = useT()

  return (
    <section className="py-10 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์หน้าแรก */}
        <SharedSectionHeader
          title={t("bscScholarships.eligibility.title")}
          description={t("bscScholarships.eligibility.desc")}
        />

        {/* เลย์เอาต์แสดงผลคุณสมบัติ 7 ข้อ */}
        <SharedNumberedGrid
          items={eligibilityKeys}
          translationKey="bscScholarships.eligibility"
          subItemsTranslationKey="subItems1"
        />
      </div>
    </section>
  )
}

// ================= 2. ส่วนข้อปฏิบัติสำหรับผู้ที่ได้รับเลือกเข้ารับทุน =================
export function ObligationsSection() {
  const t = useT()

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 space-y-6">
        {/* หัวข้อสไตล์หน้าแรก */}
        <SharedSectionHeader
          title={t("bscScholarships.obligations.title")}
          description={t("bscScholarships.obligations.desc")}
          className="text-center space-y-2 mb-8"
        />

        {/* คำชี้แจงเบื้องต้น */}
        <p className="text-base text-muted-foreground leading-relaxed text-center px-4">
          {t("bscScholarships.obligations.preamble")}
        </p>

        {/* แผงแสดงผลข้อปฏิบัติ 2 ส่วน */}
        <SharedNumberedGrid
          items={obligationsKeys}
          translationKey="bscScholarships.obligations"
          subItemsTranslationKey="subItems2"
          numberBgClassName="bg-accent/15"
        />
      </div>
    </section>
  )
}

// ================= 3. ส่วนอัตราค่าใช้จ่ายสนับสนุนทุนการศึกษา =================
export function FundingSection() {
  const t = useT()

  return (
    <section className="py-10 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์หน้าแรก */}
        <SharedSectionHeader
          title={t("bscScholarships.funding.title")}
          description={t("bscScholarships.funding.desc")}
        />

        {/* อัตราค่าใช้จ่ายสนับสนุนการ์ด 4 ช่อง */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fundingKeys.map((key) => (
            <div
              key={key}
              className="bg-card border border-border/50 rounded-2xl p-6 text-center shadow-sm flex flex-col justify-between hover:border-accent/30 transition-all"
            >
              <div className="flex justify-center mb-4">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Award className="h-5 w-5" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-primary text-sm mb-2">
                  {t(`bscScholarships.funding.items.${key}.title`)}
                </h3>
                <p className="text-xs text-muted-foreground/90 leading-relaxed font-semibold">
                  {t(`bscScholarships.funding.items.${key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
