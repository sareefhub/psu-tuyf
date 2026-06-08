"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useT } from "@/components/language-context"

export function HeroSection() {
  const t = useT()

  // คำนวณความสูงขั้นต่ำจาก 100vh ลบด้วยความสูงของ Navbar (h-16 = 4rem) เพื่อให้แสดงผลเต็มจอพอดี
  return (
    <section id="home" className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-primary text-primary-foreground scroll-mt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium text-primary-foreground/90">
            {t("คณะวิทยาศาสตร์และเทคโนโลยี · มอ. ปัตตานี", "Faculty of Science and Technology · PSU Pattani")}
          </span>

          <h1 className="mt-6 text-balance text-5xl font-bold leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
            PSU-TUYF
          </h1>

          <p className="mt-4 text-pretty text-lg font-light leading-relaxed text-primary-foreground/90 sm:text-xl">
            Prince of Songkla University
            <br />
            The TUYF Charitable Trust Fund
          </p>

          <p className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
            {t(
              "โครงการสนับสนุนการศึกษาและการวิจัยด้านคณิตศาสตร์ ภายใต้ความร่วมมือ ระหว่างมหาวิทยาลัยสงขลานครินทร์ และกองทุนการกุศล TUYF",
              "Supporting mathematics education and research through the collaboration between Prince of Songkla University and the TUYF Charitable Trust Fund.",
            )}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              render={<a href="#programs" />}
              nativeButton={false}
              size="lg"
              variant="secondary"
              className="rounded-full px-7 text-base"
            >
              {t("ดูโครงการทั้งหมด", "View All Projects")}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              render={<a href="#about" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="rounded-full border-primary-foreground/30 bg-transparent px-7 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              {t("เกี่ยวกับโครงการ", "About the Project")}
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-primary-foreground/15 shadow-2xl">
            <img
              src="/images/hero-students.png"
              alt={t("นักเรียนและอาจารย์ในโครงการ PSU-TUYF", "Students and faculty in the PSU-TUYF project")}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-accent px-5 py-3 text-accent-foreground shadow-lg sm:block">
            <div className="text-2xl font-bold">{t("2564", "2021")}</div>
            <div className="text-xs font-medium">{t("เริ่มดำเนินโครงการ", "Project launched")}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
