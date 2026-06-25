"use client"

import React, { useState, useRef } from "react"

interface CarouselWrapperProps {
  children: React.ReactNode[]
  desktopCols?: 2 | 3 | 4
  gapClassName?: string // กำหนดคลาสระบบช่องว่างแบบระบุคำนำหน้าของ Tailwind โดยตรง (ค่าเริ่มต้น md:gap-8)
  containerClassName?: string // คลาสเพิ่มเติมสำหรับคอนเทนเนอร์หลัก
}

// คอมโพเนนต์สำหรับแสดงผลเป็น Grid บนเดสก์ท็อป และ Carousel สไลด์บนมือถือ
export function CarouselWrapper({
  children,
  desktopCols = 3,
  gapClassName = "md:gap-8",
  containerClassName = "",
}: Readonly<CarouselWrapperProps>) {
  const [activeCardIndex, setActiveCardIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  // กรองเอาเฉพาะ element ที่มีค่าจริงและเป็น React.ReactElement เพื่อความปลอดภัยเรื่อง key
  const validChildren = React.Children.toArray(children)
    .filter((child): child is React.ReactElement => React.isValidElement(child))

  if (validChildren.length === 0) return null

  // คำนวณหาการ์ดใบที่เลื่อนมาใกล้จุดกึ่งกลางของหน้าจอมือถือมากที่สุดขณะกำลังเลื่อนการ์ด
  const handleScroll = () => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const childElements = container.children
    if (childElements.length === 0) return

    const containerCenter = container.scrollLeft + container.clientWidth / 2
    let closestIndex = 0
    let minDistance = Infinity

    for (let i = 0; i < childElements.length; i++) {
      const child = childElements[i] as HTMLElement
      // ข้ามตัวสไลด์หรืออินดิเคเตอร์หากไม่มีขนาด
      if (child.clientWidth === 0) continue

      const childCenter = child.offsetLeft + child.clientWidth / 2
      const distance = Math.abs(containerCenter - childCenter)
      if (distance < minDistance) {
        minDistance = distance
        closestIndex = i
      }
    }
    setActiveCardIndex(closestIndex)
  }

  // ฟังก์ชันสำหรับเลื่อนหน้าจอไปยังตำแหน่งการ์ดใบที่เลือกเมื่อคลิกที่จุดนำทาง
  const scrollToCard = (index: number) => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const child = container.children[index] as HTMLElement
    if (child) {
      container.scrollTo({
        left: child.offsetLeft - (container.clientWidth - child.clientWidth) / 2,
        behavior: "smooth",
      })
    }
  }

  // กำหนดคลาสระบบ Grid ของแต่ละคอลัมน์บนเดสก์ท็อป
  const gridColsClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[desktopCols] || "md:grid-cols-3"

  return (
    <div className={`w-full ${containerClassName}`}>
      {/* ส่วนตารางแสดงการ์ด (บนมือถือจะเป็นสไลด์แนวนอน, เดสก์ท็อปแสดงแบบ Grid) */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className={`flex overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory -mx-6 md:mx-0 md:grid ${gridColsClass} ${gapClassName} md:overflow-x-visible md:pb-0`}
      >
        {validChildren.map((child, idx) => (
          <div
            key={child.key ?? idx}
            className="min-w-full px-6 snap-center snap-always md:min-w-0 md:px-0"
          >
            {child}
          </div>
        ))}
      </div>

      {/* จุดแสดงสถานะและการนำทางสไลด์บนมือถือ (แสดงเฉพาะขนาดหน้าจอ md:hidden หรือ sm:hidden ตามความเหมาะสม) */}
      {validChildren.length > 1 && (
        <div className="mt-6 flex justify-center gap-2 md:hidden">
          {validChildren.map((child, idx) => (
            <button
              key={`dot-${child.key ?? idx}`}
              onClick={() => scrollToCard(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                idx === activeCardIndex ? "w-6 bg-primary" : "w-2.5 bg-primary/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
