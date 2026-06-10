"use client"

import { GraduationCap, Calendar, Compass, ClipboardList, BookOpen, Download } from "lucide-react"

// คอมโพเนนต์แสดงข้อมูลและโครงสร้างหัวข้อโครงการอบรมครูคณิตศาสตร์
export function TeacherImprovementSection() {
  
  // ข้อมูลวัตถุประสงค์หลักของโครงการอบรมครู
  const objectives = [
    {
      icon: <Compass className="h-5 w-5 text-accent" />,
      text: "พัฒนาครูคณิตศาสตร์ในโรงเรียนสอนศาสนาอิสลามและโรงเรียนเครือข่าย ให้มีความเป็นเลิศด้านเทคนิคการจัดการเรียนรู้",
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-accent" />,
      text: "ส่งเสริมการบูรณาการเครื่องมือเทคโนโลยีสมัยใหม่ในการจำลองแนวคิดคณิตศาสตร์ที่เป็นรูปธรรมและการจัดกิจกรรมการเรียนรู้แบบ Active Learning",
    },
    {
      icon: <GraduationCap className="h-5 w-5 text-accent" />,
      text: "พัฒนาผลสัมฤทธิ์และยกระดับมาตรฐานการศึกษาในภาพรวมของชุมชนอย่างยั่งยืนผ่านกระบวนการพัฒนาครูมืออาชีพ",
    },
  ]

  // หลักสูตรอบรมหลักของโครงการ
  const curriculums = [
    {
      title: "การจัดการเรียนการสอนเชิงรุก (Active Learning) ด้านคณิตศาสตร์",
      desc: "มุ่งเน้นการออกแบบแผนการจัดการเรียนรู้ที่เน้นให้นักเรียนสร้างองค์ความรู้ด้วยตนเอง ผ่านกิจกรรมเกมคณิตศาสตร์ การทดลอง และการแก้ปัญหาในชีวิตจริง",
      duration: "หลักสูตรระยะสั้น 3 วัน (อบรมช่วงปิดภาคเรียน)",
    },
    {
      title: "การใช้เทคโนโลยีและโปรแกรมภูมิศาสตร์เรขาคณิต (GeoGebra) ในชั้นเรียน",
      desc: "ฝึกฝนการใช้ซอฟต์แวร์ช่วยสอน GeoGebra เพื่อสร้างโมเดลเรขาคณิต แบบจำลองคณิตศาสตร์ และกราฟสามมิติ เพื่อให้การจัดการเรียนการสอนมีความน่าสนใจและเข้าใจง่ายยิ่งขึ้น",
      duration: "หลักสูตรปฏิบัติการ 2 วัน",
    },
    {
      title: "เทคนิคการสร้างเครื่องมือวัดและประเมินผลตามสภาพจริง (Authentic Assessment)",
      desc: "ส่งเสริมความรู้ด้านการวัดและประเมินผลเชิงลึก การสร้างรูบริกส์ประเมินผลงาน การพัฒนาข้อสอบวิเคราะห์ระดับสูง เพื่อพัฒนาทักษะการเรียนรู้ที่สอดคล้องกับศตวรรษที่ 21",
      duration: "หลักสูตรออนไลน์ 1 วัน",
    },
  ]

  // แหล่งดาวน์โหลดคู่มือและสื่อการอบรม
  const materials = [
    {
      title: "คู่มือประกอบการอบรม GeoGebra สำหรับครูคณิตศาสตร์มัธยมศึกษาตอนปลาย",
      type: "PDF (12.4 MB)",
    },
    {
      title: "ชุดกิจกรรมการเรียนรู้คณิตศาสตร์เชิงรุก เรื่อง ฟังก์ชันและเรขาคณิตสำหรับมัธยมศึกษา",
      type: "ZIP (35.1 MB)",
    },
  ]

  return (
    <div className="space-y-12">
      {/* 1. หัวข้อหลักและคำอธิบายโครงการ */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <span className="h-5 w-1 bg-accent rounded-full" />
          <span>โครงการอบรมครูคณิตศาสตร์ (Mathematics Teacher Training)</span>
        </h3>
        <p className="text-sm text-muted-foreground/90 leading-relaxed max-w-4xl">
          การยกระดับคุณภาพการเรียนการสอนวิชาคณิตศาสตร์ที่ยั่งยืน ต้องเริ่มจากการพัฒนาทักษะวิชาชีพของครูผู้สอน 
          โครงการอบรมครูคณิตศาสตร์จัดขึ้นโดยมีวัตถุประสงค์เพื่อถ่ายทอดเทคนิค วิธีการสอน และนวัตกรรมสื่อการเรียนการสอนที่ทันสมัย 
          ช่วยให้ครูสามารถจัดกิจกรรมการเรียนรู้ได้อย่างมีประสิทธิภาพและสามารถกระตุ้นกระบวนการเรียนรู้และจินตนาการทางคณิตศาสตร์ของนักเรียนได้ดียิ่งขึ้น
        </p>
      </div>

      {/* 2. การ์ดวัตถุประสงค์และหลักสูตรอบรม */}
      <div className="grid gap-8 lg:grid-cols-12">
        {/* คอลัมน์ซ้าย: วัตถุประสงค์ */}
        <div className="lg:col-span-5 space-y-4">
          <h4 className="font-bold text-sm text-primary uppercase tracking-wide">
            เป้าหมายและผลลัพธ์โครงการ
          </h4>
          <div className="space-y-3">
            {objectives.map((obj) => (
              <div 
                key={obj.text} 
                className="flex items-start gap-3 p-4 rounded-2xl border border-border bg-card hover:bg-secondary/20 transition-all duration-300"
              >
                <span className="flex-none mt-0.5">{obj.icon}</span>
                <span className="text-xs leading-relaxed text-foreground">{obj.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* คอลัมน์ขวา: หลักสูตรการอบรม */}
        <div className="lg:col-span-7 space-y-4">
          <h4 className="font-bold text-sm text-primary uppercase tracking-wide">
            หลักสูตรและหัวข้อการอบรมหลัก
          </h4>
          <div className="space-y-4">
            {curriculums.map((curr) => (
              <div 
                key={curr.title} 
                className="p-5 rounded-2xl border border-border bg-card/40 hover:border-accent/40 transition-all duration-300 space-y-2.5"
              >
                <div className="flex justify-between items-start gap-4">
                  <h5 className="font-bold text-primary text-sm flex items-center gap-2">
                    <BookOpen className="h-4.5 w-4.5 text-accent flex-none" />
                    {curr.title}
                  </h5>
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-2xs font-bold text-accent whitespace-nowrap">
                    <Calendar className="h-3 w-3" />
                    {curr.duration}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {curr.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. สื่อการสอนและไฟล์ดาวน์โหลดเพื่อครูผู้สอน */}
      <div className="space-y-4">
        <h4 className="font-bold text-sm text-primary uppercase tracking-wide">
          คลังสื่อประกอบการอบรมและเครื่องมือเพื่อครูคณิตศาสตร์
        </h4>
        <div className="grid gap-4 sm:grid-cols-2">
          {materials.map((mat) => (
            <div 
              key={mat.title} 
              className="p-4 rounded-2xl border border-border/80 bg-card hover:border-accent/35 flex items-center justify-between gap-4 transition-all duration-300"
            >
              <div className="flex items-start gap-3.5">
                <div className="h-9 w-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-none">
                  <Download className="h-4.5 w-4.5" />
                </div>
                <div className="space-y-1">
                  <h5 className="font-bold text-primary text-xs leading-snug hover:text-accent transition-colors cursor-pointer">
                    {mat.title}
                  </h5>
                  <p className="text-2xs text-muted-foreground">{mat.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
