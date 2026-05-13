import type { Metadata } from 'next'
import CallOut from '@/components/CallOut'

export const metadata: Metadata = {
  title: "Case Study — Mr. Macky's Cajun Cuisine",
  description:
    "You've just been named VP of Human Resources at Mr. Macky's Cajun Cuisine. Use the Mackey Employee Dataset to analyze workforce composition, turnover, adverse impact, compensation, and engagement.",
}

function ExecQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 px-5 py-4 rounded-r-lg my-5">
      <p className="text-sm text-amber-900 leading-relaxed italic">&ldquo;{children}&rdquo;</p>
    </div>
  )
}

export default function CaseStudyPage() {
  return (
    <div className="prose-section">

      {/* Header */}
      <header className="mb-12 pb-8 border-b border-slate-200">
        <p className="text-xs font-semibold text-teal-700 uppercase tracking-widest mb-3">Applied Case Study</p>
        <h1 className="font-serif text-4xl font-semibold text-slate-900 leading-tight mb-4">
          Mr. Macky&rsquo;s Cajun Cuisine
          <span className="block text-xl font-sans font-normal text-slate-500 mt-2">HR Analytics Case Study</span>
        </h1>
        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          You&rsquo;ve just been named VP of Human Resources at Mr. Macky&rsquo;s Cajun Cuisine.
          The CEO hands you the <strong>Mackey Employee Dataset</strong> and says:{' '}
          <em>&ldquo;Fix this. I need a plan by Friday.&rdquo;</em>{' '}
          Use the dataset to answer every question below.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-lg px-6 py-5">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
            📌 How to Use This Case Study
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700">
            <li>Open the Mackey Employee Dataset in Excel or your analysis tool of choice.</li>
            <li>Read each section of the case narrative below.</li>
            <li>Use the dataset&rsquo;s modules (Executive Overview, Modules 1–4, Anomalies) to find the data needed to answer each discussion question.</li>
            <li>Support every answer with specific numbers and data references from the dataset.</li>
            <li>Where indicated, write your response as a memo, recommendation, or analysis.</li>
          </ol>
        </div>
      </header>

      {/* Welcome / Background */}
      <section aria-labelledby="section-welcome" className="mb-12">
        <h2 id="section-welcome" className="font-serif text-2xl font-semibold text-slate-900 mb-4">
          Welcome to Mr. Macky&rsquo;s Cajun Cuisine
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Mr. Macky&rsquo;s is a fast-casual restaurant chain operating <strong>148 units</strong> across
          two market types — Large and Medium. The company employs over <strong>6,500 current employees</strong> across
          13 job classifications, from Wait Staff and Bartenders to Managers and Assistant Managers.
        </p>
        <p className="text-slate-700 leading-relaxed">
          The company has been growing steadily, but the executive team is concerned about rising labor costs,
          inconsistent unit performance, and questions about workforce equity. They have invested in building an
          HR analytics capability — represented by the Mackey Employee Dataset you are now reviewing — to move
          from gut-feeling decisions to evidence-based decision making (EBDM).
        </p>
      </section>

      {/* Section 1 */}
      <section aria-labelledby="section-1" className="mb-12">
        <h2 id="section-1" className="font-serif text-2xl font-semibold text-slate-900 mb-2">
          Understanding Who Works Here
        </h2>
        <p className="text-slate-700 leading-relaxed mb-1">
          Your first task as VP of HR is to understand the current workforce composition. The CEO has heard
          that the company is &ldquo;too young&rdquo; and &ldquo;doesn&rsquo;t reflect the communities we
          serve.&rdquo; She wants data, not opinions.
        </p>
        <ExecQuote>
          I&rsquo;ve been hearing complaints from our community partners that our management team doesn&rsquo;t
          look like our customers. I also worry that we&rsquo;re too dependent on one age group. What does
          the data actually say?
        </ExecQuote>
      </section>

      {/* Section 2 */}
      <section aria-labelledby="section-2" className="mb-12">
        <h2 id="section-2" className="font-serif text-2xl font-semibold text-slate-900 mb-2">
          &ldquo;We&rsquo;re Hemorrhaging People&rdquo;
        </h2>
        <p className="text-slate-700 leading-relaxed mb-1">
          The CFO drops a bombshell in the weekly leadership meeting: the company processes approximately{' '}
          <strong>5,700 separations per year</strong>. At an estimated <strong>$4,000 per hourly
          separation</strong>, that&rsquo;s potentially <strong>$22+ million per year</strong> in turnover
          costs. But not all turnover is equal — and not all units suffer the same.
        </p>
        <ExecQuote>
          I don&rsquo;t care about company-wide averages anymore. Show me which units are bleeding people
          and which are retaining them. And tell me whether it&rsquo;s people quitting or us firing them —
          because those are two very different problems.
        </ExecQuote>
      </section>

      {/* Section 3 */}
      <section aria-labelledby="section-3" className="mb-12">
        <h2 id="section-3" className="font-serif text-2xl font-semibold text-slate-900 mb-2">
          The 4/5ths Rule Problem
        </h2>
        <p className="text-slate-700 leading-relaxed mb-1">
          The Chief Legal Officer has flagged a potential issue. A recent OFCCP (Office of Federal Contract
          Compliance Programs) audit notice arrived, and the company needs to demonstrate that its hiring
          practices don&rsquo;t create adverse impact against underrepresented minorities (URMs).
        </p>
        <ExecQuote>
          If we&rsquo;re below the 4/5ths threshold, we have a legal obligation to justify our selection
          procedures as job-related. I need you to run the numbers — company-wide and year-by-year — and
          tell me if we have a problem.
        </ExecQuote>
      </section>

      {/* Section 4 */}
      <section aria-labelledby="section-4" className="mb-12">
        <h2 id="section-4" className="font-serif text-2xl font-semibold text-slate-900 mb-2">
          &ldquo;We&rsquo;re Paying for Experience — But Is It Worth It?&rdquo;
        </h2>
        <p className="text-slate-700 leading-relaxed mb-1">
          The compensation committee has raised a provocative question: the company has traditionally valued
          experience in its pay structure and hiring criteria. But a junior analyst noticed something strange
          in the data — experience doesn&rsquo;t seem to predict performance.
        </p>
        <ExecQuote>
          We&rsquo;re paying a premium for experienced managers, but are we actually getting better
          performance? Or are we just paying more for the same results — and potentially screening out
          capable but less-experienced candidates in the process?
        </ExecQuote>
      </section>

      {/* Section 5 */}
      <section aria-labelledby="section-5" className="mb-12">
        <h2 id="section-5" className="font-serif text-2xl font-semibold text-slate-900 mb-2">
          Connecting People Metrics to Profit
        </h2>
        <p className="text-slate-700 leading-relaxed">
          The board of directors wants to know: does employee engagement actually affect restaurant performance?
          They&rsquo;re skeptical. &ldquo;Happy employees are nice,&rdquo; the board chair quips,
          &ldquo;but do they make us money?&rdquo;
        </p>
        <p className="text-slate-700 leading-relaxed mt-3">
          You have engagement survey data across <strong>9 dimensions</strong> (Job Satisfaction,
          Collaboration, Communication, Support, Customer Focus, Personal Growth, Inclusion, Empowerment,
          Accountability) for every unit, plus financial data (Sales, COGS, Payroll, Profit) for all
          148 restaurants.
        </p>
      </section>

      {/* Section 6 */}
      <section aria-labelledby="section-6" className="mb-12">
        <h2 id="section-6" className="font-serif text-2xl font-semibold text-slate-900 mb-2">
          When the Data Doesn&rsquo;t Add Up
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Good analysts don&rsquo;t just read data — they question it. The Mackey Employee Dataset highlights
          several counterintuitive findings in the data. These aren&rsquo;t &ldquo;errors&rdquo; — they&rsquo;re
          patterns that challenge conventional HR wisdom.
        </p>
      </section>

      {/* Final Deliverable */}
      <section aria-labelledby="section-memo" className="mb-6">
        <p className="text-slate-700 leading-relaxed mb-4">
          The CEO needs your strategic recommendations by end of week. Drawing on your analysis of all
          four modules, write a <strong>1–2 page executive memo</strong> that addresses the following:
        </p>

        <div className="border border-slate-200 rounded-lg overflow-hidden mb-6">
          <div className="bg-slate-800 text-white px-6 py-3">
            <p className="font-serif font-semibold">📝 Your memo should include:</p>
          </div>
          <div className="bg-white divide-y divide-slate-100">
            {[
              {
                n: '1',
                heading: 'Top 3 Workforce Risks',
                detail: "Identify the most critical HR issues facing Mr. Macky's, supported by specific data from the Mackey Employee Dataset.",
              },
              {
                n: '2',
                heading: 'Turnover Reduction Strategy',
                detail: "Recommend targeted interventions for the highest-turnover units. Explain why a one-size-fits-all approach won't work.",
              },
              {
                n: '3',
                heading: 'Adverse Impact Action Plan',
                detail: 'Outline steps to address the 4/5ths rule failure, including both short-term compliance measures and long-term systemic changes.',
              },
              {
                n: '4',
                heading: 'The Experience-Pay Paradox',
                detail: 'Advise the compensation committee on whether to continue valuing prior experience in hiring and pay decisions. Support your recommendation with data.',
              },
              {
                n: '5',
                heading: 'One Data-Driven "Quick Win"',
                detail: 'Identify one insight from the dataset that could be acted on immediately with minimal cost but meaningful impact.',
              },
            ].map(({ n, heading, detail }) => (
              <div key={n} className="px-6 py-4 flex gap-4">
                <span className="shrink-0 w-6 h-6 rounded-full bg-teal-700 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  {n}
                </span>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{heading}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CallOut variant="caution" title="The CEO's standard">
          &ldquo;I don&rsquo;t want gut feelings. I want evidence. Show me the data, tell me what it means,
          and give me a plan I can take to the board.&rdquo;
        </CallOut>
      </section>

    </div>
  )
}
