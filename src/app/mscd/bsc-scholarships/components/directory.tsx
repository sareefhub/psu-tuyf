"use client"

import { useT } from "@/components/language-context"
import { GraduationCap, ArrowRight, User } from "lucide-react"
import { Button } from "@/components/ui/button"

// โครงสร้างข้อมูลรายชื่อนักเรียนทุน ที่แมปคีย์กับไฟล์แปลภาษา JSON
const directoryData = [
  {
    yearKey: "y2566",
    groups: [
      {
        groupKey: "g1",
        students: [
          {
            name: "Miss SOPHOUN YOUK",
            studentKey: "s1",
            image: "",
          },
        ],
      },
    ],
  },
  {
    yearKey: "y2565",
    groups: [
      {
        groupKey: "g1",
        students: [
          { name: "Mr. Faruk Waede", studentKey: "s1", image: "" },
          { name: "Miss Inasnee Rattanawongsawas", studentKey: "s2", image: "" },
          { name: "Miss Fatimah Mahae", studentKey: "s3", image: "" },
          { name: "Miss Nirania Waedaya", studentKey: "s4", image: "" },
          { name: "Miss Sufianee Abu", studentKey: "s5", image: "" },
        ],
      },
      {
        groupKey: "g2",
        students: [
          { name: "Miss Liza Thea", studentKey: "s1", image: "" },
          { name: "Mr. Chhavy Chorn", studentKey: "s2", image: "" },
        ],
      },
    ],
  },
  {
    yearKey: "y2564",
    groups: [
      {
        groupKey: "g1",
        students: [
          { name: "Miss Rusmee Binmaming", studentKey: "s1", image: "" },
          { name: "Mr. Affan Yahyoh", studentKey: "s2", image: "" },
        ],
      },
      {
        groupKey: "g2",
        students: [
          { name: "Mr. Namoral Thy", studentKey: "s1", image: "" },
          { name: "Miss Layya Meak", studentKey: "s2", image: "" },
        ],
      },
    ],
  },
]

// โครงสร้างของข้อมูลนักเรียนทุนแต่ละคน
interface Student {
  name: string
  studentKey: string
  image: string
}

// คอมโพเนนต์ย่อยสำหรับแสดงการ์ดรายละเอียดนักเรียนทุนแต่ละคน
function StudentCard({
  student,
  yearKey,
  groupKey,
  t,
}: Readonly<{
  student: Student
  yearKey: string
  groupKey: string
  t: (key: string) => string
}>) {
  return (
    <div className="group bg-card border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      {/* กล่องภาพตัวแทนนักเรียน (Placeholder) */}
      <div className="relative aspect-4/5 bg-linear-to-tr from-accent/5 via-primary/5 to-pink-500/5 flex flex-col items-center justify-center p-6 text-muted-foreground/60 border-b border-border/40 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/5" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="h-20 w-20 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-primary/70 mb-3 group-hover:scale-105 transition-transform duration-300">
            <User className="h-8 w-8 text-primary/70" />
          </div>
          <span className="text-[9px] font-bold uppercase tracking-widest text-primary/70 bg-white/70 px-2 py-0.5 rounded border border-border/40">
            {t("bscScholarships.directory.photo")}
          </span>
        </div>
      </div>

      {/* รายละเอียดข้อมูลนักเรียนทุน */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <h4 className="font-bold text-primary text-sm leading-snug group-hover:text-accent transition-colors">
            {student.name}
          </h4>
          <p className="text-xs text-muted-foreground/80 leading-relaxed">
            {t(`bscScholarships.directory.years.${yearKey}.groups.${groupKey}.students.${student.studentKey}.role`)}
          </p>
          <p className="text-[10px] font-semibold text-muted-foreground/75 flex items-center gap-1">
            <GraduationCap className="h-3.5 w-3.5 text-accent" />
            {t(`bscScholarships.directory.years.${yearKey}.groups.${groupKey}.students.${student.studentKey}.campus`)}
          </p>
        </div>

        {/* ปุ่มดูรายละเอียดเพิ่มเติม */}
        <Button
          variant="link"
          className="p-0 h-auto justify-start font-semibold text-xs text-primary hover:text-accent hover:no-underline mt-2"
          onClick={() => {}}
        >
          {t("bscScholarships.directory.moreDetail")}
          <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  )
}

export function SelectionDirectory() {
  const t = useT()

  return (
    <section className="py-10 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อทำเนียบนักเรียนทุน */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("bscScholarships.directory.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("bscScholarships.directory.desc")}
          </p>
        </div>

        {/* รายการแบ่งตามปีการศึกษา */}
        <div className="space-y-20">
          {directoryData.map((yearGroup) => (
            <div key={yearGroup.yearKey} className="space-y-12">
              {/* แถบปีการศึกษาแบ่งส่วนชัดเจน */}
              <div className="border-b border-border/80 pb-3">
                <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                  <span className="h-5 w-1 bg-accent rounded-full" />
                  {t(`bscScholarships.directory.years.${yearGroup.yearKey}.label`)}
                </h3>
              </div>

              {/* วนลูปกลุ่มสัญชาติย่อยภายในปีนั้น ๆ */}
              <div className="space-y-10">
                {yearGroup.groups.map((group) => (
                  <div key={group.groupKey} className="space-y-6">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block bg-secondary/40 px-3 py-1 rounded w-fit">
                      {t(`bscScholarships.directory.years.${yearGroup.yearKey}.groups.${group.groupKey}.title`)}
                    </span>

                    {/* รายชื่อนักเรียนในกลุ่มนี้แสดงเป็น Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {group.students.map((student) => (
                        <StudentCard
                          key={student.name}
                          student={student}
                          yearKey={yearGroup.yearKey}
                          groupKey={group.groupKey}
                          t={t}
                        />
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
