import { TeacherTrainingTemplate } from "../components/teacher-training-template"
import { teacherTrainingData } from "@/data/pages/mscd/teacher-improvement/teacher-training"
import { notFound } from "next/navigation"

// ฟังก์ชันระบุค่า Parameter สำหรับการสร้างหน้าเพจแบบ Static (Static Generation Optimization)
// Next.js จะดึงค่าปีเหล่านี้ไปทำการ Render เป็นหน้าเว็บล่วงหน้าตอนสั่ง Build โปรเจกต์
export function generateStaticParams() {
  return Object.keys(teacherTrainingData).map((year) => ({
    year,
  }))
}

interface PageProps {
  readonly params: Promise<{ year: string }>
}

// คอมโพเนนต์หน้ารายละเอียดการอบรมครูแบบ Dynamic Route (Server Component)
export default async function TeacherTrainingDynamicPage({ params }: PageProps) {
  const { year } = await params
  const campData = teacherTrainingData[year]

  // หากไม่พบข้อมูลปีการศึกษาดังกล่าวในระบบ ให้แสดงหน้า 404
  if (!campData) {
    notFound()
  }

  return (
    <TeacherTrainingTemplate
      year={campData.year}
      translationKey={campData.translationKey}
      imageFolder={campData.imageFolder}
      announcements={campData.announcements}
      galleryImages={campData.galleryImages || []}
    />
  )
}
