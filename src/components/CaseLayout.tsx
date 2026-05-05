import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft, Building2, BarChart2, Tag } from 'lucide-react'
import IllustrativeBanner from '@/components/IllustrativeBanner'
import CitationsList from '@/components/CitationsList'

interface Citation { id: string; text: string; url?: string }

interface CaseLayoutProps {
  type: 'real' | 'illustrative'
  title: string
  company: string
  companySize: string
  topic: string
  maturity: string
  children: ReactNode
  citations?: Citation[]
}

export default function CaseLayout({
  type,
  title,
  company,
  companySize,
  topic,
  maturity,
  children,
  citations,
}: CaseLayoutProps) {
  return (
    <div className="prose-section">
      {/* Back */}
      <Link
        href="/cases"
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-teal-700 transition-colors mb-8"
      >
        <ArrowLeft size={14} aria-hidden="true" /> All case studies
      </Link>

      {/* Illustrative banner */}
      {type === 'illustrative' && <IllustrativeBanner />}

      {/* Meta row */}
      <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
        <span className="flex items-center gap-1.5">
          <Building2 size={14} aria-hidden="true" />
          <strong className="text-slate-700">{company}</strong>
          <span className="text-slate-400">· {companySize}</span>
        </span>
        <span className="flex items-center gap-1.5">
          <Tag size={14} aria-hidden="true" />
          {topic}
        </span>
        <span className="flex items-center gap-1.5">
          <BarChart2 size={14} aria-hidden="true" />
          <span className="capitalize">{maturity} analytics</span>
        </span>
      </div>

      {/* Title */}
      <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight mb-8 pb-8 border-b border-slate-200">
        {title}
      </h1>

      {/* Body */}
      <article className="prose prose-slate max-w-none
        prose-headings:font-serif prose-headings:text-slate-900
        prose-a:text-teal-700 prose-a:no-underline hover:prose-a:underline
        prose-blockquote:border-teal-500 prose-blockquote:text-slate-700">
        {children}
      </article>

      {/* Citations */}
      {citations && citations.length > 0 && <CitationsList citations={citations} />}
    </div>
  )
}
