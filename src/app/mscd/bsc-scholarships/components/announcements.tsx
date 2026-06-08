"use client"

import { useState } from "react"
import { useT } from "@/components/language-context"
import { FileText, Download, Calendar, Eye, X, AlertTriangle } from "lucide-react"

// ข้อมูลประกาศเอกสาร PDF จำลองของโครงการ
const announcementsData = [
  {
    titleTh: "ประกาศรับสมัครทุนการศึกษา B.Sc. Scholarships ประจำปีการศึกษา 2567",
    titleEn: "B.Sc. Scholarships Application Announcement, Academic Year 2024",
    date: "12 เม.ย. 2567",
    size: "125 KB",
    fileUrl: "/documents/bsc-announcement-1.pdf", // พาธไฟล์ PDF ตัวอย่าง
  },
  {
    titleTh: "ประกาศรายชื่อผู้มีสิทธิ์เข้ารับการสอบสัมภาษณ์ทุนการศึกษา ประจำปีการศึกษา 2567",
    titleEn: "List of Qualified Candidates for Scholarship Interviews, Academic Year 2024",
    date: "03 มิ.ย. 2567",
    size: "98 KB",
    fileUrl: "/documents/bsc-announcement-2.pdf", // พาธไฟล์ PDF ตัวอย่าง
  },
  {
    titleTh: "ประกาศผลการคัดเลือกผู้ได้รับทุนการศึกษา ประจำปีการศึกษา 2567",
    titleEn: "Final Announcement of Scholarship Recipients, Academic Year 2024",
    date: "15 มิ.ย. 2567",
    size: "112 KB",
    fileUrl: "/documents/bsc-announcement-3.pdf", // พาธไฟล์ PDF ตัวอย่าง
  },
]

export function SelectionAnnouncements() {
  const t = useT()
  const [previewPdf, setPreviewPdf] = useState<{ title: string; url: string } | null>(null)

  // ฟังก์ชันช่วยจัดการเปิดอ่านเอกสาร PDF ให้เปิดผ่านตัวอ่านหลักของเบราว์เซอร์โดยตรงในทุกขนาดหน้าจอ
  const handlePreview = (title: string, url: string) => {
    if (url === "#") {
      // หากยังไม่ได้ระบุไฟล์เอกสารจริง (ลิงก์เป็น '#') ให้แสดง Modal เพื่อเตือนความเรียบร้อย
      setPreviewPdf({ title, url })
      return
    }

    // เปิดไฟล์ PDF ในแท็บใหม่ทันที (กดครั้งเดียวเปิดอ่านได้เลย ทั้งบนมือถือและคอมพิวเตอร์)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="py-10 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        {/* หัวข้อส่วนการประกาศสไตล์หน้าแรก */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {t("ประกาศของโครงการ", "Project Announcements")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t(
              "เอกสารประกาศอย่างเป็นทางการและผลการพิจารณาทุนการศึกษาในโครงการ B.Sc. Scholarships",
              "Official announcements and selection results for B.Sc. Scholarships program",
            )}
          </p>
        </div>

        {/* รายการแถวแสดงเอกสารประกาศ */}
        <div className="max-w-4xl mx-auto border border-border/60 rounded-3xl overflow-hidden bg-card shadow-sm">
          <div className="divide-y divide-border/40">
            {announcementsData.map((item) => (
              <div
                key={item.fileUrl}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-secondary/30 transition-colors group"
              >
                {/* ข้อมูลเนื้อหาด้านซ้าย */}
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 group-hover:scale-105 transition-transform">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-primary text-sm sm:text-base leading-snug group-hover:text-accent transition-colors">
                      {t(item.titleTh, item.titleEn)}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {item.date}
                      </span>
                      <span className="bg-secondary px-2 py-0.5 rounded text-[10px] font-bold">
                        PDF ({item.size})
                      </span>
                    </div>
                  </div>
                </div>

                {/* กลุ่มปุ่มดาวน์โหลดหรือเปิดไฟล์ป๊อปอัปด้านขวา */}
                <div className="flex items-center gap-2 self-end sm:self-center">
                  {/* ปุ่มที่ 1: เปิดดูตัวอย่างใน Modal */}
                  <button
                    onClick={() => handlePreview(t(item.titleTh, item.titleEn), item.fileUrl)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-bold text-primary hover:bg-secondary transition-all shadow-sm cursor-pointer"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    {t("เปิดอ่าน", "Read")}
                  </button>

                  {/* ปุ่มที่ 2: ลิงก์ดาวน์โหลดตรงเปิดแท็บใหม่ */}
                  <a
                    href={item.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-bold hover:bg-primary/90 transition-all shadow-sm"
                  >
                    <Download className="h-3.5 w-3.5" />
                    {t("ดาวน์โหลด", "Download")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= กล่องหน้าต่างลอยเปิดอ่านเอกสาร (Popup Modal Overlay) ================= */}
        {previewPdf && (
          // ใช้ button เป็น backdrop overlay เพื่อ accessibility - รองรับ keyboard และ screen reader
          <button
            type="button"
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-fade-in w-full cursor-default"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setPreviewPdf(null)
              }
            }}
            aria-label="Close document preview"
          >
            <div
              className="bg-card border border-border w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col h-[80vh] sm:h-[85vh] animate-scale-in"
            >
              {/* ส่วนหัวของป๊อปอัป - ปรับให้ใช้ relative เพื่อยึดตำแหน่งปุ่มปิดให้อยู่กับที่และไม่โดนดันเบียด */}
              <div className="p-4 border-b border-border/40 flex items-center justify-between bg-card text-foreground relative pr-12">
                <div className="flex items-center gap-3 max-w-[85%]">
                  <div className="h-8 w-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                    <FileText className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="font-bold text-primary text-xs sm:text-sm md:text-base truncate">
                    {previewPdf.title}
                  </h3>
                </div>
                {/* ปุ่มปิด (X) - ปรับเป็น absolute เพื่อความเสถียรบนทุกหน้าจอ */}
                <button
                  onClick={() => setPreviewPdf(null)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-primary transition-all cursor-pointer z-10"
                  aria-label="Close Preview"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* ส่วนเนื้อหาของป๊อปอัป (ตัวอ่าน PDF หรือข้อความแจ้งเตือนจำลอง) */}
              <div className="flex-1 bg-secondary/20 flex flex-col justify-center items-center overflow-y-auto">
                {previewPdf.url === "#" ? (
                  /* กล่องเตือนกรณีเป็นเครื่องหมายสัญลักษณ์จำลอง (#) เพื่อความเรียบร้อยไม่เกิดกรอบขาวเปล่า */
                  <div className="text-center p-8 max-w-md space-y-4">
                    <div className="mx-auto h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 mb-2">
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-primary text-base">
                      {t("ยังไม่ได้ระบุไฟล์เอกสารจริง", "Document File Not Uploaded Yet")}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {t(
                        "ไม่สามารถโหลดหน้าพรีวิวได้ เนื่องจากค่าลิงก์ปัจจุบันเป็น '#' (กรุณาอัปโหลดไฟล์ PDF ของคุณเข้าไปในโปรเจกต์ แล้วเปลี่ยนค่าตัวแปร fileUrl ในโค้ดของหน้าประกาศเป็นพาธไฟล์จริงเพื่อเปิดใช้งานระบบพรีวิว)",
                        "Cannot load preview because the current file link is set to '#'. Please upload your PDF file and change the fileUrl variable to the actual path to enable the PDF viewer.",
                      )}
                    </p>
                  </div>
                ) : (
                  <>
                    {/* บนหน้าจอคอมพิวเตอร์ (Desktop/Tablet) แสดงผล PDF ผ่าน Iframe ตามปกติ */}
                    <div className="hidden md:block w-full h-full">
                      <iframe
                        src={previewPdf.url}
                        className="w-full h-full border-0"
                        title={previewPdf.title}
                      />
                    </div>

                    {/* บนหน้าจอมือถือ (Mobile) ซ่อน Iframe เพื่อแก้ปัญหา iOS/Safari โหลดพัง และแสดงปุ่มนำทางไปหน้าอ่าน PDF ตรงแบบสวยงาม */}
                    <div className="flex md:hidden flex-col justify-center items-center text-center p-6 max-w-sm space-y-6">
                      <div className="h-14 w-14 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 animate-pulse">
                        <FileText className="h-7 w-7" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-bold text-primary text-sm sm:text-base">
                          {t("เอกสารพร้อมเปิดอ่าน", "Document Ready to View")}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed px-4">
                          {t(
                            "เพื่อประสิทธิภาพการอ่านและการซูมขยายเอกสารที่ดีที่สุดบนมือถือระบบจะเปิดไฟล์ PDF ผ่านตัวอ่านหลักของระบบโดยตรง",
                            "For the best viewing and zooming experience on mobile devices, please open the PDF file directly via the button below.",
                          )}
                        </p>
                      </div>

                      <a
                        href={previewPdf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-primary text-primary-foreground py-3 px-6 text-xs font-bold shadow-md hover:bg-primary/90 transition-all cursor-pointer"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        {t("เปิดอ่านเอกสาร (PDF)", "Open Document (PDF)")}
                      </a>
                    </div>
                  </>
                )}
              </div>

              {/* ส่วนท้ายแสดงตัวช่วยผู้ใช้ */}
              <div className="p-3 bg-secondary/30 border-t border-border/40 text-[10px] text-center text-muted-foreground">
                {t(
                  "เอกสารเป็นทางการของโครงการ · สามารถเลือกพิมพ์หรือดาวน์โหลดตัวเต็มจากโปรแกรมเปิดอ่านเบราว์เซอร์ได้ปกติ",
                  "Official project publication · Print or download the full copy using your browser controls.",
                )}
              </div>
            </div>
          </button>
        )}
      </div>
    </section>
  )
}
