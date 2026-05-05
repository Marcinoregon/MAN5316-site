import Link from 'next/link'
import type { ReactNode } from 'react'

interface TermLinkProps {
  term: string          // glossary anchor slug, e.g. "attrition"
  children?: ReactNode  // display text; defaults to term
}

export default function TermLink({ term, children }: TermLinkProps) {
  return (
    <Link
      href={`/glossary#${term.toLowerCase().replace(/\s+/g, '-')}`}
      className="text-teal-700 underline decoration-dotted hover:decoration-solid
                 hover:text-teal-900 transition-colors"
      title={`Go to glossary: ${term}`}
    >
      {children ?? term}
    </Link>
  )
}
