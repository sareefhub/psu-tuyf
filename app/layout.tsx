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
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
