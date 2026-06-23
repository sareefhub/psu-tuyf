import { StudentProfile } from "./types"
import { farukWaedeProfile } from "./students/faruk-waede"
import { sophounYoukProfile } from "./students/sophoun-youk"
import { inasneeProfile } from "./students/inasnee-rattanawongsawas"
import { fatimahProfile } from "./students/fatimah-mahae"
import { niraniaProfile } from "./students/nirania-waedaya"
import { sufianeeProfile } from "./students/sufianee-abu"
import { lizaTheaProfile } from "./students/liza-thea" // นำเข้าประวัติและกิจกรรมของ Liza Thea
import { chhavyChornProfile } from "./students/chhavy-chorn" // นำเข้าประวัติและกิจกรรมของ Chhavy Chorn
import { rusmeeProfile } from "./students/rusmee-binmaming" // นำเข้าประวัติและกิจกรรมของ Rusmee Binmaming
import { affanProfile } from "./students/affan-yahyoh" // นำเข้าประวัติและกิจกรรมของ Affan Yahyoh
import { namoralThyProfile } from "./students/namoral-thy" // นำเข้าประวัติและกิจกรรมของ Namoral Thy
import { layyaMeakProfile } from "./students/layya-meak" // นำเข้าประวัติและกิจกรรมของ Layya Meak

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
