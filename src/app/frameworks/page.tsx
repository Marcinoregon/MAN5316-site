import type { Metadata } from 'next'
import MaturityLadder from '@/components/MaturityLadder'
import CallOut from '@/components/CallOut'
import CitationsList from '@/components/CitationsList'

export const metadata: Metadata = {
  title: 'Frameworks',
  description: 'Visual reference for the HR analytics maturity model, the Bersin maturity framework, and the Kirkpatrick model for L&D evaluation.',
}

export default function FrameworksPage() {
  return (
    <div className="section max-w-4xl">
      <header className="mb-12">
        <p className="text-xs font-semibold text-teal-700 uppercase tracking-widest mb-2">
          Reference
        </p>
        <h1 className="font-serif text-4xl font-semibold text-slate-900 mb-4">
          Frameworks
        </h1>
        <p className="text-slate-600 leading-relaxed max-w-2xl">
          Three frameworks appear repeatedly in HR analytics literature and practice. Each is
          summarized here for quick reference and linked to its source.
        </p>
      </header>

      {/* Framework 1: Maturity Ladder */}
      <section aria-labelledby="fw-maturity" className="mb-16">
        <h2 id="fw-maturity" className="font-serif text-2xl font-semibold text-slate-900 mb-2">
          1. The HR Analytics Maturity Ladder
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-2xl">
          The most widely cited framework for situating an organization's current analytics
          capability. Adapts the Gartner / Bersin descriptive–predictive–prescriptive continuum
          to HR-specific applications.
        </p>
        <MaturityLadder />
        <CallOut variant="source" title="Origins">
          This framework draws on work by Bersin & Associates (2012), Gartner's analytics maturity
          model, and SHRM Foundation reporting on workforce analytics adoption. The specific HR
          application examples are practitioner-adapted, not directly quoted.
        </CallOut>
      </section>

      {/* Framework 2: Bersin HR Analytics Maturity Model */}
      <section aria-labelledby="fw-bersin" className="mb-16">
        <h2 id="fw-bersin" className="font-serif text-2xl font-semibold text-slate-900 mb-4">
          2. Bersin's HR Analytics Maturity Model (Four Levels)
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-2xl">
          Bersin by Deloitte developed a four-level model that is more granular than the
          descriptive/predictive/prescriptive ladder and more commonly referenced in formal HR
          analytics literature.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              level: 'Level 1',
              title: 'Operational Reporting',
              color: 'border-slate-300 bg-slate-50',
              description:
                'Basic headcount, turnover, and compliance reports. Data is produced reactively, typically on request or on a fixed schedule. No forecasting or trend analysis.',
              examples: ['Monthly headcount report', 'Annual turnover rate', 'Time-to-fill by requisition'],
            },
            {
              level: 'Level 2',
              title: 'Advanced Reporting',
              color: 'border-slate-400 bg-slate-100',
              description:
                'Standardized dashboards, benchmarking against prior periods, and segmented data views. HR can answer "why did this happen?" by slicing data across departments, roles, or time.',
              examples: ['Manager-level turnover breakdown', 'Engagement trend by business unit', 'Time-to-fill vs. benchmark'],
            },
            {
              level: 'Level 3',
              title: 'Strategic Analytics',
              color: 'border-teal-400 bg-teal-50',
              description:
                'Modeling and forecasting that informs talent decisions: attrition prediction, workforce demand forecasting, survey driver analysis. Begins to link HR metrics to business outcomes.',
              examples: ['Flight-risk models', 'Engagement driver analysis', 'Workforce demand forecasting'],
            },
            {
              level: 'Level 4',
              title: 'Predictive Analytics',
              color: 'border-amber-400 bg-amber-50',
              description:
                'Organization-wide data integration, machine learning, and optimization models that directly shape business strategy. HR analytics is embedded in strategic planning at executive level.',
              examples: ["IBM's attrition model", 'AI-assisted succession planning', 'Prescriptive L&D pathways'],
            },
          ].map(({ level, title, color, description, examples }) => (
            <div key={level} className={`border-2 rounded-lg p-5 ${color}`}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                {level}
              </p>
              <h3 className="font-serif text-lg font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-3">{description}</p>
              <ul className="text-xs text-slate-600 space-y-1">
                {examples.map((ex) => (
                  <li key={ex} className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-400 shrink-0" aria-hidden="true" />
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <CallOut variant="source" title="Source">
          Bersin, J. (2012). <em>The HR Analytics Fact Book 2012</em>. Bersin &amp; Associates.
          The four-level model has been updated in subsequent Bersin by Deloitte research; the
          version above reflects the most commonly cited academic adaptation.
        </CallOut>
      </section>

      {/* Framework 3: Kirkpatrick */}
      <section aria-labelledby="fw-kirkpatrick" className="mb-16">
        <h2 id="fw-kirkpatrick" className="font-serif text-2xl font-semibold text-slate-900 mb-4">
          3. The Kirkpatrick Model: Evaluating L&amp;D Effectiveness
        </h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-2xl">
          Developed by Donald Kirkpatrick in 1959 and updated by James and Wendy Kirkpatrick in
          2016, this model provides a framework for evaluating the effectiveness of training and
          development programs across four levels of evidence.
        </p>

        <div className="space-y-3">
          {[
            {
              level: 'Level 1',
              title: 'Reaction',
              question: 'Did participants find the training favorable and relevant?',
              method: 'Post-training surveys, participant satisfaction ratings.',
              limit: 'The most common and least informative level. Positive reactions do not predict learning or behavior change.',
              color: 'border-slate-300',
            },
            {
              level: 'Level 2',
              title: 'Learning',
              question: 'Did participants acquire the intended knowledge, skills, or attitudes?',
              method: 'Pre/post knowledge assessments, skills demonstrations, attitude surveys.',
              limit: 'Learning measured in training does not reliably predict on-the-job application.',
              color: 'border-slate-400',
            },
            {
              level: 'Level 3',
              title: 'Behavior',
              question: 'Did participants apply what they learned on the job?',
              method: '360-degree feedback, manager observation, behavioral self-report at 30/60/90 days.',
              limit: 'Behavior change requires support from the work environment; training alone is often insufficient.',
              color: 'border-teal-500',
            },
            {
              level: 'Level 4',
              title: 'Results',
              question: 'Did the training produce measurable business outcomes?',
              method: 'Revenue, productivity, quality, retention metrics — with control group comparison where possible.',
              limit: 'Attribution is difficult. Many factors affect results simultaneously. Requires pre-program data collection.',
              color: 'border-amber-500',
            },
          ].map(({ level, title, question, method, limit, color }) => (
            <div key={level} className={`border-l-4 ${color} pl-5 py-4 bg-white border border-l-4 border-slate-100 rounded-r-lg`}>
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide shrink-0">{level}</span>
                <h3 className="font-serif text-lg font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="text-sm text-slate-700 mb-1"><span className="font-medium">Key question:</span> {question}</p>
              <p className="text-sm text-slate-600 mb-1"><span className="font-medium">How to measure:</span> {method}</p>
              <p className="text-xs text-amber-800 bg-amber-50 rounded px-2 py-1 mt-2">{limit}</p>
            </div>
          ))}
        </div>

        <CallOut variant="source" title="Source">
          Kirkpatrick, D. L. (1994). <em>Evaluating Training Programs: The Four Levels</em>.
          Berrett-Koehler. Updated model: Kirkpatrick, J. D., &amp; Kirkpatrick, W. K. (2016).
          <em>Kirkpatrick's Four Levels of Training Evaluation</em>. ATD Press.
        </CallOut>
      </section>

      <CitationsList citations={[
        { id: '1', text: 'Bersin, J. (2012). The HR Analytics Fact Book 2012. Bersin & Associates.' },
        { id: '2', text: 'Kirkpatrick, D. L. (1994). Evaluating Training Programs: The Four Levels. Berrett-Koehler.' },
        { id: '3', text: 'Kirkpatrick, J. D., & Kirkpatrick, W. K. (2016). Kirkpatrick\'s Four Levels of Training Evaluation. ATD Press.' },
        { id: '4', text: 'SHRM Foundation. (2016). Use of Workforce Analytics for Competitive Advantage. Society for Human Resource Management.', url: 'https://www.shrm.org/foundation/ourwork/initiatives/workforce-analytics/pages/default.aspx' },
      ]} />
    </div>
  )
}
