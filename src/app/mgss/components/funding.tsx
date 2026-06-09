"use client"

import { useLanguage } from "@/components/language-context"
import { Award } from "lucide-react"

// ข้อมูลอัตราค่าใช้จ่ายสนับสนุนทุนการศึกษา MGSS (ระดับปริญญาโท และ ปริญญาเอก)
const fundingData = {
  th: {
    title: "สิทธิประโยชน์และอัตราทุนการศึกษา",
    desc: "รายละเอียดค่าใช้จ่ายที่ได้รับการสนับสนุนตามระดับหลักสูตรบัณฑิตศึกษา (ป.โท และ ป.เอก) ภายใต้โครงการ MGSS",
    items: [
      {
        id: "tuition",
        title: "ค่าธรรมเนียมการศึกษา",
        desc: "สนับสนุนค่าเล่าเรียนและค่าธรรมเนียมการศึกษาตามที่จ่ายจริง โดยจ่ายตามอัตรามหาวิทยาลัย (สูงสุด 2 ปีการศึกษาสำหรับระดับปริญญาโท และ 3 ปีการศึกษาสำหรับระดับปริญญาเอก)"
      },
      {
        id: "allowance",
        title: "ค่าใช้จ่ายรายเดือน",
        desc: "เงินสนับสนุนค่าครองชีพรายเดือนเพื่อให้สามารถทำวิจัยได้เต็มเวลา ปริญญาโท: 10,000 บาท/เดือน (สูงสุด 24 เดือน) และปริญญาเอก: 12,000 - 15,000 บาท/เดือน (สูงสุด 36 เดือน)"
      },
      {
        id: "books",
        title: "งบประมาณสนับสนุนการวิจัย",
        desc: "งบประมาณสำหรับสนับสนุนค่าหนังสือ ตำราเรียน และวัสดุอุปกรณ์ที่จำเป็นสำหรับการทำวิทยานิพนธ์ ปริญญาโท: 10,000 บาท/ปี และปริญญาเอก: 20,000 บาท/ปี"
      },
      {
        id: "presentation",
        title: "ค่าเสนอผลงานวิชาการ",
        desc: "ทุนสนับสนุนค่าลงทะเบียนเดินทางและค่าใช้จ่ายในการเสนอผลงานวิจัยในการประชุมวิชาการระดับชาติหรือนานาชาติ เพื่อส่งเสริมคุณภาพวิทยานิพนธ์และการตีพิมพ์ผลงาน"
      }
    ]
  },
  en: {
    title: "Scholarship Benefits & Funding Rates",
    desc: "Detailed funding and allowances supported according to the graduate level (M.Sc. and Ph.D.) under the MGSS project",
    items: [
      {
        id: "tuition",
        title: "Tuition Fees Coverage",
        desc: "Tuition fees are fully covered based on actual university rates (up to 2 academic years for M.Sc. students and 3 academic years for Ph.D. students)."
      },
      {
        id: "allowance",
        title: "Monthly Stipend",
        desc: "Monthly living allowance provided to focus on research full-time. M.Sc.: 10,000 THB/month (up to 24 months). Ph.D.: 12,000 - 15,000 THB/month (up to 36 months)."
      },
      {
        id: "books",
        title: "Research & Materials Budget",
        desc: "Funding support for required textbooks, research supplies, and thesis preparation materials. M.Sc.: 10,000 THB/year. Ph.D.: 20,000 THB/year."
      },
      {
        id: "presentation",
        title: "Conference Presentation Support",
        desc: "Financial support covering registration and travel expenses for presenting research papers at national or international academic conferences."
      }
    ]
  }
};

export function FundingSection() {
  const { lang } = useLanguage();
  const current = fundingData[lang] || fundingData.th;

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อส่วนอัตราเงินทุนสนับสนุน */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {current.title}
          </h2>
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            {current.desc}
          </p>
        </div>

        {/* การแสดงผลข้อมูลในลักษณะการ์ด 4 ใบ */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {current.items.map((item) => (
            <div
              key={item.id}
              className="bg-card border border-border/50 rounded-2xl p-6 text-center shadow-xs flex flex-col justify-between hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {/* ไอคอนเหรียญรางวัลสากล */}
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <Award className="h-5 w-5" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <h3 className="font-bold text-primary text-sm mb-3">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground/90 leading-relaxed font-semibold">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
