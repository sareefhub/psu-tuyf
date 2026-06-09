"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-context"
import { FileText, Download, Calendar, Eye, X, AlertTriangle } from "lucide-react"

// ข้อมูลประกาศและดาวน์โหลดแบบฟอร์ม โครงการ MGSS บัณฑิตศึกษา
const announcementsData = {
  th: {
    title: "ประกาศและเอกสารดาวน์โหลด",
    desc: "เอกสารชี้แจง แบบฟอร์มใบสมัคร และเอกสารประกอบการขอรับทุนการศึกษาโครงการ MGSS ระดับบัณฑิตศึกษา",
    read: "อ่านเอกสาร",
    download: "ดาวน์โหลด",
    noPdfTitle: "จำลองการแสดงผลเอกสาร PDF",
    noPdfDesc: "เนื่องจากเป็นข้อมูลจำลองเพื่อสาธิตความพร้อมของระบบ UI ระบบจึงจำลองการเปิดเอกสารผ่านป๊อปอัปนี้ คุณสามารถดูไฟล์จริงได้หลังจากการอัปโหลดขึ้นเซิร์ฟเวอร์",
    pdfReadyTitle: "เอกสารพร้อมสำหรับดูตัวอย่าง",
    pdfReadyDesc: "ระบบตรวจพบการพรีวิวผ่านอุปกรณ์เคลื่อนที่ แนะนำให้กดดาวน์โหลดหรือกดเปิดอ่านในแท็บใหม่เพื่อการอ่านที่สะดวกยิ่งขึ้น",
    pdfOpenBtn: "เปิดอ่านในแท็บใหม่",
    footerHelp: "กดปุ่ม Esc หรือคลิกพื้นที่ว่างรอบกรอบเพื่อปิดหน้าต่างตัวอย่างนี้",
    items: [
      {
        id: "announcement-2023",
        title: "ประกาศรับสมัครทุนการศึกษาระดับบัณฑิตศึกษา (M.Sc. & Ph.D.) ปีการศึกษา 2566",
        date: "15 พ.ค. 2566",
        size: "142 KB",
        fileUrl: "#",
      },
      {
        id: "application-form",
        title: "ใบสมัครขอรับทุนการศึกษาโครงการ MGSS (ระดับปริญญาโท-เอก)",
        date: "15 พ.ค. 2566",
        size: "95 KB",
        fileUrl: "#",
      },
      {
        id: "advisor-nomination",
        title: "แบบฟอร์มเสนอชื่อผู้เข้ารับทุนโดยอาจารย์ที่ปรึกษาวิทยานิพนธ์",
        date: "18 พ.ค. 2566",
        size: "110 KB",
        fileUrl: "#",
      }
    ]
  },
  en: {
    title: "Announcements & Downloads",
    desc: "Official announcements, application forms, and required documents for the MGSS graduate scholarship program",
    read: "Read Document",
    download: "Download",
    noPdfTitle: "Simulated PDF Preview",
    noPdfDesc: "Since this is a simulated document to demonstrate UI capabilities, this pop-up shows a preview placeholder. Actual files will be viewable once uploaded to the server.",
    pdfReadyTitle: "Preview Document Ready",
    pdfReadyDesc: "Mobile device preview detected. We recommend downloading the file or opening it in a new tab for a better reading experience.",
    pdfOpenBtn: "Open in New Tab",
    footerHelp: "Press Esc or click outside the container to close this preview window.",
    items: [
      {
        id: "announcement-2023",
        title: "MGSS Graduate Scholarship Admission Announcement (M.Sc. & Ph.D.) 2023",
        date: "May 15, 2023",
        size: "142 KB",
        fileUrl: "#",
      },
      {
        id: "application-form",
        title: "MGSS Graduate Scholarship Application Form (M.Sc. & Ph.D.)",
        date: "May 15, 2023",
        size: "95 KB",
        fileUrl: "#",
      },
      {
        id: "advisor-nomination",
        title: "Thesis Advisor Recommendation & Nomination Form",
        date: "May 18, 2023",
        size: "110 KB",
        fileUrl: "#",
      }
    ]
  }
};

export function AnnouncementsSection() {
  const { lang } = useLanguage();
  const current = announcementsData[lang] || announcementsData.th;
  const [previewPdf, setPreviewPdf] = useState<{ title: string; url: string } | null>(null);

  useEffect(() => {
    if (!previewPdf) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPreviewPdf(null);
      }
    };

    globalThis.addEventListener("keydown", handleEsc);
    return () => globalThis.removeEventListener("keydown", handleEsc);
  }, [previewPdf]);

  // จัดการเปิดดูเอกสาร PDF
  const handlePreview = (title: string, url: string) => {
    if (url === "#") {
      setPreviewPdf({ title, url });
      return;
    }
    // เปิดไฟล์ PDF ในแท็บใหม่กรณีมีไฟล์จริง
    globalThis.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-10 bg-background animate-fade-in">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อสไตล์หน้าแรก */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {current.title}
          </h2>
          <p className="text-sm text-muted-foreground/80 leading-relaxed">
            {current.desc}
          </p>
        </div>

        {/* ตารางแสดงเอกสาร */}
        <div className="max-w-4xl mx-auto border border-border/60 rounded-3xl overflow-hidden bg-card shadow-xs">
          <div className="divide-y divide-border/40">
            {current.items.map((item) => (
              <div
                key={item.id}
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-secondary/30 transition-colors group"
              >
                {/* ข้อมูลเนื้อหาด้านซ้าย */}
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-primary text-sm sm:text-base leading-snug group-hover:text-accent transition-colors duration-300">
                      {item.title}
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

                {/* กลุ่มปุ่มด้านขวา */}
                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  {/* ปุ่มที่ 1: พรีวิวเอกสาร */}
                  <button
                    onClick={() => handlePreview(item.title, item.fileUrl)}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-background px-4 py-2 text-xs font-bold text-primary hover:bg-secondary transition-all shadow-xs cursor-pointer"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    {current.read}
                  </button>

                  {/* ปุ่มที่ 2: ลิงก์ดาวน์โหลดตรง */}
                  <a
                    href={item.fileUrl}
                    download
                    onClick={(e) => {
                      if (item.fileUrl === "#") {
                        e.preventDefault();
                        handlePreview(item.title, item.fileUrl);
                      }
                    }}
                    className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-bold hover:bg-primary/90 transition-all shadow-xs"
                  >
                    <Download className="h-3.5 w-3.5" />
                    {current.download}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal พรีวิวเอกสาร PDF จำลอง */}
        {previewPdf && (
          <button
            type="button"
            aria-label="Close preview overlay"
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-fade-in w-full cursor-default border-none"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setPreviewPdf(null);
              }
            }}
          >
            <div
              className="bg-card border border-border w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl relative flex flex-col h-[80vh] sm:h-[85vh] animate-scale-in"
            >
              {/* ส่วนหัวของป๊อปอัป */}
              <div className="p-4 border-b border-border/40 flex items-center justify-between bg-card text-foreground relative pr-12">
                <div className="flex items-center gap-3 max-w-[85%]">
                  <div className="h-8 w-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
                    <FileText className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="font-bold text-primary text-xs sm:text-sm md:text-base truncate">
                    {previewPdf.title}
                  </h3>
                </div>
                {/* ปุ่มปิด */}
                <button
                  onClick={() => setPreviewPdf(null)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-primary transition-all cursor-pointer z-10"
                  aria-label="Close Preview"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>

              {/* ส่วนเนื้อหาของป๊อปอัป */}
              <div className="flex-1 bg-secondary/20 flex flex-col justify-center items-center overflow-y-auto">
                {previewPdf.url === "#" ? (
                  <div className="text-center p-8 max-w-md space-y-4">
                    <div className="mx-auto h-12 w-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 mb-2">
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <h4 className="font-bold text-primary text-base">
                      {current.noPdfTitle}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {current.noPdfDesc}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="hidden md:block w-full h-full">
                      <iframe
                        src={previewPdf.url}
                        className="w-full h-full border-0"
                        title={previewPdf.title}
                      />
                    </div>
                    <div className="flex md:hidden flex-col justify-center items-center text-center p-6 max-w-sm space-y-6">
                      <div className="h-14 w-14 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 animate-pulse">
                        <FileText className="h-7 w-7" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-bold text-primary text-sm sm:text-base">
                          {current.pdfReadyTitle}
                        </h4>
                        <p className="text-xs text-muted-foreground leading-relaxed px-4">
                          {current.pdfReadyDesc}
                        </p>
                      </div>
                      <a
                        href={previewPdf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-primary text-primary-foreground py-3 px-6 text-xs font-bold shadow-md hover:bg-primary/90 transition-all cursor-pointer"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        {current.pdfOpenBtn}
                      </a>
                    </div>
                  </>
                )}
              </div>

              {/* ส่วนท้ายแสดงตัวช่วยผู้ใช้ */}
              <div className="p-3 bg-secondary/30 border-t border-border/40 text-[10px] text-center text-muted-foreground">
                {current.footerHelp}
              </div>
            </div>
          </button>
        )}
      </div>
    </section>
  );
}
