"use client"

import { useT } from "@/components/language-context"
import { School, MapPin, Award, Clock } from "lucide-react"

// คอมโพเนนต์แสดงผลข้อมูลทางสถิติและโรงเรียน/พื้นที่เป้าหมายของโครงการอบรมครูคณิตศาสตร์
export function TargetSchoolsStatistics() {
  const t = useT()

  // ข้อมูลสถิติของโครงการย่อยอบรมและพัฒนาครูคณิตศาสตร์
  const statItems = [
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      value: "3",
      labelTH: "พื้นที่ดำเนินงาน (จังหวัด)",
      labelEN: "Target Southern Provinces",
      descTH: "ปัตตานี ยะลา และนราธิวาส",
      descEN: "Pattani, Yala, and Narathiwat",
    },
    {
      icon: <School className="h-6 w-6 text-accent" />,
      value: "12+",
      labelTH: "โรงเรียนในเครือข่ายเข้าร่วม",
      labelEN: "Participating Islamic Schools",
      descTH: "โรงเรียนเอกชนสอนศาสนาในสามจังหวัด",
      descEN: "Private Islamic schools in 3 provinces",
    },
    {
      icon: <Award className="h-6 w-6 text-accent" />,
      value: "45+",
      labelTH: "ครูผู้สอนผ่านการฝึกอบรม",
      labelEN: "Trained Math Teachers",
      descTH: "ครูผู้สอนวิชาคณิตศาสตร์ระดับ ม.ปลาย",
      descEN: "High school mathematics teachers",
    },
    {
      icon: <Clock className="h-6 w-6 text-accent" />,
      value: "80+",
      labelTH: "ชั่วโมงอบรมเชิงปฏิบัติการ",
      labelEN: "Accumulated Training Hours",
      descTH: "ชั่วโมงสะสมการทำเวิร์กชอปและ PLC",
      descEN: "Hours of hands-on workshops & PLC",
    },
  ]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อแสดงสถิติและเป้าหมาย */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("teacherImprovement.tabs.stats")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            รายงานสถิติจำนวนเป้าหมายและผลสัมฤทธิ์ภาพรวมการจัดอบรมพัฒนาศักยภาพผู้สอนคณิตศาสตร์
          </p>
        </div>

        {/* แผงแสดงผลสถิติเป็น Grid 4 คอลัมน์ */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {statItems.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border/50 rounded-2xl p-6 text-center shadow-sm flex flex-col justify-between items-center hover:border-accent/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              <div className="space-y-2">
                <span className="block text-3xl font-extrabold text-primary tracking-tight">
                  {item.value}
                </span>
                
                <h3 className="text-xs font-bold text-primary px-2">
                  {t("common.project_title") ? (t("nav.home") === "หน้าแรก" ? item.labelTH : item.labelEN) : item.labelTH}
                </h3>
                
                <p className="text-[10px] text-muted-foreground/90 font-semibold px-2 leading-relaxed">
                  {t("nav.home") === "หน้าแรก" ? item.descTH : item.descEN}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
