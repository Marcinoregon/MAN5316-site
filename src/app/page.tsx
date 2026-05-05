import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, BarChart2, Users } from 'lucide-react'
import CaseCard from '@/components/CaseCard'
import { CASES } from '@/lib/cases'

export const metadata: Metadata = {
  title: 'HR Analytics — MAN 6316 Course Companion',
  description:
    'A course companion for HR Analytics (MAN 6316) exploring data-informed HR decisions, real-world case studies, and a practitioner-grade glossary.',
}

const VALUE_PROPS = [
  {
    icon: BarChart2,
    title: 'From Administrative to Strategic',
    body:
      'Analytics reframes HR\'s role: from tracking what happened to shaping what happens next. Explore the evidence that data-informed HR decisions move business outcomes.',
    href: '/why-it-matters',
    cta: 'Read the argument',
  },
  {
    icon: BookOpen,
    title: 'Real and Illustrative Cases',
    body:
      'Twelve case studies — six from named companies, six carefully constructed illustrative scenarios — show how analytics solves the problems you see every week.',
    href: '/cases',
    cta: 'Browse case studies',
  },
  {
    icon: Users,
    title: 'A Glossary You Will Actually Use',
    body:
      'Forty-plus terms defined in plain English, with practice context and cross-references. The reference you reach for when a reading drops a term without explanation.',
    href: '/glossary',
    cta: 'Explore the glossary',
  },
]

const FEATURED_CASES = CASES.filter((c) =>
  ['google-project-oxygen', 'ibm-predictive-attrition', 'best-buy-engagement'].includes(c.slug)
)

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-teal-700 uppercase tracking-widest mb-4">
              MAN 6316 · MS Human Resource Management
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-slate-900 leading-tight mb-6">
              HR Analytics:<br />
              <span className="text-teal-700">evidence over intuition</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              You already know HR. This companion site shows you how data strengthens the decisions
              you make every day — without asking you to become a data scientist.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/why-it-matters" className="btn-primary">
                Start here <ArrowRight size={15} aria-hidden="true" />
              </Link>
              <Link href="/cases" className="btn-ghost">
                View case studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value propositions */}
      <section className="section" aria-labelledby="value-prop-heading">
        <h2 id="value-prop-heading" className="sr-only">
          What this site offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VALUE_PROPS.map(({ icon: Icon, title, body, href, cta }) => (
            <div key={title} className="card flex flex-col gap-4">
              <Icon size={22} className="text-teal-600" aria-hidden="true" />
              <h3 className="font-serif text-xl font-semibold text-slate-900">{title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">{body}</p>
              <Link
                href={href}
                className="inline-flex items-center gap-1 text-teal-700 text-sm font-medium hover:text-teal-900 transition-colors"
                aria-label={cta + ' — ' + title}
              >
                {cta} <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <hr className="border-slate-200 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" />

      {/* Featured cases */}
      <section className="section" aria-labelledby="featured-cases-heading">
        <div className="flex items-end justify-between mb-8">
          <h2
            id="featured-cases-heading"
            className="font-serif text-2xl font-semibold text-slate-900"
          >
            Featured Cases
          </h2>
          <Link
            href="/cases"
            className="text-sm text-teal-700 font-medium hover:text-teal-900 transition-colors inline-flex items-center gap-1"
          >
            All cases <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_CASES.map((c) => (
            <CaseCard key={c.slug} {...c} />
          ))}
        </div>
      </section>

      {/* Glossary CTA strip */}
      <section className="bg-teal-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl font-semibold mb-2">
              Unfamiliar with a term?
            </h2>
            <p className="text-teal-100 text-sm max-w-md">
              The glossary defines 40+ HR analytics concepts in plain English — each with a
              practice note and a cross-reference.
            </p>
          </div>
          <Link
            href="/glossary"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-teal-800 px-5 py-2.5 rounded text-sm font-medium hover:bg-teal-50 transition-colors"
          >
            Open glossary <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
