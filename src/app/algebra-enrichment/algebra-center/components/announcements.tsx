"use client"

import { useT } from "@/components/language-context"
import { FileText, Download, Calendar, Eye } from "lucide-react"

// ข้อมูลจำลองของประกาศเอกสารสำหรับศูนย์พีชคณิต
const announcementsData = [
  {
    key: "item1",
    size: "145 KB",
    fileUrl: "#", // ใช้ # เป็นค่าจำลองไว้จนกว่าจะมีไฟล์เอกสารจริงอัปโหลดเข้ามา
  },
  {
    key: "item2",
    size: "128 KB",
    fileUrl: "#",
  },
]

export function CenterAnnouncements() {
  const t = useT()

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* หัวข้อหลัก */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("algebraCenter.announcements.title")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t("algebraCenter.announcements.desc")}
          </p>
        </div>

        {/* ตารางแสดงรายการประกาศ */}
        <div className="max-w-4xl mx-auto border border-border/60 rounded-3xl overflow-hidden bg-card shadow-sm">
          <div className="divide-y divide-border/40">
            {announcementsData.map((item) => (
              <div
                key={item.key}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-secondary/30 transition-colors group"
              >
                {/* ข้อมูลซ้าย: ไอคอนและข้อความ */}
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 group-hover:scale-105 transition-transform">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-primary text-sm sm:text-base leading-snug group-hover:text-accent transition-colors">
                      {t(`algebraCenter.announcements.items.${item.key}.title`)}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {t(`algebraCenter.announcements.items.${item.key}.date`)}
                      </span>
                      <span className="bg-secondary px-2 py-0.5 rounded text-2xs font-bold">
                        PDF ({item.size})
                      </span>
                    </div>
                  </div>
                </div>

                {/* ปุ่มควบคุมขวา: เปิดอ่าน/ดาวน์โหลด */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  <a
                    href={item.fileUrl}
                    target={item.fileUrl === "#" ? undefined : "_blank"}
                    rel={item.fileUrl === "#" ? undefined : "noopener noreferrer"}
                    onClick={(e) => {
                      if (item.fileUrl === "#") {
                        e.preventDefault()
                        alert(t("algebraCenter.announcements.noPdfDesc"))
                      }
                    }}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-bold text-primary hover:bg-secondary transition-all shadow-sm cursor-pointer"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    {t("algebraCenter.announcements.read")}
                  </a>

                  <a
                    href={item.fileUrl}
                    target={item.fileUrl === "#" ? undefined : "_blank"}
                    rel={item.fileUrl === "#" ? undefined : "noopener noreferrer"}
                    onClick={(e) => {
                      if (item.fileUrl === "#") {
                        e.preventDefault()
                        alert(t("algebraCenter.announcements.noPdfDesc"))
                      }
                    }}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-bold hover:bg-primary/90 transition-all shadow-sm"
                  >
                    <Download className="h-3.5 w-3.5" />
                    {t("algebraCenter.announcements.download")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
