"use client"

import { CampTemplate } from "../components/camp-template"
import { excellenceCampsData } from "@/data/excellence-math-camp" // นำเข้าข้อมูล Mock Data ประจำค่ายต่างๆ จากไฟล์เก็บข้อมูลกลาง

// แสดงผลหน้าหลักโดยส่งค่าคอนฟิกปี 2023 ไปให้เทมเพลตตัวกลางประมวลผล
export default function PreOlympics2023Page() {
  // ดึงข้อมูลการตั้งค่าสำหรับค่ายปี 2023
  const campData = excellenceCampsData["2023"]

  return (
    <CampTemplate
      year={campData.year}
      translationKey={campData.translationKey}
      imageFolder={campData.imageFolder}
      announcements={campData.announcements}
      postTestImages={campData.postTestImages}
      galleryImages={campData.galleryImages}
    />
  )
}


