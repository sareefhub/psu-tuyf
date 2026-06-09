"use client"

import { useT } from "@/components/language-context"
import { StudentCard } from "@/components/student-card"

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
            image: "/images/mscd/bsc-scholarships/student-1.png",
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
          { name: "Mr. Faruk Waede", studentKey: "s1", image: "/images/mscd/bsc-scholarships/student-2.png" },
          { name: "Miss Inasnee Rattanawongsawas", studentKey: "s2", image: "/images/mscd/bsc-scholarships/student-3.png" },
          { name: "Miss Fatimah Mahae", studentKey: "s3", image: "/images/mscd/bsc-scholarships/student-4.png" },
          { name: "Miss Nirania Waedaya", studentKey: "s4", image: "/images/mscd/bsc-scholarships/student-5.png" },
          { name: "Miss Sufianee Abu", studentKey: "s5", image: "/images/mscd/bsc-scholarships/student-6.png" },
        ],
      },
      {
        groupKey: "g2",
        students: [
          { name: "Miss Liza Thea", studentKey: "s1", image: "/images/mscd/bsc-scholarships/student-7.png" },
          { name: "Mr. Chhavy Chorn", studentKey: "s2", image: "/images/mscd/bsc-scholarships/student-8.png" },
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
          { name: "Miss Rusmee Binmaming", studentKey: "s1", image: "/images/mscd/bsc-scholarships/student-9.png" },
          { name: "Mr. Affan Yahyoh", studentKey: "s2", image: "/images/mscd/bsc-scholarships/student-10.png" },
        ],
      },
      {
        groupKey: "g2",
        students: [
          { name: "Mr. Namoral Thy", studentKey: "s1", image: "/images/mscd/bsc-scholarships/student-11.png" },
          { name: "Miss Layya Meak", studentKey: "s2", image: "/images/mscd/bsc-scholarships/student-12.png" },
        ],
      },
    ],
  },
]

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
                  <span>{t(`bscScholarships.directory.years.${yearGroup.yearKey}.label`)}</span>
                </h3>
              </div>

              {/* วนลูปกลุ่มสัญชาติย่อยภายในปีนั้น ๆ */}
              <div className="space-y-10">
                {yearGroup.groups.map((group) => (
                  <div key={group.groupKey} className="space-y-6">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block bg-secondary/40 px-3 py-1 rounded w-fit">
                      {t(`bscScholarships.directory.years.${yearGroup.yearKey}.groups.${group.groupKey}.title`)}
                    </span>

                    {/* รายชื่อนักเรียนในกลุ่มนี้แสดงเป็น Grid ขนาด 4 คอลัมน์โดยใช้คอมโพเนนต์กลาง */}
                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {group.students.map((student) => (
                        <StudentCard
                          key={student.name}
                          name={student.name}
                          image={student.image}
                          role={t(`bscScholarships.directory.years.${yearGroup.yearKey}.groups.${group.groupKey}.students.${student.studentKey}.role`)}
                          campus={t(`bscScholarships.directory.years.${yearGroup.yearKey}.groups.${group.groupKey}.students.${student.studentKey}.campus`)}
                          moreDetailText={t("bscScholarships.directory.moreDetail")}
                          photoPlaceholderText={t("bscScholarships.directory.photo")}
                          categoryBadge={t("bscScholarships.directory.title")}
                          priority={yearGroup.yearKey === "y2566"}
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
