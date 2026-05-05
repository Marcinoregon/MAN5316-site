'use client'

import { useState, useMemo } from 'react'
import CaseCard from '@/components/CaseCard'
import { CASES, type CaseType, type AnalyticsMaturity } from '@/lib/cases'
import { SlidersHorizontal } from 'lucide-react'

const TOPICS = Array.from(new Set(CASES.map((c) => c.topic))).sort()

export default function CasesPage() {
  const [typeFilter, setTypeFilter] = useState<CaseType | 'all'>('all')
  const [maturityFilter, setMaturityFilter] = useState<AnalyticsMaturity | 'all'>('all')
  const [topicFilter, setTopicFilter] = useState<string>('all')

  const filtered = useMemo(
    () =>
      CASES.filter(
        (c) =>
          (typeFilter === 'all' || c.type === typeFilter) &&
          (maturityFilter === 'all' || c.maturity === maturityFilter) &&
          (topicFilter === 'all' || c.topic === topicFilter)
      ),
    [typeFilter, maturityFilter, topicFilter]
  )

  return (
    <div className="section">
      <header className="mb-10">
        <p className="text-xs font-semibold text-teal-700 uppercase tracking-widest mb-2">
          Case Library
        </p>
        <h1 className="font-serif text-4xl font-semibold text-slate-900 mb-4">
          Case Studies
        </h1>
        <p className="text-slate-600 max-w-2xl leading-relaxed">
          Six cases from named companies and six illustrative scenarios. Filter by topic,
          analytics maturity, or source type.
        </p>
      </header>

      {/* Filters */}
      <div
        className="flex flex-wrap gap-4 items-center mb-8 p-4 bg-white border border-slate-200 rounded-lg"
        role="group"
        aria-label="Case filters"
      >
        <SlidersHorizontal size={16} className="text-slate-400" aria-hidden="true" />

        <div className="flex items-center gap-2">
          <label htmlFor="filter-type" className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
            Type
          </label>
          <select
            id="filter-type"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value as CaseType | 'all')}
            className="text-sm border border-slate-200 rounded px-2 py-1 text-slate-700 bg-white focus-visible:outline-teal-600"
          >
            <option value="all">All</option>
            <option value="real">Real</option>
            <option value="illustrative">Illustrative</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="filter-maturity" className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
            Maturity
          </label>
          <select
            id="filter-maturity"
            value={maturityFilter}
            onChange={(e) => setMaturityFilter(e.target.value as AnalyticsMaturity | 'all')}
            className="text-sm border border-slate-200 rounded px-2 py-1 text-slate-700 bg-white focus-visible:outline-teal-600"
          >
            <option value="all">All</option>
            <option value="descriptive">Descriptive</option>
            <option value="predictive">Predictive</option>
            <option value="prescriptive">Prescriptive</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="filter-topic" className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
            Topic
          </label>
          <select
            id="filter-topic"
            value={topicFilter}
            onChange={(e) => setTopicFilter(e.target.value)}
            className="text-sm border border-slate-200 rounded px-2 py-1 text-slate-700 bg-white focus-visible:outline-teal-600"
          >
            <option value="all">All</option>
            {TOPICS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <span className="ml-auto text-xs text-slate-400">
          {filtered.length} of {CASES.length} cases
        </span>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="text-slate-500 text-sm py-12 text-center">
          No cases match those filters. Try broadening your selection.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <CaseCard key={c.slug} {...c} />
          ))}
        </div>
      )}
    </div>
  )
}
