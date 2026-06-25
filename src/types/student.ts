// ประเภทข้อมูลพื้นฐานร่วมกันสำหรับนักศึกษาทุน (Shared Student Scholarship Data Types)

export interface StudentActivity {
  // หัวข้อกิจกรรม รองรับสองภาษา
  readonly title: { readonly th: string; readonly en: string }
  // วันที่จัดกิจกรรม รองรับสองภาษา
  readonly date: { readonly th: string; readonly en: string }
  // รายละเอียดกิจกรรม รองรับสองภาษา
  readonly description: { readonly th: string; readonly en: string }
  // รูปภาพที่เกี่ยวข้องกับกิจกรรม
  readonly images: readonly string[]
}

export interface StudentProfile {
  // สลักข้อมูล URL เฉพาะตัว
  readonly slug: string
  // ชื่อนักเรียนทุน รองรับสองภาษา
  readonly name: { readonly th: string; readonly en: string }
  // รูปภาพโปรไฟล์หลัก
  readonly image: string
  // บทบาทหรือการศึกษาหลักในโครงการ รองรับสองภาษา
  readonly role: { readonly th: string; readonly en: string }
  // วิทยาเขตที่ศึกษา รองรับสองภาษา
  readonly campus: { readonly th: string; readonly en: string }
  
  // ข้อมูลเสริมการเรียนและรางวัล (เพิ่มเติมตามความเหมาะสมสำหรับบางคน)
  readonly studyPlan?: { readonly th: string; readonly en: string }
  readonly projectTitle?: { readonly th: string; readonly en: string }
  readonly projectAdviser?: { readonly th: string; readonly en: string }
  readonly educationalStatus?: { readonly th: string; readonly en: string }
  readonly award?: { readonly th: string; readonly en: string }

  // ข้อมูลการฝึกงาน (เพิ่มเติมตามความเหมาะสมสำหรับบางคน)
  readonly internship?: {
    readonly position: { readonly th: string; readonly en: string }
    readonly location: { readonly th: string; readonly en: string }
    readonly duration: { readonly th: string; readonly en: string }
    readonly responsibility: { readonly th: string; readonly en: string }
    readonly futurePlan?: { readonly th: string; readonly en: string }
  }

  // รายการกิจกรรมที่เข้าร่วม
  readonly activities: readonly StudentActivity[]
}
