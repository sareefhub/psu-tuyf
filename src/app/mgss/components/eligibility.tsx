"use client"

import { useLanguage } from "@/components/language-context"

// เกณฑ์คุณสมบัติผู้สมัครทุน MGSS ทั้งภาษาไทยและภาษาอังกฤษ
const eligibilityData = {
  th: {
    title: "คุณสมบัติของผู้สมัครรับทุน",
    desc: "ผู้สมัครขอรับทุนการศึกษาโครงการ MGSS ระดับบัณฑิตศึกษา จะต้องมีคุณสมบัติหลักดังต่อไปนี้",
    items: [
      "เป็นผู้สำเร็จการศึกษาระดับปริญญาตรีในสาขาวิชาคณิตศาสตร์ สถิติ หรือคณิตศาสตร์ประยุกต์ จากสถาบันอุดมศึกษาที่ได้รับการรับรอง",
      "มีผลการเรียนสะสม (GPAX) ไม่ต่ำกว่า 3.00 สำหรับผู้สมัครระดับปริญญาโท และไม่ต่ำกว่า 3.25 สำหรับผู้สมัครระดับปริญญาเอก",
      "เป็นผู้มีความมุ่งมั่นและมีศักยภาพสูงในการศึกษาวิจัยขั้นสูงด้านคณิตศาสตร์ และมีสุขภาพกายและสุขภาพจิตที่สมบูรณ์",
      "ได้รับการตอบรับให้เข้าศึกษาต่อระดับบัณฑิตศึกษา ณ คณะวิทยาศาสตร์ มหาวิทยาลัยสงขลานครินทร์ (วิทยาเขตหาดใหญ่ หรือวิทยาเขตปัตตานี)",
      "มีอาจารย์ที่ปรึกษาวิทยานิพนธ์ในสาขาที่สอดคล้องและยินดีปฏิบัติตามกฎเกณฑ์เงื่อนไขการรับทุนของโครงการอย่างเคร่งครัด"
    ]
  },
  en: {
    title: "Applicant Eligibility Criteria",
    desc: "Applicants for the MGSS graduate scholarship program must meet the following key criteria",
    items: [
      "Hold a bachelor's degree in mathematics, statistics, applied mathematics, or related fields from an accredited institution.",
      "Cumulative GPAX of at least 3.00 for master's degree applicants, and at least 3.25 for doctoral degree applicants.",
      "Demonstrate high potential and dedication for advanced research in mathematics, and be in good physical and mental health.",
      "Accepted for admission to a graduate program at Prince of Songkla University (Hat Yai Campus or Pattani Campus).",
      "Have an assigned thesis advisor and be willing to strictly comply with all terms and conditions set by the MGSS program."
    ]
  }
};

export function EligibilitySection() {
  const { lang } = useLanguage();
  const current = eligibilityData[lang] || eligibilityData.th;

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์พรีเมียม */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {current.title}
          </h2>
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            {current.desc}
          </p>
        </div>

        {/* รายการคุณสมบัติ */}
        <div className="grid gap-6 md:grid-cols-2">
          {current.items.map((item, index) => {
            const isFirst = index === 0;
            return (
              <div
                key={item}
                className={`bg-card border border-border/50 rounded-2xl p-6 shadow-xs hover:border-accent/30 transition-all duration-300 flex gap-4 items-start ${
                  isFirst ? "md:col-span-2" : ""
                }`}
              >
                <span className="h-6 w-6 rounded-full bg-accent/15 flex items-center justify-center text-xs font-bold text-accent shrink-0">
                  {index + 1}
                </span>
                <p className="text-xs text-foreground/90 leading-relaxed font-semibold">
                  {item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
