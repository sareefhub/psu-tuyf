import { CampTemplate } from "../components/camp-template"
import { excellenceCampsData } from "@/data/pages/mscd/student-improvement/excellence-math-camp"
import { notFound } from "next/navigation"

// กำหนด Revalidation ทุก ๆ 1 ชั่วโมง เพื่อไม่ให้ดึงข้อมูลจาก Cloudinary บ่อยเกินไป แต่รูปภาพยังคงอัปเดต
export const revalidate = 3600;

// ฟังก์ชันระบุค่า Parameter สำหรับการสร้างหน้าเพจแบบ Static (Static Generation Optimization)
// Next.js จะดึงค่าปีเหล่านี้ไปทำการ Render เป็นหน้าเว็บล่วงหน้าตอนสั่ง Build โปรเจกต์
export function generateStaticParams() {
  return Object.keys(excellenceCampsData).map((year) => ({
    year,
  }))
}

interface PageProps {
  readonly params: Promise<{ year: string }>
}

// คอมโพเนนต์หน้ารายละเอียดค่ายอบรมพีชคณิตย่อยแบบ Dynamic Route (Server Component)
export default async function ExcellenceMathCampDynamicPage({ params }: PageProps) {
  const { year } = await params
  const campData = excellenceCampsData[year]

  // หากไม่พบข้อมูลปีการศึกษาดังกล่าวในระบบ ให้แสดงหน้า 404
  if (!campData) {
    notFound()
  }

  return (
    <CampTemplate
      year={campData.year}
      translationKey={campData.translationKey}
      imageFolder={campData.imageFolder}
      announcements={campData.announcements}
      postTestImages={campData.postTestImages}
      fallbackGalleryImages={campData.galleryImages || []}
    />
  )
}
