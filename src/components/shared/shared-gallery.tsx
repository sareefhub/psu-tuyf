"use client"

import { useState, useEffect } from "react"
import { useT } from "@/context/language-context"
import Image from "next/image"
import { useCloudinaryGallery } from "@/hooks/use-cloudinary-gallery"
import { GalleryFilterTabs } from "@/components/gallery-filter-tabs"
import { GalleryPagination } from "@/components/gallery-pagination"

export type { GalleryItem } from "@/hooks/use-cloudinary-gallery"

export interface SharedGalleryProps {
  readonly translationKey: string;
  readonly images?: readonly string[];
  readonly imageFolder?: string; // ระบุพาธโฟลเดอร์ภาพ เช่น 'psu-tuyf/mscd/student-improvement/excellence-match-camp/pom-2023'
  readonly itemsPerPage?: number;
  readonly sortOrder?: 'asc' | 'desc'; // ตัวเลือกสำหรับการเรียงลำดับรูปภาพ
}

/**
 * คอมโพเนนต์แกลเลอรีรูปภาพร่วมสำหรับแสดงผลและกรองรูปภาพแยกตามโฟลเดอร์ย่อย/โรงเรียน
 */
export function SharedGallery({
  translationKey,
  images = [],
  imageFolder,
  itemsPerPage = 9,
  sortOrder = 'desc',
}: Readonly<SharedGalleryProps>) {
  const t = useT()
  const title = t(`${translationKey}.galleryTitle`)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null)

  // เรียกใช้ Custom Hook สำหรับจัดการข้อมูลและสเตตรูปภาพ
  const { galleryItems, isLoading } = useCloudinaryGallery(imageFolder, images, sortOrder)

  // รีเซ็ตหน้าและตัวกรองโรงเรียนย่อยเมื่อแกลเลอรีหลักมีการเปลี่ยนแปลง
  useEffect(() => {
    setCurrentPage(1)
    setSelectedFolder(null)
  }, [galleryItems])

  // รวบรวมโฟลเดอร์ย่อยที่ไม่ซ้ำกันเพื่อทำแถบเมนูตัวกรองโรงเรียน
  const uniqueFolders = Array.from(
    new Set(
      galleryItems
        .map((item) => item.subfolder)
        .filter((f): f is string => f !== null)
    )
  ).sort((a, b) => a.localeCompare(b))

  // แสดงตัวโหลดแบบ Skeleton กระพริบเมื่อกำลังดึงรูปภาพจาก Cloudinary
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

  // แสดงผลกรณีไม่พบรูปภาพในคลังเลย
  if (!galleryItems || galleryItems.length === 0) {
    return (
      <section className="py-10 bg-background animate-fade-in">
        <div className="mx-auto max-w-7xl px-6 text-center text-muted-foreground/60">
          <p>{t("ไม่มีรูปภาพกิจกรรมแสดงผลในขณะนี้", "No photos available at the moment.")}</p>
        </div>
      </section>
    )
  }

  // กรองรูปภาพตามโฟลเดอร์ย่อยที่เลือก
  const filteredItems = selectedFolder
    ? galleryItems.filter((item) => item.subfolder === selectedFolder)
    : galleryItems

  // คำนวณการจัดเก็บช่วงแบ่งหน้าและดึงเฉพาะรูปในหน้าปัจจุบัน
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

  // เปลี่ยนหน้าและเลื่อนหน้าจอไปยังตำแหน่งแกลเลอรีอย่างนุ่มนวล
  function handlePageChange(pageNumber: number) {
    setCurrentPage(pageNumber)
    const gallerySection = document.getElementById("gallery-section")
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  // กรองโรงเรียนพร้อมรีเซ็ตหมายเลขหน้าไปหน้าแรก
  function handleFolderFilter(folder: string | null) {
    setSelectedFolder(folder)
    setCurrentPage(1)
  }

  return (
    <section id="gallery-section" className="py-10 bg-background animate-fade-in scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* หัวข้อแสดงผลแกลเลอรีรูปภาพ */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-primary sm:text-3xl">
            {title && title !== `${translationKey}.galleryTitle` ? title : t("ภาพกิจกรรม", "Photos")}
          </h2>
          <p className="text-sm text-muted-foreground/80">
            {t(`${translationKey}.galleryDesc`, { defaultValue: t("ภาพบรรยากาศความประทับใจของการดำเนินกิจกรรมของโครงการ", "Atmospheric photos of the project's activities") })}
          </p>
        </div>

        {/* เมนูแท็บตัวกรองโรงเรียน (แสดงเฉพาะเมื่อมีโฟลเดอร์ย่อยในระบบ Cloudinary เท่านั้น) */}
        {uniqueFolders.length > 0 && (
          <GalleryFilterTabs
            uniqueFolders={uniqueFolders}
            selectedFolder={selectedFolder}
            onSelectFolder={handleFolderFilter}
          />
        )}

        {/* การจัดแสดงแผงรูปภาพแกลเลอรีแบบ Grid Layout */}
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

        {/* แผงควบคุมและปุ่มเปลี่ยนหน้า (แสดงต่อเมื่อรูปภาพมีมากกว่า 1 หน้าแสดงผล) */}
        {totalPages > 1 && (
          <GalleryPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </section>
  )
}
