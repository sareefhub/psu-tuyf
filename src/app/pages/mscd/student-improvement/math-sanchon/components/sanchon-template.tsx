"use client"

import { useState, useEffect } from "react"
import { useT } from "@/components/language-context"
import { MainLayout } from "@/layout/main-layout"
import { TabNavigation } from "@/components/tab-navigation"
import { FileText, Download, Calendar, Eye, X, AlertTriangle, Users, GraduationCap, MapPin, Award } from "lucide-react"

export interface SanchonAnnouncementItem {
  readonly title: string;
  readonly date: string;
  readonly size: string;
  readonly fileUrl: string;
}

interface SanchonTemplateProps {
  readonly year: string;
  readonly translationKey: string;
  readonly imageFolder: string;
  readonly announcements: readonly SanchonAnnouncementItem[];
  readonly galleryImages?: readonly string[];
}

// 1. ส่วนแบนเนอร์ Hero ด้านบนสุดของเทมเพลต (สไตล์สีน้ำเงิน-ทอง สงขลานครินทร์)
function SanchonHero({ translationKey }: Readonly<{ translationKey: string }>) {
  const t = useT()

  const titleFull = t(`${translationKey}.title`)
  const title = titleFull.includes(" (") ? titleFull.split(" (")[0] : titleFull

  let subtitle = ""
  if (titleFull.includes(" (")) {
    subtitle = `(${titleFull.split(" (")[1]}`
  }

  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden py-16 lg:py-20 animate-fade-in">
      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary/95" />
      <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight">
          <span className="block text-primary-foreground">
            {title}
          </span>
          {subtitle && (
            <span className="block text-primary-foreground/80 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-2 tracking-wide font-sans">
              {subtitle}
            </span>
          )}
        </h1>

        <p className="mt-6 max-w-3xl text-pretty text-sm font-medium leading-relaxed text-primary-foreground/90 sm:text-base">
          {t(`${translationKey}.subtitle`)}
        </p>
      </div>
    </section>
  )
}

// 2. ส่วนข้อมูลภาพรวมโครงการเบื้องต้น
function SanchonOverview({ translationKey }: Readonly<{ translationKey: string }>) {
  const t = useT()

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="space-y-6">
          <div className="space-y-4">
            {/* นำแถบสัญลักษณ์/สีทองด้านหน้าหัวข้อออกเพื่อความ Clean ตามโจทย์ */}
            <h2 className="text-2xl font-bold text-primary">
              ข้อมูลโครงการเบื้องต้น
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground/90 text-pretty">
              <p>{t(`${translationKey}.desc1`)}</p>
              <p>{t(`${translationKey}.desc2`)}</p>
              <p>{t(`${translationKey}.desc3`)}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// 3. แท็บวัตถุประสงค์หลักของโครงการ (Objectives)
function ObjectivesSection({ translationKey }: Readonly<{ translationKey: string }>) {
  const t = useT()
  const objectives = t(`${translationKey}.objectivesList`, { returnObjects: true }) as string[]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t(`${translationKey}.objectivesTitle`)}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            วัตถุประสงค์ที่มุ่งเน้นเพื่อยกระดับทักษะและการพัฒนาการศึกษาของโรงเรียน
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {objectives.map((obj, index) => (
            <div
              key={obj}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-xs space-y-3 hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex gap-4 items-start">
                <span className="h-7 w-7 rounded-xl bg-accent/10 flex items-center justify-center text-xs font-bold text-accent shrink-0">
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

// 4. ส่วนแสดงข้อมูลการอบรม (วันเวลา สถานที่ และผู้เข้าร่วมโครงการ)
function SanchonInfo({ translationKey }: Readonly<{ translationKey: string }>) {
  const t = useT()

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-6xl px-6">
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

// 5. ส่วนแสดงผลลัพธ์/ผลที่คาดว่าจะได้รับ
function SanchonOutcomes({ translationKey }: Readonly<{ translationKey: string }>) {
  const t = useT()
  const outcomes = t(`${translationKey}.expectedOutcomesList`, { returnObjects: true }) as string[]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-6xl px-6">
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

// 6. ส่วนแสดงคณะทำงาน (วิทยากร และคณะกรรมการดำเนินงาน)
function SanchonStaff({ translationKey }: Readonly<{ translationKey: string }>) {
  const t = useT()
  const speakers = t(`${translationKey}.speakersList`, { returnObjects: true }) as string[]
  const committees = t(`${translationKey}.committeesList`, { returnObjects: true }) as string[]

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        
        {/* รายชื่อวิทยากร */}
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

        {/* รายชื่อคณะกรรมการ */}
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

// 9. แท็บประกาศรายโรงเรียน (Announcements Section)
function SanchonAnnouncements({ translationKey, announcements }: Readonly<{ translationKey: string; announcements: readonly SanchonAnnouncementItem[] }>) {
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
          <p className="text-sm text-muted-foreground/80">
            เอกสารกำหนดการและประกาศหัวข้อแยกจัดอบรมรายโรงเรียน
          </p>
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
          <div
            role="button"
            tabIndex={0}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-fade-in w-full cursor-default outline-none"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setPreviewPdf(null)
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
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
          </div>
        )}
      </div>
    </section>
  )
}

// 10. แท็บภาพกิจกรรม (Gallery)
function SanchonGallery({ translationKey }: Readonly<{ translationKey: string }>) {
  const t = useT()

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t(`${translationKey}.galleryTitle`)}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            ภาพกิจกรรมความประทับใจและการจัดบรรยายสัญจรในแต่ละโรงเรียน
          </p>
        </div>
      </div>
    </section>
  )
}

// 11. คอมโพเนนต์หลักควบคุม Template (SanchonTemplate Controller)
export function SanchonTemplate({ year, translationKey, imageFolder, announcements, galleryImages = [] }: SanchonTemplateProps) {
  const t = useT()
  const [activeTab, setActiveTab] = useState<
    | "objectives"
    | "info"
    | "outcomes"
    | "staff"
    | "announcement"
    | "gallery"
  >("objectives")

  // แสดงรายการแท็บครบถ้วนทั้ง 6 แท็บตามที่ได้รับการรวบรวมข้อมูล
  const tabs = [
    { id: "objectives" as const, key: `${translationKey}.tabs.objectives` },
    { id: "info" as const, key: `${translationKey}.tabs.info` },
    { id: "outcomes" as const, key: `${translationKey}.tabs.outcomes` },
    { id: "staff" as const, key: `${translationKey}.tabs.staff` },
    { id: "announcement" as const, key: `${translationKey}.tabs.announcement` },
    { id: "gallery" as const, key: `${translationKey}.tabs.gallery` },
  ] as const

  return (
    <MainLayout className="animate-fade-in">
      <SanchonHero translationKey={translationKey} />
      <SanchonOverview translationKey={translationKey} />
      
      <TabNavigation
        tabs={tabs.map((tab) => ({ id: tab.id, label: t(tab.key) }))}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="transition-all duration-300 pb-12">
        {activeTab === "objectives" && <ObjectivesSection translationKey={translationKey} />}
        {activeTab === "info" && <SanchonInfo translationKey={translationKey} />}
        {activeTab === "outcomes" && <SanchonOutcomes translationKey={translationKey} />}
        {activeTab === "staff" && <SanchonStaff translationKey={translationKey} />}
        {activeTab === "announcement" && (
          <SanchonAnnouncements translationKey={translationKey} announcements={announcements} />
        )}
        {activeTab === "gallery" && (
          <SanchonGallery translationKey={translationKey} />
        )}
      </div>
    </MainLayout>
  )
}
