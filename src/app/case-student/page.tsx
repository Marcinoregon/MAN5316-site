import type { Metadata } from 'next'
import CallOut from '@/components/CallOut'

export const metadata: Metadata = {
  title: 'Case Student — Mr. Macky\'s Cajun Cuisine',
  description:
    'A comprehensive HR analytics case study set at Mr. Macky\'s Cajun Cuisine. Use the Mackey Employee Dataset to analyze workforce composition, turnover, adverse impact, compensation equity, and engagement.',
}

function SectionCard({
  number,
  title,
  scenario,
  questions,
}: {
  number: string
  title: string
  scenario: string
  questions: string[]
}) {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden mb-6">
      <div className="bg-teal-700 text-white px-6 py-4 flex items-start gap-4">
        <span className="shrink-0 font-mono text-teal-300 text-sm font-bold mt-0.5">{number}</span>
        <h3 className="font-serif text-lg font-semibold">{title}</h3>
      </div>
      <div className="bg-white px-6 py-5 space-y-4">
        <div className="bg-amber-50 border-l-4 border-amber-400 px-4 py-3 text-sm text-amber-900 leading-relaxed italic">
          &ldquo;{scenario}&rdquo;
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Discussion Questions</p>
          <ol className="list-decimal list-inside space-y-2">
            {questions.map((q, i) => (
              <li key={i} className="text-sm text-slate-700 leading-relaxed">{q}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default function CaseStudentPage() {
  return (
    <div className="prose-section">

      {/* Header */}
      <header className="mb-12 pb-8 border-b border-slate-200">
        <p className="text-xs font-semibold text-teal-700 uppercase tracking-widest mb-3">Applied Case Study</p>
        <h1 className="font-serif text-4xl font-semibold text-slate-900 leading-tight mb-4">
          Mr. Macky&rsquo;s Cajun Cuisine
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed mb-6">
          You&rsquo;ve just been named VP of Human Resources at Mr. Macky&rsquo;s Cajun Cuisine.
          The CEO hands you the Mackey Employee Dataset and says:{' '}
          <em>&ldquo;Fix this. I need a plan by Friday.&rdquo;</em>{' '}
          Use the dataset to answer every question below.
        </p>
        <div className="bg-slate-50 border border-slate-200 rounded-lg px-6 py-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">How to Use This Case Study</p>
          <ol className="list-decimal list-inside space-y-1.5 text-sm text-slate-700">
            <li>Open the Mackey Employee Dataset in Excel or your analysis tool of choice.</li>
            <li>Read each section of the case narrative below.</li>
            <li>Use the dataset to find the data needed to answer each discussion question.</li>
            <li>Support every answer with specific numbers, calculations, or chart references from the data.</li>
            <li>Where indicated, write your response as a memo, recommendation, or analysis.</li>
          </ol>
        </div>
      </header>

      {/* Company Background */}
      <section aria-labelledby="section-background" className="mb-12">
        <h2 id="section-background" className="font-serif text-2xl font-semibold text-slate-900 mb-4">
          Welcome to Mr. Macky&rsquo;s Cajun Cuisine
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Mr. Macky&rsquo;s is a fast-casual restaurant chain operating <strong>148 units</strong> across
          two market types — Large and Medium. The company employs over <strong>6,500 current employees</strong>{' '}
          across 13 job classifications, from Wait Staff and Bartenders to Managers and Assistant Managers.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The company has been growing steadily, but the executive team is concerned about rising labor costs,
          inconsistent unit performance, and questions about workforce equity. They have invested in building
          an HR analytics capability — represented by the Mackey Employee Dataset you are now reviewing —
          to move from gut-feeling decisions to evidence-based decision making.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {[
            { stat: '148', label: 'Restaurant Units' },
            { stat: '6,500+', label: 'Current Employees' },
            { stat: '13', label: 'Job Classifications' },
            { stat: '~5,700', label: 'Annual Separations' },
          ].map(({ stat, label }) => (
            <div key={label} className="bg-teal-50 border border-teal-200 rounded-lg px-4 py-4 text-center">
              <p className="font-serif text-2xl font-bold text-teal-800">{stat}</p>
              <p className="text-xs text-teal-700 mt-1">{label}</p>
            </div>
          ))}
        </div>
        <CallOut variant="insight" title="Your role in this case">
          You are the VP of HR. You have the data. The executive team is asking hard questions and expects
          evidence-based answers — not opinions. Every response should be grounded in specific numbers
          from the Mackey Employee Dataset.
        </CallOut>
      </section>

      {/* The case sections */}
      <section aria-labelledby="section-modules" className="mb-12">
        <h2 id="section-modules" className="font-serif text-2xl font-semibold text-slate-900 mb-6">
          Case Modules
        </h2>

        <SectionCard
          number="Module 1"
          title="Understanding Who Works Here"
          scenario="I've been hearing complaints from our community partners that our management team doesn't look like our customers. I also worry that we're too dependent on one age group. What does the data actually say?"
          questions={[
            'What is the current age distribution across all employees? Is there meaningful concentration in any particular age band?',
            'How does the demographic composition of management-level roles (Manager, Assistant Manager) compare to hourly roles (Wait Staff, Bartenders, Kitchen Staff)? Does representation differ by level?',
            'Using the Mackey Employee Dataset, calculate the percentage of underrepresented minorities (URMs) in management versus non-management positions. What does this suggest about promotional pathways?',
            'What is the gender breakdown by job classification? Are there job families where one gender is overrepresented?',
            'Based on the workforce data, write a brief summary the CEO could share with community partners — factual, specific, and honest about what the data shows.',
          ]}
        />

        <SectionCard
          number="Module 2"
          title="&ldquo;We&rsquo;re Hemorrhaging People&rdquo;"
          scenario="I don't care about company-wide averages anymore. Show me which units are bleeding people and which are retaining them. And tell me whether it's people quitting or us firing them — because those are two very different problems."
          questions={[
            'Calculate the overall annual voluntary and involuntary separation rates. How do they compare to industry benchmarks for fast-casual restaurant chains?',
            'Identify the top 10 highest-turnover restaurant units. What characteristics (market type, unit size, job classification mix) do they share?',
            'Identify the top 10 lowest-turnover units. What distinguishes them from the highest-turnover group?',
            'The CFO estimates $4,000 per hourly separation. Using the dataset\'s separation count, calculate the estimated annual turnover cost. How does this change if voluntary turnover could be reduced by 20%?',
            'Is turnover distributed equally across job classifications, or is it concentrated in specific roles? Which classification has the highest voluntary separation rate?',
          ]}
        />

        <SectionCard
          number="Module 3"
          title="The 4/5ths Rule Problem"
          scenario="If we're below the 4/5ths threshold, we have a legal obligation to justify our selection procedures as job-related. I need you to run the numbers — company-wide and year-by-year — and tell me if we have a problem."
          questions={[
            'Apply the 4/5ths (80%) rule to the company\'s overall hiring data. What is the selection rate for URM applicants vs. non-URM applicants? Does the company pass or fail the threshold?',
            'Break the 4/5ths analysis down by year. Has the pattern improved, worsened, or remained stable over time?',
            'Which job classifications show the most pronounced adverse impact? Which are closest to compliance?',
            'What are the legal implications of failing the 4/5ths threshold under OFCCP guidelines? What documentation would the company need to defend its selection procedures?',
            'Propose three specific, evidence-based interventions the company could implement to address adverse impact without compromising selection quality.',
          ]}
        />

        <SectionCard
          number="Module 4"
          title="&ldquo;We&rsquo;re Paying for Experience — But Is It Worth It?&rdquo;"
          scenario="We're paying a premium for experienced managers, but are we actually getting better performance? Or are we just paying more for the same results — and potentially screening out capable but less-experienced candidates in the process?"
          questions={[
            'Calculate the correlation between years of prior experience and performance ratings for managers in the dataset. What does the correlation coefficient suggest?',
            'Segment managers into experience quartiles (0–2 years, 3–5 years, 6–10 years, 10+ years). How do average performance ratings differ across quartiles?',
            'Is there a statistically meaningful pay premium for higher-experience managers? Calculate the average compensation gap between the lowest and highest experience quartiles.',
            'Given the correlation analysis, is the pay premium for experience justified by the performance data? What alternative variables might better predict management performance?',
            'Write a one-paragraph recommendation to the compensation committee on whether to continue weighting prior experience in hiring and pay decisions. Cite specific numbers.',
          ]}
        />

        <SectionCard
          number="Module 5"
          title="Connecting People Metrics to Profit"
          scenario="The board of directors wants to know: does employee engagement actually affect restaurant performance? They're skeptical. 'Happy employees are nice,' the board chair quips, 'but do they make us money?'"
          questions={[
            'The dataset includes engagement survey scores across nine dimensions (Job Satisfaction, Collaboration, Communication, Support, Customer Focus, Personal Growth, Inclusion, Empowerment, Accountability) and financial data (Sales, COGS, Payroll, Profit) for all 148 units. Calculate the correlation between overall engagement score and unit profit.',
            'Which individual engagement dimension has the strongest correlation with unit profitability? Which has the weakest?',
            'Identify the top 20 most profitable units. How do their engagement scores compare to the bottom 20?',
            'Is the engagement–profit relationship consistent across both market types (Large vs. Medium), or does it appear in only one context?',
            'Prepare a 3-slide executive summary for the board: Slide 1 — the correlation findings; Slide 2 — the business case for investing in engagement; Slide 3 — one specific, low-cost intervention with projected ROI.',
          ]}
        />

        <SectionCard
          number="Module 6"
          title="When the Data Doesn&rsquo;t Add Up"
          scenario="Good analysts don't just read data — they question it. The dataset highlights several counterintuitive findings. These aren't errors — they're patterns that challenge conventional HR wisdom."
          questions={[
            'Identify at least two findings in the dataset that run counter to your initial expectations. Describe what you expected to find and what you actually found.',
            'For each counterintuitive finding, propose at least two alternative explanations. What additional data would you need to distinguish between them?',
            'Are there variables in the dataset that appear correlated but may be confounded by a third variable? Identify one example and explain the confounding mechanism.',
            'How should an HR practitioner communicate an unexpected finding to leadership — especially when the data contradicts a long-held assumption?',
          ]}
        />
      </section>

      {/* Final Deliverable */}
      <section aria-labelledby="section-memo" className="mb-12">
        <h2 id="section-memo" className="font-serif text-2xl font-semibold text-slate-900 mb-4">
          Final Deliverable: Executive Memo
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          The CEO needs your strategic recommendations by end of week. Drawing on your analysis of
          all six modules, write a <strong>1–2 page executive memo</strong> that addresses the following:
        </p>

        <div className="border border-slate-200 rounded-lg overflow-hidden mb-6">
          <div className="bg-slate-800 text-white px-6 py-3">
            <p className="font-serif font-semibold">Your memo must include:</p>
          </div>
          <div className="bg-white divide-y divide-slate-100">
            {[
              {
                n: '1',
                heading: 'Top 3 Workforce Risks',
                detail: 'Identify the most critical HR issues facing Mr. Macky\'s, supported by specific data from the Mackey Employee Dataset.',
              },
              {
                n: '2',
                heading: 'Turnover Reduction Strategy',
                detail: 'Recommend targeted interventions for the highest-turnover units. Explain why a one-size-fits-all approach won\'t work.',
              },
              {
                n: '3',
                heading: 'Adverse Impact Action Plan',
                detail: 'Outline steps to address the 4/5ths rule failure, including both short-term compliance measures and long-term systemic changes.',
              },
              {
                n: '4',
                heading: 'The Experience–Pay Paradox',
                detail: 'Advise the compensation committee on whether to continue valuing prior experience in hiring and pay decisions. Support your recommendation with data.',
              },
              {
                n: '5',
                heading: 'One Data-Driven Quick Win',
                detail: 'Identify one insight from the dataset that could be acted on immediately with minimal cost but meaningful impact.',
              },
            ].map(({ n, heading, detail }) => (
              <div key={n} className="px-6 py-4 flex gap-4">
                <span className="shrink-0 w-6 h-6 rounded-full bg-teal-700 text-white text-xs font-bold flex items-center justify-center mt-0.5">{n}</span>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{heading}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CallOut variant="caution" title="The CEO&rsquo;s standard">
          &ldquo;I don&rsquo;t want gut feelings. I want evidence. Show me the data, tell me what it means,
          and give me a plan I can take to the board.&rdquo;
        </CallOut>
      </section>

      {/* Grading / Evaluation note */}
      <section aria-labelledby="section-grading" className="mb-6">
        <h2 id="section-grading" className="font-serif text-2xl font-semibold text-slate-900 mb-4">
          Evaluation Criteria
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
            <thead className="bg-teal-700 text-white">
              <tr>
                <th className="text-left px-5 py-3 font-semibold">Dimension</th>
                <th className="text-left px-5 py-3 font-semibold">What Evaluators Look For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
              {[
                { dim: 'Data Accuracy', look: 'Calculations are correct; numbers cited match the Mackey Employee Dataset.' },
                { dim: 'Analytical Depth', look: 'Goes beyond surface-level description; interprets what the data means and why it matters.' },
                { dim: 'Business Framing', look: 'Translates analytics findings into business language and organizational implications.' },
                { dim: 'Evidence Standards', look: 'Every claim is supported with a specific statistic, correlation, or chart reference.' },
                { dim: 'Strategic Coherence', look: 'Recommendations are internally consistent, prioritized, and actionable.' },
              ].map(({ dim, look }) => (
                <tr key={dim}>
                  <td className="px-5 py-3 font-medium text-slate-900">{dim}</td>
                  <td className="px-5 py-3">{look}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  )
}
