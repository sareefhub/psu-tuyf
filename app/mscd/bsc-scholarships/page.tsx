"use client"

import { LanguageProvider, useT } from "@/components/language-context"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Check, Calendar, Award, FileText, ArrowLeft } from "lucide-react"

// คอมโพเนนต์แสดงผลหน้าข้อมูลทุนการศึกษาปริญญาตรี (B.Sc. Scholarships)
function BscScholarshipsContent() {
  const t = useT()

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* แท็บเมนูด้านบน */}
      <SiteHeader />

      <main className="flex-1">
        {/* ส่วนแบนเนอร์ด้านบนสุด (Hero Section) */}
        <section className="bg-primary text-primary-foreground relative overflow-hidden py-16 lg:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/95" />
          <div className="mx-auto max-w-6xl px-6 relative z-10">
            {/* ปุ่มย้อนกลับไปหน้าหลัก */}
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/75 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              {t("กลับสู่หน้าหลัก", "Back to Home")}
            </a>
            
            <div className="mb-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium text-primary-foreground/90">
                MSCD · Project 01
              </span>
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t("ทุนการศึกษาระดับปริญญาตรี (B.Sc. Scholarships)", "B.Sc. Scholarships (Undergraduate)")}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base font-light leading-relaxed text-primary-foreground/80 sm:text-lg">
              {t(
                "มอบโอกาสทางการศึกษาแก่นักศึกษาระดับปริญญาตรีในสาขาคณิตศาสตร์ เพื่อส่งเสริมการพัฒนาบุคคลที่มีศักยภาพสูงด้านคณิตศาสตร์และรองรับเป้าหมายการพัฒนาชุมชนอย่างยั่งยืน",
                "Providing educational opportunities for undergraduate mathematics students to nurture high-potential individuals in mathematics, supporting sustainable community development goals."
              )}
            </p>
          </div>
        </section>

        {/* ส่วนรายละเอียดทุนและคุณสมบัติ (Details and Eligibility Section) */}
        <section className="py-16 bg-secondary/20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              
              {/* การ์ดสิทธิ์ประโยชน์ที่จะได้รับ */}
              <div className="bg-card border border-border/60 rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <Award className="h-5 w-5" />
                    </div>
                    <h2 className="text-xl font-bold text-primary">
                      {t("สิทธิ์ประโยชน์ที่จะได้รับ", "Scholarship Benefits")}
                    </h2>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-6">
                    {t(
                      "ทุนการศึกษานี้สนับสนุนโดยกองทุนการกุศล TUYF ครอบคลุมสิทธิประโยชน์รอบด้าน เพื่อให้นักศึกษาทุ่มเทกับการเรียนได้อย่างเต็มประสิทธิภาพ",
                      "Fully supported by the TUYF Charitable Trust Fund, providing comprehensive benefits for students to focus entirely on their studies."
                    )}
                  </p>

                  <ul className="space-y-4">
                    {[
                      {
                        titleTh: "การสนับสนุนค่าธรรมเนียมการศึกษา",
                        titleEn: "Tuition Fee Support",
                        descTh: "ครอบคลุมค่าเล่าเรียนและค่าธรรมเนียมการศึกษาตลอดปีการศึกษาตามจริง",
                        descEn: "Covers all tuition fees and registration fees throughout the academic year."
                      },
                      {
                        titleTh: "เงินสนับสนุนค่าครองชีพรายเดือน",
                        titleEn: "Monthly Stipend",
                        descTh: "ช่วยค่าครองชีพรายเดือนเพื่อช่วยบรรเทาภาระค่าใช้จ่ายของนักศึกษาระหว่างศึกษา",
                        descEn: "Provides monthly allowance to cover students' personal and living expenses."
                      },
                      {
                        titleTh: "การเข้าร่วมสัมมนาและฝึกอบรมทางวิชาการ",
                        titleEn: "Academic Camps & Seminars",
                        descTh: "โอกาสเข้าร่วมกิจกรรมค่ายพัฒนาทักษะ กิจกรรมวิชาการ และงานวิจัยร่วมกับเครือข่ายของโครงการ",
                        descEn: "Opportunities to join skill development camps, academic seminars, and collaborative research networks."
                      }
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/15 text-accent">
                          <Check className="h-3 w-3" />
                        </span>
                        <div>
                          <h3 className="font-semibold text-foreground text-sm">
                            {t(item.titleTh, item.titleEn)}
                          </h3>
                          <p className="text-xs text-muted-foreground/80 mt-1">
                            {t(item.descTh, item.descEn)}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* การ์ดคุณสมบัติผู้สมัครขอรับทุน */}
              <div className="bg-card border border-border/60 rounded-3xl p-8 sm:p-10 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-primary">
                    {t("คุณสมบัติผู้สมัครขอรับทุน", "Eligibility Criteria")}
                  </h2>
                </div>

                <p className="text-sm text-muted-foreground mb-6">
                  {t(
                    "ผู้ที่จะได้รับการพิจารณาเสนอชื่อเพื่อรับทุนการศึกษา จะต้องมีคุณสมบัติดังต่อไปนี้",
                    "To be considered for the scholarship, applicants must meet the following criteria:"
                  )}
                </p>

                <div className="space-y-4">
                  {[
                    {
                      labelTh: "กำลังศึกษาระดับปริญญาตรี ชั้นปีที่ 1-4 สาขาวิชาคณิตศาสตร์ คณะวิทยาศาสตร์และเทคโนโลยี ม.อ. ปัตตานี",
                      labelEn: "Enrolled as an undergraduate student (Years 1-4) in Mathematics, Faculty of Science and Technology, PSU Pattani"
                    },
                    {
                      labelTh: "มีเกรดเฉลี่ยสะสม (GPAX) ไม่ต่ำกว่า 2.75 และมีผลการเรียนวิชาเฉพาะด้านคณิตศาสตร์ในเกณฑ์ดี",
                      labelEn: "Cumulative GPAX of at least 2.75, with good academic performance in mathematics courses"
                    },
                    {
                      labelTh: "มีความประพฤติดี ตั้งใจศึกษาเล่าเรียน และยินดีมีส่วนร่วมในกิจกรรมบริการสังคม",
                      labelEn: "Good conduct, dedicated to studies, and willing to participate in community services"
                    },
                    {
                      labelTh: "พร้อมเข้าร่วมโครงการพัฒนาและกิจกรรมวิชาการต่าง ๆ ที่ทางโครงการ PSU-TUYF จัดขึ้น",
                      labelEn: "Ready to participate in academic development and activities organized by PSU-TUYF"
                    }
                  ].map((req, index) => (
                    <div key={index} className="flex gap-3 items-start border-b border-border/40 pb-3 last:border-b-0 last:pb-0">
                      <span className="text-accent font-semibold text-sm">0{index + 1}.</span>
                      <p className="text-sm text-foreground/95">
                        {t(req.labelTh, req.labelEn)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* กำหนดการคัดเลือก (Timeline Section) */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Calendar className="h-5 w-5 text-accent" />
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">
                  {t("ปฏิทินและขั้นตอนการรับทุน", "Application Timeline")}
                </h2>
              </div>
              <p className="text-sm text-muted-foreground/80">
                {t("ขั้นตอนดำเนินการรับสมัครและพิจารณาคัดเลือกผู้ได้รับทุนการศึกษา", "Key phases of the application, review, and selection process.")}
              </p>
            </div>

            {/* เส้นกำหนดเวลา (Vertical Timeline) */}
            <div className="relative border-l-2 border-accent/25 pl-8 ml-4 sm:ml-6 space-y-10">
              {[
                {
                  dateTh: "เมษายน - พฤษภาคม",
                  dateEn: "April - May",
                  titleTh: "รับสมัครและยื่นเอกสารการสมัคร",
                  titleEn: "Application & Document Submission",
                  descTh: "ส่งใบสมัครขอรับทุนตามแบบฟอร์มที่ระบุ พร้อมแนบใบรายงานผลการศึกษา (Transcript) และเอกสารแนะนำตัว",
                  descEn: "Submit the scholarship application form along with latest academic transcripts and personal profile."
                },
                {
                  dateTh: "ต้นเดือนมิถุนายน",
                  dateEn: "Early June",
                  titleTh: "การสอบสัมภาษณ์และพิจารณาคัดเลือก",
                  titleEn: "Interview & Review Phase",
                  descTh: "ประกาศรายชื่อผู้มีสิทธิ์เข้ารับการสัมภาษณ์ และสอบสัมภาษณ์โดยคณะกรรมการผู้ทรงคุณวุฒิของโครงการ",
                  descEn: "List of qualified candidates announced, followed by interviews with the project selection committee."
                },
                {
                  dateTh: "กลางเดือนมิถุนายน",
                  dateEn: "Mid-June",
                  titleTh: "ประกาศรายชื่อผู้ได้รับทุนและปฐมนิเทศ",
                  titleEn: "Final Announcement & Orientation",
                  descTh: "ประกาศผลผู้ผ่านการคัดเลือกเข้ารับทุน และเข้าร่วมปฐมนิเทศผู้ได้รับทุนประจำปีการศึกษา",
                  descEn: "Announcement of scholarship recipients followed by the annual scholarship orientation."
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  {/* ปุ่มวงกลมบนเส้น Timeline */}
                  <span className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-background border-2 border-accent">
                    <span className="h-2 w-2 rounded-full bg-accent" />
                  </span>
                  
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-wider block">
                      {t(step.dateTh, step.dateEn)}
                    </span>
                    <h3 className="text-lg font-bold text-primary mt-1">
                      {t(step.titleTh, step.titleEn)}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {t(step.descTh, step.descEn)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ส่วนติดต่อ/ลิงก์การสมัคร (CTA Section) */}
        <section className="bg-primary text-primary-foreground py-16 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 to-primary" />
          <div className="max-w-2xl mx-auto px-6 relative z-10 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-white mb-4 sm:text-3xl">
              {t("ต้องการสมัครรับทุนการศึกษา?", "Ready to Apply?")}
            </h2>
            <p className="text-sm text-primary-foreground/85 leading-relaxed mb-8 max-w-md">
              {t(
                "หากคุณมีคุณสมบัติครบถ้วนและพร้อมพัฒนาทักษะด้านคณิตศาสตร์ไปกับโครงการของเรา สามารถกดส่งใบสมัครผ่านระบบออนไลน์ได้ด้านล่าง",
                "If you meet the criteria and are ready to advance your mathematical skills, submit your application online below."
              )}
            </p>
            {/* กลุ่มปุ่มสมัครและติดต่อ */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none justify-center">
              <Button
                render={<a href="https://forms.gle" target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto rounded-full px-8 font-semibold"
              >
                {t("ส่งใบสมัครรับทุน", "Submit Application")}
              </Button>
              <Button
                render={<a href="#footer" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-full border-primary-foreground/30 bg-transparent px-8 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                {t("ติดต่อสอบถามรายละเอียด", "Inquire Details")}
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* แท็บส่วนท้ายของเว็บไซต์ */}
      <SiteFooter />

      {/* ปุ่มเลื่อนกลับขึ้นด้านบน */}
      <ScrollToTop />
    </div>
  )
}

export default function BscScholarshipsPage() {
  return (
    <LanguageProvider>
      <BscScholarshipsContent />
    </LanguageProvider>
  )
}
