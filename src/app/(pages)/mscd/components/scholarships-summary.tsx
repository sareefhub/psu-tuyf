"use client"

import { useT } from "@/context/language-context"
import { ArrowRight, GraduationCap, CheckCircle2, DollarSign, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// คอมโพเนนต์แสดงข้อมูลสรุปของทุนการศึกษา B.Sc. Scholarships
export function ScholarshipsSummarySection() {
  const t = useT()

  // ข้อมูลสิทธิประโยชน์แบบสรุป
  const benefits = [
    {
      icon: <CheckCircle2 className="h-5 w-5 text-accent" />,
      text: "สนับสนุนค่าธรรมเนียมการศึกษาเต็มจำนวน (ตามจริง)",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-accent" />,
      text: "ค่าใช้จ่ายส่วนตัวรายเดือน 6,000 บาท/เดือน ตลอดปีการศึกษา",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-accent" />,
      text: "ค่าหนังสือและสื่อการศึกษา 8,000 บาท/ปี",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-accent" />,
      text: "ทุนสนับสนุนการนำเสนอผลงานวิชาการ 20,000 บาท ตลอดหลักสูตร",
    },
  ]

  return (
    <div className="space-y-12">
      {/* ส่วนแนะนำและวัตถุประสงค์ย่อย */}
      <div className="grid gap-8 md:grid-cols-12 md:items-center">
        <div className="md:col-span-8 space-y-4">
          <h3 className="text-xl font-bold text-primary flex items-center gap-2">
            <span className="h-5 w-1 bg-accent rounded-full" />ทุนการศึกษาระดับปริญญาตรี (B.Sc. Scholarships)
          </h3>
          <p className="text-sm text-muted-foreground/90 leading-relaxed">
            {t("bscScholarships.overview.desc1")}
          </p>
          <p className="text-sm text-muted-foreground/90 leading-relaxed">
            {t("bscScholarships.overview.desc2")}
          </p>
        </div>

        {/* กล่องสรุปจำนวนผู้ได้รับทุนสะสม */}
        <div className="md:col-span-4 bg-linear-to-tr from-accent/10 to-primary/5 border border-accent/20 rounded-3xl p-6 text-center space-y-2 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <GraduationCap className="h-24 w-24 text-accent" />
          </div>
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground/75">
            นักเรียนทุนในโครงการปัจจุบัน
          </p>
          <p className="text-5xl font-black text-primary">12</p>
          <p className="text-xs font-medium text-muted-foreground">
            ทุนคณิตศาสตร์ (ไทย - กัมพูชา)
          </p>
        </div>
      </div>

      {/* สิทธิประโยชน์ของทุน */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="p-6 rounded-3xl border border-border bg-card/50 space-y-4">
          <h4 className="font-bold text-sm text-primary uppercase tracking-wide flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-accent" />
            การสนับสนุนและสิทธิประโยชน์
          </h4>
          <ul className="space-y-3">
            {benefits.map((benefit) => (
              <li key={benefit.text} className="flex items-start gap-3">
                <span className="flex-none mt-0.5">{benefit.icon}</span>
                <span className="text-xs leading-relaxed text-foreground">{benefit.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-3xl border border-border bg-card/50 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-primary uppercase tracking-wide flex items-center gap-2">
              <Users className="h-4 w-4 text-accent" />
              การเข้าถึงรายละเอียดฉบับเต็ม
            </h4>
            <p className="text-xs leading-relaxed text-muted-foreground">
              คุณสามารถตรวจสอบสถิติผู้ได้รับทุนอย่างละเอียด คุณสมบัติและข้อปฏิบัติของผู้รับทุน 
              อัตราค่าใช้จ่าย และรายชื่อทำเนียบผู้ได้รับทุนแยกตามแต่ละปีการศึกษาได้ที่หน้ารายละเอียดทุนการศึกษาหลัก
            </p>
          </div>

          <Link href="/mscd/bsc-scholarships" className="w-fit">
            {/* ใช้ token text-primary-foreground แทน text-white เพื่อให้เปลี่ยนได้จากค่ากลาง */}
            <Button className="font-bold text-xs bg-primary hover:bg-accent text-primary-foreground rounded-full px-5 py-2.5 flex items-center gap-2 transition-all duration-300">
              ดูรายละเอียดทำเนียบนักเรียนทุนแบบเต็ม
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
