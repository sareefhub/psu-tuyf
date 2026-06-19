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
  "2023": {
    year: "2023",
    translationKey: "pom2023",
    imageFolder: "pom-2023",
    // ข้อมูลเอกสารดาวน์โหลดและประกาศต่างๆ ประจำปี 2023 (2566)
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
    // รายชื่อรูปภาพคะแนนการทดสอบหลังการอบรม (Post-Test)
    postTestImages: [
      "/images/mscd/student-improvement/excellence-match-camp/pom-2023/post-test-1.png",
      "/images/mscd/student-improvement/excellence-match-camp/pom-2023/post-test-2.png",
    ],
    // รายชื่อรูปภาพบรรยากาศการดำเนินกิจกรรม (รูปภาพ Cloudinary ที่ผู้ใช้เพิ่มเข้ามา)
    galleryImages: [
      "https://res.cloudinary.com/dfawobcpi/image/upload/v1781834807/picture-1.png",
    ],
  },
}
