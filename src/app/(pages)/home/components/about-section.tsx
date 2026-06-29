"use client"

import { useEffect, useState, useRef } from "react"
import { useT } from "@/context/language-context"

// คอมโพเนนต์สำหรับแสดงผลตัวเลขนับขึ้น (Animated Counter) แบบ Clean และสมูท
function Counter({ target, duration = 1500 }: Readonly<{ target: number; duration?: number }>) {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrameId: number | null = null

    // ใช้ Intersection Observer เพื่อเริ่มเล่นแอนิเมชันเมื่อผู้ใช้เลื่อนหน้าจอมาเห็นตัวเลข
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            // ใช้สูตร easeOutQuad เพื่อให้ตัวเลขนับช้าลงอย่างนุ่มนวลตอนใกล้ถึงเป้าหมาย
            const easeProgress = progress * (2 - progress)

            setCount(Math.floor(easeProgress * target))

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animate)
            } else {
              setCount(target)
            }
          }
          animationFrameId = requestAnimationFrame(animate)
          observer.disconnect() // สั่งหยุดตรวจจับเมื่อเริ่มทำงานแล้ว
        }
      },
      { threshold: 0.1 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      observer.disconnect()
    }
  }, [target, duration])

  return <span ref={elementRef}>{count.toLocaleString()}</span>
}

export function AboutSection() {
  const t = useT()

  return (
    <section id="about" className="py-20 scroll-mt-16">
      {/* ปรับขนาดความกว้างสูงสุดให้เป็น max-w-7xl เพื่อให้ขอบซ้ายขวาตรงกับส่วน HeroSection */}
      <div className="mx-auto max-w-7xl px-6">
        <span className="text-sm font-semibold uppercase tracking-wide text-accent">
          {t("about.badge")}
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {t("about.title")}
        </h2>
        <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
          <p>{t("about.desc_1")}</p>
          <p>{t("about.desc_2")}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 divide-y divide-border/60 py-6 sm:grid-cols-3 sm:divide-y-0 sm:divide-x sm:divide-border/60">
          {[
            {
              id: "started",
              value: <Counter target={t(2564, 2021)} />,
              label: t("about.stat_started"),
            },
            {
              id: "projects",
              value: <Counter target={3} />,
              label: t("about.stat_projects"),
            },
            {
              id: "campuses",
              value: <Counter target={2} />,
              label: t("about.stat_campuses"),
            },
          ].map((stat) => (
            <div
              key={stat.id}
              className="flex items-center justify-center gap-5 px-6 py-4 sm:py-2"
            >
              {/* ฝั่งซ้าย: ตัวเลขขนาดใหญ่หนาพิเศษ (ใช้ font-extrabold และขนาด 4xl/5xl ตามดีไซน์) */}
              <div className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary shrink-0 min-w-14 text-right">
                {stat.value}
              </div>
              {/* ฝั่งขวา: ข้อความอธิบายตัวอักษรเล็กชิดซ้าย (นำมาไว้เคียงข้างตัวเลขในแนวราบ) */}
              <div className="text-left text-xs font-semibold text-muted-foreground leading-tight max-w-35">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
