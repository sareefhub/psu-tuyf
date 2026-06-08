"use client"

import { BookOpen, Calendar, Target, Award, Users, FileText } from "lucide-react"

// คอมโพเนนต์แสดงข้อมูลและโครงสร้างหัวข้อโครงการพัฒนานักเรียนระดับมัธยมศึกษา
export function StudentImprovementSection() {
  
  // ข้อมูลวัตถุประสงค์หลักของโครงการ
  const objectives = [
    {
      icon: <Target className="h-5 w-5 text-accent" />,
      text: "ยกระดับผลสัมฤทธิ์ทางการเรียนและการคิดวิเคราะห์ในวิชาคณิตศาสตร์ของนักเรียนระดับมัธยมปลาย",
    },
    {
      icon: <Award className="h-5 w-5 text-accent" />,
      text: "เตรียมความพร้อมนักเรียนระดับมัธยมศึกษาในพื้นที่เพื่อการเข้าศึกษาต่อในระดับอุดมศึกษาด้านวิทยาศาสตร์และคณิตศาสตร์",
    },
    {
      icon: <Users className="h-5 w-5 text-accent" />,
      text: "สร้างเครือข่ายความร่วมมือและส่งเสริมการแบ่งปันความรู้ระหว่างมหาวิทยาลัยและโรงเรียนเครือข่ายในพื้นที่",
    },
  ]

  // กิจกรรมหลัก
  const activities = [
    {
      title: "ค่ายพัฒนาอัจฉริยภาพทางคณิตศาสตร์",
      desc: "จัดค่ายทักษะคณิตศาสตร์สำหรับนักเรียนชั้นมัธยมศึกษาตอนปลาย เพื่อเสริมความรู้พื้นฐานและต่อยอดแนวคิดระดับสูง เช่น ตรรกศาสตร์ ทฤษฎีจำนวน และคอมบิเนทอริกส์",
      schedule: "พฤศจิกายน - ธันวาคม ของทุกปี",
    },
    {
      title: "โครงการแนะแนวการศึกษาต่อและอาชีพ",
      desc: "ให้คำแนะนำเกี่ยวกับการสอบเข้ามหาวิทยาลัย แนะนำหลักสูตรคณิตศาสตร์และวิทยาการคอมพิวเตอร์ ตลอดจนอาชีพยุคใหม่ที่เน้นทักษะคณิตศาสตร์และไอที",
      schedule: "มีกราคม - กุมภาพันธ์ ของทุกปี",
    },
    {
      title: "ระบบคอร์สเรียนออนไลน์เสริมทักษะ",
      desc: "จัดทำคลิปสอนและแบบฝึกหัดทักษะคณิตศาสตร์พื้นฐาน ม.ปลาย เพื่อให้นักเรียนสามารถทบทวนความรู้ได้ด้วยตนเองอย่างอิสระ",
      schedule: "เปิดให้บริการตลอดปีการศึกษา",
    },
  ]

  // เอกสารและประกาศของโครงการ
  const documents = [
    {
      title: "ใบสมัครเข้าร่วมค่ายพัฒนาอัจฉริยภาพคณิตศาสตร์ ประจำปีการศึกษา 2567",
      date: "ประกาศเมื่อ 20 ต.ค. 2567",
    },
    {
      title: "รายชื่อนักเรียนผ่านการคัดเลือกเข้าร่วมโครงการแนะแนวทักษะคณิตศาสตร์",
      date: "ประกาศเมื่อ 15 พ.ย. 2567",
    },
  ]

  return (
    <div className="space-y-12">
      {/* 1. หัวข้อหลักของโครงการ */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          <span className="h-5 w-1 bg-accent rounded-full" />
          <span>โครงการเพื่อการพัฒนานักเรียนระดับมัธยมศึกษา</span>
        </h3>
        <p className="text-sm text-muted-foreground/90 leading-relaxed max-w-4xl">
          โครงการย่อยภายใต้โครงการหลักนี้มุ่งเน้นการสร้างแรงบันดาลใจและพัฒนาความรู้ด้านคณิตศาสตร์แก่นักเรียนระดับมัธยมศึกษา 
          โดยเฉพาะในเขตพื้นที่สามจังหวัดชายแดนภาคใต้และสมาคมโรงเรียนเอกชนสอนศาสนาอิสลาม เพื่อลดความเหลื่อมล้ำและเตรียมกำลังคนคุณภาพเข้าสู่ระบบการศึกษาระดับสูงต่อไป
        </p>
      </div>

      {/* 2. การ์ดวัตถุประสงค์และกิจกรรมหลัก */}
      <div className="grid gap-8 lg:grid-cols-12">
        {/* คอลัมน์ซ้าย: วัตถุประสงค์ */}
        <div className="lg:col-span-5 space-y-4">
          <h4 className="font-bold text-sm text-primary uppercase tracking-wide">
            วัตถุประสงค์ของโครงการ
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

        {/* คอลัมน์ขวา: กิจกรรมหลัก */}
        <div className="lg:col-span-7 space-y-4">
          <h4 className="font-bold text-sm text-primary uppercase tracking-wide">
            กิจกรรมและการดำเนินการหลัก
          </h4>
          <div className="space-y-4">
            {activities.map((act) => (
              <div 
                key={act.title} 
                className="p-5 rounded-2xl border border-border bg-card/40 hover:border-accent/40 transition-all duration-300 space-y-2.5"
              >
                <div className="flex justify-between items-start gap-4">
                  <h5 className="font-bold text-primary text-sm flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-accent flex-none" />
                    {act.title}
                  </h5>
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-bold text-accent whitespace-nowrap">
                    <Calendar className="h-3 w-3" />
                    {act.schedule}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {act.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. เอกสารดาวน์โหลดและประกาศ (ตัวอย่างโครงร่าง) */}
      <div className="space-y-4">
        <h4 className="font-bold text-sm text-primary uppercase tracking-wide">
          เอกสารดาวน์โหลดและประกาศข่าวสาร
        </h4>
        <div className="grid gap-4 sm:grid-cols-2">
          {documents.map((doc) => (
            <div 
              key={doc.title} 
              className="p-4 rounded-2xl border border-border/80 bg-card hover:border-accent/35 flex items-start gap-3.5 transition-all duration-300"
            >
              <div className="h-9 w-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent flex-none">
                <FileText className="h-4.5 w-4.5" />
              </div>
              <div className="space-y-1">
                <h5 className="font-bold text-primary text-xs leading-snug hover:text-accent transition-colors cursor-pointer">
                  {doc.title}
                </h5>
                <p className="text-[10px] text-muted-foreground">{doc.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
