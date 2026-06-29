"use client"

import Image from "next/image"
import { useT } from "@/context/language-context"
import { ProgramDetailTemplate, SharedObjectives, SharedAnnouncements, SharedGallery } from "@/components/program-detail-template"

// อินเตอร์เฟซสำหรับข้อมูลประกาศของโครงการค่ายคณิตศาสตร์เข้ม
export interface AnnouncementItem {
  title: string;
  date: string;
  size: string;
  fileUrl: string;
}

// พร็อพส์ของคอมโพเนนต์ CampTemplate
interface CampTemplateProps {
  readonly year: string;
  readonly translationKey: string;
  readonly imageFolder: string;
  readonly announcements: readonly AnnouncementItem[];
  readonly postTestImages?: readonly string[];
  readonly fallbackGalleryImages: readonly string[];
}

// 1. แท็บตารางดำเนินการตลอดทั้งโครงการ (Schedule Timeline)
function ScheduleTimeline({ translationKey }: Readonly<{ translationKey: string }>) {
  const t = useT()
  const schedule = t(`${translationKey}.scheduleList`, { returnObjects: true }) as Array<{ date: string; detail: string }>

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t(`${translationKey}.tabs.schedule`)}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("ขั้นตอนการสมัครเข้าร่วมโครงการและการดำเนินงานอบรมตลอดหลักสูตร", "Application process and training program operations throughout the course")}
          </p>
        </div>

        <div className="relative border-l-2 border-accent/25 pl-8 ml-4 sm:ml-6 space-y-10">
          {schedule.map((item) => (
            <div key={`${item.date}-${item.detail}`} className="relative">
              {/* จุดกลมนำสายตาบนไทม์ไลน์ จัดตำแหน่งให้อยู่กึ่งกลางเส้นพอดี โดยคำนวณระยะเยื้องซ้าย -left-[45px] */}
              <span className="absolute -left-[45px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-background border-2 border-accent">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <div>
                <span className="text-xs font-bold text-accent uppercase tracking-wider block">
                  {item.date}
                </span>
                <h3 className="text-base font-bold text-primary mt-1 leading-relaxed">
                  {item.detail}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 2. แท็บคะแนน Post-Test สูงสุดของนักเรียนที่เข้าร่วมโครงการ
function PostTestScores({ translationKey, images = [] }: Readonly<{ translationKey: string; images?: readonly string[] }>) {
  const t = useT()
  const visibleCount = images.length

  // เลือกคลาสการจัดหน้ากริดของภาพคะแนนตามจำนวนรูปภาพที่ปรากฏจริง
  const getGridClass = (count: number) => {
    if (count === 1) return "max-w-7xl grid-cols-1"
    if (count === 2) return "max-w-7xl md:grid-cols-2"
    return "max-w-7xl md:grid-cols-3"
  }

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t(`${translationKey}.tabs.postTest`)}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("ตารางคะแนนผลการทดสอบหลังการอบรม (Post-Test) ของนักเรียนที่เข้าร่วมโครงการ", "Post-test score table of participating students")}
          </p>
        </div>

        {visibleCount > 0 && (
          <div className={`grid gap-8 ${getGridClass(visibleCount)} mx-auto`}>
            {images.map((src, index) => (
              <div key={src} className="flex justify-center w-full animate-fade-in">
                <Image 
                  src={src} 
                  alt={t(`ตารางคะแนน Post-Test แผ่นที่ ${index + 1}`, `Post-Test Score Sheet ${index + 1}`)}
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="w-full h-auto object-contain rounded-3xl shadow-sm border border-border/50"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

// 3. คอมโพเนนต์หลักที่ทำหน้าที่ควบคุมการสลับแท็บรายละเอียดค่าย (CampTemplate Controller)
export function CampTemplate({
  year,
  translationKey,
  imageFolder,
  announcements,
  postTestImages = [],
  fallbackGalleryImages,
}: Readonly<CampTemplateProps>) {
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
      component: <ScheduleTimeline translationKey={translationKey} />,
    },
    {
      id: "announcement",
      labelKey: `${translationKey}.tabs.announcement`,
      component: <SharedAnnouncements translationKey={translationKey} announcements={announcements} />,
    },
    {
      id: "postTest",
      labelKey: `${translationKey}.tabs.postTest`,
      component: <PostTestScores translationKey={translationKey} images={postTestImages} />,
    },
    {
      id: "gallery",
      labelKey: `${translationKey}.tabs.gallery`,
      component: (
        <SharedGallery
          translationKey={translationKey}
          imageFolder={`psu-tuyf/mscd/student-improvement/excellence-match-camp/${imageFolder}`}
          images={fallbackGalleryImages}
          sortOrder="asc"
        />
      ),
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
