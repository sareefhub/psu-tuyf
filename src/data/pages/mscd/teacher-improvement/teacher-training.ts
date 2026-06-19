// ข้อมูลรายละเอียดของโครงการอบรมครูคณิตศาสตร์ (Teacher Training)
// เก็บไว้ที่นี่เพื่อความเป็น Clean Code และง่ายต่อการปรับปรุงข้อมูลในอนาคต โดยไม่ต้องแก้ไขตัวไฟล์ UI

export interface AnnouncementItem {
  readonly title: string;
  readonly date: string;
  readonly size: string;
  readonly fileUrl: string;
}

export interface TeacherTrainingConfig {
  readonly year: string;
  readonly translationKey: string;
  readonly imageFolder: string;
  readonly announcements: readonly AnnouncementItem[];
  readonly galleryImages?: readonly string[];
}

export const teacherTrainingData: Record<string, TeacherTrainingConfig> = {
  // ข้อมูลโครงการปี 2022 (2565)
  "math-2022": {
    year: "2022",
    translationKey: "mtt2022",
    imageFolder: "mtt-2022",
    announcements: [
      {
        title: "รายละเอียดโครงการอบรมครูคณิตศาสตร์ 2565",
        date: "ตุลาคม 2565",
        size: "245 KB",
        fileUrl: "/documents/mscd/teacher-improvement/mathematics-teacher-training/mtt-2022/รายละเอียดโครงการ.pdf",
      },
      {
        title: "ผลประเมินการอบรมครูคณิตศาสตร์",
        date: "ธันวาคม 2565",
        size: "165 KB",
        fileUrl: "/documents/mscd/teacher-improvement/mathematics-teacher-training/mtt-2022/ผลประเมินอบรมครู.pdf",
      },
    ],
    galleryImages: [],
  },
  // ข้อมูลโครงการปี 2024 (2567)
  "math-2024": {
    year: "2024",
    translationKey: "mtt2024",
    imageFolder: "mtt-2024",
    announcements: [
      {
        title: "ประกาศเเละใบรับสมัครอบรมครูคณิตศาสตร์ 2567",
        date: "สิงหาคม 2567",
        size: "248 KB",
        fileUrl: "/documents/mscd/teacher-improvement/mathematics-teacher-training/mtt-2024/ประกาศเเละใบรับสมัคร-2567.pdf",
      },
      {
        title: "หนังสือเชิญส่งผู้แทนครูเข้าร่วมการอบรม",
        date: "กันยายน 2567",
        size: "155 KB",
        fileUrl: "/documents/mscd/teacher-improvement/mathematics-teacher-training/mtt-2024/หนังสือเชิญ.pdf",
      },
      {
        title: "ประกาศรายชื่อคุณครูที่ผ่านการคัดเลือกเข้ารับการอบรม",
        date: "ตุลาคม 2567",
        size: "138 KB",
        fileUrl: "/documents/mscd/teacher-improvement/mathematics-teacher-training/mtt-2024/ประกาศรายชื่อคุณครูที่ผ่านการคัดเลือก.pdf",
      },
    ],
    galleryImages: [],
  },
  // ข้อมูลโครงการปี 2026 (2569)
  "math-2026": {
    year: "2026",
    translationKey: "mtt2026",
    imageFolder: "mtt-2026",
    announcements: [
      {
        title: "โครงการอบรมครูคณิตศาสตร์ ประจำปี 2569",
        date: "กุมภาพันธ์ 2569",
        size: "254 KB",
        fileUrl: "/documents/mscd/teacher-improvement/mathematics-teacher-training/mtt-2026/โครงการอบรมครูคณิตศาสตร์-2569.pdf",
      },
      {
        title: "ใบสมัครเข้าอบรมครูคณิตศาสตร์",
        date: "กุมภาพันธ์ 2569",
        size: "142 KB",
        fileUrl: "/documents/mscd/teacher-improvement/mathematics-teacher-training/mtt-2026/ใบสมัครเข้าอบรมครูคณิตศาสตร์.pdf",
      },
      {
        title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าอบรม",
        date: "เมษายน 2569",
        size: "138 KB",
        fileUrl: "/documents/mscd/teacher-improvement/mathematics-teacher-training/mtt-2026/ประกาศรายชื่อผู้มีสิทธิ์เข้าอบรม.pdf",
      },
    ],
    galleryImages: [],
  },
}
