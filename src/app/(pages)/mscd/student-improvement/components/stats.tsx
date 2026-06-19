"use client"

import { useT } from "@/components/language-context"
import { MapPin, School, GraduationCap, Award } from "lucide-react"

// คอมโพเนนต์แสดงข้อมูลสถิติพื้นที่และโรงเรียนเป้าหมาย
export function StatsSection() {
  const t = useT()

  const targets = [
    {
      province: "ปัตตานี",
      color: "from-blue-500/10 to-indigo-500/5",
      borderColor: "group-hover:border-blue-500/30",
      iconColor: "text-blue-500 bg-blue-500/10",
      desc: "โรงเรียนเอกชนสอนศาสนาอิสลามในเขตพื้นที่จังหวัดปัตตานีที่ผ่านการคัดเลือกเข้าร่วมโครงการ",
    },
    {
      province: "ยะลา",
      color: "from-emerald-500/10 to-teal-500/5",
      borderColor: "group-hover:border-emerald-500/30",
      iconColor: "text-emerald-500 bg-emerald-500/10",
      desc: "มุ่งเน้นการส่งเสริมโรงเรียนในเขตจังหวัดยะลาเพื่อการกระจายโอกาสทางการเรียนรู้คณิตศาสตร์",
    },
    {
      province: "นราธิวาส",
      color: "from-amber-500/10 to-orange-500/5",
      borderColor: "group-hover:border-amber-500/30",
      iconColor: "text-amber-500 bg-amber-500/10",
      desc: "ยกระดับทักษะนักเรียนในโรงเรียนเอกชนสอนศาสนาอิสลามจังหวัดนราธิวาสอย่างมีประสิทธิภาพ",
    },
  ]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อส่วนสถิติ */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("studentImprovement.tabs.stats")}
          </h2>
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            พื้นที่และเป้าหมายการดำเนินงานอบรมค่ายคณิตศาสตร์สัญจรและค่ายโอลิมปิกวิชาการเพื่อเยาวชนในภาคใต้
          </p>
        </div>

        {/* การ์ดสถิติ 3 จังหวัดเป้าหมายหลัก */}
        <div className="grid gap-6 md:grid-cols-3 mb-10">
          {targets.map((target) => (
            <div
              key={target.province}
              className={`group relative bg-card border border-border/50 rounded-3xl p-6 hover:shadow-md transition-all duration-300 overflow-hidden`}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-primary">{target.province}</span>
                    <div className={`h-8 w-8 rounded-xl flex items-center justify-center shrink-0 ${target.iconColor}`}>
                      <MapPin className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground/90 font-medium">
                    {target.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ส่วนสรุปภาพรวมโครงการ */}
        <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
          <div className="grid gap-6 md:grid-cols-3 text-center md:text-left">
            <div className="space-y-2">
              <div className="flex justify-center md:justify-start">
                <School className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-primary">กลุ่มโรงเรียนเป้าหมาย</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                โรงเรียนเอกชนสอนศาสนาอิสลามในเขตพื้นที่สามจังหวัดชายแดนภาคใต้
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center md:justify-start">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-primary">ระดับชั้นผู้เข้าอบรม</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                นักเรียนระดับชั้นมัธยมศึกษาตอนปลาย (ม.4 - ม.6) แผนการเรียนวิทย์-คณิต
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex justify-center md:justify-start">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-primary">การพัฒนาอย่างต่อเนื่อง</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                สร้างสะพานเชื่อมโยงความรู้สู่การสอบชิงทุนและการศึกษาต่อคณะวิทยาศาสตร์
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
