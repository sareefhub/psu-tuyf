"use client"

import { useT } from "@/components/language-context"
import { GraduationCap, ArrowRight, User } from "lucide-react"
import { Button } from "@/components/ui/button"

// โครงสร้างข้อมูลรายชื่อนักเรียนทุนแยกตามปีการศึกษาและกลุ่มสัญชาติ
const directoryData = [
  {
    yearTh: "นักเรียนทุนรับเข้าปีการศึกษา 2566",
    yearEn: "Scholarship Admitted Students Academic Year 2023 (2566)",
    groups: [
      {
        titleTh: "นักเรียนกัมพูชา Cambodian Student Scholars 2021",
        titleEn: "Cambodian Student Scholars 2021",
        students: [
          {
            name: "Miss SOPHOUN YOUK",
            roleTh: "Scholar Student since , 2023",
            roleEn: "Scholar Student since , 2023",
            campusTh: "Pattani Campus",
            campusEn: "Pattani Campus",
            image: ""
          }
        ]
      }
    ]
  },
  {
    yearTh: "นักเรียนทุนรับเข้าปีการศึกษา 2565",
    yearEn: "Scholarship Admitted Students Academic Year 2022 (2565)",
    groups: [
      {
        titleTh: "นักเรียนไทย Thai Student Scholars 2021",
        titleEn: "Thai Student Scholars 2021",
        students: [
          {
            name: "Mr. Faruk Waede",
            roleTh: "2nd year student, 2022",
            roleEn: "2nd year student, 2022",
            campusTh: "Pattani Campus",
            campusEn: "Pattani Campus",
            image: ""
          },
          {
            name: "Miss Inasnee Rattanawongsawas",
            roleTh: "2nd year Student, 2022",
            roleEn: "2nd year Student, 2022",
            campusTh: "Pattani Campus",
            campusEn: "Pattani Campus",
            image: ""
          },
          {
            name: "Miss Fatimah Mahae",
            roleTh: "2nd year student, 2022",
            roleEn: "2nd year student, 2022",
            campusTh: "Pattani Campus",
            campusEn: "Pattani Campus",
            image: ""
          },
          {
            name: "Miss Nirania Waedaya",
            roleTh: "2nd year student, 2022",
            roleEn: "2nd year student, 2022",
            campusTh: "Pattani Campus",
            campusEn: "Pattani Campus",
            image: ""
          },
          {
            name: "Miss Sufianee Abu",
            roleTh: "2nd year student, 2022",
            roleEn: "2nd year student, 2022",
            campusTh: "Pattani Campus",
            campusEn: "Pattani Campus",
            image: ""
          }
        ]
      },
      {
        titleTh: "นักเรียนกัมพูชา Cambodian Student Scholars 2022",
        titleEn: "Cambodian Student Scholars 2022",
        students: [
          {
            name: "Miss Liza Thea",
            roleTh: "2nd year student, 2022",
            roleEn: "2nd year student, 2022",
            campusTh: "Pattani Campus",
            campusEn: "Pattani Campus",
            image: ""
          },
          {
            name: "Mr. Chhavy Chorn",
            roleTh: "2nd year Student, 2022",
            roleEn: "2nd year Student, 2022",
            campusTh: "Pattani Campus",
            campusEn: "Pattani Campus",
            image: ""
          }
        ]
      }
    ]
  },
  {
    yearTh: "นักเรียนทุนรับเข้าปีการศึกษา 2564",
    yearEn: "Scholarship Admitted Students Academic Year 2021 (2564)",
    groups: [
      {
        titleTh: "นักเรียนไทย Thai Student Scholars 2021",
        titleEn: "Thai Student Scholars 2021",
        students: [
          {
            name: "Miss Rusmee Binmaming",
            roleTh: "3rd year student, 2021",
            roleEn: "3rd year student, 2021",
            campusTh: "Pattani Campus",
            campusEn: "Pattani Campus",
            image: ""
          },
          {
            name: "Mr. Affan Yahyoh",
            roleTh: "3rd year student, 2021",
            roleEn: "3rd year student, 2021",
            campusTh: "Pattani Campus",
            campusEn: "Pattani Campus",
            image: ""
          }
        ]
      },
      {
        titleTh: "นักเรียนกัมพูชา Cambodian Student Scholars 2021",
        titleEn: "Cambodian Student Scholars 2021",
        students: [
          {
            name: "Mr. Namoral Thy",
            roleTh: "3rd year student, 2021",
            roleEn: "3rd year student, 2021",
            campusTh: "Pattani Campus",
            campusEn: "Pattani Campus",
            image: ""
          },
          {
            name: "Miss Layya Meak",
            roleTh: "3rd year student, 2021",
            roleEn: "3rd year student, 2021",
            campusTh: "Pattani Campus",
            campusEn: "Pattani Campus",
            image: ""
          }
        ]
      }
    ]
  }
]

export function SelectionDirectory() {
  const t = useT()

  return (
    <section className="py-10 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* หัวข้อทำเนียบนักเรียนทุน */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("ทำเนียบนักเรียนทุน", "Scholarship Recipients Directory")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t(
              "รายชื่อเกียรติยศของนักเรียนและนักศึกษาผู้ได้รับทุนการศึกษาโครงการ B.Sc. Scholarships",
              "Honorary list of B.Sc. Scholarships program recipients"
            )}
          </p>
        </div>

        {/* รายการแบ่งตามปีการศึกษา */}
        <div className="space-y-20">
          {directoryData.map((yearGroup, yearIdx) => (
            <div key={yearIdx} className="space-y-12">
              
              {/* แถบปีการศึกษาแบ่งส่วนชัดเจน */}
              <div className="border-b border-border/80 pb-3">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                  <span className="h-5 w-1 bg-accent rounded-full" />
                  {t(yearGroup.yearTh, yearGroup.yearEn)}
                </h3>
              </div>

              {/* วนลูปกลุ่มสัญชาติย่อยภายในปีนั้น ๆ */}
              <div className="space-y-10">
                {yearGroup.groups.map((group, groupIdx) => (
                  <div key={groupIdx} className="space-y-6">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block bg-secondary/40 px-3 py-1 rounded w-fit">
                      {t(group.titleTh, group.titleEn)}
                    </span>

                    {/* รายชื่อนักเรียนในกลุ่มนี้แสดงเป็น Grid คลีน ๆ */}
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {group.students.map((student, idx) => (
                        <div 
                          key={idx}
                          className="group bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                          {/* กล่องภาพตัวแทนนักเรียน (Placeholder) */}
                          {/* หากต้องการใส่รูปภาพจริง: สามารถแก้ไขโดยแทนที่กล่องด้านล่างด้วย <img src={student.image} className="w-full h-full object-cover" /> */}
                          <div className="relative aspect-[4/5] bg-gradient-to-tr from-accent/5 via-primary/5 to-pink-500/5 flex flex-col items-center justify-center p-6 text-muted-foreground/60 border-b border-border/40 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5" />
                            
                            <div className="relative z-10 flex flex-col items-center">
                              <div className="h-20 w-20 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-primary/70 mb-3 group-hover:scale-105 transition-transform duration-300">
                                <User className="h-8 w-8 text-primary/70" />
                              </div>
                              <span className="text-[9px] font-bold uppercase tracking-widest text-primary/70 bg-white/70 px-2 py-0.5 rounded border border-border/40">
                                {t("รูปนักเรียนทุน", "Recipients Photo")}
                              </span>
                            </div>
                          </div>

                          {/* รายละเอียดนักเรียนทุน */}
                          <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                            <div className="space-y-1.5">
                              <h4 className="font-bold text-primary text-sm leading-snug group-hover:text-accent transition-colors">
                                {student.name}
                              </h4>
                              <p className="text-xs text-muted-foreground/80 leading-relaxed">
                                {t(student.roleTh, student.roleEn)}
                              </p>
                              <p className="text-[10px] font-semibold text-muted-foreground/75 flex items-center gap-1">
                                <GraduationCap className="h-3.5 w-3.5 text-accent" />
                                {t(student.campusTh, student.campusEn)}
                              </p>
                            </div>

                            {/* ปุ่ม More Detail คลีน ๆ สไตล์หน้าแรก */}
                            <Button
                              render={<a href="#" onClick={(e) => e.preventDefault()} />}
                              nativeButton={false}
                              variant="link"
                              className="p-0 h-auto justify-start font-semibold text-xs text-primary hover:text-accent hover:no-underline mt-2"
                            >
                              {t("ดูรายละเอียดเพิ่มเติม", "More Detail")}
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
  )
}
