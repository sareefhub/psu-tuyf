"use client"

import { useT } from "@/components/language-context"

// คอมโพเนนต์แสดงแบนเนอร์หลักหน้าโครงการพัฒนาชุมชนอย่างยั่งยืนด้วยคณิตศาสตร์ (MSCD)
export function MscdHero() {
  const t = useT()

  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden py-16 lg:py-20">
      {/* เอฟเฟกต์สีไล่เฉดพื้นหลังหรูหรา */}
      <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary/95" />
      
      {/* เพิ่มแสงสะท้อนจาง ๆ ด้านขวา */}
      <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">

        
        <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight sm:leading-tight">
          <span className="inline-block text-accent">MSCD</span>{" "}
          <span className="inline-block text-white">
            {t("programDetails.mscd.title")}
          </span>
        </h1>

        <p className="mt-2 text-xs sm:text-sm font-medium tracking-wide uppercase text-accent/80 italic">
          {t("programDetails.mscd.sub")}
        </p>

        <p className="mt-5 max-w-3xl text-pretty text-sm font-light leading-relaxed text-primary-foreground/80 sm:text-base">
          {t("programs.mscd.desc")}
        </p>
      </div>
    </section>
  )
}
