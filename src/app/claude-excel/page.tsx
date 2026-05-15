import { Metadata } from 'next'
import {
  Bot,
  FileSpreadsheet,
  ShieldAlert,
  Sparkles,
  TableProperties,
  TriangleAlert,
  CheckCircle2,
  Video,
  MousePointerClick,
  MessageSquare,
  ArrowRight,
} from 'lucide-react'
import CallOut from '@/components/CallOut'
import CopyButton from '@/components/CopyButton'

export const metadata: Metadata = {
  title: 'Excel + Claude AI',
  description:
    'A practical guide to using Claude in Excel for HR Analytics — get answers from your data without writing a single formula.',
}

/* ── Prompt Card ──────────────────────────────────────────────────────────── */
function PromptCard({
  number,
  title,
  whenToUse,
  prompt,
}: {
  number: string
  title: string
  whenToUse: string
  prompt: string
}) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
      <div className="bg-teal-700 text-white px-6 py-4 flex items-center gap-3">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 text-sm font-bold font-mono shrink-0">
          {number}
        </span>
        <h3 className="font-serif text-lg font-semibold">{title}</h3>
      </div>
      <div className="px-6 py-5 space-y-4">
        <div className="flex items-start gap-2">
          <span className="text-xs font-semibold text-teal-700 uppercase tracking-wide mt-0.5 shrink-0">
            When to use:
          </span>
          <p className="text-slate-600 text-sm leading-relaxed">{whenToUse}</p>
        </div>
        <div className="relative">
          <div className="bg-slate-900 rounded-lg px-5 py-4 font-mono text-sm text-emerald-400 leading-relaxed whitespace-pre-wrap pr-20">
            {prompt}
          </div>
          <div className="absolute top-3 right-3">
            <CopyButton text={prompt} />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Course Example Card ──────────────────────────────────────────────────── */
function CourseExample({
  scenario,
  question,
  whatYouAsk,
  whatClaudeDoes,
  whatYouLearn,
}: {
  scenario: string
  question: string
  whatYouAsk: string
  whatClaudeDoes: string
  whatYouLearn: string
}) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
      {/* Scenario label */}
      <div className="bg-slate-800 text-white px-6 py-4">
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">{scenario}</p>
        <p className="font-serif text-base font-semibold">{question}</p>
      </div>
      {/* Steps */}
      <div className="divide-y divide-slate-100">
        {/* What you ask */}
        <div className="px-6 py-4 flex gap-3">
          <div className="shrink-0 mt-0.5">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-100 text-teal-700 text-xs font-bold">1</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">You type in the Claude sidebar:</p>
            <p className="text-sm text-slate-800 italic leading-relaxed bg-slate-50 rounded-lg px-4 py-3 border border-slate-200">
              &ldquo;{whatYouAsk}&rdquo;
            </p>
          </div>
        </div>
        {/* What Claude does */}
        <div className="px-6 py-4 flex gap-3">
          <div className="shrink-0 mt-0.5">
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-100 text-teal-700 text-xs font-bold">2</span>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">Claude:</p>
            <p className="text-sm text-slate-700 leading-relaxed">{whatClaudeDoes}</p>
          </div>
        </div>
        {/* What you learn */}
        <div className="px-6 py-4 flex gap-3 bg-teal-50">
          <div className="shrink-0 mt-0.5">
            <ArrowRight size={16} className="text-teal-600 mt-0.5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold text-teal-700 uppercase tracking-wide mb-1">What this tells you:</p>
            <p className="text-sm text-teal-900 leading-relaxed">{whatYouLearn}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function ClaudeExcelPage() {
  return (
    <div className="prose-section">

      {/* ── Page Header ── */}
      <header className="mb-12 pb-8 border-b border-slate-200">
        <p className="text-xs font-semibold text-teal-700 uppercase tracking-widest mb-3 flex items-center gap-2">
          <Bot size={14} aria-hidden="true" />
          AI Tools for HR Analytics
        </p>
        <h1 className="font-serif text-4xl font-semibold text-slate-900 leading-tight mb-4">
          Claude + Excel: A Practical Guide
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Claude is built directly into Excel. You can describe what you want in plain
          English — &ldquo;show me average pay by department&rdquo; — and Claude builds
          it for you. No formulas. No statistics background required. This guide shows you
          exactly how to use it for your coursework.
        </p>
      </header>

      {/* ── Section A: Course Examples ── */}
      <section aria-labelledby="section-examples" className="mb-14">
        <h2
          id="section-examples"
          className="font-serif text-2xl font-semibold text-slate-900 mb-2 flex items-center gap-2"
        >
          <MessageSquare className="text-teal-600" size={22} aria-hidden="true" />
          A. How This Works in This Course
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Here are three situations you will actually encounter working with the Mr. Macky&rsquo;s
          dataset. Each shows you what to type and what you get back.
        </p>

        <div className="space-y-6">
          <CourseExample
            scenario="Module 1 — Workforce Composition"
            question="How many full-time vs. part-time employees does Mr. Macky's have, broken out by gender?"
            whatYouAsk="My HR data is on Sheet1. Build a Pivot Table on a new sheet that shows a count of employees, grouped by Job Status and Gender."
            whatClaudeDoes="Creates a Pivot Table with Job Status (Full-Time / Part-Time) in rows, Gender (M / F) in columns, and a count of employees in each cell. Takes about 10 seconds."
            whatYouLearn="You can immediately see whether part-time roles skew toward one gender — a key equity observation for your case write-up."
          />

          <CourseExample
            scenario="Module 2 — Compensation Equity"
            question="Are men and women paid differently within the same job status category?"
            whatYouAsk="My HR data is on Sheet1. Build a Pivot Table on a new sheet showing the average Annual Wage and standard deviation, grouped by Job Status and Gender."
            whatClaudeDoes="Builds a Pivot Table with two Values fields (Average Wage, Standard Deviation of Wage) broken out by Job Status and Gender. Highlights the cells it created and explains any notable differences."
            whatYouLearn="A large difference in average wage within the same Job Status group is evidence of a pay equity issue worth flagging. The standard deviation tells you whether the gap is consistent or driven by a few outliers."
          />

          <CourseExample
            scenario="Module 3 — Flight Risk"
            question="Which departments have the longest-tenured employees, and which have the shortest?"
            whatYouAsk="My HR data is on Sheet1. Create a Pivot Table on a new sheet showing average tenure in years by Department. Sort it from lowest to highest average tenure."
            whatClaudeDoes="Builds the Pivot Table, sorts it ascending, and formats the tenure values. Often adds a brief note if one department stands out as unusually high or low."
            whatYouLearn="Departments with very low average tenure are likely experiencing higher turnover — a starting point for your flight risk analysis."
          />
        </div>

        <div className="mt-6">
          <CallOut variant="insight" title="The pattern is always the same">
            Every example above follows the same three-part structure:{' '}
            <strong>say where your data is</strong>, <strong>say what kind of output you want</strong>
            {' '}(almost always a Pivot Table), and <strong>say what to group by and what to calculate</strong>.
            Once you internalize that pattern, you can analyze almost anything in the dataset.
          </CallOut>
        </div>
      </section>

      {/* ── Section B: The One Thing to Avoid ── */}
      <section aria-labelledby="section-warning" className="mb-14">
        <h2
          id="section-warning"
          className="font-serif text-2xl font-semibold text-slate-900 mb-2 flex items-center gap-2"
        >
          <TriangleAlert className="text-amber-500" size={22} aria-hidden="true" />
          B. The One Thing You Should Never Ask Claude to Do
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Claude is powerful, but there&rsquo;s one specific request that produces bad results
          every time — and the problem is invisible. The output looks correct, but the numbers
          are wrong.
        </p>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl px-6 py-6 mb-6">
          <div className="flex items-start gap-3">
            <ShieldAlert
              className="text-amber-600 mt-0.5 shrink-0"
              size={22}
              aria-hidden="true"
            />
            <div>
              <p className="font-bold text-amber-900 mb-2">
                Don&rsquo;t ask: &ldquo;Calculate the average salary for female employees&rdquo;
              </p>
              <p className="text-amber-800 text-sm leading-relaxed mb-3">
                When you ask Claude to calculate a statistic for a specific group
                (women only, one department, one job level), it tries to write an Excel formula
                to do it. The problem: that formula treats everyone <em>outside</em> the group
                as a zero — not as someone to skip. Those phantom zeros drag your average way
                down and inflate your standard deviation.
              </p>
              <p className="text-amber-800 text-sm leading-relaxed">
                <strong>The dangerous part:</strong> Excel won&rsquo;t flag an error. You&rsquo;ll
                get a number that looks plausible, turn it in, and never know it was wrong.
              </p>
            </div>
          </div>
        </div>

        <CallOut variant="caution" title="The fix is simple — use a Pivot Table instead">
          Instead of asking Claude to calculate group statistics, ask it to{' '}
          <strong>build a Pivot Table</strong>. Pivot Tables are Excel&rsquo;s built-in
          tool for breaking data into groups — they correctly ignore employees who
          don&rsquo;t belong in a category. The math is always right. The next
          section shows you exactly how.
        </CallOut>
      </section>

      {/* ── Section C: Pivot Tables ── */}
      <section aria-labelledby="section-pivot" className="mb-14">
        <h2
          id="section-pivot"
          className="font-serif text-2xl font-semibold text-slate-900 mb-2 flex items-center gap-2"
        >
          <TableProperties className="text-teal-600" size={22} aria-hidden="true" />
          C. Use Pivot Tables — Always
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          A Pivot Table is Excel&rsquo;s way of summarizing data by group. You tell it what
          to group by (e.g., Gender, Department) and what to calculate (e.g., Average Wage,
          Standard Deviation), and it handles the math. Claude can build one for you in seconds
          — you just have to ask the right way.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {[
            {
              icon: <FileSpreadsheet size={20} />,
              label: 'What not to ask',
              verdict: 'Avoid',
              color: 'border-red-200 bg-red-50',
              badgeColor: 'bg-red-100 text-red-700',
              example: '"Calculate the standard deviation of wages for female employees."',
              reason: 'Claude writes a formula. Non-matching rows become zeros. Wrong answer, no warning.',
            },
            {
              icon: <TableProperties size={20} />,
              label: 'What to ask instead',
              verdict: 'Do this',
              color: 'border-teal-200 bg-teal-50',
              badgeColor: 'bg-teal-100 text-teal-700',
              example: '"Build a Pivot Table grouped by Gender showing Standard Deviation of Annual Wage."',
              reason: 'Claude builds a Pivot Table. Excel automatically excludes non-matching rows. Always correct.',
            },
          ].map(({ icon, label, verdict, color, badgeColor, example, reason }) => (
            <div key={label} className={`border rounded-xl p-5 flex flex-col gap-3 ${color}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  {icon}
                  {label}
                </div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badgeColor}`}>
                  {verdict}
                </span>
              </div>
              <p className="text-sm text-slate-700 italic leading-relaxed">{example}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>

        <div className="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden">
          <div className="bg-slate-800 text-white px-6 py-4">
            <p className="font-serif text-base font-semibold flex items-center gap-2">
              <CheckCircle2 size={16} aria-hidden="true" />
              How to check Claude&rsquo;s work
            </p>
          </div>
          <div className="px-6 py-5 text-sm text-slate-700 leading-relaxed space-y-3">
            <p>After Claude builds a Pivot Table, spend 30 seconds verifying it:</p>
            <ul className="space-y-2 ml-1">
              {[
                'Click any number Claude mentions in its explanation — it links directly to that cell.',
                'Open the Pivot Table field list (right-click the table) and confirm the right columns are in the right areas.',
                'Check that the Values area is set to Standard Deviation (or Average) — not Sum.',
                'Make sure the data source covers your entire dataset, not just a few rows.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <MousePointerClick size={14} className="text-teal-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section D: Prompts ── */}
      <section aria-labelledby="section-prompts" className="mb-14">
        <h2
          id="section-prompts"
          className="font-serif text-2xl font-semibold text-slate-900 mb-2 flex items-center gap-2"
        >
          <Sparkles className="text-teal-600" size={22} aria-hidden="true" />
          D. Prompts That Work — Copy &amp; Use
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          These prompts are ready to use. Copy them into the Claude sidebar, adjust the
          field names to match your spreadsheet, and hit enter.
        </p>

        <div className="space-y-6">
          <PromptCard
            number="1"
            title="Building Your First Analysis"
            whenToUse="Any time you need to compare a metric (like pay or performance) across groups. This is the prompt you'll use most often."
            prompt={`My HR data is on Sheet1. Please create a Pivot Table on a new sheet. Put 'Job Status' and 'Gender' in the Rows area. Put 'Annual Wage' in the Values area, and summarize by Standard Deviation.`}
          />

          <PromptCard
            number="2"
            title="Cleaning Up the Output"
            whenToUse="After you have a Pivot Table — use this to make it look presentation-ready without manually formatting anything."
            prompt={`Sort this Pivot Table by the Standard Deviation column, highest to lowest. Format all numbers as currency with no decimal places.`}
          />

          <PromptCard
            number="3"
            title="When Something Looks Wrong"
            whenToUse="If your Pivot Table shows an error message (like #REF! or #VALUE!) or a number that seems way off, use this to ask Claude to diagnose it."
            prompt={`Something looks wrong with this Pivot Table. Can you identify the cause of the error and fix it? Walk me through what you changed.`}
          />
        </div>

        <div className="mt-6">
          <CallOut variant="insight" title="Tips for writing your own prompts">
            <ul className="list-disc list-inside space-y-1 mt-1">
              <li>
                <strong>Use your exact column names.</strong> If your spreadsheet says
                &ldquo;Annual Wage&rdquo; (not &ldquo;Salary&rdquo;), use that exact phrase.
              </li>
              <li>
                <strong>Say where your data is.</strong> Mention the sheet name —
                &ldquo;My data is on Sheet1&rdquo; — so Claude knows where to look.
              </li>
              <li>
                <strong>Build one step at a time.</strong> Ask for the table first, check it,
                then ask for formatting. Shorter prompts give more predictable results.
              </li>
            </ul>
          </CallOut>
        </div>
      </section>

      {/* ── Section E: Privacy ── */}
      <section aria-labelledby="section-privacy" className="mb-14">
        <h2
          id="section-privacy"
          className="font-serif text-2xl font-semibold text-slate-900 mb-2 flex items-center gap-2"
        >
          <ShieldAlert className="text-rose-500" size={22} aria-hidden="true" />
          E. A Quick Word on Privacy
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          In this course you&rsquo;re working with a fictional dataset — so you&rsquo;re safe.
          But when you use these skills professionally, there are strict rules about what
          employee data you can share with any AI tool.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-rose-50 border border-rose-200 rounded-xl px-5 py-5">
            <p className="font-bold text-rose-900 mb-3 text-sm">Never paste real employee data that includes:</p>
            <ul className="space-y-1.5">
              {[
                'Social Security Numbers',
                'Full names with salary details',
                'Medical or leave records',
                'Home addresses or phone numbers',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-rose-800">
                  <span className="text-rose-500 font-bold mt-0.5 shrink-0">✕</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-xl px-5 py-5">
            <p className="font-bold text-teal-900 mb-3 text-sm">In a real job, stay safe by:</p>
            <ul className="space-y-1.5">
              {[
                'Using employee ID numbers instead of names',
                'Working with department-level averages, not individual rows',
                "Only using Claude through your company's approved enterprise account",
                'Asking your HR or IT team before using AI with people data',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-teal-800">
                  <span className="text-teal-600 font-bold mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Section F: Video ── */}
      <section aria-labelledby="section-video" className="mb-8">
        <h2
          id="section-video"
          className="font-serif text-2xl font-semibold text-slate-900 mb-2 flex items-center gap-2"
        >
          <Video className="text-teal-600" size={22} aria-hidden="true" />
          F. See It in Action
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          If you learn better by watching, search YouTube for{' '}
          <strong>&ldquo;How to Use Claude for Excel — Complete Beginner Guide&rdquo;</strong>.
          It covers the sidebar interface in about 10 minutes and is a great complement to
          this written guide.
        </p>

        <div className="border border-slate-200 rounded-xl bg-white shadow-sm p-6 flex items-start gap-4">
          <div className="bg-teal-50 text-teal-700 rounded-lg p-3 shrink-0">
            <Video size={24} aria-hidden="true" />
          </div>
          <div>
            <p className="font-semibold text-slate-900 mb-1">
              Claude for Excel — Complete Beginner Guide
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Covers the sidebar interface and practical prompting. Search for this title
              on YouTube. Watching someone do it once makes the whole workflow click much
              faster than reading about it.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
