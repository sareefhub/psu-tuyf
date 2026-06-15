"use client"

import { useState, useEffect } from "react"
import { useT } from "@/components/language-context"
import { MainLayout } from "@/layout/main-layout"
import { TabNavigation } from "@/components/tab-navigation"
import { FileText, Download, Calendar, Eye, X, AlertTriangle, Image as ImageIcon } from "lucide-react"

export interface AnnouncementItem {
  title: string;
  date: string;
  size: string;
  fileUrl: string;
}

interface CampTemplateProps {
  readonly year: string;
  readonly translationKey: string;
  readonly imageFolder: string;
  readonly announcements: readonly AnnouncementItem[];
  readonly postTestImages?: readonly string[];
  readonly galleryImages?: readonly string[];
}

// 1. ส่วนแบนเนอร์ Hero ด้านบนสุดของเทมเพลต (คุมธีมเดียวกับ BscHero)
function PomHero({ year, translationKey }: Readonly<{ year: string; translationKey: string }>) {
  const t = useT()

  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden py-16 lg:py-20 animate-fade-in">
      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary/95" />
      <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight">
          <span className="block text-primary-foreground">
            {t(`${translationKey}.title`)}
          </span>
          <span className="block text-primary-foreground/80 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-2 tracking-wide font-sans">
            {t(`${translationKey}.subtitle`)}
          </span>
        </h1>
      </div>
    </section>
  )
}

// 2. ส่วนข้อมูลภาพรวมโครงการ (คุมธีมเดียวกับ ProjectOverview ใน bsc-scholarships)
function PomOverview({ translationKey }: Readonly<{ translationKey: string }>) {
  const t = useT()

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              ข้อมูลโครงการเบื้องต้น
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground/90 text-pretty">
              {t(`${translationKey}.desc1`)}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground/90 text-pretty">
              {t(`${translationKey}.desc2`)}
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground/90 text-pretty">
              {t(`${translationKey}.desc3`)}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// 3. แท็บวัตถุประสงค์ (Objectives Section)
function ObjectivesSection({ translationKey }: Readonly<{ translationKey: string }>) {
  const t = useT()
  const objectives = t(`${translationKey}.objectivesList`, { returnObjects: true }) as string[]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t(`${translationKey}.tabs.objectives`)}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            วัตถุประสงค์หลักของโครงการอบรมเข้มเพื่อเตรียมความพร้อมสอบคัดเลือก สอวน.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {objectives.map((obj, index) => (
            <div
              key={obj}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm space-y-3 hover:border-accent/30 transition-all"
            >
              <div className="flex gap-3 items-start">
                <span className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-xs font-bold text-accent shrink-0">
                  {index + 1}
                </span>
                <p className="text-xs text-foreground/90 leading-relaxed font-semibold">
                  {obj}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 4. แท็บตารางดำเนินการตลอดทั้งโครงการ (Schedule Timeline)
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
            ขั้นตอนการสมัครเข้าร่วมโครงการและการดำเนินงานอบรมตลอดหลักสูตร
          </p>
        </div>

        <div className="relative border-l-2 border-accent/25 pl-8 ml-4 sm:ml-6 space-y-10">
          {schedule.map((item) => (
            <div key={`${item.date}-${item.detail}`} className="relative">
              <span className="absolute -left-10.25 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-background border-2 border-accent">
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

// 5. แท็บประกาศ (Announcements Section)
function PomAnnouncements({ translationKey, announcements }: Readonly<{ translationKey: string; announcements: readonly AnnouncementItem[] }>) {
  const t = useT()
  const [previewPdf, setPreviewPdf] = useState<{ title: string; url: string } | null>(null)

  useEffect(() => {
    if (!previewPdf) return

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewPdf(null)
      }
    }

    globalThis.addEventListener("keydown", handleEsc)
    return () => globalThis.removeEventListener("keydown", handleEsc)
  }, [previewPdf])

  const handlePreview = (title: string, url: string) => {
    if (url === "#") {
      setPreviewPdf({ title, url })
      return
    }
    globalThis.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-10 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t(`${translationKey}.announcementTitle`)}
          </h2>
        </div>

        <div className="max-w-4xl mx-auto border border-border/60 rounded-3xl overflow-hidden bg-card shadow-xs">
          <div className="divide-y divide-border/40">
            {announcements.map((item) => (
              <div
                key={item.title}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-secondary/30 transition-colors group"
              >
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 group-hover:scale-105 transition-transform">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-primary text-sm sm:text-base leading-snug group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.date}
                      </span>
                      <span className="bg-secondary px-2 py-0.5 rounded text-2xs font-bold">
                        PDF ({item.size})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    onClick={() => handlePreview(item.title, item.fileUrl)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-bold text-primary hover:bg-secondary transition-all shadow-xs cursor-pointer"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    เปิดอ่าน
                  </button>
                  <a
                    href={item.fileUrl}
                    onClick={(e) => {
                      if (item.fileUrl === "#") {
                        e.preventDefault()
                        handlePreview(item.title, item.fileUrl)
                      }
                    }}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-bold hover:bg-primary/90 transition-all shadow-xs"
                  >
                    <Download className="h-3.5 w-3.5" />
                    ดาวน์โหลด
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {previewPdf && (
          <button
            type="button"
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-fade-in w-full cursor-default border-none"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setPreviewPdf(null)
              }
            }}
          >
            <div className="bg-card border border-border w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col h-[80vh] sm:h-[85vh] animate-scale-in">
              <div className="p-4 border-b border-border/40 flex items-center justify-between bg-card text-foreground relative pr-12">
                <div className="flex items-center gap-3 max-w-[85%]">
                  <div className="h-8 w-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                    <FileText className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="font-bold text-primary text-xs sm:text-sm md:text-base truncate">
                    {previewPdf.title}
                  </h3>
                </div>
                <button
                  onClick={() => setPreviewPdf(null)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-primary transition-all cursor-pointer z-10"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              <div className="flex-1 bg-secondary/20 flex flex-col justify-center items-center overflow-y-auto">
                <div className="text-center p-8 max-w-md space-y-4">
                  <div className="mx-auto h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 mb-2">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <h4 className="font-bold text-primary text-base">
                    ไม่สามารถโหลดไฟล์เอกสารได้
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    ขณะนี้เอกสารดังกล่าวเป็นเวอร์ชันตัวอย่าง หรือลิงก์การดาวน์โหลดชั่วคราวถูกยกเลิกแล้ว กรุณาติดต่อหน่วยงานผู้รับผิดชอบโครงการเพื่อรับข้อมูลเพิ่มเติม
                  </p>
                </div>
              </div>

              <div className="p-3 bg-secondary/30 border-t border-border/40 text-2xs text-center text-muted-foreground">
                การกดปุ่ม ESC จะเป็นการปิดหน้าต่างนำทางแสดงตัวอย่าง PDF นี้โดยอัตโนมัติ
              </div>
            </div>
          </button>
        )}
      </div>
    </section>
  )
}

// 6. แท็บคะแนน Post-Test สูงสุด
function PostTestScores({ translationKey, images = [] }: Readonly<{ translationKey: string; images?: readonly string[] }>) {
  const t = useT()

  if (images.length === 0) return null

  const visibleCount = images.length

  // คลาสการจัด Layout ของ Grid ตามจำนวนรูปภาพที่แสดงผลได้จริง
  const getGridClass = (count: number) => {
    if (count === 1) return "max-w-2xl grid-cols-1"
    if (count === 2) return "max-w-5xl md:grid-cols-2"
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
            ตารางคะแนนผลการทดสอบหลังการอบรม (Post-Test) ของนักเรียนที่เข้าร่วมโครงการ
          </p>
        </div>

        {/* ปรับ Grid คลาสอย่างสมดุลตามจำนวนรูปภาพที่มีอยู่จริง */}
        <div className={`grid gap-8 ${getGridClass(visibleCount)} mx-auto`}>
          {images.map((src, index) => (
            <div key={src} className="flex justify-center w-full animate-fade-in">
              <img 
                src={src} 
                alt={`ตารางคะแนน Post-Test แผ่นที่ ${index + 1}`}
                className="w-full h-auto object-contain rounded-3xl shadow-sm border border-border/50"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 7. แท็บภาพกิจกรรม
function ActivitiesGallery({ translationKey, images = [] }: Readonly<{ translationKey: string; images?: readonly string[] }>) {
  const t = useT()

  if (images.length === 0) return null

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t(`${translationKey}.galleryTitle`)}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t(`${translationKey}.galleryDesc`, { defaultValue: `ประมวลภาพกิจกรรมการอบรมเข้มเตรียมสอบ สอวน. วิชาคณิตศาสตร์` })}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {images.map((src, index) => (
            <div 
              key={src} 
              className="group aspect-4/3 bg-secondary/35 rounded-3xl overflow-hidden border border-border/50 hover:border-accent/40 hover:shadow-xs transition-all duration-300 flex items-center justify-center relative"
            >
              <img 
                src={src} 
                alt={`ภาพกิจกรรมที่ ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// 8. คอมโพเนนต์หลักที่ทำหน้าที่รวมศูนย์และประมวลผล (Template Controller)
export function CampTemplate({ year, translationKey, imageFolder, announcements, postTestImages = [], galleryImages = [] }: CampTemplateProps) {
  const t = useT()
  const [activeTab, setActiveTab] = useState<"objectives" | "schedule" | "announcement" | "postTest" | "gallery">("objectives")

  const tabs = [
    { id: "objectives", key: `${translationKey}.tabs.objectives` },
    { id: "schedule", key: `${translationKey}.tabs.schedule` },
    { id: "announcement", key: `${translationKey}.tabs.announcement` },
    ...(postTestImages.length > 0 ? [{ id: "postTest" as const, key: `${translationKey}.tabs.postTest` }] : []),
    ...(galleryImages.length > 0 ? [{ id: "gallery" as const, key: `${translationKey}.tabs.gallery` }] : []),
  ] as const

  return (
    <MainLayout className="animate-fade-in">
      <PomHero year={year} translationKey={translationKey} />
      <PomOverview translationKey={translationKey} />
      
      <TabNavigation
        tabs={tabs.map((tab) => ({ id: tab.id, label: t(tab.key) }))}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="transition-all duration-300 pb-12">
        {activeTab === "objectives" && <ObjectivesSection translationKey={translationKey} />}
        {activeTab === "schedule" && <ScheduleTimeline translationKey={translationKey} />}
        {activeTab === "announcement" && (
          <PomAnnouncements translationKey={translationKey} announcements={announcements} />
        )}
        {activeTab === "postTest" && postTestImages.length > 0 && (
          <PostTestScores translationKey={translationKey} images={postTestImages} />
        )}
        {activeTab === "gallery" && galleryImages.length > 0 && (
          <ActivitiesGallery translationKey={translationKey} images={galleryImages} />
        )}
      </div>
    </MainLayout>
  )
}
