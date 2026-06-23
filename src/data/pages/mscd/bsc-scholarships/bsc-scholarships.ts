// ข้อมูลของทุนการศึกษาระดับปริญญาตรี (B.Sc. Scholarships)
// ประกอบไปด้วยข้อมูลประกาศ PDF และรายชื่อนักเรียนทุน เพื่อความสะอาดเรียบร้อยของหน้า UI
// ใช้หลัก Single Source of Truth (SSOT) โดยดึงข้อมูลจากไฟล์โปรไฟล์นักศึกษาโดยตรง

import { StudentProfile } from "./types"
import {
  sophounYoukProfile,
  farukWaedeProfile,
  inasneeProfile,
  fatimahProfile,
  niraniaProfile,
  sufianeeProfile,
  lizaTheaProfile,
  chhavyChornProfile,
  rusmeeProfile,
  affanProfile,
  namoralThyProfile,
  layyaMeakProfile,
} from "./students"

export interface BscStudent {
  readonly name: string;
  readonly studentKey: string;
  readonly image: string;
  readonly slug: string;
}

export interface BscStudentGroup {
  readonly groupKey: string;
  readonly students: readonly BscStudent[];
}

export interface BscStudentYearGroup {
  readonly yearKey: string;
  readonly groups: readonly BscStudentGroup[];
}

export interface BscAnnouncementItem {
  readonly key: string;
  readonly size: string;
  readonly fileUrl: string;
}

/**
 * ฟังก์ชันช่วยแปลงข้อมูลโปรไฟล์จริง เป็นข้อมูลสำหรับหน้าทำเนียบ ป.ตรี (SSOT)
 */
function toBscStudent(profile: StudentProfile, studentKey: string, namePrefix?: string): BscStudent {
  return {
    name: namePrefix ? `${namePrefix}${profile.name.en}` : profile.name.en,
    studentKey,
    image: profile.image,
    slug: profile.slug,
  }
}

// 1. ข้อมูลทำเนียบรายชื่อนักเรียนทุน ป.ตรี (SSOT)
export const bscDirectoryData: readonly BscStudentYearGroup[] = [
  {
    yearKey: "y2566",
    groups: [
      {
        groupKey: "g1",
        students: [
          toBscStudent(sophounYoukProfile, "s1", "Miss "),
        ],
      },
    ],
  },
  {
    yearKey: "y2565",
    groups: [
      {
        groupKey: "g1",
        students: [
          toBscStudent(farukWaedeProfile, "s1", "Mr. "),
          toBscStudent(inasneeProfile, "s2", "Miss "),
          toBscStudent(fatimahProfile, "s3", "Miss "),
          toBscStudent(niraniaProfile, "s4", "Miss "),
          toBscStudent(sufianeeProfile, "s5", "Miss "),
        ],
      },
      {
        groupKey: "g2",
        students: [
          toBscStudent(lizaTheaProfile, "s1", "Miss "),
          toBscStudent(chhavyChornProfile, "s2", "Mr. "),
        ],
      },
    ],
  },
  {
    yearKey: "y2564",
    groups: [
      {
        groupKey: "g1",
        students: [
          toBscStudent(rusmeeProfile, "s1", "Miss "),
          toBscStudent(affanProfile, "s2", "Mr. "),
        ],
      },
      {
        groupKey: "g2",
        students: [
          toBscStudent(namoralThyProfile, "s1", "Mr. "),
          toBscStudent(layyaMeakProfile, "s2", "Miss "),
        ],
      },
    ],
  },
]

// 2. ข้อมูลเอกสารดาวน์โหลดและประกาศ PDF ทุน ป.ตรี
export const bscAnnouncementsData: readonly BscAnnouncementItem[] = [
  {
    key: "item1",
    size: "260 KB",
    fileUrl: "/documents/mscd/bsc-scholarships/ประกาศรับสมัครทุนการศึกษา-2565-รอบที่2.pdf",
  },
  {
    key: "item2",
    size: "235 KB",
    fileUrl: "/documents/mscd/bsc-scholarships/ประกาศรับสมัครทุนการศึกษา-2565.pdf",
  },
  {
    key: "item3",
    size: "148 KB",
    fileUrl: "/documents/mscd/bsc-scholarships/ประกาศผลการคัดเลือกนักเรียนเพื่อรับทุนการศึกษา-2565.pdf",
  },
  {
    key: "item4",
    size: "240 KB",
    fileUrl: "/documents/mscd/bsc-scholarships/ประกาศรับสมัครทุนการศึกษา-2564.pdf",
  },
  {
    key: "item5",
    size: "145 KB",
    fileUrl: "/documents/mscd/bsc-scholarships/ประกาศผลการคัดเลือกนักเรียนเพื่อรับทุนการศึกษา-2564.pdf",
  },
]
