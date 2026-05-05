'use client'

import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import GlossaryEntry from '@/components/GlossaryEntry'
import { GLOSSARY } from '@/lib/glossary'

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function GlossaryPage() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return GLOSSARY
    return GLOSSARY.filter(
      (e) =>
        e.term.toLowerCase().includes(q) ||
        e.definition.toLowerCase().includes(q) ||
        e.whyItMatters.toLowerCase().includes(q)
    )
  }, [query])

  // Group by first letter
  const grouped = useMemo(() => {
    const map: Record<string, typeof GLOSSARY> = {}
    for (const entry of filtered) {
      const letter = entry.term[0].toUpperCase()
      if (!map[letter]) map[letter] = []
      map[letter].push(entry)
    }
    return map
  }, [filtered])

  const activeLetters = Object.keys(grouped).sort()

  return (
    <div className="section">
      {/* Header */}
      <header className="mb-10 max-w-2xl">
        <p className="text-xs font-semibold text-teal-700 uppercase tracking-widest mb-2">
          Reference
        </p>
        <h1 className="font-serif text-4xl font-semibold text-slate-900 mb-4">Glossary</h1>
        <p className="text-slate-600 leading-relaxed">
          {GLOSSARY.length} terms defined in plain English — each with a practice note and a
          cross-reference. Use the search below or jump to a letter.
        </p>
      </header>

      {/* Search */}
      <div className="max-w-lg mb-8">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <input
            id="glossary-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search terms, definitions…"
            aria-label="Search glossary"
            className="w-full pl-9 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm
                       text-slate-800 bg-white placeholder-slate-400
                       focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        {query && (
          <p className="mt-2 text-xs text-slate-500">
            {filtered.length} {filtered.length === 1 ? 'result' : 'results'} for &ldquo;{query}&rdquo;
          </p>
        )}
      </div>

      {/* Alpha jump links */}
      {!query && (
        <nav aria-label="Jump to letter" className="flex flex-wrap gap-1 mb-10">
          {ALPHABET.map((letter) => {
            const active = activeLetters.includes(letter)
            return active ? (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="w-8 h-8 flex items-center justify-center rounded text-xs font-medium
                           bg-teal-50 text-teal-700 border border-teal-200
                           hover:bg-teal-100 transition-colors"
              >
                {letter}
              </a>
            ) : (
              <span
                key={letter}
                className="w-8 h-8 flex items-center justify-center rounded text-xs text-slate-300"
                aria-hidden="true"
              >
                {letter}
              </span>
            )
          })}
        </nav>
      )}

      {/* Entries */}
      {activeLetters.length === 0 ? (
        <p className="text-slate-500 text-sm py-12 text-center">
          No terms match &ldquo;{query}&rdquo;. Try a shorter search.
        </p>
      ) : (
        <div className="max-w-3xl">
          {activeLetters.map((letter) => (
            <section key={letter} id={`letter-${letter}`} className="mb-8 scroll-mt-20">
              <h2 className="font-serif text-3xl font-semibold text-teal-700 mb-2 pb-2 border-b border-slate-200">
                {letter}
              </h2>
              {grouped[letter].map((entry) => (
                <GlossaryEntry key={entry.slug} {...entry} />
              ))}
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
