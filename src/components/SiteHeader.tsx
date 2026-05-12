'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, BarChart2 } from 'lucide-react'

const NAV_LINKS = [
  { href: '/why-it-matters', label: 'Why It Matters' },
  { href: '/data-basics', label: 'Data Basics' },
  { href: '/cases', label: 'Case Studies' },
  { href: '/glossary', label: 'Glossary' },
  { href: '/frameworks', label: 'Frameworks' },
  { href: '/exercises', label: 'Exercises' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/about', label: 'About' },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2 font-serif text-lg font-semibold text-slate-900 hover:text-teal-700 transition-colors"
            aria-label="HR Analytics — home"
          >
            <BarChart2 size={20} className="text-teal-600" aria-hidden="true" />
            HR Analytics
            <span className="text-slate-400 font-sans font-normal text-sm hidden sm:inline">
              MAN 6316
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={
                  pathname === href || pathname.startsWith(href + '/')
                    ? 'nav-link-active nav-link'
                    : 'nav-link'
                }
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            id="mobile-menu-toggle"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded text-slate-600 hover:text-teal-700 hover:bg-slate-100 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-slate-200 bg-white px-4 pb-4 pt-2"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-2 rounded text-sm font-medium transition-colors
                    ${
                      pathname === href || pathname.startsWith(href + '/')
                        ? 'bg-teal-50 text-teal-700'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-teal-700'
                    }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
