import { StudentHero } from "./components/hero"
import { StudentOverview } from "./components/overview"

// คอมโพเนนต์แสดงผลหน้าหลักสำหรับโครงการพัฒนาศักยภาพนักเรียน (Student Improvement)
export default function StudentImprovementPage() {
  return (
    <>
      {/* ส่วนแบนเนอร์ด้านบนสุด */}
      <StudentHero />

      {/* ส่วนข้อมูลภาพรวมโครงการประวัติความเป็นมาและวัตถุประสงค์หลัก */}
      <StudentOverview />
    </>
  )
}
