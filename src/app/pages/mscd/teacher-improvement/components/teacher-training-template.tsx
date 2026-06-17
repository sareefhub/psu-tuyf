"use client"

import { useT } from "@/components/language-context"
import { Users, MapPin, Gift } from "lucide-react"
import { ProgramDetailTemplate, SharedObjectives, SharedAnnouncements, SharedGallery } from "@/components/program-detail-template"

// อินเตอร์เฟซสำหรับข้อมูลประกาศของโครงการอบรมครูคณิตศาสตร์
export interface TeacherAnnouncementItem {
  readonly title: string;
  readonly date: string;
  readonly size: string;
  readonly fileUrl: string;
}

// พร็อพส์ของคอมโพเนนต์ TeacherTrainingTemplate
interface TeacherTrainingTemplateProps {
  readonly year: string;
  readonly translationKey: string;
  readonly imageFolder: string;
  readonly announcements: readonly TeacherAnnouncementItem[];
  readonly galleryImages?: readonly string[];
}

// 1. แท็บวันเวลาและสถานที่จัดอบรม (Time & Location)
function TeacherTimeLocation({ translationKey }: Readonly<{ translationKey: string }>) {
  const t = useT()

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-3xl px-6">
        <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-xs flex gap-5 hover:border-primary/30 transition-all duration-300">
          <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
            <MapPin className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-primary text-base sm:text-lg">
              {t(`${translationKey}.timeLocationTitle`)}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {t(`${translationKey}.timeLocationDetail`)}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// 2. แท็บกลุ่มเป้าหมายผู้เข้าร่วมโครงการ (Participants)
function TeacherParticipants({ translationKey }: Readonly<{ translationKey: string }>) {
  const t = useT()

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-3xl px-6">
        <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-xs flex gap-5 hover:border-accent/30 transition-all duration-300">
          <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
            <Users className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-primary text-base sm:text-lg">
              {t(`${translationKey}.participantsTitle`)}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {t(`${translationKey}.participantsDetail`)}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// 3. แท็บเงื่อนไขและสิ่งที่ผู้เข้ารับการอบรมจะได้รับ (Benefits & Conditions)
function TeacherBenefits({ translationKey }: Readonly<{ translationKey: string }>) {
  const t = useT()
  const benefits = t(`${translationKey}.benefitsList`, { returnObjects: true }) as string[]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-4xl px-6">
        <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
              <Gift className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-primary text-base sm:text-lg">
              {t(`${translationKey}.benefitsTitle`)}
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {benefits.map((benefit, idx) => (
              <div key={benefit} className="relative p-5 rounded-2xl bg-secondary/30 border border-border/40 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="h-7 w-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 text-xs font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-xs text-foreground/90 leading-relaxed font-semibold">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// 4. คอมโพเนนต์หลักควบคุม Template (TeacherTrainingTemplate Controller)
export function TeacherTrainingTemplate({ year, translationKey, announcements }: TeacherTrainingTemplateProps) {
  // กำหนดโครงร่างแท็บที่จะส่งไปให้ Component ส่วนกลางประมวลผล
  const tabs = [
    {
      id: "objectives",
      labelKey: `${translationKey}.tabs.objectives`,
      component: <SharedObjectives translationKey={translationKey} />,
    },
    {
      id: "schedule",
      labelKey: `${translationKey}.tabs.schedule`,
      component: <TeacherTimeLocation translationKey={translationKey} />,
    },
    {
      id: "participants",
      labelKey: `${translationKey}.tabs.participants`,
      component: <TeacherParticipants translationKey={translationKey} />,
    },
    {
      id: "benefits",
      labelKey: `${translationKey}.tabs.benefits`,
      component: <TeacherBenefits translationKey={translationKey} />,
    },
    {
      id: "announcement",
      labelKey: `${translationKey}.tabs.announcement`,
      component: <SharedAnnouncements translationKey={translationKey} announcements={announcements} />,
    },
    {
      id: "gallery",
      labelKey: `${translationKey}.tabs.gallery`,
      component: <SharedGallery translationKey={translationKey} />,
    },
  ] as const

  return (
    <ProgramDetailTemplate
      year={year}
      translationKey={translationKey}
      overviewDescKeys={["desc1", "desc2"]} // โครงการอบรมครูมีรายละเอียดบทนำ 2 ย่อหน้า
      tabs={tabs}
    />
  )
}
