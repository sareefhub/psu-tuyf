import { useState, useEffect } from "react"
import { getImagesAction } from "@/lib/cloudinary-actions"
import { getOptimizedImageUrl } from "@/lib/cloudinary-client"

// โครงสร้างของข้อมูลรูปภาพแต่ละชิ้นในแกลเลอรี
export interface GalleryItem {
  readonly url: string;
  readonly subfolder: string | null;
}

/**
 * Custom Hook สำหรับการดึงและจัดการสถานะรูปภาพในแกลเลอรีจาก Cloudinary
 * 
 * @param imageFolder พาธของโฟลเดอร์หลักใน Cloudinary (เช่น 'psu-tuyf/mscd/student-improvement/match-sanchon/ms-2023')
 * @param initialImages อาเรย์ของ URL รูปภาพเริ่มต้นกรณีที่ไม่ได้ดึงแบบ Dynamic
 * @param sortOrder การจัดเรียงลำดับรูปภาพ ('asc' = เก่าไปใหม่, 'desc' = ใหม่ไปเก่า)
 */
export function useCloudinaryGallery(
  imageFolder?: string,
  initialImages: readonly string[] = [],
  sortOrder: 'asc' | 'desc' = 'desc'
) {
  const [galleryItems, setGalleryItems] = useState<readonly GalleryItem[]>(() =>
    initialImages.map((url) => ({ url, subfolder: null }))
  )
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // หากไม่ได้กำหนด imageFolder ให้แสดงผลรูปภาพเริ่มต้นที่ได้รับมาจาก props
    if (!imageFolder) {
      setGalleryItems(initialImages.map((url) => ({ url, subfolder: null })))
      return
    }

    let isMounted = true
    setIsLoading(true)

    // เรียกใช้ Server Action เพื่อดึงรายชื่อรูปภาพจาก Cloudinary
    getImagesAction(imageFolder)
      .then((result) => {
        if (!isMounted) return
        
        if (result.success && result.resources && result.resources.length > 0) {
          // หากกำหนดเรียงลำดับจากเก่าไปใหม่ ('asc') ให้ทำการกลับทิศทางอาเรย์รูปภาพ
          const resources = sortOrder === 'asc'
            ? [...result.resources].reverse()
            : result.resources

          // แปลงรูปภาพดิบเป็นข้อมูลรูปภาพที่พร้อมแสดงผลใน UI
          const items = resources.map((img) => {
            const optimizedUrl = getOptimizedImageUrl(img.publicId)
            let subfolder: string | null = null
            
            const prefix = `${imageFolder}/`
            const targetPath = img.folder || img.publicId
            
            // สกัดชื่อโฟลเดอร์ย่อย (เช่น ชื่อโรงเรียน)
            if (targetPath?.startsWith(prefix)) {
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
          // กรณีไม่มีรูปภาพถูกดึงมา ให้แสดงรูปเริ่มต้น
          setGalleryItems(initialImages.map((url) => ({ url, subfolder: null })))
        }
      })
      .catch((err) => {
        console.error("Failed to load Cloudinary images centrally in hook:", err)
        if (isMounted) {
          setGalleryItems(initialImages.map((url) => ({ url, subfolder: null })))
        }
      })
      .finally(() => {
        if (isMounted) setIsLoading(false)
      })

    return () => {
      isMounted = false
    }
  }, [imageFolder, initialImages, sortOrder])

  return { galleryItems, isLoading }
}
