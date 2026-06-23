// รวบรวมข้อมูลประวัติและกิจกรรมของนักศึกษาทุน MGSS ตาม Slug
// ดึงข้อมูลจาก Barrel Export เพื่อลดความซ้ำซ้อนของการนำเข้า

import { MgssStudentProfile } from "./types"
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

export type { MgssStudentActivity, MgssStudentProfile } from "./types"

// แมปข้อมูลโปรไฟล์ของนักศึกษาทุกคนด้วย slug เป็น key
export const mgssStudentsActivitiesData: Record<string, MgssStudentProfile> = {
  "saowapak-makphon": saowapakMakphonProfile,
  "phitchayawee-sangjan": phitchayaweeSangjanProfile,
  "panupong-daengpradap": panupongDaengpradapProfile,
  "fatima-hemna": fatimaHemnaProfile,
  "fateehah-korlaeh": fateehahKorlaehProfile,
  "imam-muhyideen-sidiq": imamMuhyideenSidiqProfile,
  "asma-yafad": asmaYafadProfile,
  "palin-raktaow": palinRaktaowProfile,
  "kritapon-chaikan": kritaponChaikanProfile,
  "arbaz-jehan-khan": arbazJehanKhanProfile,
  "pokpong-srimora": pokpongSrimoraProfile,
  "traiwat-intarawong": traiwatIntarawongProfile,
  "krit-kanopthamakun": kritKanopthamakunProfile,
  "anusorn-simuen": anusornSimuenProfile,
}
