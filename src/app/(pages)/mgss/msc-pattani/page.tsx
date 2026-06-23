"use client"

import { useEffect } from "react"
import { useLanguage } from "@/components/language-context"
import { MainLayout } from "@/layout/main-layout"
import { StudentCard } from "@/components/student-card"
import { useRouter } from "next/navigation"

import { mscPattaniData } from "@/data/pages/mgss/student-directory"

export default function MscPattaniDirectoryPage() {
  const { lang } = useLanguage();
  const router = useRouter();
  // ดึงข้อมูลทำเนียบนักศึกษาจากไฟล์ข้อมูลกลางแยกตามภาษา
  const currentData = mscPattaniData[lang] || mscPattaniData.th;

  // เลื่อนกลับไปยังตำแหน่งการ์ดนักเรียนล่าสุดที่กดเข้าไปดูเมื่อกดย้อนกลับมา
  useEffect(() => {
    if (typeof window !== "undefined") {
      const lastSlug = sessionStorage.getItem("mgss_last_student_slug")
      const scrollY = sessionStorage.getItem("mgss_scroll_y")

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
          sessionStorage.removeItem("mgss_last_student_slug")
          sessionStorage.removeItem("mgss_scroll_y")
        }, 150)

        return () => clearTimeout(timer)
      }
    }
  }, [])

  return (
    <MainLayout className="animate-fade-in">
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          {/* หัวข้อแสดงหน้าทำเนียบนักเรียนทุน */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h1 className="text-balance text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              {lang === "en" ? "Scholars Directory" : "ทำเนียบนักเรียนทุน"}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed">
              {lang === "en"
                ? "Honorable directory of M.Sc. scholarship recipients (Pattani Campus) under the MGSS project"
                : "รายชื่อเกียรติยศของนักศึกษาระดับปริญญาโท (วิทยาเขตปัตตานี) ผู้ได้รับทุนการศึกษาโครงการ MGSS"}
            </p>
          </div>

          {/* รายชื่อแบ่งตามปีการศึกษา */}
          <div className="space-y-16 max-w-7xl mx-auto">
            {currentData.map((yearGroup) => (
              <div key={yearGroup.year} className="space-y-8">
                {/* ขีดคั่นและชื่อปีการศึกษา */}
                <div className="border-b border-border/80 pb-3">
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                    <span className="h-5 w-1.5 bg-accent rounded-full" />
                    <span>{lang === "en" ? "Scholars Admitted in " : "นักเรียนทุนรับเข้า"}{yearGroup.year}</span>
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* Badge แสดงข้อมูลกลุ่มประเทศหรือสัญชาติผู้ได้รับทุน */}
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block bg-secondary/50 px-3 py-1 rounded w-fit">
                    {yearGroup.groupTitle}
                  </span>

                  {/* แสดงการ์ดในแบบ Grid ขนาด 4 คอลัมน์ */}
                  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {yearGroup.students.map((student) => (
                      <div key={student.name} id={`student-${student.slug}`}>
                        <StudentCard
                          name={student.name}
                          role={student.role}
                          campus={student.campus}
                          image={student.image} // ส่งพาธรูปภาพของนักศึกษา
                          moreDetailText={lang === "en" ? "More Detail" : "ดูรายละเอียดเพิ่มเติม"}
                          photoPlaceholderText={lang === "en" ? "PHOTO" : "รูปภาพ"}
                          categoryBadge={lang === "en" ? "MGSS SCHOLAR" : "นักศึกษาทุน MGSS"}
                          priority={yearGroup.year.includes("2567") || yearGroup.year.includes("2024")} // เพิ่มความสำคัญในการโหลดรูปภาพสำหรับรุ่นปัจจุบัน
                          onDetailClick={() => {
                            if (typeof window !== "undefined") {
                              sessionStorage.setItem("mgss_last_student_slug", student.slug)
                              sessionStorage.setItem("mgss_scroll_y", window.scrollY.toString())
                            }
                            router.push(`/mgss/${student.slug}`)
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
