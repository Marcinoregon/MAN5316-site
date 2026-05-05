import type { Metadata } from 'next'
import './globals.css'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: {
    default: 'HR Analytics | MAN 6316 Course Companion',
    template: '%s | HR Analytics MAN 6316',
  },
  description:
    'A course companion for HR Analytics (MAN 6316) — exploring how data-informed decisions strengthen the strategic value of human resource management.',
  metadataBase: new URL('https://hr-analytics-man6316.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'HR Analytics MAN 6316',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  )
}
