import type { MetadataRoute } from "next"

// สร้างคอนฟิก Robots สำหรับเว็บเพื่ออนุญาตการทำดรรชนี (Indexing) ยกเว้นโฟลเดอร์ฝั่งเซิร์ฟเวอร์
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://psu-tuyf.sci.psu.ac.th"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"], // ไม่เก็บข้อมูลในเส้นทาง API เพื่อความปลอดภัย
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
