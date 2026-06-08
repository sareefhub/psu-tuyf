"use client"

import { useEffect, useState, useRef } from "react"
import { useT } from "@/components/language-context"

// คอมโพเนนต์สำหรับแสดงผลตัวเลขนับขึ้น (Animated Counter) แบบ Clean และสมูท
function Counter({ target, duration = 1500 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrameId: number

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
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
      observer.disconnect()
    }
  }, [target, duration])

  return <span ref={elementRef}>{count.toLocaleString()}</span>
}

export function AboutSection() {
  const t = useT()

  return (
    <section id="about" className="py-20 scroll-mt-16">
      {/* ปรับขนาดความกว้างสูงสุดให้เป็น max-w-6xl เพื่อให้ขอบซ้ายขวาตรงกับส่วน HeroSection */}
      <div className="mx-auto max-w-6xl px-6">
        <span className="text-sm font-semibold uppercase tracking-wide text-accent">
          {t("เกี่ยวกับโครงการ", "About the Project")}
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          {t(
            "โครงการสนับสนุนจากกองทุนการกุศล PSU-TUYF",
            "Projects Supported by the PSU-TUYF Charitable Trust Fund",
          )}
        </h2>
        <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
          <p>
            {t(
              "ตั้งแต่ปี พ.ศ. 2564 เป็นต้นมา สาขาวิชาคณิตศาสตร์และวิทยาการคอมพิวเตอร์ คณะวิทยาศาสตร์และเทคโนโลยี มหาวิทยาลัยสงขลานครินทร์ วิทยาเขตปัตตานี มีความยินดีเป็นอย่างยิ่งที่ได้รับโอกาสอันดีในการสนับสนุนจากโครงการ PSU-TUYF ซึ่งเป็นโครงการภายใต้ความร่วมมือระหว่างมหาวิทยาลัยสงขลานครินทร์ และ กองทุนการกุศล TUYF (TUYF Charitable Trust Fund)",
              "Since 2021, the Department of Mathematics and Computer Science, Faculty of Science and Technology, Prince of Songkla University, Pattani Campus, has been honored to receive significant support from the PSU-TUYF project — a collaboration between Prince of Songkla University and the TUYF Charitable Trust Fund.",
            )}
          </p>
          <p>
            {t(
              "เพื่อจัดทำโครงการที่มุ่งเน้นการยกระดับคุณภาพการศึกษาและการวิจัยในสาขาคณิตศาสตร์ โดยปัจจุบันสาขาวิชาฯ ได้รับทุนสนับสนุนเพื่อจัดทำโครงการแบ่งออกเป็น 3 โครงการหลัก",
              "These initiatives are dedicated to elevating the quality of education and research in mathematics. The department currently receives funding for three main projects.",
            )}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { 
              value: <Counter target={t(2564, 2021)} />, 
              label: t("ปีที่เริ่มต้น", "Started") 
            },
            { 
              value: <Counter target={3} />, 
              label: t("โครงการหลัก", "Main Projects") 
            },
            { 
              value: <Counter target={2} />, 
              label: t("วิทยาเขต", "Campuses") 
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border bg-card px-5 py-6 text-center"
            >
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
