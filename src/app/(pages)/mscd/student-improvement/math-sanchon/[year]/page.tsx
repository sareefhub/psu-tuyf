import { SanchonTemplate } from "../components/sanchon-template"
import { sanchonCampsData } from "@/data/pages/mscd/student-improvement"
import { notFound } from "next/navigation"

// ฟังก์ชันระบุค่า Parameter สำหรับการสร้างหน้าเพจแบบ Static (Static Generation Optimization)
// Next.js จะดึงค่าปีเหล่านี้ไปทำการ Render เป็นหน้าเว็บล่วงหน้าตอนสั่ง Build โปรเจกต์
export function generateStaticParams() {
  return Object.keys(sanchonCampsData).map((year) => ({
    year,
  }))
}

interface PageProps {
  readonly params: Promise<{ year: string }>
}

// คอมโพเนนต์หน้ารายละเอียดคณิตศาสตร์สัญจรแบบ Dynamic Route (Server Component)
export default async function MathSanchonDynamicPage({ params }: PageProps) {
  const { year } = await params
  const campData = sanchonCampsData[year]

  // หากไม่พบข้อมูลปีการศึกษาดังกล่าวในระบบ ให้แสดงหน้า 404
  if (!campData) {
    notFound()
  }

  return (
    <SanchonTemplate
      year={campData.year}
      translationKey={campData.translationKey}
      imageFolder={campData.imageFolder}
      announcements={campData.announcements}
      galleryImages={campData.galleryImages || []}
    />
  )
}
