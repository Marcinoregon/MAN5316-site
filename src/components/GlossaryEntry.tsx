import type { ReactNode } from 'react'
import Link from 'next/link'

interface GlossaryEntryProps {
  term: string
  slug: string
  definition: string
  whyItMatters: string
  seeAlso?: { term: string; slug: string }
}

export default function GlossaryEntry({
  term,
  slug,
  definition,
  whyItMatters,
  seeAlso,
}: GlossaryEntryProps) {
  return (
    <div
      id={slug}
      className="glossary-entry scroll-mt-20"
      aria-labelledby={`term-${slug}`}
    >
      <h3
        id={`term-${slug}`}
        className="font-serif text-xl font-semibold text-slate-900 mb-2"
      >
        {term}
      </h3>
      <p className="text-slate-700 text-sm leading-relaxed mb-2">{definition}</p>
      <div className="callout-insight callout text-sm mb-2">
        <span className="font-semibold">In practice: </span>
        {whyItMatters}
      </div>
      {seeAlso && (
        <p className="text-xs text-slate-500">
          See also:{' '}
          <Link
            href={`/glossary#${seeAlso.slug}`}
            className="text-teal-700 underline decoration-dotted hover:decoration-solid"
          >
            {seeAlso.term}
          </Link>
        </p>
      )}
    </div>
  )
}
