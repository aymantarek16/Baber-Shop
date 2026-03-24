import type { Metadata, Viewport } from 'next'
import { Cairo } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cairo = Cairo({ 
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo'
})

export const metadata: Metadata = {
  title: 'الأسطورة للحلاقة | صالون حلاقة فاخر',
  description: 'صالون الأسطورة للحلاقة الرجالية - خدمات حلاقة فاخرة وعناية بالشعر واللحية في مصر. احجز موعدك الآن!',
  keywords: ['حلاق', 'صالون حلاقة', 'حلاقة رجالية', 'تهذيب اللحية', 'قص شعر', 'مصر'],
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
  openGraph: {
    title: 'الأسطورة للحلاقة | صالون حلاقة فاخر',
    description: 'صالون الأسطورة للحلاقة الرجالية - خدمات حلاقة فاخرة وعناية بالشعر واللحية',
    locale: 'ar_EG',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
