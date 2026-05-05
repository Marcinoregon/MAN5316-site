import type { ReactNode } from 'react'
import { ExternalLink } from 'lucide-react'

interface Citation {
  id: string
  text: string
  url?: string
}

interface CitationsListProps {
  citations: Citation[]
}

export default function CitationsList({ citations }: CitationsListProps) {
  return (
    <section aria-labelledby="citations-heading" className="mt-12 pt-8 border-t border-slate-200">
      <h2
        id="citations-heading"
        className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4"
      >
        Sources & Citations
      </h2>
      <ol className="space-y-2">
        {citations.map((c) => (
          <li
            key={c.id}
            id={`cite-${c.id}`}
            className="text-sm text-slate-600 leading-relaxed flex gap-2"
          >
            <span className="text-teal-600 font-medium shrink-0">[{c.id}]</span>
            <span>
              {c.text}
              {c.url && (
                <>
                  {' '}
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 underline inline-flex items-center gap-0.5
                               hover:text-teal-900 transition-colors"
                  >
                    Link
                    <ExternalLink size={11} aria-label="opens in new tab" />
                  </a>
                </>
              )}
            </span>
          </li>
        ))}
      </ol>
    </section>
  )
}
