"use client"

import { useLanguage } from "@/components/language-context"
import { GraduationCap, ArrowRight, User } from "lucide-react"
import { Button } from "@/components/ui/button"

// ข้อมูลทำเนียบนักศึกษาระดับบัณฑิตศึกษา (ปริญญาโท-เอก) โครงการ MGSS
const directoryData = {
  th: [
    {
      year: "ปีการศึกษา 2566",
      groups: [
        {
          title: "นักศึกษาระดับปริญญาเอก (Ph.D. Students)",
          students: [
            { name: "Mr. Sokha Chan", role: "นักศึกษาปริญญาเอก ปีที่ 1", campus: "วิทยาเขตหาดใหญ่" },
            { name: "นางสาว มารีนา สาและ", role: "นักศึกษาปริญญาเอก ปีที่ 1", campus: "วิทยาเขตหาดใหญ่" }
          ]
        },
        {
          title: "นักศึกษาระดับปริญญาโท (M.Sc. Students)",
          students: [
            { name: "Miss Sophia Keo", role: "นักศึกษาปริญญาโท ปีที่ 1", campus: "วิทยาเขตหาดใหญ่" },
            { name: "นาย ซูไฮมี ดาโอ๊ะ", role: "นักศึกษาปริญญาโท ปีที่ 1", campus: "วิทยาเขตปัตตานี" }
          ]
        }
      ]
    },
    {
      year: "ปีการศึกษา 2565",
      groups: [
        {
          title: "นักศึกษาระดับปริญญาเอก (Ph.D. Students)",
          students: [
            { name: "Mr. Sopheak Vanna", role: "นักศึกษาปริญญาเอก ปีที่ 2", campus: "วิทยาเขตหาดใหญ่" }
          ]
        },
        {
          title: "นักศึกษาระดับปริญญาโท (M.Sc. Students)",
          students: [
            { name: "Miss Keo Sreymom", role: "นักศึกษาปริญญาโท ปีที่ 2", campus: "วิทยาเขตปัตตานี" },
            { name: "นาย อับดุลเลาะ ลาเต๊ะ", role: "นักศึกษาปริญญาโท ปีที่ 2", campus: "วิทยาเขตปัตตานี" },
            { name: "นางสาว อานีซะห์ ยะโก๊ะ", role: "นักศึกษาปริญญาโท ปีที่ 2", campus: "วิทยาเขตหาดใหญ่" }
          ]
        }
      ]
    },
    {
      year: "ปีการศึกษา 2564",
      groups: [
        {
          title: "นักศึกษาระดับปริญญาโท (M.Sc. Students)",
          students: [
            { name: "นางสาว ฟาติมะห์ ยูโซะ", role: "สำเร็จการศึกษา (ปี 2566)", campus: "วิทยาเขตหาดใหญ่" },
            { name: "Mr. Namoral Thy", role: "สำเร็จการศึกษา (ปี 2566)", campus: "วิทยาเขตปัตตานี" }
          ]
        }
      ]
    }
  ],
  en: [
    {
      year: "Academic Year 2023",
      groups: [
        {
          title: "Ph.D. Students",
          students: [
            { name: "Mr. Sokha Chan", role: "1st Year Doctoral Student", campus: "Hat Yai Campus" },
            { name: "Miss Marina Salaeh", role: "1st Year Doctoral Student", campus: "Hat Yai Campus" }
          ]
        },
        {
          title: "M.Sc. Students",
          students: [
            { name: "Miss Sophia Keo", role: "1st Year Master Student", campus: "Hat Yai Campus" },
            { name: "Mr. Suhaimi Daoh", role: "1st Year Master Student", campus: "Pattani Campus" }
          ]
        }
      ]
    },
    {
      year: "Academic Year 2022",
      groups: [
        {
          title: "Ph.D. Students",
          students: [
            { name: "Mr. Sopheak Vanna", role: "2nd Year Doctoral Student", campus: "Hat Yai Campus" }
          ]
        },
        {
          title: "M.Sc. Students",
          students: [
            { name: "Miss Keo Sreymom", role: "2nd Year Master Student", campus: "Pattani Campus" },
            { name: "Mr. Abdulloh Lateh", role: "2nd Year Master Student", campus: "Pattani Campus" },
            { name: "Miss Aneesah Yakoh", role: "2nd Year Master Student", campus: "Hat Yai Campus" }
          ]
        }
      ]
    },
    {
      year: "Academic Year 2021",
      groups: [
        {
          title: "M.Sc. Students",
          students: [
            { name: "Miss Fatimah Yuso", role: "Graduated (2023)", campus: "Hat Yai Campus" },
            { name: "Mr. Namoral Thy", role: "Graduated (2023)", campus: "Pattani Campus" }
          ]
        }
      ]
    }
  ]
};

export function SelectionDirectory() {
  const { lang } = useLanguage();
  const currentData = directoryData[lang] || directoryData.th;

  // ดึงฟังก์ชันสำหรับปุ่มดูรายละเอียดแยกออกมาข้างนอก เพื่อไม่ให้ฟังก์ชันซ้อนกันลึกเกินไป (SonarLint S2004)
  const handleMoreDetail = () => {
    // ในอนาคตสามารถใส่ Logic เพิ่มเติมสำหรับนำทางไปหน้านักเรียนทุนรายบุคคลได้ที่นี่
  };

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อทำเนียบนักศึกษาทุน */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {lang === "en" ? "Scholarship Recipients Directory" : "ทำเนียบนักศึกษาทุนระดับบัณฑิตศึกษา"}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {lang === "en"
              ? "List of master's and doctoral degree scholarship recipients under the MGSS project"
              : "รายชื่อเกียรติยศของนักศึกษาระดับปริญญาโทและปริญญาเอกที่ได้รับทุนการศึกษาโครงการ MGSS"}
          </p>
        </div>

        {/* รายการแบ่งตามปีการศึกษา */}
        <div className="space-y-20">
          {currentData.map((yearGroup) => (
            <div key={yearGroup.year} className="space-y-12">
              {/* แถบปีการศึกษา */}
              <div className="border-b border-border/80 pb-3">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                  <span className="h-5 w-1 bg-accent rounded-full" />
                  <span>{yearGroup.year}</span>
                </h3>
              </div>

              {/* กลุ่มการศึกษาในแต่ละปี */}
              <div className="space-y-10">
                {yearGroup.groups.map((group) => (
                  <div key={group.title} className="space-y-6">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block bg-secondary/40 px-3 py-1 rounded w-fit">
                      {group.title}
                    </span>

                    {/* รายชื่อนักศึกษาในกลุ่ม */}
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {group.students.map((student) => (
                        <div
                          key={student.name}
                          className="group bg-card border border-border/50 rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                          {/* รูปโปรไฟล์จำลอง */}
                          <div className="relative aspect-4/5 bg-linear-to-tr from-accent/5 via-primary/5 to-pink-500/5 flex flex-col items-center justify-center border-b border-border/40 overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/5" />
                            <div className="relative z-10 flex flex-col items-center p-6 text-muted-foreground/60">
                              <div className="h-20 w-20 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-primary/70 mb-3 group-hover:scale-105 transition-transform duration-300">
                                <User className="h-8 w-8 text-primary/70" />
                              </div>
                              <span className="text-[9px] font-bold uppercase tracking-widest text-primary/70 bg-white/70 px-2 py-0.5 rounded border border-border/40">
                                {lang === "en" ? "MGSS SCHOLAR" : "นักเรียนทุน MGSS"}
                              </span>
                            </div>
                          </div>

                          {/* รายละเอียด */}
                          <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                            <div className="space-y-1.5">
                              <h4 className="font-bold text-primary text-sm leading-snug group-hover:text-accent transition-colors">
                                {student.name}
                              </h4>
                              <p className="text-xs text-muted-foreground/80 leading-relaxed">
                                {student.role}
                              </p>
                              <p className="text-[10px] font-semibold text-muted-foreground/75 flex items-center gap-1">
                                <GraduationCap className="h-3.5 w-3.5 text-accent" />
                                {student.campus}
                              </p>
                            </div>

                            {/* ปุ่มดูรายละเอียดเพิ่มเติม */}
                            <Button
                              variant="link"
                              className="p-0 h-auto justify-start font-semibold text-xs text-primary hover:text-accent hover:no-underline mt-2"
                              onClick={handleMoreDetail}
                            >
                              {lang === "en" ? "More Detail" : "ดูรายละเอียดเพิ่มเติม"}
                              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
