import { StudentProfile } from "./types"
import {
  farukWaedeProfile,
  sophounYoukProfile,
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

export type { StudentActivity, StudentProfile } from "./types"

// รวบรวมข้อมูลประวัติและกิจกรรมของนักเรียนทุน ป.ตรี ตาม Slug
export const bscStudentsActivitiesData: Record<string, StudentProfile> = {
  "faruk-waede": farukWaedeProfile,
  "sophoun-youk": sophounYoukProfile,
  "inasnee-rattanawongsawas": inasneeProfile,
  "fatimah-mahae": fatimahProfile,
  "nirania-waedaya": niraniaProfile,
  "sufianee-abu": sufianeeProfile,
  "liza-thea": lizaTheaProfile,
  "chhavy-chorn": chhavyChornProfile,
  "rusmee-binmaming": rusmeeProfile,
  "affan-yahyoh": affanProfile,
  "namoral-thy": namoralThyProfile,
  "layya-meak": layyaMeakProfile,
}
