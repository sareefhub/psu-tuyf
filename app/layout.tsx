import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import "./globals.css" // นำเข้าสไตล์หลักและสไตล์ฟอนต์ PSU Stidti
import { LanguageProvider } from "@/components/language-context"

export const metadata: Metadata = {
  title: "PSU-TUYF",
  description:
    "A modernized campus information platform for the Faculty of Science and Technology, Prince of Songkla University.",
  generator: "v0.app",
  icons: {
    // กำหนดให้ใช้ภาพโลโก้ PSU-TUYF เป็นไอคอน Favicon ของเว็บไซต์บนแท็บเบราว์เซอร์
    icon: "/images/logo/logo-psu-tuyf.png",
    shortcut: "/images/logo/logo-psu-tuyf.png",
    apple: "/images/logo/logo-psu-tuyf.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // ลบคลาสของ Google Font 'Kanit' ออก เพื่อเรียกใช้ PSU Stidti จาก CSS ระดับระบบอย่างสมบูรณ์
    <html lang="en" className="scroll-smooth bg-background">
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
