"use client"

import { useT } from "@/context/language-context"
import { SharedSectionHeader } from "@/components/shared-section-header"
import { SharedNumberedGrid } from "@/components/shared-numbered-grid"
import { SharedIconGrid } from "@/components/shared-icon-grid"
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

// ================= 1. คุณสมบัติผู้สมัครรับทุน (Eligibility) =================
export function EligibilitySection() {
  const t = useT()

  // แปลงคีย์ข้อมูลให้ตรงตามโครงสร้างที่ SharedNumberedGrid รองรับ
  const items = eligibilityKeys.map((item) => ({
    key: item.key,
    className: item.className,
    hasSubItems: "hasSubItems" in item ? item.hasSubItems : false,
  }))

  return (
    <section className="py-10 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์สากลจัดกึ่งกลาง */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("bscScholarships.eligibility.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("bscScholarships.eligibility.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงผลคุณสมบัติแบบการ์ดกริดตัวเลข */}
        <SharedNumberedGrid
          items={items}
          translationKey="bscScholarships.eligibility"
        />
      </div>
    </section>
  )
}

// ================= 2. ข้อปฏิบัติสำหรับผู้รับทุน (Obligations) =================
export function ObligationsSection() {
  const t = useT()

  // แปลงคีย์ข้อมูลให้ตรงตามโครงสร้างที่ SharedNumberedGrid รองรับ
  const items = obligationsKeys.map((item) => ({
    key: item.key,
    hasSubItems: "hasSubItems" in item ? item.hasSubItems : false,
  }))

  return (
    <section className="py-10 bg-secondary/10">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์หน้าแรก */}
        <SharedSectionHeader
          title={t("bscScholarships.obligations.title")}
          description={t("bscScholarships.obligations.desc")}
        />

        {/* เลย์เอาต์แสดงผลข้อปฏิบัติแบบการ์ดกริดตัวเลข */}
        <SharedNumberedGrid
          items={items}
          translationKey="bscScholarships.obligations"
          numberBgClassName="bg-accent/15"
        />
      </div>
    </section>
  )
}

// ================= 3. อัตราค่าใช้จ่ายสนับสนุนการศึกษา (Funding Rates) =================
export function FundingSection() {
  const t = useT()

  // แปลงคีย์ข้อมูลอัตราเงินทุนสนับสนุนให้อยู่ในโครงสร้างที่ SharedIconGrid รองรับ
  const fundingItems = fundingKeys.map((key) => ({
    key,
    title: t(`bscScholarships.funding.items.${key}.title`),
    desc: t(`bscScholarships.funding.items.${key}.desc`),
  }))

  return (
    <section className="py-10 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์หน้าแรก */}
        <SharedSectionHeader
          title={t("bscScholarships.funding.title")}
          description={t("bscScholarships.funding.desc")}
        />

        {/* อัตราค่าใช้จ่ายสนับสนุนการ์ด 4 ช่องใช้ตัวกลาง */}
        <SharedIconGrid
          items={fundingItems}
          icon={<Award className="h-5 w-5" />}
        />
      </div>
    </section>
  )
}
