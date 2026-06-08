import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import './globals.css'

const kanit = Kanit({
  variable: '--font-kanit',
  subsets: ['latin', 'thai'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'PSU-TUYF — Smart Campus Information Portal',
  description:
    'A modernized campus information platform for the Faculty of Science and Technology, Prince of Songkla University.',
  generator: 'v0.app',
  icons: {
    // กำหนดให้ใช้ภาพโลโก้ PSU-TUYF เป็นไอคอน Favicon ของเว็บไซต์บนแท็บเบราว์เซอร์
    icon: '/images/logo-psu-tuyf.png',
    shortcut: '/images/logo-psu-tuyf.png',
    apple: '/images/logo-psu-tuyf.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${kanit.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
