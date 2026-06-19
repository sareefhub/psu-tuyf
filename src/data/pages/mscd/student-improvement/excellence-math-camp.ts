// ข้อมูลรายละเอียดของโครงการค่ายคณิตศาสตร์เข้ม (Excellence Math Camp / Pre-Olympics Math)
// เก็บไว้ที่นี่เพื่อความเป็น Clean Code และง่ายต่อการปรับปรุงข้อมูลในอนาคต โดยไม่ต้องแก้ไขตัวไฟล์ UI

export interface AnnouncementItem {
  readonly title: string;
  readonly date: string;
  readonly size: string;
  readonly fileUrl: string;
}

export interface CampConfig {
  readonly year: string;
  readonly translationKey: string;
  readonly imageFolder: string;
  readonly announcements: readonly AnnouncementItem[];
  readonly postTestImages: readonly string[];
  readonly galleryImages?: readonly string[];
}

export const excellenceCampsData: Record<string, CampConfig> = {
  // ข้อมูลของค่ายปี 2023 (2566)
  "pom-2023": {
    year: "2023",
    translationKey: "pom2023",
    imageFolder: "pom-2023",
    announcements: [
      {
        title: "รายละเอียดโครงการค่าย Pre-Olympics Math 2023",
        date: "15 มีนาคม 2566",
        size: "242 KB",
        fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/pom-2023/รายละเอียดโครงการ.pdf",
      },
      {
        title: "แบบฟอร์มส่งรายชื่อเข้าร่วมโครงการ",
        date: "20 มีนาคม 2566",
        size: "112 KB",
        fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/pom-2023/แบบฟอร์มส่งรายชื่อเข้าร่วมโครงการ.pdf",
      },
      {
        title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าอบรมค่าย Pre-Olympics",
        date: "10 เมษายน 2566",
        size: "135 KB",
        fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/pom-2023/ประกาศรายชื่อผู้มีสิทธิ์เข้าอบรมค่าย-PreOlympics.pdf",
      },
    ],
    postTestImages: [
      "/images/mscd/student-improvement/excellence-match-camp/pom-2023/post-test-1.png",
      "/images/mscd/student-improvement/excellence-match-camp/pom-2023/post-test-2.png",
    ],
    galleryImages: [
      "https://res.cloudinary.com/dfawobcpi/image/upload/v1781834807/picture-1.png",
    ],
  },
  // ข้อมูลของค่ายปี 2024 (2567)
  "pom-2024": {
    year: "2024",
    translationKey: "pom2024",
    imageFolder: "pom-2024",
    announcements: [
      {
        title: "รายละเอียดโครงการค่าย Pre-Olympics Math 2024",
        date: "10 มีนาคม 2567",
        size: "245 KB",
        fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/pom-2024/รายละเอียดโครงการ.pdf",
      },
      {
        title: "รายละเอียดการสมัครสำหรับนักเรียน",
        date: "10 มีนาคม 2567",
        size: "135 KB",
        fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/pom-2024/รายละเอียดการสมัครสำหรับนักเรียน.pdf",
      },
      {
        title: "รายละเอียดการสมัครสำหรับครูผู้ประสานงาน",
        date: "10 มีนาคม 2567",
        size: "128 KB",
        fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/pom-2024/รายละเอียดการสมัครสำหรับครูผู้ประสานงาน.pdf",
      },
      {
        title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าอบรม (40 คน และตัวสำรอง 10 คน)",
        date: "6 พฤษภาคม 2567",
        size: "142 KB",
        fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/pom-2024/ประกาศรายชื่อผู้มีสิทธิ์เข้าอบรม.pdf",
      },
      {
        title: "ประกาศเรียกลำดับสำรองผู้มีสิทธิ์เข้าอบรม",
        date: "12 พฤษภาคม 2567",
        size: "118 KB",
        fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/pom-2024/ประกาศเรียกลำดับสำรองผู้มีสิทธิ์เข้าอบรม.pdf",
      },
      {
        title: "ข้อปฏิบัติสำหรับนักเรียนที่เข้าร่วมโครงการ",
        date: "18 พฤษภาคม 2567",
        size: "130 KB",
        fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/pom-2024/ข้อปฏิบัติสำหรับนักเรียนที่เข้าร่วมโครงการ.pdf",
      },
    ],
    postTestImages: [
      "/images/mscd/student-improvement/excellence-match-camp/pom-2024/post-test-1.png",
    ],
    galleryImages: [],
  },
  // ข้อมูลของค่ายปี 2025 (2568)
  "emc-2025": {
    year: "2025",
    translationKey: "emc2025",
    imageFolder: "emc-2025",
    announcements: [
      {
        title: "รายละเอียดโครงการค่าย Excellence Math Camp 2025",
        date: "1 มีนาคม 2568",
        size: "245 KB",
        fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/emc-2025/รายละเอียดโครงการ.pdf",
      },
      {
        title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าอบรม (รับ 40 คน และสำรอง 10 คน)",
        date: "29 เมษายน 2568",
        size: "145 KB",
        fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/emc-2025/ประกาศรายชื่อผู้มีสิทธิ์เข้าอบรม.pdf",
      },
      {
        title: "ประกาศเรียกลำดับสำรองผู้มีสิทธิ์เข้าอบรม",
        date: "5 พฤษภาคม 2568",
        size: "115 KB",
        fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/emc-2025/ประกาศเรียกลำดับสำรองผู้มีสิทธิ์เข้าอบรม.pdf",
      },
      {
        title: "ข้อปฏิบัติสำหรับนักเรียนที่เข้าร่วมโครงการ",
        date: "10 พฤษภาคม 2568",
        size: "132 KB",
        fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/emc-2025/ข้อปฏิบัติสำหรับนักเรียนที่เข้าร่วมโครงการ.pdf",
      },
    ],
    postTestImages: [
      "/images/mscd/student-improvement/excellence-match-camp/emc-2025/post-test-1.png",
      "/images/mscd/student-improvement/excellence-match-camp/emc-2025/post-test-2.png",
      "/images/mscd/student-improvement/excellence-match-camp/emc-2025/post-test-3.png",
    ],
    galleryImages: [],
  },
  // ข้อมูลของค่ายปี 2026 (2569)
  "emc-2026": {
    year: "2026",
    translationKey: "emc2026",
    imageFolder: "emc-2026",
    announcements: [
      {
        title: "รายละเอียดโครงการค่าย Excellence Math Camp 2026",
        date: "1 มีนาคม 2569",
        size: "248 KB",
        fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/emc-2026/รายละเอียดโครงการ.pdf",
      },
      {
        title: "ประกาศรายชื่อผู้มีสิทธิ์เข้าร่วมโครงการ",
        date: "31 มีนาคม 2569",
        size: "148 KB",
        fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/emc-2026/ประกาศรายชื่อผู้มีสิทธิ์เข้าร่วมโครงการ.pdf",
      },
      {
        title: "ประกาศรายชื่อสำรองนักเรียนที่มีสิทธิ์เข้าร่วมโครงการ",
        date: "5 เมษายน 2569",
        size: "125 KB",
        fileUrl: "/documents/mscd/student-improvement/excellence-match-camp/emc-2026/ประกาศรายชื่อสำรองนักเรียนที่มีสิทธิ์เข้าร่วมโครงการ.pdf",
      },
    ],
    postTestImages: [
      "/images/mscd/student-improvement/excellence-match-camp/emc-2026/post-test-1.png",
      "/images/mscd/student-improvement/excellence-match-camp/emc-2026/post-test-2.png",
      "/images/mscd/student-improvement/excellence-match-camp/emc-2026/post-test-3.png",
    ],
    galleryImages: [],
  },
}
