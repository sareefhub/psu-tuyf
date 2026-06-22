"use client"

import { use } from "react"
import { useT, useLanguage } from "@/components/language-context"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, GraduationCap, Calendar, FileImage, User } from "lucide-react"
import { bscDirectoryData } from "@/data/pages/mscd/bsc-scholarships"
import { bscStudentsActivitiesData } from "@/data/pages/mscd/bsc-scholarships-activities"
import { MainLayout } from "@/layout/main-layout"

interface PageProps {
  readonly params: Promise<{ studentSlug: string }>
}

/**
 * ค้นหาข้อมูลนักเรียนทุนจำลองจากทำเนียบหลักในกรณีที่ยังไม่ได้บันทึกกิจกรรมย่อย
 */
function findFallbackStudent(studentSlug: string, translate: (key: string) => string) {
  let foundStudent: any = null
  let foundRoleKey = ""
  let foundCampusKey = ""

  for (const yearGroup of bscDirectoryData) {
    for (const group of yearGroup.groups) {
      const student = group.students.find((s) => s.slug === studentSlug)
      if (student) {
        foundStudent = student
        foundRoleKey = `bscScholarships.directory.years.${yearGroup.yearKey}.groups.${group.groupKey}.students.${student.studentKey}.role`
        foundCampusKey = `bscScholarships.directory.years.${yearGroup.yearKey}.groups.${group.groupKey}.students.${student.studentKey}.campus`
        break
      }
    }
    if (foundStudent) break
  }

  if (!foundStudent) return null

  return {
    slug: foundStudent.slug,
    name: { th: foundStudent.name, en: foundStudent.name },
    image: foundStudent.image,
    role: { th: translate(foundRoleKey), en: translate(foundRoleKey) },
    campus: { th: translate(foundCampusKey), en: translate(foundCampusKey) },
    activities: [],
  }
}

export default function StudentDetailPage({ params }: PageProps) {
  const { studentSlug } = use(params)
  const t = useT()
  const { lang } = useLanguage()
  const router = useRouter()

  // ค้นหาข้อมูลกิจกรรมของนักเรียนทุนจาก Data File
  let studentProfile = bscStudentsActivitiesData[studentSlug]

  // หากไม่มีข้อมูลกิจกรรม แต่มีรายชื่อในทำเนียบหลัก ให้สร้าง Profile จำลองแบบไม่มีกิจกรรม
  if (!studentProfile) {
    const fallbackProfile = findFallbackStudent(studentSlug, t)

    if (!fallbackProfile) {
      // หากไม่มีชื่อในระบบเลย ให้เด้งกลับหน้าหลัก
      return (
        <MainLayout>
          <div className="py-20 text-center max-w-md mx-auto space-y-4">
            <h2 className="text-xl font-bold text-primary">{t("ไม่พบข้อมูลนักเรียนทุน", "Student Profile Not Found")}</h2>
            <Link href="/mscd/bsc-scholarships" className="inline-flex items-center gap-2 text-accent font-bold hover:underline">
              <ArrowLeft className="h-4 w-4" />
              <span>{t("ย้อนกลับ", "Back")}</span>
            </Link>
          </div>
        </MainLayout>
      )
    }

    studentProfile = fallbackProfile
  }

  // ดึงข้อความตามภาษาปัจจุบัน (TH / EN)
  const studentName = lang === "th" ? studentProfile.name.th : studentProfile.name.en
  const studentRole = lang === "th" ? studentProfile.role.th : studentProfile.role.en
  const studentCampus = lang === "th" ? studentProfile.campus.th : studentProfile.campus.en

  return (
    <MainLayout className="animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 pt-8 space-y-8 pb-16">
        
        {/* ปุ่มย้อนกลับสไตล์พรีเมียมคุมโทนระบบ */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border/50 bg-card text-xs font-bold text-muted-foreground hover:text-primary hover:border-primary/20 hover:shadow-2xs transition-all duration-200 cursor-pointer group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>{t("ย้อนกลับ", "Back")}</span>
        </button>

        {/* ส่วนหัวแสดงโปรไฟล์และรูปถ่าย (Header Section) */}
        <div className="bg-card border border-border/50 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row gap-8 items-center sm:items-start hover:border-primary/25 hover:shadow-xs transition-all duration-300">
          {/* รูปโปรไฟล์พร้อมวงแหวนซ้อนเพื่อความพรีเมียม */}
          <div className="relative h-44 w-36 sm:h-52 sm:w-44 aspect-4/5 rounded-2xl overflow-hidden border border-border bg-secondary/35 shrink-0 shadow-xs ring-4 ring-secondary/40">
            <Image
              src={studentProfile.image}
              alt={studentName}
              fill
              sizes="(max-width: 640px) 150px, 200px"
              className="object-cover"
              priority
            />
          </div>

          {/* รายละเอียดข้อมูล */}
          <div className="space-y-4 text-center sm:text-left flex-1 py-2">
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20">
                {t("นักเรียนทุนโครงการ", "Scholarship Student")}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                {studentName}
              </h1>
            </div>
            
            <div className="grid gap-2.5 text-sm text-muted-foreground/90 font-medium">
              <p className="flex items-center justify-center sm:justify-start gap-2.5">
                <User className="h-4 w-4 text-primary/70 shrink-0" />
                <span>{studentRole}</span>
              </p>
              <p className="flex items-center justify-center sm:justify-start gap-2.5">
                <GraduationCap className="h-4 w-4 text-accent shrink-0" />
                <span>{studentCampus}</span>
              </p>
            </div>
          </div>
        </div>

        {/* หัวข้อกิจกรรมสไตล์มินิมอลคุมโทนระบบ (Clean Section Header) */}
        <div className="border-b border-border/80 pb-4 mt-12 mb-8">
          <h2 className="text-xl font-bold text-primary flex items-center gap-2">
            <span className="h-5.5 w-1 bg-accent rounded-full animate-pulse" />
            <span>{t("กิจกรรมของนักเรียนทุน", "Student Activities")}</span>
          </h2>
        </div>

        {/* รายการกิจกรรมย่อยของนักเรียนทุนแบบเส้นการเดินทาง (Clean Timeline Layout) */}
        <div>
          {studentProfile.activities.length > 0 ? (
            <div className="relative border-l-2 border-accent/25 pl-6 sm:pl-8 ml-4 sm:ml-6 space-y-12">
              {studentProfile.activities.map((activity, index) => {
                const actTitle = lang === "th" ? activity.title.th : activity.title.en
                const actDate = lang === "th" ? activity.date.th : activity.date.en
                const actDesc = lang === "th" ? activity.description.th : activity.description.en

                return (
                  <div key={`${actTitle}-${index}`} className="relative group animate-fade-in">
                    {/* จุดกลมนำสายตาแบบไทม์ไลน์ (Timeline Node) */}
                    <span className="absolute -left-[38px] sm:-left-[46px] top-6 flex h-7 w-7 items-center justify-center rounded-full bg-background border-2 border-accent/40 shadow-xs ring-4 ring-background group-hover:border-accent transition-all duration-300">
                      <span className="h-2.5 w-2.5 rounded-full bg-accent group-hover:scale-110 transition-transform duration-300" />
                    </span>

                    <div className="bg-card border border-border/50 rounded-3xl p-6 sm:p-8 shadow-2xs hover:shadow-xs hover:border-accent/30 transition-all duration-300 space-y-4">
                      {/* แถบด้านบน: วันที่กิจกรรม */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-accent bg-accent/8 px-3 py-1.5 rounded-xl border border-accent/15 tracking-wide">
                          <Calendar className="h-3.5 w-3.5" />
                          {actDate}
                        </span>
                      </div>
                      
                      {/* ชื่อกิจกรรม */}
                      <h3 className="text-lg sm:text-xl font-extrabold text-primary leading-snug group-hover:text-accent transition-colors duration-300">
                        {actTitle}
                      </h3>

                      {/* รายละเอียดกิจกรรม */}
                      <p className="text-sm sm:text-base text-muted-foreground/80 leading-relaxed whitespace-pre-line">
                        {actDesc}
                      </p>

                      {/* ช่องร่างสำหรับจัดวางรูปภาพกิจกรรมแบบ Clean Grid */}
                      <div className="grid gap-4 sm:grid-cols-2 pt-2">
                        {[1, 2].map((num) => (
                          <div 
                            key={num} 
                            className="group/img aspect-video rounded-2xl border-2 border-dashed border-border/60 bg-gradient-to-br from-secondary/15 via-secondary/5 to-transparent flex flex-col items-center justify-center p-6 hover:bg-secondary/10 hover:border-accent/40 hover:shadow-2xs transition-all duration-300 select-none cursor-pointer"
                          >
                            <div className="p-3.5 rounded-full bg-background border border-border/40 shadow-3xs text-accent/50 group-hover/img:scale-110 group-hover/img:text-accent transition-all duration-300 mb-3">
                              <FileImage className="h-6 w-6" />
                            </div>
                            <span className="text-xs font-bold text-primary/75 tracking-wider uppercase group-hover/img:text-accent transition-colors duration-300">
                              {t("รูปภาพกิจกรรม", "Activity Photo")}
                            </span>
                            <span className="text-[10px] text-muted-foreground/60 mt-1 font-light">
                              {t("อยู่ระหว่างดำเนินการจัดเก็บ", "Photo collection in progress")}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            // กล่องแสดงผลในกรณีที่ยังไม่มีข้อมูลกิจกรรม (Empty State Card)
            <div className="bg-card border border-border/40 rounded-3xl p-12 text-center text-muted-foreground/60 space-y-3 max-w-2xl mx-auto shadow-2xs">
              <User className="h-10 w-10 mx-auto text-muted-foreground/30 mb-2" />
              <p className="text-sm font-semibold">
                {t("ไม่มีข้อมูลกิจกรรมที่บันทึกไว้ในขณะนี้", "No activities recorded at the moment.")}
              </p>
              <p className="text-xs text-muted-foreground/60 font-light">
                {t("ประวัติกิจกรรมการทำจิตอาสาและการบำเพ็ญประโยชน์จะแสดงที่นี่เมื่อมีการอัปเดต", "Volunteer and community service activities will be shown here once updated.")}
              </p>
            </div>
          )}
        </div>

      </div>
    </MainLayout>
  )
}
