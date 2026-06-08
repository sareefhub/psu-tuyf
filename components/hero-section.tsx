"use client"

import { useState, useEffect } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useT } from "@/components/language-context"

// รายชื่อภาพสไลด์แสดงผลงานในอดีตของโครงการ PSU-TUYF
const heroImages = [
  "/images/hero-section/psu-tuyf-1.png",
  "/images/hero-section/psu-tuyf-2.png",
  "/images/hero-section/psu-tuyf-3.png",
  "/images/hero-section/psu-tuyf-4.png",
  "/images/hero-section/psu-tuyf-5.png",
]

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
    <section id="home" className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-primary text-primary-foreground scroll-mt-16">
      {/* ขยายความกว้างสูงสุดเป็น max-w-7xl และปรับอัตราส่วน Grid เป็น 2:3 เพื่อให้สไลเดอร์รูปภาพฝั่งขวามีพื้นที่แสดงผลใหญ่ขึ้นเต็มตา */}
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[2fr_3fr] lg:py-24">
        <div className="flex flex-col">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-medium text-primary-foreground/90">
            {t("คณะวิทยาศาสตร์และเทคโนโลยี · มอ. ปัตตานี", "Faculty of Science and Technology · PSU Pattani")}
          </span>

          {/* ปรับสีหัวข้อ PSU-TUYF เป็นสีขาวล้วนตามต้องการ */}
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

        {/* ส่วนสไลเดอร์แสดงรูปภาพหลายรูป (Carousel Showcase) แสดงรูปภาพเต็มขนาดจริงโดยไม่จำกัดความสูงและไม่ครอปภาพ */}
        <div className="relative group w-full overflow-hidden rounded-3xl border border-primary-foreground/15 shadow-2xl bg-black/10">
          {heroImages.map((img, idx) => (
            <img
              key={img}
              src={img}
              alt={t(`ภาพกิจกรรมโครงการ PSU-TUYF รูปที่ ${idx + 1}`, `PSU-TUYF project activity image ${idx + 1}`)}
              className={`w-full transition-all duration-700 ease-in-out ${
                idx === 0 ? "relative" : "absolute inset-0 h-full"
              } ${
                idx === currentIndex ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-95"
              }`}
            />
          ))}

          {/* ปุ่มเปลี่ยนสไลด์ไปทางซ้าย (วงกลมสีขาวโปร่งแสง ปรากฏเมื่อโฮเวอร์บนกรอบภาพ) */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-xs transition-all duration-300 hover:bg-white hover:text-primary opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* ปุ่มเปลี่ยนสไลด์ไปทางขวา (วงกลมสีขาวโปร่งแสง ปรากฏเมื่อโฮเวอร์บนกรอบภาพ) */}
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-xs transition-all duration-300 hover:bg-white hover:text-primary opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* จุดนำทางสไลด์ (Dots Indicators) อยู่ล่างสุดกึ่งกลาง */}
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full cursor-pointer transition-all duration-300 ${
                  idx === currentIndex ? "w-6 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
