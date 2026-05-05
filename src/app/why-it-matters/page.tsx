import type { Metadata } from 'next'
import Link from 'next/link'
import MaturityLadder from '@/components/MaturityLadder'
import CallOut from '@/components/CallOut'
import CitationsList from '@/components/CitationsList'
import TermLink from '@/components/TermLink'

export const metadata: Metadata = {
  title: 'Why HR Analytics Matters',
  description:
    'The case for data-informed HR: the shift from administrative to strategic, the analytics maturity ladder, the economic stakes of workforce decisions, and honest answers to practitioner skepticism.',
}

const CITATIONS = [
  {
    id: '1',
    text: 'Lawler, E. E., Levenson, A., & Boudreau, J. W. (2004). HR metrics and analytics: Use and impact. Human Resource Planning, 27(4), 27–35.',
  },
  {
    id: '2',
    text: 'Ulrich, D., & Dulebohn, J. H. (2015). Are we there yet? What\'s next for HR? Human Resource Management Review, 25(2), 188–204.',
    url: 'https://doi.org/10.1016/j.hrmr.2015.01.004',
  },
  {
    id: '3',
    text: 'SHRM Foundation. (2016). Use of workforce analytics for competitive advantage. Society for Human Resource Management.',
    url: 'https://www.shrm.org/foundation/ourwork/initiatives/workforce-analytics/pages/default.aspx',
  },
  {
    id: '4',
    text: 'Bersin, J. (2012). The HR analytics fact book 2012. Bersin & Associates.',
  },
  {
    id: '5',
    text: 'Society for Human Resource Management. (2023). The cost of a bad hire. SHRM Research.',
    url: 'https://www.shrm.org/resourcesandtools/hr-topics/talent-acquisition/pages/the-cost-of-a-bad-hire.aspx',
  },
  {
    id: '6',
    text: 'Gallup. (2023). State of the global workplace: 2023 report. Gallup, Inc.',
    url: 'https://www.gallup.com/workplace/349484/state-of-the-global-workplace.aspx',
  },
  {
    id: '7',
    text: 'Cappelli, P. (2017). There\'s no such thing as big data in HR. Harvard Business Review.',
    url: 'https://hbr.org/2017/06/theres-no-such-thing-as-big-data-in-hr',
  },
  {
    id: '8',
    text: 'O\'Neil, C. (2016). Weapons of math destruction: How big data increases inequality and threatens democracy. Crown Publishers.',
  },
]

export default function WhyItMattersPage() {
  return (
    <div className="prose-section">
      {/* Page header */}
      <header className="mb-12 pb-8 border-b border-slate-200">
        <p className="text-xs font-semibold text-teal-700 uppercase tracking-widest mb-3">
          Foundations
        </p>
        <h1 className="font-serif text-4xl font-semibold text-slate-900 leading-tight mb-4">
          Why HR Analytics Matters
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          The case for evidence-informed HR — and an honest account of what it can and cannot do.
        </p>
      </header>

      {/* Section A: Administrative to Strategic */}
      <section aria-labelledby="section-shift" className="mb-12">
        <h2
          id="section-shift"
          className="font-serif text-2xl font-semibold text-slate-900 mb-4"
        >
          A. The Shift from Administrative to Strategic HR
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          For most of the twentieth century, the primary question HR answered was: <em>Is everything compliant?</em> Payroll ran, benefits enrolled, files stayed current. That work is not trivial — it protects employees and the organization. But it is not the same as strategy.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The shift began in earnest in the 1990s when researchers like Dave Ulrich proposed a "business partner" model: HR professionals embedded in business units, helping leaders make talent decisions with the same rigor applied to financial or operational decisions. <sup>[2]</sup>
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Analytics accelerates that shift. When HR can show that a manager's team loses people at twice the organizational rate — and that this costs $240,000 per year in replacement expenses — the conversation changes. It moves from "please attend this leadership training" to "here is the business case for this investment." <sup>[1]</sup>
        </p>
        <CallOut variant="insight" title="What 'strategic' actually means in practice">
          Strategic HR does not mean abandoning compliance and administration. It means connecting workforce decisions — hiring, development, retention, compensation — to the outcomes the business is trying to produce. Analytics provides the connective tissue.
        </CallOut>
        <p className="text-slate-700 leading-relaxed mb-4">
          This shift is not complete everywhere. Many HR functions remain primarily administrative, and that is often a resource and culture problem, not a knowledge problem. Understanding analytics does not require a data science degree; it requires knowing which questions to ask and how to interpret the answers your analysts bring back.
        </p>
      </section>

      {/* Section B: Maturity ladder */}
      <section aria-labelledby="section-maturity" className="mb-12">
        <h2
          id="section-maturity"
          className="font-serif text-2xl font-semibold text-slate-900 mb-4"
        >
          B. The Analytics Maturity Ladder
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          HR analytics is not one thing. It spans a spectrum from basic counting to machine-learning-powered forecasting. The <em>analytics maturity ladder</em> — adapted from frameworks by Bersin &amp; Associates and others — organizes this spectrum into three levels. <sup>[4]</sup>
        </p>
        <MaturityLadder />
        <p className="text-slate-700 leading-relaxed mt-6 mb-4">
          Most HR organizations operate primarily at the descriptive level, and that is fine — <TermLink term="descriptive analytics" /> is the foundation everything else is built on. Rushing to predictive modeling with poor data quality produces confidently wrong answers.
        </p>
        <CallOut variant="caution" title="Maturity is not a race">
          Organizations that jump to predictive or prescriptive analytics without first cleaning their HRIS data and standardizing their <TermLink term="KPI vs. Metric">KPIs</TermLink> frequently produce impressive-looking models that practitioners immediately distrust — and stop using.
        </CallOut>
      </section>

      {/* Section C: Economic stakes */}
      <section aria-labelledby="section-economics" className="mb-12">
        <h2
          id="section-economics"
          className="font-serif text-2xl font-semibold text-slate-900 mb-4"
        >
          C. The Economic Stakes of Workforce Decisions
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Workforce decisions are among the largest financial decisions organizations make. They are just rarely framed that way.
        </p>

        <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">Turnover costs</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          SHRM estimates that replacing an employee costs between 50% and 200% of that employee's annual salary, depending on role complexity and seniority. <sup>[5]</sup> For a team of 50 people with 20% annual <TermLink term="attrition vs. turnover">turnover</TermLink> at an average salary of $70,000, that is a replacement cost of $700,000 to $1.4 million per year — before accounting for lost productivity during the vacancy and the new hire's ramp period.
        </p>

        <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">Engagement and revenue</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Gallup's 2023 State of the Global Workplace report found that low employee engagement costs the global economy an estimated $8.8 trillion annually — roughly 9% of global GDP. <sup>[6]</sup> Organizations with highly engaged workforces show 21% higher profitability and 17% higher productivity than those with low engagement.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The Best Buy case study (see the <Link href="/cases/best-buy-engagement" className="text-teal-700 underline hover:text-teal-900">Cases section</Link>) quantified this linkage directly: a 0.1-point improvement in an engagement score corresponded to $100,000 in additional annual operating income per store.
        </p>

        <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">Productivity gaps</h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Microsoft's Workplace Analytics research found that during the shift to hybrid work, collaborative time increased by 40% while deep-focus work declined. Meeting overload and after-hours messaging became measurable productivity drains — visible only because behavioral data was being tracked. <sup>[3]</sup>
        </p>
        <CallOut variant="source" title="Methodological note">
          These figures come from population-level studies and industry surveys. Your organization's numbers will differ. The purpose of citing them is not to import a benchmark — it is to demonstrate that the category of cost is large enough to justify the analytical investment.
        </CallOut>
      </section>

      {/* Section D: Objections */}
      <section aria-labelledby="section-objections" className="mb-12">
        <h2
          id="section-objections"
          className="font-serif text-2xl font-semibold text-slate-900 mb-4"
        >
          D. Common Practitioner Objections — and Honest Rebuttals
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Skepticism about HR analytics is legitimate. The field has oversold itself and produced some genuinely harmful outcomes. Below are the objections heard most often, with direct responses.
        </p>

        {[
          {
            objection: '"HR is about people. You can\'t reduce people to numbers."',
            rebuttal:
              'Agreed — and no serious analytics practitioner argues otherwise. The question is not whether people are reducible to numbers; it is whether data can make HR decisions more equitable and effective than pure intuition. The evidence suggests it can — particularly for decisions made at scale, where individual judgment cannot realistically operate. Analytics is a supplement to human judgment, not a replacement for it.',
          },
          {
            objection: '"We don\'t have good data."',
            rebuttal:
              "Probably true, and worth fixing. Poor data is the most common bottleneck in HR analytics — not lack of statistical sophistication. Start by auditing what you have: Are job codes standardized? Are termination reasons coded consistently? Can you match employees to managers reliably? Cleaning your HRIS is a legitimate analytics project.",
          },
          {
            objection: '"Leadership won\'t act on the findings anyway."',
            rebuttal:
              'This is a presentation and influence problem, not an analytics problem. A 47-slide deck with 200 charts will not change behavior. A single, well-framed financial impact estimate — "our voluntary exits in the first year cost us $1.2M annually, and this intervention has a projected 40% reduction" — might. Frame findings as decisions, not reports.',
          },
          {
            objection: '"AI in HR is biased and dangerous."',
            rebuttal:
              "This objection is not wrong — it is incomplete. Algorithmic bias in hiring and promotion is a real and documented problem. <sup>[8]</sup> But human judgment is also biased, often less transparently so. The appropriate response is not to reject analytics but to audit models for disparate impact, require explainability, and maintain human review in high-stakes decisions. The standard should be: is this better than the alternative?",
          },
          {
            objection: '"We\'re too small for analytics."',
            rebuttal:
              "You may be too small for predictive modeling (which requires large samples), but you are never too small for descriptive analytics. Knowing your time-to-fill, your first-year retention rate, and your manager-specific attrition is not a big-data problem — it is a spreadsheet problem. Start there.",
          },
        ].map(({ objection, rebuttal }) => (
          <div key={objection} className="mb-6 border border-slate-200 rounded-lg p-6">
            <p className="font-serif text-lg font-semibold text-slate-800 mb-3 italic">
              {objection}
            </p>
            <p
              className="text-slate-700 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: rebuttal }}
            />
          </div>
        ))}
      </section>

      <CitationsList citations={CITATIONS} />
    </div>
  )
}
