import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, BarChart2, FileText, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About This Site',
  description: 'How to use the HR Analytics course companion as a supplement to MAN 6316 coursework.',
}

export default function AboutPage() {
  return (
    <div className="prose-section">
      <header className="mb-12 pb-8 border-b border-slate-200">
        <p className="text-xs font-semibold text-teal-700 uppercase tracking-widest mb-3">
          Course Companion
        </p>
        <h1 className="font-serif text-4xl font-semibold text-slate-900 leading-tight mb-4">
          About This Site
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          How to use this resource alongside MAN 6316 — HR Analytics.
        </p>
      </header>

      {/* What is this */}
      <section className="mb-10" aria-labelledby="about-what">
        <h2 id="about-what" className="font-serif text-2xl font-semibold text-slate-900 mb-4">
          What This Site Is
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          This site is a course companion for MAN 6316 (HR Analytics) in the MS in Human Resource
          Management program. It is not a substitute for the syllabus, assigned readings, or class
          sessions. It is a structured reference and case library designed to help working HR
          professionals connect course concepts to real and illustrative organizational examples.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The intended audience is HR practitioners — people who have worked in the field, who
          understand the operational reality of HR, and who may be skeptical that analytics is
          genuinely relevant to their practice. This site argues that it is, with evidence and
          without condescension.
        </p>
      </section>

      {/* How to use each section */}
      <section className="mb-10" aria-labelledby="about-sections">
        <h2 id="about-sections" className="font-serif text-2xl font-semibold text-slate-900 mb-6">
          How to Use Each Section
        </h2>

        <div className="space-y-5">
          {[
            {
              icon: BookOpen,
              title: 'Why It Matters',
              href: '/why-it-matters',
              when: 'Week 1 — orientation',
              how: "Read this before or alongside the first week's readings. It frames the strategic argument for HR analytics and addresses common objections directly. If you're a skeptic, start here.",
            },
            {
              icon: BarChart2,
              title: 'Case Studies',
              href: '/cases',
              when: 'Throughout the term',
              how: "Use cases alongside relevant course modules. Filter by topic to find cases matching the week's theme. Real cases are documented and cited; illustrative cases are clearly labeled and designed to illustrate methods you cannot easily find in publicly documented form.",
            },
            {
              icon: FileText,
              title: 'Glossary',
              href: '/glossary',
              when: 'As needed',
              how: "Return to this whenever a reading or lecture introduces a term without fully defining it, or when you want a practitioner-focused definition rather than an academic one. Each entry includes a 'why it matters in practice' note.",
            },
            {
              icon: Users,
              title: 'Frameworks',
              href: '/frameworks',
              when: 'Modules on analytics maturity and L&D evaluation',
              how: "Use the Frameworks page as a visual quick reference when discussing maturity assessments, organizational analytics capability, or training evaluation. The three frameworks here appear repeatedly in the field and in the course readings.",
            },
          ].map(({ icon: Icon, title, href, when, how }) => (
            <div key={title} className="flex gap-5 p-5 border border-slate-200 rounded-lg">
              <Icon size={20} className="text-teal-600 shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <Link href={href} className="font-serif text-lg font-semibold text-teal-700 hover:text-teal-900 transition-colors">
                    {title}
                  </Link>
                  <span className="text-xs text-slate-400 italic">{when}</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{how}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mb-10 p-6 bg-slate-50 border border-slate-200 rounded-lg" aria-labelledby="about-disclaimer">
        <h2 id="about-disclaimer" className="font-serif text-xl font-semibold text-slate-900 mb-3">
          Accuracy, Attribution, and Limitations
        </h2>
        <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
          <li>
            <strong>Real cases</strong> are based on publicly reported, independently verifiable
            information. Each case cites its sources. We do not invent statistics or attribute
            quotes to real executives.
          </li>
          <li>
            <strong>Illustrative cases</strong> are clearly marked and use realistic but fictional
            data. They are designed to teach methods — not to describe any real organization.
          </li>
          <li>
            <strong>Glossary definitions</strong> are practitioner-adapted, not lifted verbatim from
            textbooks. Where a definition varies by source, we note the most common usage and flag
            the variation.
          </li>
          <li>
            <strong>This site contains no analytics tracking</strong>, no cookies, and no third-party
            scripts. It is a static site deployed on Vercel for academic use.
          </li>
        </ul>
      </section>

      {/* Professor note */}
      <section className="p-6 border-2 border-teal-200 rounded-lg bg-teal-50" aria-labelledby="about-prof">
        <h2 id="about-prof" className="font-serif text-xl font-semibold text-teal-900 mb-3">
          For Instructors: Editing This Site
        </h2>
        <p className="text-sm text-teal-800 leading-relaxed mb-3">
          All case content and long-form prose is in <code className="bg-teal-100 px-1 rounded">/src/app/</code> as TypeScript files. Prose is JSX — editable with basic text knowledge.
          The glossary data is in <code className="bg-teal-100 px-1 rounded">/src/lib/glossary.ts</code> and
          the case registry is in <code className="bg-teal-100 px-1 rounded">/src/lib/cases.ts</code>.
          Refer to <code className="bg-teal-100 px-1 rounded">README.md</code> for detailed editing guidance.
        </p>
        <p className="text-sm text-teal-800">
          Items flagged for instructor review before publication are in{' '}
          <code className="bg-teal-100 px-1 rounded">CONTENT_CHECKLIST.md</code>.
        </p>
      </section>
    </div>
  )
}
