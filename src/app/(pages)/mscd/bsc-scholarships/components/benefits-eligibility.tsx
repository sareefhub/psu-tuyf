"use client"

import { useT } from "@/context/language-context"
import { Award } from "lucide-react"

// คีย์ข้อมูลสำหรับดึงค่าคุณสมบัติจาก i18n JSON
const eligibilityKeys = [
  { key: "item1", hasSubItems: true },
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
        <div className="text-center mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("bscScholarships.eligibility.title")}
          </h2>
          <p className="text-base text-muted-foreground/80">
            {t("bscScholarships.eligibility.desc")}
          </p>
        </div>

        {/* เลย์เอาต์แสดงผลคุณสมบัติ 7 ข้อ */}
        <div className="grid gap-6 md:grid-cols-2">
          {eligibilityKeys.map((item, index) => {
            const isFirst = index === 0
            return (
              <div
                key={item.key}
                className={`bg-card border border-border/50 rounded-2xl p-6 shadow-sm space-y-3 hover:border-accent/30 transition-all ${
                  isFirst ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex gap-3 items-start">
                  <span className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-sm text-foreground/90 leading-relaxed font-semibold">
                    {t(`bscScholarships.eligibility.items.${item.key}`)}
                  </p>
                </div>
                {"hasSubItems" in item && item.hasSubItems && (
                  <ul className="pl-9 list-disc space-y-1.5 border-t border-border/40 pt-3 mt-1">
                    {(t("bscScholarships.eligibility.subItems1", { returnObjects: true }) as string[]).map((sub) => (
                      <li key={sub} className="text-xs text-muted-foreground leading-relaxed">
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </div>
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
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("bscScholarships.obligations.title")}
          </h2>
          <p className="text-base text-muted-foreground/80">
            {t("bscScholarships.obligations.desc")}
          </p>
        </div>

        {/* คำชี้แจงเบื้องต้น */}
        <p className="text-base text-muted-foreground leading-relaxed text-center px-4">
          {t("bscScholarships.obligations.preamble")}
        </p>

        {/* แผงแสดงผลข้อปฏิบัติ 2 ส่วน */}
        <div className="grid gap-6 md:grid-cols-2">
          {obligationsKeys.map((item, index) => (
            <div
              key={item.key}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm space-y-4 hover:border-accent/30 transition-all"
            >
              <div className="flex gap-3 items-start">
                <span className="h-6 w-6 rounded-full bg-accent/15 flex items-center justify-center text-xs font-bold text-accent shrink-0">
                  {index + 1}
                </span>
                <p className="text-sm text-foreground/90 leading-relaxed font-semibold">
                  {t(`bscScholarships.obligations.items.${item.key}`)}
                </p>
              </div>
              {"hasSubItems" in item && item.hasSubItems && (
                <ul className="pl-9 list-disc space-y-1.5 border-t border-border/40 pt-3">
                  {(t("bscScholarships.obligations.subItems2", { returnObjects: true }) as string[]).map((sub) => (
                    <li
                      key={sub}
                      className="text-xs text-muted-foreground leading-relaxed font-semibold"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
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
        <div className="text-center mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("bscScholarships.funding.title")}
          </h2>
          <p className="text-base text-muted-foreground/80">
            {t("bscScholarships.funding.desc")}
          </p>
        </div>

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
