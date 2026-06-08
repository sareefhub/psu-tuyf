"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

/**
 * คอมโพเนนต์ ScrollToTop: ปุ่มสำหรับเลื่อนขึ้นด้านบนสุดของหน้าเว็บ
 * พร้อมวงแหวนแสดงสถานะความก้าวหน้าของการสกรอลล์ (Scroll Progress Ring)
 */
export function ScrollToTop() {
  // สถานะการมองเห็นของปุ่ม (จะแสดงเมื่อผู้ใช้เลื่อนหน้าจอลงมาเกิน 300px)
  const [isVisible, setIsVisible] = useState(false)
  // เปอร์เซ็นต์การเลื่อนหน้าจอปัจจุบัน (0 - 100)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // 1. คำนวณเปอร์เซ็นต์การเลื่อนหน้าจอ
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100
        setScrollProgress(progress)
      } else {
        setScrollProgress(0)
      }

      // 2. ตรวจสอบระยะเลื่อนเพื่อแสดงหรือซ่อนปุ่ม (แสดงเมื่อสกรอลล์ลงมา > 300px)
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // เพิ่ม Scroll Event Listener เมื่อ Component Mount
    window.addEventListener("scroll", handleScroll)
    // เรียกทำงานทันทีเพื่อตรวจสอบค่าเริ่มต้นตอนโหลดหน้า
    handleScroll()

    // ล้าง Event Listener เมื่อ Component Unmount
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ฟังก์ชันสำหรับสกรอลล์ขึ้นไปด้านบนสุดแบบนุ่มนวล (Smooth scroll)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // ตั้งค่าขนาดและคุณสมบัติของวงแหวน Progress (SVG Circle)
  const size = 52 // ขนาดความกว้าง-ยาวของปุ่ม
  const strokeWidth = 3.5 // ความหนาของวงแหวน
  const radius = (size - strokeWidth) / 2 // รัศมีของวงกลม
  const circumference = radius * 2 * Math.PI // ความยาวเส้นรอบวง
  // คำนวณความยาวเส้นสีฟ้าที่ต้องวาดตามเปอร์เซ็นต์สกรอลล์
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-white shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl active:scale-95 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent cursor-pointer ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-75 pointer-events-none"
      }`}
      style={{ 
        width: size, 
        height: size,
        boxShadow: '0 0 0 2px white, 0 0 0 3px var(--color-accent, #3b82f6)'
      }}
      aria-label="เลื่อนขึ้นด้านบนสุด"
    >
      {/* วงแหวน Progress Ring แบบ SVG */}
      <svg className="absolute -rotate-90" width={size} height={size}>
        {/* วงกลมฉากหลัง (สีเทาอ่อน) */}
        <circle
          className="text-gray-200"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* วงกลมแสดงสถานะความก้าวหน้า (ใช้สี accent จากธีมส่วนกลาง) */}
        <circle
          className="text-accent transition-all duration-100"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>

      {/* ลูกศรชี้ขึ้นตรงกลางปุ่ม (ใช้สี accent จากธีมส่วนกลาง) */}
      <ChevronUp className="w-6 h-6 text-accent transition-transform duration-300 group-hover:-translate-y-0.5 z-10" />
    </button>
  )
}
