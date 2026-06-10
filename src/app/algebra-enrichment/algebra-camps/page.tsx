"use client"

import { useT } from "@/components/language-context"
import { MainLayout } from "@/layout/main-layout"

// คอมโพเนนต์แสดงหน้าของค่ายเสริมสร้างความเข้มแข็งทางพีชคณิต (Algebra Camps)
// แสดงเฉพาะส่วนหัวข้อ Hero และไม่มีเนื้อหาในตอนนี้ตามข้อกำหนดของผู้ใช้
export default function AlgebraCampsPage() {
  const t = useT()

  return (
    <MainLayout className="animate-fade-in">
      {/* ส่วนแบนเนอร์หลักด้านบน (Hero Section) */}
      <section className="bg-primary text-primary-foreground relative overflow-hidden py-16 lg:py-20">
        <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/95 to-primary/90" />
        
        {/* แสงสะท้อนทรงกลมจางๆ ช่วยเพิ่มมิติให้กับพื้นหลัง */}
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -left-20 -bottom-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <h1 className="text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight">
            <span className="block text-primary-foreground">
              {t("algebraCamps.hero.title", "ค่ายเสริมสร้างความเข้มแข็งทางพีชคณิต")}
            </span>
            <span className="block text-primary-foreground/80 text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-2 tracking-wide font-sans">
              ({t("algebraCamps.hero.subtitle", "Algebra Camps")})
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-pretty text-sm font-light leading-relaxed text-primary-foreground/80 sm:text-base">
            {t("algebraEnrichment.camps.objective", "จัดค่ายระยะสั้น เพื่อถ่ายทอดความรู้พื้นฐานและแนวคิดขั้นสูงให้แก่นักเรียนชั้นมัธยมศึกษาด้านพีชคณิต เช่น ทฤษฎีเซต ตรรกศาสตร์ ทฤษฎีจำนวน เป็นต้น")}
          </p>
        </div>
      </section>

      {/* ส่วนเนื้อหาเปล่า (ยังไม่มีเนื้อหา) */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <div className="rounded-3xl border border-dashed border-border bg-card/50 p-12 backdrop-blur-xs">
          <p className="text-muted-foreground italic text-sm">
            {t("common.under_construction", "อยู่ระหว่างการปรับปรุงเนื้อหา")}
          </p>
        </div>
      </section>
    </MainLayout>
  )
}
