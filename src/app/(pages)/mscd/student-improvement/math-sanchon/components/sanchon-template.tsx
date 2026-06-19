"use client"

import { useT } from "@/components/language-context"
import { Users, GraduationCap, MapPin, Award } from "lucide-react"
import { ProgramDetailTemplate, SharedObjectives, SharedAnnouncements, SharedGallery } from "@/components/program-detail-template"

// อินเตอร์เฟซสำหรับข้อมูลประกาศของคณิตศาสตร์สัญจร
export interface SanchonAnnouncementItem {
  readonly title: string;
  readonly date: string;
  readonly size: string;
  readonly fileUrl: string;
}

// พร็อพส์ของคอมโพเนนต์ SanchonTemplate
interface SanchonTemplateProps {
  readonly year: string;
  readonly translationKey: string;
  readonly imageFolder: string;
  readonly announcements: readonly SanchonAnnouncementItem[];
  readonly galleryImages?: readonly string[];
}

// 1. ส่วนแสดงข้อมูลการอบรม (วันเวลา สถานที่ และผู้เข้าร่วมโครงการ)
function SanchonInfo({ translationKey }: Readonly<{ translationKey: string }>) {
  const t = useT()

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {/* ข้อมูลการจัดอบรม */}
          <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-xs flex gap-4 hover:border-primary/30 transition-all duration-300">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-primary text-sm sm:text-base">
                {t(`${translationKey}.timeLocationTitle`)}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
                {t(`${translationKey}.timeLocationDetail`)}
              </p>
            </div>
          </div>

          {/* ข้อมูลกลุ่มเป้าหมาย */}
          <div className="bg-card border border-border/50 rounded-3xl p-6 shadow-xs flex gap-4 hover:border-accent/30 transition-all duration-300">
            <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
              <Users className="h-5 w-5" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-primary text-sm sm:text-base">
                {t(`${translationKey}.participantsTitle`)}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">
                {t(`${translationKey}.participantsDetail`)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// 2. ส่วนแสดงผลลัพธ์/ผลที่คาดว่าจะได้รับหลังจบโครงการ
function SanchonOutcomes({ translationKey }: Readonly<{ translationKey: string }>) {
  const t = useT()
  const outcomes = t(`${translationKey}.expectedOutcomesList`, { returnObjects: true }) as string[]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-card border border-border/50 rounded-3xl p-8 shadow-xs space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="font-bold text-primary text-base sm:text-lg">
              {t(`${translationKey}.expectedOutcomesTitle`)}
            </h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {outcomes.map((outcome, idx) => (
              <div key={outcome} className="relative p-5 rounded-2xl bg-secondary/30 border border-border/40 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="h-7 w-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 text-xs font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-xs text-foreground/90 leading-relaxed font-semibold">
                    {outcome}
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

// 3. ส่วนแสดงคณะทำงาน (รายชื่อวิทยากรและคณะกรรมการจัดงาน)
function SanchonStaff({ translationKey }: Readonly<{ translationKey: string }>) {
  const t = useT()
  const speakers = t(`${translationKey}.speakersList`, { returnObjects: true }) as string[]
  const committees = t(`${translationKey}.committeesList`, { returnObjects: true }) as string[]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        
        {/* รายชื่อวิทยากรประจำโครงการ */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-border/80 pb-3">
            <span className="h-5 w-1.5 bg-accent rounded-full" />
            <h3 className="text-lg font-bold text-primary">
              {t(`${translationKey}.speakersTitle`)}
            </h3>
          </div>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {speakers.map((name) => (
              <div key={name} className="p-4 bg-card border border-border/50 rounded-2xl shadow-xs text-center flex flex-col items-center justify-center space-y-2 hover:border-accent/30 transition-all">
                <div className="h-10 w-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold text-primary leading-tight block">{name}</span>
                <span className="text-[10px] text-muted-foreground leading-none">วิทยากรประจำโครงการ</span>
              </div>
            ))}
          </div>
        </div>

        {/* รายชื่อคณะกรรมการดำเนินงาน */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 border-b border-border/80 pb-3">
            <span className="h-5 w-1.5 bg-primary rounded-full" />
            <h3 className="text-lg font-bold text-primary">
              {t(`${translationKey}.committeesTitle`)}
            </h3>
          </div>
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {committees.map((name) => (
              <div key={name} className="p-4 bg-card border border-border/50 rounded-2xl shadow-xs text-center flex flex-col items-center justify-center space-y-2 hover:border-primary/30 transition-all">
                <div className="h-10 w-10 rounded-full bg-accent/5 flex items-center justify-center text-accent">
                  <Users className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold text-primary leading-tight block">{name}</span>
                <span className="text-[10px] text-muted-foreground leading-none">คณะกรรมการดำเนินงาน</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

// 4. คอมโพเนนต์หลักควบคุม Template (SanchonTemplate Controller)
export function SanchonTemplate({ year, translationKey, announcements, galleryImages = [] }: SanchonTemplateProps) {
  // กำหนดโครงร่างแท็บที่จะส่งไปให้ Component ส่วนกลางประมวลผล
  const tabs = [
    {
      id: "objectives",
      labelKey: `${translationKey}.tabs.objectives`,
      component: <SharedObjectives translationKey={translationKey} />,
    },
    {
      id: "info",
      labelKey: `${translationKey}.tabs.info`,
      component: <SanchonInfo translationKey={translationKey} />,
    },
    {
      id: "outcomes",
      labelKey: `${translationKey}.tabs.outcomes`,
      component: <SanchonOutcomes translationKey={translationKey} />,
    },
    {
      id: "staff",
      labelKey: `${translationKey}.tabs.staff`,
      component: <SanchonStaff translationKey={translationKey} />,
    },
    {
      id: "announcement",
      labelKey: `${translationKey}.tabs.announcement`,
      component: <SharedAnnouncements translationKey={translationKey} announcements={announcements} />,
    },
    {
      id: "gallery",
      labelKey: `${translationKey}.tabs.gallery`,
      component: <SharedGallery translationKey={translationKey} images={galleryImages} />,
    },
  ] as const

  return (
    <ProgramDetailTemplate
      year={year}
      translationKey={translationKey}
      tabs={tabs}
    />
  )
}
