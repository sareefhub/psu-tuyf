/** @type {import('next').NextConfig} */

// รายการหน้าเว็บหลักที่จะย้ายเข้าไปอยู่ภายใต้โฟลเดอร์ pages
const pages = [
  'about',
  'algebra-enrichment',
  'contact',
  'home',
  'mgss',
  'mscd'
]

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // ตั้งค่า rewrites สำหรับเส้นทางหน้าเว็บต่างๆ เพื่อให้ผู้ใช้เข้าใช้งาน URL เดิมได้โดยไม่ต้องผ่านพาธ /pages
  async rewrites() {
    // ใช้ flatMap เพื่อสร้างอาเรย์ของเงื่อนไขการส่งต่อเส้นทางสำหรับหน้าเว็บหลักและเส้นทางย่อยโดยอัตโนมัติ (ช่วยลดโค้ดซ้ำซ้อน)
    return pages.flatMap((page) => [
      {
        source: `/${page}`,
        destination: `/pages/${page}`,
      },
      {
        source: `/${page}/:path*`,
        destination: `/pages/${page}/:path*`,
      },
    ])
  }
}

export default nextConfig
