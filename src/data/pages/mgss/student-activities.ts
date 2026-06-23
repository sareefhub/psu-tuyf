import { MgssStudentProfile } from "./types"
import { saowapakMakphonProfile } from "./students/saowapak-makphon"
import { phitchayaweeSangjanProfile } from "./students/phitchayawee-sangjan"
import { panupongDaengpradapProfile } from "./students/panupong-daengpradap"
import { fatimaHemnaProfile } from "./students/fatima-hemna"
import { fateehahKorlaehProfile } from "./students/fateehah-korlaeh"
import { imamMuhyideenSidiqProfile } from "./students/imam-muhyideen-sidiq"
import { asmaYafadProfile } from "./students/asma-yafad"
import { palinRaktaowProfile } from "./students/palin-raktaow"
import { kritaponChaikanProfile } from "./students/kritapon-chaikan"
import { arbazJehanKhanProfile } from "./students/arbaz-jehan-khan"
import { pokpongSrimoraProfile } from "./students/pokpong-srimora"
import { traiwatIntarawongProfile } from "./students/traiwat-intarawong"
import { kritKanopthamakunProfile } from "./students/krit-kanopthamakun"
import { anusornSimuenProfile } from "./students/anusorn-simuen"

export type { MgssStudentActivity, MgssStudentProfile } from "./types"

// รวบรวมข้อมูลประวัติและกิจกรรมของนักศึกษาทุน MGSS ตามรหัส Slug
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
