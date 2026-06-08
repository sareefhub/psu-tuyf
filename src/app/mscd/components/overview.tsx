"use client"

import { useT } from "@/components/language-context"
import { BookOpen, GraduationCap, Award } from "lucide-react"

// คอมโพเนนต์แสดงภาพรวมและวัตถุประสงค์หลักของโครงการ MSCD
export function MscdOverview() {
  const t = useT()

  // การ์ดแสดงผลสรุปส่วนสำคัญของโครงการ
  const keyHighlights = [
    {
      icon: <GraduationCap className="h-6 w-6 text-accent" />,
      title: "นักศึกษาระดับปริญญาตรี",
      desc: "มอบทุนการศึกษาต่อเนื่องเพื่อสร้างนักคณิตศาสตร์คุณภาพสูงสำหรับอนาคต",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-accent" />,
      title: "นักเรียนระดับมัธยมศึกษา",
      desc: "พัฒนานักเรียนในสามจังหวัดชายแดนใต้และกัมพูชาผ่านค่ายและการเสริมสร้างความรู้ทางคณิตศาสตร์",
    },
    {
      icon: <Award className="h-6 w-6 text-accent" />,
      title: "ครูผู้สอนคณิตศาสตร์",
      desc: "จัดโครงการอบรมเชิงปฏิบัติการเพื่อยกระดับและเพิ่มขีดความสามารถการจัดการเรียนการสอนครูวิชาคณิตศาสตร์",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* ข้อมูลภาพรวมคำอธิบายโครงการ */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded">
                เกี่ยวกับโครงการ
              </span>
              <h2 className="text-2xl font-bold text-primary sm:text-3xl leading-snug">
                ภาพรวมโครงการพัฒนาชุมชนอย่างยั่งยืนด้วยคณิตศาสตร์
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground/90 text-pretty">
                {t("programDetails.mscd.desc")}
              </p>
            </div>
            
            <div className="border-l-4 border-accent pl-4 py-1.5 bg-secondary/35 rounded-r-xl">
              <p className="text-xs italic text-muted-foreground leading-relaxed">
                * โครงการนี้ได้รับทุนสนับสนุนจากกองทุนการกุศล PSU-TUYF (TUYF Charitable Trust Fund) 
                เพื่อช่วยเสริมสร้างและพัฒนาชุมชนผ่านองค์ความรู้คณิตศาสตร์ตั้งแต่ระดับรากฐานจนถึงวิชาชีพ
              </p>
            </div>
          </div>

          {/* ไฮไลท์ 3 ส่วนสำคัญของโครงการ */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground/80">
              จุดมุ่งเน้น 3 ส่วนหลักของ MSCD
            </h3>
            
            <div className="space-y-4">
              {keyHighlights.map((highlight) => (
                <div 
                  key={highlight.title} 
                  className="flex gap-4 p-4 rounded-2xl border border-border/40 bg-card hover:border-border/80 transition-all duration-300 shadow-sm"
                >
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent/10">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm">{highlight.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{highlight.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
