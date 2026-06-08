"use client"

import { useT } from "@/components/language-context"
import { FileText, Download, Calendar } from "lucide-react"

// ข้อมูลประกาศเอกสาร PDF จำลองของโครงการ
const announcementsData = [
  {
    titleTh: "ประกาศรับสมัครทุนการศึกษา B.Sc. Scholarships ประจำปีการศึกษา 2567",
    titleEn: "B.Sc. Scholarships Application Announcement, Academic Year 2024",
    date: "12 เม.ย. 2567",
    size: "125 KB",
    fileUrl: "#" // พาธไฟล์ PDF จริงของคุณ เช่น "/documents/announcement-apply-2024.pdf"
  },
  {
    titleTh: "ประกาศรายชื่อผู้มีสิทธิ์เข้ารับการสอบสัมภาษณ์ทุนการศึกษา ประจำปีการศึกษา 2567",
    titleEn: "List of Qualified Candidates for Scholarship Interviews, Academic Year 2024",
    date: "03 มิ.ย. 2567",
    size: "98 KB",
    fileUrl: "#"
  },
  {
    titleTh: "ประกาศผลการคัดเลือกผู้ได้รับทุนการศึกษา ประจำปีการศึกษา 2567",
    titleEn: "Final Announcement of Scholarship Recipients, Academic Year 2024",
    date: "15 มิ.ย. 2567",
    size: "112 KB",
    fileUrl: "#"
  }
]

export function SelectionAnnouncements() {
  const t = useT()

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
              "Official announcements and selection results for B.Sc. Scholarships program"
            )}
          </p>
        </div>

        {/* รายการแถวแสดงเอกสารประกาศ */}
        <div className="max-w-4xl mx-auto border border-border/60 rounded-3xl overflow-hidden bg-card shadow-sm">
          <div className="divide-y divide-border/40">
            {announcementsData.map((item, index) => (
              <div 
                key={index} 
                className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:bg-secondary/30 transition-colors group"
              >
                {/* ข้อมูลเนื้อหาด้านซ้าย */}
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0 group-hover:scale-105 transition-transform">
                    {/* ไอคอนแสดงประเภทไฟล์ PDF */}
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

                {/* ปุ่มดาวน์โหลดหรือเปิดไฟล์ด้านขวา */}
                {/* เมื่อต้องการเชื่อมไฟล์ PDF จริง: สามารถเปลี่ยนเครื่องหมาย "#" ในหัวข้อ fileUrl ด้านบนเป็นพาธไฟล์ของคุณได้ทันที */}
                <a
                  href={item.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-2 text-xs font-bold text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm w-fit self-end sm:self-center"
                >
                  <Download className="h-3.5 w-3.5" />
                  {t("ดาวน์โหลดเอกสาร", "Download PDF")}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
