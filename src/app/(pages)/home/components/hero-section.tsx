"use client"

import { useState, useEffect } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useT } from "@/components/language-context"
// นำเข้า Image และภาพประกอบแบบ Static เพื่อประสิทธิภาพและการดึงขนาดสัดส่วนภาพที่แม่นยำ
import Image from "next/image"
import heroImg1 from "../../../../../public/images/hero-section/psu-tuyf-1.png"
import heroImg2 from "../../../../../public/images/hero-section/psu-tuyf-2.png"
import heroImg3 from "../../../../../public/images/hero-section/psu-tuyf-3.png"
import heroImg4 from "../../../../../public/images/hero-section/psu-tuyf-4.png"
import heroImg5 from "../../../../../public/images/hero-section/psu-tuyf-5.png"

// รายชื่อภาพสไลด์แสดงผลงานในอดีตของโครงการ PSU-TUYF (ใช้ตัวแปรภาพที่นำเข้าแบบ Static)
const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5]

export function HeroSection() {
  const t = useT()
  const [currentIndex, setCurrentIndex] = useState(0)

  // ฟังก์ชันย้อนกลับไปรูปภาพสไลด์ก่อนหน้า
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))
  }

  // ฟังก์ชันถัดไปของรูปภาพสไลด์
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))
  }

  // ตั้งเวลาเปลี่ยนภาพสไลด์อัตโนมัติ (Auto-play) ทุกๆ 5 วินาที
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-primary text-primary-foreground scroll-mt-16"
    >
      {/* ส่วนรูปภาพพื้นหลังสไลด์เต็มหน้าจอ (Full-bleed Background Carousel) */}
      <div className="absolute inset-0 z-0 select-none">
        {heroImages.map((img, idx) => (
          <Image
            key={img.src}
            src={img}
            alt={`${t("hero.img_alt")} ${idx + 1}`}
            priority={idx === 0} // รูปแรกโหลดล่วงหน้าเพื่อลดปัญหา LCP ของหน้าเว็บ
            fill
            quality={95} // กำหนดคุณภาพของภาพสูงถึง 95% เพื่อความคมชัดสูงสุดในการแสดงผลแบบขยายเต็มจอ
            sizes="100vw"
            className={`object-cover transition-all duration-1000 ease-in-out ${
              idx === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          />
        ))}
      </div>

      {/* แผ่นกรองและไล่เฉดสีเพื่อให้อ่านข้อความได้ชัดเจนยิ่งขึ้น (Gradient Overlay) */}
      {/* ปรับลดความทึบลงเหลือ 90% -> 65% -> 80% เพื่อให้เห็นรายละเอียดของภาพพื้นหลังได้คมชัดและสว่างขึ้นอย่างสมบูรณ์แบบ */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-primary/90 via-primary/65 to-primary/80" />

      {/* ส่วนเนื้อหาข้อความและปุ่ม (Content Container) */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 w-full flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="max-w-3xl flex flex-col items-center text-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium text-primary-foreground/90">
            {t("hero.badge")}
          </span>

          <h1 className="mt-6 text-balance text-5xl font-bold leading-none tracking-tight text-white sm:text-6xl lg:text-7xl drop-shadow-md">
            PSU-TUYF
          </h1>

          <p className="mt-4 text-pretty text-lg font-medium leading-relaxed text-white sm:text-xl drop-shadow-xs">
            Prince of Songkla University
            <br />
            The TUYF Charitable Trust Fund
          </p>

          <p className="mt-6 max-w-2xl mx-auto text-pretty text-sm font-medium leading-relaxed text-white/90 sm:text-base drop-shadow-xs">
            {t("hero.desc_1")}
          </p>

          <div className="mt-8 flex flex-col gap-3 w-full max-w-xs sm:w-auto sm:flex-row sm:justify-center">
            <Button
              render={<a href="#programs" aria-label="View all programs" />}
              nativeButton={false}
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto rounded-full px-7 text-base cursor-pointer"
            >
              {t("hero.btn_view_all")}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
            <Button
              render={<a href="#about" aria-label="About the project" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-full border-primary-foreground/30 bg-transparent px-7 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground cursor-pointer"
            >
              {t("hero.btn_about")}
            </Button>
          </div>
        </div>
      </div>

      {/* ปุ่มลูกศรควบคุมการสลับสไลด์ย้อนหลัง (Previous Slide Button) */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-6 top-1/2 z-30 -translate-y-1/2 hidden md:flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-primary border border-white/20 hover:scale-105 active:scale-95"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      {/* ปุ่มลูกศรควบคุมการสลับสไลด์ถัดไป (Next Slide Button) */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-6 top-1/2 z-30 -translate-y-1/2 hidden md:flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-primary border border-white/20 hover:scale-105 active:scale-95"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* จุดนำทางระบุตำแหน่งสไลด์ (Dots Indicators) */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {heroImages.map((img, idx) => (
          <button
            key={img.src}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
              idx === currentIndex ? "w-6 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
