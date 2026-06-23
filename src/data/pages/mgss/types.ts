// ประเภทข้อมูลสำหรับนักศึกษาทุนโครงการ MGSS (MGSS Graduate Student Data Types)

export interface MgssStudentActivity {
  readonly title: { readonly th: string; readonly en: string }
  readonly date: { readonly th: string; readonly en: string }
  readonly description: { readonly th: string; readonly en: string }
  readonly images: readonly string[]
}

export interface MgssStudentProfile {
  readonly slug: string
  readonly name: { readonly th: string; readonly en: string }
  readonly image: string
  readonly role: { readonly th: string; readonly en: string }
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

  readonly activities: readonly MgssStudentActivity[]
}
