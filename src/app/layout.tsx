import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import "./globals.css" // นำเข้าสไตล์หลักและสไตล์ฟอนต์ PSU Stidti
import { LanguageProvider } from "@/components/language-context"

// กำหนดค่าฐาน URL สำหรับ Metadata เพื่อใช้อ้างอิงพาธสัมพันธ์ (Relative URL) ของรูปภาพและลิงก์ต่างๆ
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://psu-tuyf.sci.psu.ac.th"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PSU-TUYF | Prince of Songkla University",
    template: "%s | PSU-TUYF",
  },
  description:
    "A modernized campus information platform for the Faculty of Science and Technology, Prince of Songkla University.",
  generator: "v0.app",
  icons: {
    // กำหนดให้ใช้ภาพโลโก้ PSU-TUYF เป็นไอคอน Favicon ของเว็บไซต์บนแท็บเบราว์เซอร์
    icon: "/images/logo/logo-psu-tuyf.png",
    shortcut: "/images/logo/logo-psu-tuyf.png",
    apple: "/images/logo/logo-psu-tuyf.png",
  },
  alternates: {
    // กำหนด Canonical URL ป้องกันปัญหาเนื้อหาซ้ำซ้อนในระบบค้นหา
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteUrl,
    siteName: "PSU-TUYF",
    title: "PSU-TUYF | Prince of Songkla University",
    description: "A modernized campus information platform for the Faculty of Science and Technology, Prince of Songkla University.",
    images: [
      {
        url: "/images/logo/logo-psu-tuyf.png",
        width: 512,
        height: 512,
        alt: "PSU-TUYF Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "PSU-TUYF | Prince of Songkla University",
    description: "A modernized campus information platform for the Faculty of Science and Technology, Prince of Songkla University.",
    images: ["/images/logo/logo-psu-tuyf.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // ลบคลาสของ Google Font 'Kanit' ออก เพื่อเรียกใช้ PSU Stidti จาก CSS ระดับระบบอย่างสมบูรณ์
    <html lang="en" className="scroll-smooth bg-background" data-scroll-behavior="smooth">
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
