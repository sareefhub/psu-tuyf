"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number // มิลลิวินาทีสำหรับการหน่วงเวลาแสดงผลแอนิเมชัน
}

export function ScrollReveal({ children, delay = 0 }: Readonly<ScrollRevealProps>) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // การรันโค้ดฝั่งเซิร์ฟเวอร์ (SSR) หรือไม่มี IntersectionObserver ให้แสดงผลทันที
    if (typeof globalThis.window === "undefined" || !("IntersectionObserver" in globalThis)) {
      setIsVisible(true)
      return
    }

    // แยกฟังก์ชันการตรวจจับออกด้านนอกและใช้ loop แบบ for...of เพื่อหลีกเลี่ยงการซ้อนฟังก์ชัน (Function Nesting) เกิน 4 ชั้น
    const handleIntersect = (entries: IntersectionObserverEntry[], obs: IntersectionObserver) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          // ตั้งเวลาหน่วง (Delay) ก่อนเริ่มต้นเล่นแอนิเมชัน
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          obs.unobserve(entry.target) // ปิดการตรวจจับเมื่อแสดงผลแอนิเมชันสำเร็จแล้วเพื่อประสิทธิภาพที่ดี
        }
      }
    }

    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.08, // จะเริ่มทำงานเมื่อพื้นที่ 8% ของเนื้อหาปรากฏใน viewport
      rootMargin: "0px 0px -50px 0px", // ขยับจุดเช็คตำแหน่งจากขอบด้านล่างขึ้นมาเล็กน้อยเพื่อให้ดูเป็นธรรมชาติ
    })

    const currentRef = elementRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay])

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      {children}
    </div>
  )
}
