"use client"

import { useEffect } from "react"
import { useT } from "@/context/language-context"
import { StudentCard } from "@/components/student-card"
import { useRouter } from "next/navigation"

import { bscDirectoryData } from "@/data/pages/mscd/bsc-scholarships/bsc-scholarships"

interface StudentGroupProps {
  yearKey: string
  groupKey: string
  groupTitle: string
  students: readonly any[] // กำหนดเป็น readonly array เพื่อรองรับข้อมูลทุนแบบคงที่
  t: any
  router: any
}

// คอมโพเนนต์แสดงผลกลุ่มนักเรียนทุน (แยกออกเพื่อลดระดับการซ้อนฟังก์ชัน)
function StudentGroup({ yearKey, groupKey, groupTitle, students, t, router }: StudentGroupProps) {
  return (
    <div className="space-y-6">
      <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block bg-secondary/40 px-3 py-1 rounded w-fit">
        {groupTitle}
      </span>

      {/* รายรายชื่อนักเรียนในกลุ่มนี้แสดงเป็น Grid ขนาด 4 คอลัมน์โดยใช้คอมโพเนนต์กลาง */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {students.map((student) => (
          <div key={student.name} id={`student-${student.slug}`}>
            <StudentCard
              name={student.name}
              image={student.image}
              role={t(`bscScholarships.directory.years.${yearKey}.groups.${groupKey}.students.${student.studentKey}.role`)}
              campus={t(`bscScholarships.directory.years.${yearKey}.groups.${groupKey}.students.${student.studentKey}.campus`)}
              moreDetailText={t("bscScholarships.directory.moreDetail")}
              photoPlaceholderText={t("bscScholarships.directory.photo")}
              categoryBadge={t("bscScholarships.directory.title")}
              priority={yearKey === "y2566"}
              onDetailClick={() => {
                if (typeof window !== "undefined") {
                  sessionStorage.setItem("bsc_last_student_slug", student.slug)
                  sessionStorage.setItem("bsc_scroll_y", window.scrollY.toString())
                }
                router.push(`/mscd/bsc-scholarships/${student.slug}`)
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function SelectionDirectory() {
  const t = useT()
  const router = useRouter()

  // เลื่อนกลับไปยังตำแหน่งการ์ดนักเรียนล่าสุดที่กดเข้าไปดูเมื่อกดย้อนกลับมา
  useEffect(() => {
    if (typeof window !== "undefined") {
      const lastSlug = sessionStorage.getItem("bsc_last_student_slug")
      const scrollY = sessionStorage.getItem("bsc_scroll_y")

      if (lastSlug) {
        // รอให้ DOM เรนเดอร์เสร็จสิ้นเล็กน้อยเพื่อให้หา element เจอ
        const timer = setTimeout(() => {
          const element = document.getElementById(`student-${lastSlug}`)
          if (element) {
            // เลื่อนไปที่กึ่งกลางหน้าจอเพื่อให้เห็นชัดเจนและสวยงาม
            element.scrollIntoView({ block: "center", behavior: "smooth" })
          } else if (scrollY) {
            window.scrollTo({ top: parseInt(scrollY, 10), behavior: "smooth" })
          }
          // เคลียร์ค่าออกเพื่อป้องกันการสกรอลซ้ำโดยไม่ได้ตั้งใจในครั้งถัดไป
          sessionStorage.removeItem("bsc_last_student_slug")
          sessionStorage.removeItem("bsc_scroll_y")
        }, 150)

        return () => clearTimeout(timer)
      }
    }
  }, [])

  return (
    <section className="py-10 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อทำเนียบนักเรียนทุน */}
        <div className="text-center mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("bscScholarships.directory.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("bscScholarships.directory.desc")}
          </p>
        </div>

        {/* รายการแบ่งตามปีการศึกษา */}
        <div className="space-y-20">
          {bscDirectoryData.map((yearGroup) => (
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
                  <StudentGroup
                    key={group.groupKey}
                    yearKey={yearGroup.yearKey}
                    groupKey={group.groupKey}
                    groupTitle={t(`bscScholarships.directory.years.${yearGroup.yearKey}.groups.${group.groupKey}.title`)}
                    students={group.students}
                    t={t}
                    router={router}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
