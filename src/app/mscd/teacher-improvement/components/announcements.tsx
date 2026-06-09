"use client"

import { useState } from "react"
import { useT } from "@/components/language-context"
import { FileText, Calendar, ChevronRight, AlertCircle, ExternalLink, X } from "lucide-react"

// คีย์รายการประกาศจาก common.json
const announcementKeys = ["item1", "item2"] as const

export function AnnouncementsSection() {
  const t = useT()
  const [selectedDoc, setSelectedDoc] = useState<{ title: string; date: string } | null>(null)

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์พรีเมียม */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("teacherImprovement.announcements.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            {t("teacherImprovement.announcements.desc")}
          </p>
        </div>

        {/* ตารางแสดงรายการประกาศ/เอกสารจดหมายเชิญ */}
        <div className="max-w-4xl mx-auto bg-card border border-border/40 rounded-3xl overflow-hidden shadow-xs">
          <div className="divide-y divide-border/40">
            {announcementKeys.map((key) => {
              const itemTitle = t(`teacherImprovement.announcements.items.${key}.title`)
              const itemDate = t(`teacherImprovement.announcements.items.${key}.date`)

              return (
                <div
                  key={key}
                  className="p-6 hover:bg-muted/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex gap-4 items-start">
                    <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-bold text-primary text-sm sm:text-base leading-snug">
                        {itemTitle}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground/80 font-medium">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{itemDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                    <button
                      onClick={() => setSelectedDoc({ title: itemTitle, date: itemDate })}
                      className="inline-flex items-center gap-1 px-4 py-2 text-xs font-bold text-accent bg-accent/10 hover:bg-accent/15 rounded-full transition-all cursor-pointer"
                    >
                      <span>{t("teacherImprovement.announcements.read")}</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Modal พรีวิวเมื่อกดดูเอกสาร (เลียนแบบความรู้สึกพรีเมียมของหน้า B.Sc. Scholarships) */}
        {selectedDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
            <div className="relative bg-card w-full max-w-2xl rounded-3xl border border-border/80 shadow-2xl p-6 md:p-8 space-y-6 animate-scale-in">
              <button
                onClick={() => setSelectedDoc(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-muted text-muted-foreground hover:text-primary transition-all cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex gap-3.5 items-start pr-8">
                <div className="h-10 w-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-primary leading-snug">
                    {selectedDoc.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    วันที่เผยแพร่: {selectedDoc.date}
                  </p>
                </div>
              </div>

              <hr className="border-border/60" />

              <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10 flex gap-3.5 items-start">
                <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold text-primary">
                    {t("teacherImprovement.announcements.noPdfTitle")}
                  </h4>
                  <p className="text-[11px] text-muted-foreground/90 leading-relaxed font-semibold">
                    {t("teacherImprovement.announcements.noPdfDesc")}
                  </p>
                </div>
              </div>

              <div className="bg-emerald-500/5 rounded-2xl p-5 border border-emerald-500/10 flex gap-3.5 items-start">
                <div className="h-2 w-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold text-emerald-700">
                    {t("teacherImprovement.announcements.pdfReadyTitle")}
                  </h4>
                  <p className="text-[11px] text-muted-foreground/90 leading-relaxed font-semibold">
                    {t("teacherImprovement.announcements.pdfReadyDesc")}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-2">
                <button
                  onClick={() => setSelectedDoc(null)}
                  className="px-5 py-2.5 text-xs font-bold text-muted-foreground hover:text-primary border border-border/80 hover:bg-muted/40 rounded-full transition-all cursor-pointer text-center"
                >
                  ปิดหน้าต่าง
                </button>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-2.5 text-xs font-bold text-white bg-accent hover:bg-accent/90 rounded-full shadow-sm shadow-accent/20 transition-all cursor-pointer text-center"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>{t("teacherImprovement.announcements.pdfOpenBtn")}</span>
                </a>
              </div>

              <p className="text-[10px] text-muted-foreground/70 text-center font-semibold pt-1">
                {t("teacherImprovement.announcements.footerHelp")}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
