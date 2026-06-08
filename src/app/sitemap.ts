import type { MetadataRoute } from "next"

// สร้างคอนฟิก Sitemap เพื่อลงรายการเว็บเพจทั้งหมดในระบบสำหรับกูเกิลและบอตค้นหาอื่นๆ
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://psu-tuyf.sci.psu.ac.th"

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0, // หน้าแรกมีความสำคัญสูงสุด
    },
    {
      url: `${baseUrl}/mscd/bsc-scholarships`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8, // หน้าทุนการศึกษาระดับปริญญาตรี
    },
  ]
}
