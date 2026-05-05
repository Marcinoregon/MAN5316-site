import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <p className="font-serif text-slate-900 font-semibold mb-2">HR Analytics</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              A course companion for MAN 6316 in the MS in Human Resource Management program.
              All content is for educational use.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              Navigate
            </p>
            <ul className="space-y-1 text-sm">
              {[
                ['/why-it-matters', 'Why It Matters'],
                ['/cases', 'Case Studies'],
                ['/glossary', 'Glossary'],
                ['/frameworks', 'Frameworks'],
                ['/about', 'About This Site'],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-600 hover:text-teal-700 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              External Resources
            </p>
            <ul className="space-y-1 text-sm">
              {[
                ['https://hbr.org/topic/human-resource-management', 'HBR – HR Management'],
                ['https://sloanreview.mit.edu/tag/people-analytics/', 'MIT Sloan – People Analytics'],
                ['https://www.shrm.org/resourcesandtools/tools-and-samples/pages/default.aspx', 'SHRM Toolkits'],
                ['https://www.i4cp.com/people-analytics', 'i4cp People Analytics'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-teal-700 transition-colors inline-flex items-center gap-1"
                  >
                    {label}
                    <ExternalLink size={11} aria-label="opens in new tab" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} MAN 6316 HR Analytics. Educational use only.</p>
          <p>
            Built with{' '}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-teal-600"
            >
              Next.js
            </a>{' '}
            — no tracking, no cookies.
          </p>
        </div>
      </div>
    </footer>
  )
}
