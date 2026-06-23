// ข้อมูลทำเนียบนักศึกษาทุนระดับบัณฑิตศึกษา โครงการ MGSS (M.Sc. & Ph.D.)
// ใช้หลัก Single Source of Truth (SSOT) โดยดึงข้อมูลจากไฟล์โปรไฟล์แต่ละคนโดยตรง
// เพื่อป้องกันความซ้ำซ้อนของข้อมูลและลดโอกาสเกิดความไม่สอดคล้องกัน

import {
  saowapakMakphonProfile,
  phitchayaweeSangjanProfile,
  panupongDaengpradapProfile,
  fatimaHemnaProfile,
  fateehahKorlaehProfile,
  imamMuhyideenSidiqProfile,
  asmaYafadProfile,
  palinRaktaowProfile,
  kritaponChaikanProfile,
  arbazJehanKhanProfile,
  pokpongSrimoraProfile,
  traiwatIntarawongProfile,
  kritKanopthamakunProfile,
  anusornSimuenProfile,
} from "./students"
import type { MgssStudentProfile } from "./types"

// -------------------------------------------------------------------------
// Interface สำหรับโครงสร้างข้อมูลทำเนียบ (ใช้ร่วมกับหน้า UI Listing)
// -------------------------------------------------------------------------

export interface Student {
  readonly name: string;
  readonly role: string;
  readonly campus: string;
  readonly image: string;
  readonly slug: string;
}

export interface StudentYearGroup {
  readonly year: string;
  readonly groupTitle: string;
  readonly students: readonly Student[];
}

export interface StudentDirectoryData {
  readonly th: readonly StudentYearGroup[];
  readonly en: readonly StudentYearGroup[];
}

// -------------------------------------------------------------------------
// ฟังก์ชันช่วยแปลงจากโปรไฟล์หลักเป็นข้อมูลทำเนียบ (Helper)
// -------------------------------------------------------------------------

/** แปลงข้อมูลโปรไฟล์ -> ข้อมูลทำเนียบภาษาไทย */
function toStudentTh(profile: MgssStudentProfile): Student {
  return {
    name: profile.name.th,
    role: profile.role.th,
    campus: profile.campus.th,
    image: profile.image,
    slug: profile.slug,
  }
}

/** แปลงข้อมูลโปรไฟล์ -> ข้อมูลทำเนียบภาษาอังกฤษ */
function toStudentEn(profile: MgssStudentProfile): Student {
  return {
    name: profile.name.en,
    role: profile.role.en,
    campus: profile.campus.en,
    image: profile.image,
    slug: profile.slug,
  }
}

// -------------------------------------------------------------------------
// 1. ข้อมูลนักศึกษา ป.โท วิทยาเขตหาดใหญ่ (M.Sc. Hat Yai)
// -------------------------------------------------------------------------

export const mscHatyaiData: StudentDirectoryData = {
  th: [
    {
      year: "ปีการศึกษา 2567",
      groupTitle: "นักเรียนทุนปี 2024 (STUDENT SCHOLARS 2024)",
      students: [toStudentTh(saowapakMakphonProfile)],
    },
    {
      year: "ปีการศึกษา 2565",
      groupTitle: "นักเรียนทุนปี 2022 (STUDENT SCHOLARS 2022)",
      students: [toStudentTh(phitchayaweeSangjanProfile)],
    },
    {
      year: "ปีการศึกษา 2564",
      groupTitle: "นักเรียนทุนปี 2021 (STUDENT SCHOLARS 2021)",
      students: [toStudentTh(panupongDaengpradapProfile)],
    },
  ],
  en: [
    {
      year: "Academic Year 2024",
      groupTitle: "STUDENT SCHOLARS 2024",
      students: [toStudentEn(saowapakMakphonProfile)],
    },
    {
      year: "Academic Year 2022",
      groupTitle: "STUDENT SCHOLARS 2022",
      students: [toStudentEn(phitchayaweeSangjanProfile)],
    },
    {
      year: "Academic Year 2021",
      groupTitle: "STUDENT SCHOLARS 2021",
      students: [toStudentEn(panupongDaengpradapProfile)],
    },
  ],
}

// -------------------------------------------------------------------------
// 2. ข้อมูลนักศึกษา ป.โท วิทยาเขตปัตตานี (M.Sc. Pattani)
// -------------------------------------------------------------------------

export const mscPattaniData: StudentDirectoryData = {
  th: [
    {
      year: "ปีการศึกษา 2567",
      groupTitle: "นักเรียนทุนปี 2024 (STUDENT SCHOLARS 2024)",
      students: [
        toStudentTh(fatimaHemnaProfile),
        toStudentTh(fateehahKorlaehProfile),
        toStudentTh(imamMuhyideenSidiqProfile),
      ],
    },
    {
      year: "ปีการศึกษา 2565",
      groupTitle: "นักเรียนทุนปี 2022 (STUDENT SCHOLARS 2022)",
      students: [
        toStudentTh(asmaYafadProfile),
        toStudentTh(palinRaktaowProfile),
      ],
    },
    {
      year: "ปีการศึกษา 2564",
      groupTitle: "นักเรียนทุนปี 2021 (STUDENT SCHOLARS 2021)",
      students: [toStudentTh(kritaponChaikanProfile)],
    },
  ],
  en: [
    {
      year: "Academic Year 2024",
      groupTitle: "STUDENT SCHOLARS 2024",
      students: [
        toStudentEn(fatimaHemnaProfile),
        toStudentEn(fateehahKorlaehProfile),
        toStudentEn(imamMuhyideenSidiqProfile),
      ],
    },
    {
      year: "Academic Year 2022",
      groupTitle: "STUDENT SCHOLARS 2022",
      students: [
        toStudentEn(asmaYafadProfile),
        toStudentEn(palinRaktaowProfile),
      ],
    },
    {
      year: "Academic Year 2021",
      groupTitle: "STUDENT SCHOLARS 2021",
      students: [toStudentEn(kritaponChaikanProfile)],
    },
  ],
}

// -------------------------------------------------------------------------
// 3. ข้อมูลนักศึกษา ป.เอก วิทยาเขตหาดใหญ่ (Ph.D. Hat Yai)
// -------------------------------------------------------------------------

export const phdHatyaiData: StudentDirectoryData = {
  th: [
    {
      year: "ปีการศึกษา 2567",
      groupTitle: "นักเรียนทุนปี 2024 (STUDENT SCHOLARS 2024)",
      students: [toStudentTh(arbazJehanKhanProfile)],
    },
    {
      year: "ปีการศึกษา 2566",
      groupTitle: "นักเรียนทุนปี 2023 (STUDENT SCHOLARS 2023)",
      students: [
        toStudentTh(pokpongSrimoraProfile),
        toStudentTh(traiwatIntarawongProfile),
      ],
    },
    {
      year: "ปีการศึกษา 2564",
      groupTitle: "นักเรียนทุนปี 2021 (STUDENT SCHOLARS 2021)",
      students: [
        toStudentTh(kritKanopthamakunProfile),
        toStudentTh(anusornSimuenProfile),
      ],
    },
  ],
  en: [
    {
      year: "Academic Year 2024",
      groupTitle: "STUDENT SCHOLARS 2024",
      students: [toStudentEn(arbazJehanKhanProfile)],
    },
    {
      year: "Academic Year 2023",
      groupTitle: "STUDENT SCHOLARS 2023",
      students: [
        toStudentEn(pokpongSrimoraProfile),
        toStudentEn(traiwatIntarawongProfile),
      ],
    },
    {
      year: "Academic Year 2021",
      groupTitle: "STUDENT SCHOLARS 2021",
      students: [
        toStudentEn(kritKanopthamakunProfile),
        toStudentEn(anusornSimuenProfile),
      ],
    },
  ],
}
