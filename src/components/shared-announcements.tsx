"use client"

import { useState, useEffect } from "react"
import { useT } from "@/context/language-context"
import { FileText, Download, Calendar, Eye, X, AlertTriangle } from "lucide-react"

export interface SharedAnnouncementItem {
  readonly title: string;
  readonly date: string;
  readonly size: string;
  readonly fileUrl: string;
}

export function SharedAnnouncements({
  translationKey,
  announcements,
}: Readonly<{
  translationKey: string;
  announcements: readonly SharedAnnouncementItem[];
}>) {
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

  // ค้นหาคีย์หัวข้อหลัก (Title) จากไฟล์คำแปลภาษา i18n
  let displayTitle = t(`${translationKey}.announcements.title`)
  if (!displayTitle || displayTitle === `${translationKey}.announcements.title`) {
    const backupTitle = t(`${translationKey}.announcementTitle`)
    displayTitle = backupTitle && backupTitle !== `${translationKey}.announcementTitle`
      ? backupTitle
      : t("ประกาศโครงการ", "Announcements")
  }

  // ค้นหาคีย์คำบรรยายใต้หัวข้อ (Description/Subtitle) จากไฟล์คำแปลภาษา i18n
  let displaySubtitle = t(`${translationKey}.announcements.desc`)
  if (!displaySubtitle || displaySubtitle === `${translationKey}.announcements.desc`) {
    const backupSubtitle = t(`${translationKey}.announcementDesc`)
    displaySubtitle = backupSubtitle && backupSubtitle !== `${translationKey}.announcementDesc`
      ? backupSubtitle
      : t("เอกสารกำหนดการและประกาศหัวข้อแยกรายโรงเรียนและการอบรม", "Schedules, documents and announcements categorized by schools and training tracks")
  }

  return (
    <section className="py-10 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {displayTitle}
          </h2>
          <p className="text-base text-muted-foreground/80">
            {displaySubtitle}
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
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.date}
                      </span>
                      <span className="bg-secondary px-2 py-0.5 rounded text-xs font-bold">
                        PDF ({item.size})
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <button
                    onClick={() => handlePreview(item.title, item.fileUrl)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-sm font-bold text-primary hover:bg-secondary transition-all shadow-xs cursor-pointer whitespace-nowrap"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    {t("เปิดอ่าน", "Read")}
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
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-bold hover:bg-primary/90 transition-all shadow-xs cursor-pointer whitespace-nowrap"
                  >
                    <Download className="h-3.5 w-3.5" />
                    {t("ดาวน์โหลด", "Download")}
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
              aria-label={t("ปิดหน้าต่างพรีวิวเอกสาร", "Close document preview")}
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
                    {t("ไม่สามารถโหลดไฟล์เอกสารได้", "Unable to load document")}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t("ขณะนี้เอกสารดังกล่าวเป็นเวอร์ชันตัวอย่าง หรือลิงก์การดาวน์โหลดชั่วคราวถูกยกเลิกแล้ว กรุณาติดต่อหน่วยงานผู้รับผิดชอบโครงการเพื่อรับข้อมูลเพิ่มเติม", "This document is currently a preview version, or the temporary download link has expired. Please contact the project coordinator for more details.")}
                  </p>
                </div>
              </div>

              <div className="p-3 bg-secondary/30 border-t border-border/40 text-2xs text-center text-muted-foreground">
                {t("การกดปุ่ม ESC จะเป็นการปิดหน้าต่างนำทางแสดงตัวอย่าง PDF นี้โดยอัตโนมัติ", "Pressing the ESC key will automatically close this PDF preview window.")}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
