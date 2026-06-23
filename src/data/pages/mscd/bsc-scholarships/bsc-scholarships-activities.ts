import { StudentProfile } from "./types"
import { farukWaedeProfile } from "./students/faruk-waede"
import { sophounYoukProfile } from "./students/sophoun-youk"
import { inasneeProfile } from "./students/inasnee-rattanawongsawas"
import { fatimahProfile } from "./students/fatimah-mahae"
import { niraniaProfile } from "./students/nirania-waedaya"
import { sufianeeProfile } from "./students/sufianee-abu"

export type { StudentActivity, StudentProfile } from "./types"

export const bscStudentsActivitiesData: Record<string, StudentProfile> = {
  "faruk-waede": farukWaedeProfile,
  "sophoun-youk": sophounYoukProfile,
  "inasnee-rattanawongsawas": inasneeProfile,
  "fatimah-mahae": fatimahProfile,
  "nirania-waedaya": niraniaProfile,
  "sufianee-abu": sufianeeProfile,
}
