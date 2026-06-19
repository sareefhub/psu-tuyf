"use client"

import { useState, useEffect } from "react"
import { useT } from "@/components/language-context"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { getImagesAction } from "@/lib/cloudinary-actions"
import { getOptimizedImageUrl } from "@/lib/cloudinary-client"

export interface SharedGalleryProps {
  readonly translationKey: string;
  readonly images?: readonly string[];
  readonly imageFolder?: string; // ระบุพาธโฟลเดอร์ภาพ เช่น 'psu-tuyf/mscd/student-improvement/excellence-match-camp/pom-2023'
  readonly itemsPerPage?: number;
}

export function SharedGallery({
  translationKey,
  images = [],
  imageFolder,
  itemsPerPage = 9,
}: Readonly<SharedGalleryProps>) {
  const t = useT()
  const title = t(`${translationKey}.galleryTitle`)
  const [currentPage, setCurrentPage] = useState(1)
  const [galleryImages, setGalleryImages] = useState<readonly string[]>(images)
  const [isLoading, setIsLoading] = useState(false)

  // ดึงข้อมูลรูปภาพจาก Cloudinary หลังเมาท์คอมโพเนนต์หากมีการระบุ imageFolder
  useEffect(() => {
    if (!imageFolder) {
      setGalleryImages(images)
      return
    }

    let isMounted = true
    setIsLoading(true)

    getImagesAction(imageFolder, 100)
      .then((result) => {
        if (!isMounted) return
        if (result.success && result.resources && result.resources.length > 0) {
          const optimizedUrls = result.resources.map((img) => getOptimizedImageUrl(img.publicId))
          setGalleryImages(optimizedUrls)
        } else {
          setGalleryImages(images)
        }
      })
      .catch((err) => {
        console.error("Failed to load Cloudinary images centrally:", err)
        if (isMounted) setGalleryImages(images)
      })
      .finally(() => {
        if (isMounted) setIsLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [imageFolder, images])

  // รีเซ็ตกลับไปหน้าแรกเมื่อรายการรูปภาพเปลี่ยนแปลง
  useEffect(() => {
    setCurrentPage(1)
  }, [galleryImages])

  // แสดงตัวโหลดแบบพัลส์กระพริบระหว่างดึงภาพจาก Cloudinary
  if (isLoading) {
    return (
      <section className="py-10 bg-background animate-fade-in scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              {title && title !== `${translationKey}.galleryTitle` ? title : "ภาพกิจกรรม"}
            </h2>
            <p className="text-sm text-muted-foreground/80">
              กำลังดาวน์โหลดข้อมูลรูปภาพ...
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-pulse">
            {["skeleton-1", "skeleton-2", "skeleton-3", "skeleton-4", "skeleton-5", "skeleton-6"].map((id) => (
              <div
                key={id}
                className="aspect-4/3 bg-secondary/35 rounded-3xl border border-border/50"
              />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (!galleryImages || galleryImages.length === 0) {
    return (
      <section className="py-10 bg-background animate-fade-in">
        <div className="mx-auto max-w-7xl px-6 text-center text-muted-foreground/60">
          <p>ไม่มีรูปภาพกิจกรรมแสดงผลในขณะนี้</p>
        </div>
      </section>
    )
  }

  // คำนวณการแบ่งหน้า (Pagination)
  const totalPages = Math.ceil(galleryImages.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentImages = galleryImages.slice(startIndex, startIndex + itemsPerPage)

  // คำนวณช่วงเลขหน้าแบบมีจุดไข่ปลา (...) เพื่อความสะอาดตาและการใช้งานระยะยาว
  const getPaginationRange = () => {
    const range: { type: "page" | "ellipsis"; value: number | string; key: string }[] = []
    const delta = 1 // แสดงผลขนาบข้างซ้าย-ขวาจากหน้าปัจจุบันอย่างละ 1 หน้า

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        range.push({ type: "page", value: i, key: `page-${i}` })
      }
      return range
    }

    // แสดงหน้าแรกเสมอ
    range.push({ type: "page", value: 1, key: "page-1" })

    const left = currentPage - delta
    const right = currentPage + delta

    // ใส่จุดไข่ปลาซ้ายหากห่างมากกว่า 2 หน้า
    if (left > 2) {
      range.push({ type: "ellipsis", value: "...", key: "ellipsis-left" })
    }

    // วนลูปหน้าปัจจุบันและหน้าขนาบข้าง
    const start = Math.max(2, left)
    const end = Math.min(totalPages - 1, right)
    for (let i = start; i <= end; i++) {
      range.push({ type: "page", value: i, key: `page-${i}` })
    }

    // ใส่จุดไข่ปลาขวาหากห่างมากกว่า 2 หน้า
    if (right < totalPages - 1) {
      range.push({ type: "ellipsis", value: "...", key: "ellipsis-right" })
    }

    // แสดงหน้าสุดท้ายเสมอ
    if (totalPages > 1) {
      range.push({ type: "page", value: totalPages, key: `page-${totalPages}` })
    }

    return range
  }

  function handlePageChange(pageNumber: number) {
    setCurrentPage(pageNumber)
    
    // เลื่อนหน้าจอกลับมาที่ส่วนหัวข้อแกลเลอรีอย่างนุ่มนวล
    const gallerySection = document.getElementById("gallery-section")
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="gallery-section" className="py-10 bg-background animate-fade-in scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {title && title !== `${translationKey}.galleryTitle` ? title : "ภาพกิจกรรม"}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t(`${translationKey}.galleryDesc`, { defaultValue: "ภาพบรรยากาศความประทับใจของการดำเนินกิจกรรมของโครงการ" })}
          </p>
        </div>

        {/* แสดงผลรูปภาพในหน้าปัจจุบัน (Grid Layout) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentImages.map((src, index) => {
            const globalIndex = startIndex + index
            return (
              <div 
                key={src} 
                className="group aspect-4/3 bg-secondary/35 rounded-3xl overflow-hidden border border-border/50 hover:border-accent/40 hover:shadow-xs transition-all duration-300 flex items-center justify-center relative"
              >
                <Image 
                  src={src} 
                  alt={`ภาพกิจกรรมที่ ${globalIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:opacity-90"
                />
              </div>
            )
          })}
        </div>

        {/* แผงควบคุมการแบ่งหน้า (Pagination Controls) ที่ได้รับการออกแบบใหม่ตามรูปตัวอย่าง */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 animate-fade-in">
            <div className="inline-flex items-center gap-1 bg-card border border-border/60 shadow-xs rounded-xl p-1">
              {/* ปุ่มเปลี่ยนไปหน้าก่อนหน้า */}
              <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                className="inline-flex h-9 w-9 sm:w-auto sm:px-3 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-primary transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed text-xs font-bold gap-1"
                aria-label="หน้าก่อนหน้า"
              >
                <ChevronLeft className="h-4 w-4 shrink-0" />
                <span className="hidden sm:inline">{t("ก่อนหน้า", "Previous")}</span>
              </button>

              {/* หมายเลขหน้าสลับและจุดไข่ปลา */}
              {getPaginationRange().map((item) => {
                if (item.type === "ellipsis") {
                  return (
                    <span
                      key={item.key}
                      className="inline-flex h-9 w-9 items-center justify-center text-sm text-muted-foreground/50 select-none font-medium"
                    >
                      ...
                    </span>
                  )
                }

                const isActive = currentPage === item.value
                return (
                  <button
                    key={item.key}
                    onClick={() => handlePageChange(Number(item.value))}
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-xs font-bold"
                        : "text-muted-foreground hover:bg-secondary hover:text-primary"
                    }`}
                  >
                    {item.value}
                  </button>
                )
              })}

              {/* ปุ่มเปลี่ยนไปหน้าถัดไป */}
              <button
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="inline-flex h-9 w-9 sm:w-auto sm:px-3 items-center justify-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-primary transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed text-xs font-bold gap-1"
                aria-label="หน้าถัดไป"
              >
                <span className="hidden sm:inline">{t("ถัดไป", "Next")}</span>
                <ChevronRight className="h-4 w-4 shrink-0" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
