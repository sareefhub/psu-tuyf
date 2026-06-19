"use client"

import { useState, useEffect, type ReactNode } from "react"
import { useT } from "@/components/language-context"
import { MainLayout } from "@/layout/main-layout"
import { TabNavigation } from "@/components/tab-navigation"
import { FileText, Download, Calendar, Eye, X, AlertTriangle, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export interface SharedAnnouncementItem {
  readonly title: string;
  readonly date: string;
  readonly size: string;
  readonly fileUrl: string;
}

export interface TabConfig {
  readonly id: string;
  readonly labelKey: string;
  readonly component: ReactNode;
}

interface ProgramDetailTemplateProps {
  readonly year: string;
  readonly translationKey: string;
  readonly heroTitleKey?: string;
  readonly heroSubtitleKey?: string;
  readonly overviewDescKeys?: readonly string[];
  readonly tabs: readonly TabConfig[];
  readonly defaultActiveTab?: string;
}

// 1. ส่วนแบนเนอร์ Hero ด้านบนสุดของรายละเอียดโครงการ (ธีมสีน้ำเงิน-ทอง สงขลานครินทร์)
export function SharedHero({ translationKey, titleKey, subtitleKey }: { readonly translationKey: string; readonly titleKey?: string; readonly subtitleKey?: string }) {
  const t = useT()
  const keyTitle = titleKey ?? `${translationKey}.title`
  const keySubtitle = subtitleKey ?? `${translationKey}.subtitle`

  const titleFull = t(keyTitle)
  const title = titleFull.includes(" (") ? titleFull.split(" (")[0] : titleFull

  let inlineSubtitle = ""
  if (titleFull.includes(" (")) {
    inlineSubtitle = `(${titleFull.split(" (")[1]}`
  }

  const descSubtitle = t(keySubtitle)

  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden py-16 lg:py-20 animate-fade-in">
      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary/95" />
      <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight">
          <span className="block text-primary-foreground">
            {title}
          </span>
          {inlineSubtitle && (
            <span className="block text-primary-foreground/80 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-2 tracking-wide font-sans">
              {inlineSubtitle}
            </span>
          )}
        </h1>

        {descSubtitle && descSubtitle !== keySubtitle && (
          <p className="mt-6 max-w-3xl text-pretty text-sm font-medium leading-relaxed text-primary-foreground/90 sm:text-base">
            {descSubtitle}
          </p>
        )}
      </div>
    </section>
  )
}

// 2. ส่วนข้อมูลภาพรวมโครงการเบื้องต้น
export function SharedOverview({ translationKey, descKeys }: { readonly translationKey: string; readonly descKeys?: readonly string[] }) {
  const t = useT()
  const keys = descKeys ?? ["desc1", "desc2", "desc3"]

  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              ข้อมูลโครงการเบื้องต้น
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground/90 text-pretty">
              {keys.map((key) => {
                const fullKey = `${translationKey}.${key}`
                const content = t(fullKey)
                if (content && content !== fullKey) {
                  return <p key={key}>{content}</p>
                }
                return null
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// 3. แท็บวัตถุประสงค์ (Objectives Section)
export function SharedObjectives({ translationKey }: { readonly translationKey: string }) {
  const t = useT()
  const objectives = t(`${translationKey}.objectivesList`, { returnObjects: true }) as string[]
  const title = t(`${translationKey}.objectivesTitle`)

  if (!objectives || !Array.isArray(objectives)) return null

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {title && title !== `${translationKey}.objectivesTitle` ? title : "วัตถุประสงค์หลักของโครงการ"}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            วัตถุประสงค์ที่มุ่งเน้นเพื่อยกระดับทักษะและการพัฒนาการศึกษาของโครงการ
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {objectives.map((obj, index) => (
            <div
              key={obj}
              className="bg-card border border-border/50 rounded-2xl p-6 shadow-xs space-y-3 hover:border-accent/30 transition-all duration-300"
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

// 4. แท็บเอกสารประกาศและดาวน์โหลด PDF (Announcements Section)
export function SharedAnnouncements({ translationKey, announcements }: { readonly translationKey: string; readonly announcements: readonly SharedAnnouncementItem[] }) {
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

  const title = t(`${translationKey}.announcementTitle`)

  return (
    <section className="py-10 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {title && title !== `${translationKey}.announcementTitle` ? title : "ประกาศโครงการ"}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            เอกสารกำหนดการและประกาศหัวข้อแยกรายโรงเรียนและการอบรม
          </p>
        </div>

        <div className="border border-border/60 rounded-3xl overflow-hidden bg-card shadow-xs">
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

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <button
                    onClick={() => handlePreview(item.title, item.fileUrl)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-bold text-primary hover:bg-secondary transition-all shadow-xs cursor-pointer whitespace-nowrap"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    เปิดอ่าน
                  </button>
                  <a
                    href={item.fileUrl}
                    download
                    onClick={(e) => {
                      if (item.fileUrl === "#") {
                        e.preventDefault()
                        handlePreview(item.title, item.fileUrl)
                      }
                    }}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-bold hover:bg-primary/90 transition-all shadow-xs cursor-pointer whitespace-nowrap"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in w-full">
            {/* ปุ่มฉากหลังโปร่งแสงสำหรับคลิกปิดหน้าต่างพรีวิวเอกสาร PDF */}
            <button
              type="button"
              className="absolute inset-0 bg-black/60 backdrop-blur-xs w-full h-full cursor-default border-none outline-none"
              onClick={() => setPreviewPdf(null)}
              aria-label="ปิดหน้าต่างพรีวิวเอกสาร"
            />
            <div className="bg-card border border-border w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col h-[80vh] sm:h-[85vh] animate-scale-in z-10">
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

// 5. แท็บภาพกิจกรรม (Gallery Section) พร้อมระบบแบ่งหน้า (Pagination)
export interface SharedGalleryProps {
  readonly translationKey: string;
  readonly images?: readonly string[];
  readonly itemsPerPage?: number;
}

export function SharedGallery({ translationKey, images = [], itemsPerPage = 9 }: SharedGalleryProps) {
  const t = useT()
  const title = t(`${translationKey}.galleryTitle`)
  const [currentPage, setCurrentPage] = useState(1)

  // รีเซ็ตกลับไปหน้าแรกเมื่อรายการรูปภาพเปลี่ยนแปลง
  useEffect(() => {
    setCurrentPage(1)
  }, [images])

  if (!images || images.length === 0) {
    return (
      <section className="py-10 bg-background animate-fade-in">
        <div className="mx-auto max-w-7xl px-6 text-center text-muted-foreground/60">
          <p>ไม่มีรูปภาพกิจกรรมแสดงผลในขณะนี้</p>
        </div>
      </section>
    )
  }

  // คำนวณการแบ่งหน้า (Pagination)
  const totalPages = Math.ceil(images.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentImages = images.slice(startIndex, startIndex + itemsPerPage)

  function handlePageChange(pageNumber: number) {
    setCurrentPage(pageNumber)
    
    // เลื่อนหน้าจอกลับมาที่ส่วนหัวข้อแกลเลอรีอย่างนุ่มนวล
    const gallerySection = document.getElementById("gallery-section")
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="gallery-section" className="py-10 bg-background animate-fade-in scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {title && title !== `${translationKey}.galleryTitle` ? title : "ภาพกิจกรรม"}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t(`${translationKey}.galleryDesc`, { defaultValue: "ภาพบรรยากาศความประทับใจของการดำเนินกิจกรรมของโครงการ" })}
          </p>
        </div>

        {/* แสดงผลรูปภาพในหน้าปัจจุบัน (Grid Layout) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentImages.map((src, index) => {
            const globalIndex = startIndex + index
            return (
              <div 
                key={src} 
                className="group aspect-4/3 bg-secondary/35 rounded-3xl overflow-hidden border border-border/50 hover:border-accent/40 hover:shadow-xs transition-all duration-300 flex items-center justify-center relative"
              >
                <Image 
                  src={src} 
                  alt={`ภาพกิจกรรมที่ ${globalIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
                />
              </div>
            )
          })}
        </div>

        {/* แผงควบคุมการแบ่งหน้า (Pagination Controls) */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12 animate-fade-in">
            {/* ปุ่มเปลี่ยนไปหน้าก่อนหน้า */}
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-primary transition-all disabled:opacity-40 disabled:hover:bg-card disabled:hover:text-muted-foreground cursor-pointer disabled:cursor-not-allowed"
              aria-label="หน้าก่อนหน้า"
            >
              <ChevronLeft className="h-4.5 w-4.5" />
            </button>

            {/* หมายเลขหน้าเลือกสลับ */}
            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                const isActive = currentPage === page
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20 scale-105"
                        : "border border-border bg-card hover:bg-secondary text-primary"
                    }`}
                  >
                    {page}
                  </button>
                )
              })}
            </div>

            {/* ปุ่มเปลี่ยนไปหน้าถัดไป */}
            <button
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground hover:bg-secondary hover:text-primary transition-all disabled:opacity-40 disabled:hover:bg-card disabled:hover:text-muted-foreground cursor-pointer disabled:cursor-not-allowed"
              aria-label="หน้าถัดไป"
            >
              <ChevronRight className="h-4.5 w-4.5" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

// 6. คอนโทรลเลอร์แม่แบบรวมร่างกลาง (ProgramDetailTemplate Controller)
export function ProgramDetailTemplate({
  year,
  translationKey,
  heroTitleKey,
  heroSubtitleKey,
  overviewDescKeys,
  tabs,
  defaultActiveTab
}: Readonly<ProgramDetailTemplateProps>) {
  const t = useT()
  const firstTabId = tabs[0]?.id ?? ""
  const [activeTab, setActiveTab] = useState<string>(defaultActiveTab ?? firstTabId)

  return (
    <MainLayout className="animate-fade-in">
      <SharedHero translationKey={translationKey} titleKey={heroTitleKey} subtitleKey={heroSubtitleKey} />
      <SharedOverview translationKey={translationKey} descKeys={overviewDescKeys} />
      
      <TabNavigation
        tabs={tabs.map((tab) => ({ id: tab.id, label: t(tab.labelKey) }))}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="transition-all duration-300 pb-12">
        {tabs.map((tab) => {
          if (activeTab === tab.id) {
            return <div key={tab.id}>{tab.component}</div>
          }
          return null
        })}
      </div>
    </MainLayout>
  )
}
