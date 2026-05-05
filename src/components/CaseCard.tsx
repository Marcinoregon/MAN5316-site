import Link from 'next/link'
import { ArrowRight, Building2 } from 'lucide-react'

export type CaseType = 'real' | 'illustrative'
export type AnalyticsMaturity = 'descriptive' | 'predictive' | 'prescriptive'

export interface CaseCardProps {
  slug: string
  title: string
  company: string
  companySize?: string
  topic: string
  maturity: AnalyticsMaturity
  type: CaseType
  summary: string
}

const maturityColor: Record<AnalyticsMaturity, string> = {
  descriptive:  'tag-slate',
  predictive:   'tag-teal',
  prescriptive: 'tag-amber',
}

export default function CaseCard({
  slug,
  title,
  company,
  companySize,
  topic,
  maturity,
  type,
  summary,
}: CaseCardProps) {
  return (
    <article className="card group flex flex-col gap-4" aria-label={`Case study: ${title}`}>
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <Building2 size={14} aria-hidden="true" />
          <span className="font-medium text-slate-700">{company}</span>
          {companySize && (
            <span className="text-slate-400">· {companySize}</span>
          )}
        </div>
        {type === 'illustrative' && (
          <span className="tag tag-amber shrink-0">Illustrative</span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl font-semibold text-slate-900 leading-snug">
        {title}
      </h3>

      {/* Summary */}
      <p className="text-slate-600 text-sm leading-relaxed flex-1">{summary}</p>

      {/* Tags + CTA */}
      <div className="flex items-center justify-between mt-2">
        <div className="flex flex-wrap gap-2">
          <span className="tag-teal tag">{topic}</span>
          <span className={maturityColor[maturity]}>{maturity}</span>
        </div>
        <Link
          href={`/cases/${slug}`}
          className="inline-flex items-center gap-1 text-teal-700 text-sm font-medium
                     hover:text-teal-900 transition-colors group-hover:gap-2"
          aria-label={`Read full case: ${title}`}
        >
          Read case
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
