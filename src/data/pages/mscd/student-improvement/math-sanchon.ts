// ข้อมูลรายละเอียดของโครงการคณิตศาสตร์สัญจร (Math Sanchon)
// เก็บไว้ที่นี่เพื่อความเป็น Clean Code และง่ายต่อการปรับปรุงข้อมูลในอนาคต โดยไม่ต้องแก้ไขตัวไฟล์ UI

import type { SanchonConfig } from "./types"

export const sanchonCampsData: Record<string, SanchonConfig> = {
  // ข้อมูลโครงการปี 2023 (2566)
  "ms-2023": {
    year: "2023",
    translationKey: "ms2023",
    imageFolder: "ms-2023",
    announcements: [
      {
        title: "ประชาสัมพันธ์โครงการอบรมคณิตศาสตร์สัญจร 2566",
        date: "14 กรกฎาคม 2566",
        size: "185 KB",
        fileUrl: "/documents/mscd/student-improvement/match-sanchon/ms-2023/ประชาสัมพันธ์โครงการอบรมคณิตศาสตร์สัญจร-2566.pdf",
      },
    ],
    galleryImages: [],
  },
  // ข้อมูลโครงการปี 2024 (2567)
  "ms-2024": {
    year: "2024",
    translationKey: "ms2024",
    imageFolder: "ms-2024",
    announcements: [
      {
        title: "ประชาสัมพันธ์โครงการอบรมคณิตศาสตร์สัญจร 2567",
        date: "กรกฎาคม 2567",
        size: "192 KB",
        fileUrl: "/documents/mscd/student-improvement/match-sanchon/ms-2024/ประชาสัมพันธ์โครงการอบรมคณิตศาสตร์สัญจร-2567.pdf",
      },
    ],
    galleryImages: [],
  },
  // ข้อมูลโครงการปี 2025 (2568)
  "ms-2025": {
    year: "2025",
    translationKey: "ms2025",
    imageFolder: "ms-2025",
    announcements: [
      {
        title: "ประชาสัมพันธ์โครงการอบรมคณิตศาสตร์สัญจร 2568",
        date: "กรกฎาคม 2568",
        size: "188 KB",
        fileUrl: "/documents/mscd/student-improvement/match-sanchon/ms-2025/ประชาสัมพันธ์โครงการอบรมคณิตศาสตร์สัญจร-2568.pdf",
      },
    ],
    galleryImages: [],
  },
}
