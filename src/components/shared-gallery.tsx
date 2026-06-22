"use client"

import { useState, useEffect } from "react"
import { useT, useLanguage } from "@/components/language-context"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { getImagesAction } from "@/lib/cloudinary-actions"
import { getOptimizedImageUrl } from "@/lib/cloudinary-client"

export interface GalleryItem {
  readonly url: string;
  readonly subfolder: string | null;
}

export interface SharedGalleryProps {
  readonly translationKey: string;
  readonly images?: readonly string[];
  readonly imageFolder?: string; // ระบุพาธโฟลเดอร์ภาพ เช่น 'psu-tuyf/mscd/student-improvement/excellence-match-camp/pom-2023'
  readonly itemsPerPage?: number;
  readonly sortOrder?: 'asc' | 'desc'; // ตัวเลือกเพิ่มเติมสำหรับการเรียงลำดับรูปภาพ
}

export function SharedGallery({
  translationKey,
  images = [],
  imageFolder,
  itemsPerPage = 9,
  sortOrder = 'desc',
}: Readonly<SharedGalleryProps>) {
  const t = useT()
  const { lang } = useLanguage()
  const title = t(`${translationKey}.galleryTitle`)
  const [currentPage, setCurrentPage] = useState(1)
  const [galleryItems, setGalleryItems] = useState<readonly GalleryItem[]>(
    images.map((url) => ({ url, subfolder: null }))
  )
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // ดึงชื่อย่อโรงเรียนจากไฟล์คำแปลภาษา (common.json) ตามมาตรฐานระบบ i18n
  const getSchoolName = (folder: string): string => {
    const key = `schools.${folder.toLowerCase()}`
    const translated = t(key)
    return translated && translated !== key
      ? translated
      : folder.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  }

  // ดึงข้อมูลรูปภาพจาก Cloudinary หลังเมาท์คอมโพเนนต์หากมีการระบุ imageFolder
  useEffect(() => {
    if (!imageFolder) {
      setGalleryItems(images.map((url) => ({ url, subfolder: null })))
      return
    }

    let isMounted = true
    setIsLoading(true)

    getImagesAction(imageFolder)
      .then((result) => {
        if (!isMounted) return
        if (result.success && result.resources && result.resources.length > 0) {
          // สลับลำดับเป็นจากเก่าไปใหม่หากระบุ sortOrder เป็น 'asc'
          const resources = sortOrder === 'asc'
            ? [...result.resources].reverse()
            : result.resources;

          const items = resources.map((img) => {
            const optimizedUrl = getOptimizedImageUrl(img.publicId)
            // ดึงชื่อโฟลเดอร์ย่อย (เช่น 'azizstan-foundation-school')
            let subfolder: string | null = null
            const prefix = `${imageFolder}/`
            // ตรวจจับจาก img.folder ก่อนเนื่องจากกรณีที่ public_id ไม่มี path นำหน้า
            const targetPath = img.folder || img.publicId
            if (targetPath && targetPath.startsWith(prefix)) {
              const relativePath = targetPath.substring(prefix.length)
              const parts = relativePath.split("/")
              if (parts.length > 0 && parts[0] !== "") {
                subfolder = parts[0]
              }
            }
            return { url: optimizedUrl, subfolder }
          })
          setGalleryItems(items)
        } else {
          setGalleryItems(images.map((url) => ({ url, subfolder: null })))
        }
      })
      .catch((err) => {
        console.error("Failed to load Cloudinary images centrally:", err)
        if (isMounted) {
          setGalleryItems(images.map((url) => ({ url, subfolder: null })))
        }
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
    setSelectedFolder(null) // รีเซ็ตตัวกรองโฟลเดอร์ย่อยเมื่อมีการเปลี่ยนโฟลเดอร์หลัก
  }, [galleryItems])

  // ดึงรายชื่อโฟลเดอร์ย่อยที่มีทั้งหมดมาทำเป็นตัวกรอง
  const uniqueFolders = Array.from(
    new Set(
      galleryItems
        .map((item) => item.subfolder)
        .filter((f): f is string => f !== null)
    )
  ).sort()

  // แสดงตัวโหลดแบบพัลส์กระพริบระหว่างดึงภาพจาก Cloudinary
  if (isLoading) {
    return (
      <section className="py-10 bg-background animate-fade-in scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
              {title && title !== `${translationKey}.galleryTitle` ? title : t("ภาพกิจกรรม", "Photos")}
            </h2>
            <p className="text-sm text-muted-foreground/80">
              {t("กำลังดาวน์โหลดข้อมูลรูปภาพ...", "Downloading images...")}
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

  if (!galleryItems || galleryItems.length === 0) {
    return (
      <section className="py-10 bg-background animate-fade-in">
        <div className="mx-auto max-w-7xl px-6 text-center text-muted-foreground/60">
          <p>{t("ไม่มีรูปภาพกิจกรรมแสดงผลในขณะนี้", "No photos available at the moment.")}</p>
        </div>
      </section>
    )
  }

  // กรองภาพตามโฟลเดอร์ที่ผู้เลือกเลือก
  const filteredItems = selectedFolder
    ? galleryItems.filter((item) => item.subfolder === selectedFolder)
    : galleryItems

  // คำนวณการแบ่งหน้า (Pagination)
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

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

  function handleFolderFilter(folder: string | null) {
    setSelectedFolder(folder)
    setCurrentPage(1)
  }

  return (
    <section id="gallery-section" className="py-10 bg-background animate-fade-in scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {title && title !== `${translationKey}.galleryTitle` ? title : t("ภาพกิจกรรม", "Photos")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t(`${translationKey}.galleryDesc`, { defaultValue: t("ภาพบรรยากาศความประทับใจของการดำเนินกิจกรรมของโครงการ", "Atmospheric photos of the project's activities") })}
          </p>
        </div>

        {/* แท็บตัวกรองโรงเรียนย่อย (จะแสดงเฉพาะเมื่อตรวจพบโครงสร้างโฟลเดอร์ย่อยในระบบ) */}
        {uniqueFolders.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8 animate-fade-in">
            <button
              onClick={() => handleFolderFilter(null)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border ${
                selectedFolder === null
                  ? "bg-primary text-primary-foreground shadow-xs border-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-primary border-border/50 bg-card"
              }`}
            >
              {t("ภาพรวมทั้งหมด", "All Photos")}
            </button>
            {uniqueFolders.map((folder) => (
              <button
                key={folder}
                onClick={() => handleFolderFilter(folder)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer border ${
                  selectedFolder === folder
                    ? "bg-primary text-primary-foreground shadow-xs border-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-primary border-border/50 bg-card"
                }`}
              >
                {getSchoolName(folder)}
              </button>
            ))}
          </div>
        )}

        {/* แสดงผลรูปภาพในหน้าปัจจุบัน (Grid Layout) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentItems.map((item, index) => {
            const globalIndex = startIndex + index
            return (
              <div 
                key={item.url} 
                className="group aspect-4/3 bg-secondary/35 rounded-3xl overflow-hidden border border-border/50 hover:border-accent/40 hover:shadow-xs transition-all duration-300 flex items-center justify-center relative"
              >
                <Image 
                  src={item.url} 
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
