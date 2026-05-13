import type { Metadata } from 'next'
import CallOut from '@/components/CallOut'
import DataBasicsQuiz from '@/components/DataBasicsQuiz'

export const metadata: Metadata = {
  title: 'Data Basics',
  description:
    'A plain-English introduction to the statistical concepts every HR analyst needs: mean, median, mode, data types, standard deviation, and the normal distribution.',
}

/* ── Inline NormalCurve SVG ───────────────────────────────────────────────── */
function NormalCurveSVG() {
  // Bell-curve path approximation via cubic beziers, annotated with SD lines
  return (
    <svg
      viewBox="0 0 600 260"
      aria-label="Diagram of a normal distribution bell curve with standard deviation zones shaded"
      role="img"
      className="w-full max-w-2xl mx-auto my-6 block"
    >
      {/* SD zone fills — drawn back-to-front */}
      {/* ±3σ  (outermost) */}
      <path
        d="M 60,230 C 90,230 120,80 160,28 L 160,230 Z"
        fill="#e0f2fe"
        opacity="0.7"
      />
      <path
        d="M 540,230 C 510,230 480,80 440,28 L 440,230 Z"
        fill="#e0f2fe"
        opacity="0.7"
      />
      {/* ±2σ */}
      <path
        d="M 160,28 C 190,8 220,3 300,3 C 380,3 410,8 440,28 L 440,230 L 160,230 Z"
        fill="#bae6fd"
        opacity="0.7"
      />
      {/* ±1σ */}
      <path
        d="M 210,60 C 240,15 270,6 300,6 C 330,6 360,15 390,60 L 390,230 L 210,230 Z"
        fill="#7dd3fc"
        opacity="0.7"
      />

      {/* Bell curve outline */}
      <path
        d="M 55,230 C 80,230 110,200 140,150 C 170,100 195,30 230,14 C 255,4 275,3 300,3 C 325,3 345,4 370,14 C 405,30 430,100 460,150 C 490,200 520,230 545,230"
        fill="none"
        stroke="#0369a1"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Baseline */}
      <line x1="40" y1="230" x2="560" y2="230" stroke="#94a3b8" strokeWidth="1" />

      {/* SD tick lines */}
      {[
        { x: 210, label: '−1σ' },
        { x: 160, label: '−2σ' },
        { x: 60,  label: '−3σ' },
        { x: 390, label: '+1σ' },
        { x: 440, label: '+2σ' },
        { x: 540, label: '+3σ' },
        { x: 300, label: 'μ' },
      ].map(({ x, label }) => (
        <g key={label}>
          <line x1={x} y1="230" x2={x} y2="240" stroke="#475569" strokeWidth="1.5" />
          <text
            x={x}
            y="255"
            textAnchor="middle"
            fontSize="11"
            fontFamily="Inter, sans-serif"
            fill="#475569"
          >
            {label}
          </text>
        </g>
      ))}

      {/* Zone percentage labels */}
      <text x="300" y="115" textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" fill="#0c4a6e" fontWeight="600">68.2%</text>
      <text x="300" y="175" textAnchor="middle" fontSize="10" fontFamily="Inter, sans-serif" fill="#0c4a6e">within ±1σ</text>

      <text x="185" y="195" textAnchor="middle" fontSize="9.5" fontFamily="Inter, sans-serif" fill="#0369a1">13.6%</text>
      <text x="415" y="195" textAnchor="middle" fontSize="9.5" fontFamily="Inter, sans-serif" fill="#0369a1">13.6%</text>

      <text x="110" y="215" textAnchor="middle" fontSize="9" fontFamily="Inter, sans-serif" fill="#0284c7">2.1%</text>
      <text x="490" y="215" textAnchor="middle" fontSize="9" fontFamily="Inter, sans-serif" fill="#0284c7">2.1%</text>

      {/* Brace / span annotation for 95% */}
      <text x="300" y="22" textAnchor="middle" fontSize="10" fontFamily="Inter, sans-serif" fill="#475569">95% within ±2σ</text>
      <text x="300" y="35" textAnchor="middle" fontSize="10" fontFamily="Inter, sans-serif" fill="#475569">99.7% within ±3σ</text>
    </svg>
  )
}

/* ── Stat term card ───────────────────────────────────────────────────────── */
function StatCard({
  term,
  formula,
  definition,
  hrExample,
  watchOut,
}: {
  term: string
  formula: string
  definition: string
  hrExample: string
  watchOut?: string
}) {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden mb-6">
      {/* Header */}
      <div className="bg-teal-700 text-white px-6 py-3 flex items-baseline justify-between gap-4">
        <h3 className="font-serif text-lg font-semibold">{term}</h3>
        <span className="font-mono text-xs text-teal-200">{formula}</span>
      </div>
      {/* Body */}
      <div className="px-6 py-5 bg-white space-y-3">
        <p className="text-slate-700 text-sm leading-relaxed">{definition}</p>
        <div className="bg-teal-50 border border-teal-200 rounded px-4 py-3">
          <p className="text-xs font-semibold text-teal-800 uppercase tracking-wide mb-1">HR Example</p>
          <p className="text-sm text-teal-900 leading-relaxed">{hrExample}</p>
        </div>
        {watchOut && (
          <div className="bg-amber-50 border border-amber-200 rounded px-4 py-3">
            <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">Watch Out</p>
            <p className="text-sm text-amber-900 leading-relaxed">{watchOut}</p>
          </div>
        )}
      </div>
    </div>
  )
}

/* ── Data type row ────────────────────────────────────────────────────────── */
function DataTypeRow({
  type,
  also,
  definition,
  examples,
  analytics,
}: {
  type: string
  also?: string
  definition: string
  examples: string[]
  analytics: string
}) {
  return (
    <div className="border border-slate-200 rounded-lg p-5 bg-white mb-4">
      <div className="flex items-start gap-3 mb-2">
        <span className="shrink-0 mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-teal-700 text-white text-xs font-bold">
          {type[0]}
        </span>
        <div>
          <p className="font-serif font-semibold text-slate-900">
            {type}
            {also && <span className="font-sans font-normal text-slate-400 text-sm ml-2">({also})</span>}
          </p>
          <p className="text-slate-600 text-sm leading-relaxed mt-1">{definition}</p>
        </div>
      </div>
      <div className="ml-10 mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">HR Examples</p>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-0.5">
            {examples.map((ex) => <li key={ex}>{ex}</li>)}
          </ul>
        </div>
        <div className="bg-slate-50 rounded px-3 py-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">What you can do with it</p>
          <p className="text-sm text-slate-700 leading-relaxed">{analytics}</p>
        </div>
      </div>
    </div>
  )
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function DataBasicsPage() {
  return (
    <div className="prose-section">
      {/* Page header */}
      <header className="mb-12 pb-8 border-b border-slate-200">
        <p className="text-xs font-semibold text-teal-700 uppercase tracking-widest mb-3">
          Foundations
        </p>
        <h1 className="font-serif text-4xl font-semibold text-slate-900 leading-tight mb-4">
          Data Basics
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          You do not need a statistics degree to work with HR data — but you do need to speak the
          language. This section explains the core concepts you will encounter in every dataset,
          every report, and every conversation with an analyst.
        </p>
      </header>

      {/* ── Section A: Measures of Central Tendency ── */}
      <section aria-labelledby="section-central" className="mb-14">
        <h2
          id="section-central"
          className="font-serif text-2xl font-semibold text-slate-900 mb-2"
        >
          A. Measures of Central Tendency
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          When we summarize a dataset with a single number, we are asking: <em>what is the
          typical value?</em> There are three common answers — mean, median, and mode — and
          choosing the right one matters more than most people realize.
        </p>

        <StatCard
          term="Mean"
          formula="Σx ÷ n"
          definition="The mean (commonly called the average) is calculated by summing all values in a dataset and dividing by the count of values. It incorporates every data point equally, which is both its strength and its weakness."
          hrExample="Your 120-person department has a mean annual salary of $68,400. That single number was produced by adding all 120 salaries together and dividing by 120."
          watchOut="The mean is highly sensitive to outliers. If your CEO's $2.4M compensation is included in a 50-person salary dataset, the mean will be pulled dramatically upward — making it look like a far wealthier workforce than actually exists. Always ask: 'Is there anything extreme in this data that could be distorting the mean?'"
        />

        <StatCard
          term="Median"
          formula="Middle value when sorted"
          definition="The median is the middle value when all data points are arranged in ascending order. If there is an even number of data points, the median is the average of the two middle values. Because it looks only at position — not magnitude — it is unaffected by extreme values."
          hrExample="Arrange 11 employees' salaries from lowest to highest. The 6th salary in that list is the median. Five employees earn less; five earn more. A $2M outlier at the top does not move that middle value at all."
          watchOut="The median can obscure spread. Two very different distributions can share the same median — always pair the median with a measure of spread like standard deviation or the interquartile range."
        />

        <StatCard
          term="Mode"
          formula="Most frequently occurring value"
          definition="The mode is the value that appears most often in a dataset. A dataset can have no mode (all values unique), one mode (unimodal), or multiple modes (bimodal, multimodal). It is the only measure of central tendency that makes sense for categorical data."
          hrExample="If you survey 200 employees about preferred work arrangement and 110 choose 'Hybrid,' 60 choose 'Remote,' and 30 choose 'On-site,' the mode is 'Hybrid.' You cannot calculate a mean or median for this question — there is no numerical ordering."
          watchOut="For continuous numerical data, the mode is often not very informative. It becomes most useful when data clusters around a small number of discrete values — like survey ratings on a 1–5 scale."
        />

        <CallOut variant="insight" title="Which measure should you use?">
          <ul className="list-disc list-inside space-y-1 mt-1">
            <li><strong>Symmetric data with no outliers:</strong> Mean and median will be similar; either works.</li>
            <li><strong>Skewed data or outliers present</strong> (salaries, tenure, days-to-fill): prefer the <strong>median</strong>.</li>
            <li><strong>Categorical data</strong> (job family, department, work preference): use the <strong>mode</strong>.</li>
            <li>When in doubt, report all three. They tell slightly different stories.</li>
          </ul>
        </CallOut>
      </section>

      {/* ── Section B: Data Types ── */}
      <section aria-labelledby="section-data-types" className="mb-14">
        <h2
          id="section-data-types"
          className="font-serif text-2xl font-semibold text-slate-900 mb-2"
        >
          B. Data Types
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Not all data is the same, and the type of data you have determines what you can do
          with it. Misidentifying a data type is one of the most common analytical errors — it
          leads to technically-executable analyses that are statistically meaningless.
        </p>

        <h3 className="font-serif text-xl font-semibold text-slate-900 mb-4">Categorical Data</h3>

        <DataTypeRow
          type="Nominal"
          also="labels without order"
          definition="Values that represent categories with no natural ranking or mathematical relationship between them. You can count them; you cannot rank, add, or subtract them."
          examples={[
            'Department (Sales, Finance, HR)',
            'Employment type (FT, PT, Contractor)',
            'Work arrangement (Remote, Hybrid, On-site)',
            'Termination reason (Voluntary, Involuntary, Retirement)',
          ]}
          analytics="Frequency counts, percentages, bar charts, cross-tabulations, mode. Nominal variables work well as grouping variables in comparisons — e.g., attrition rate by department."
        />

        <DataTypeRow
          type="Ordinal"
          also="categories with meaningful order"
          definition="Values with a meaningful rank order, but the intervals between ranks are not guaranteed to be equal. 'Strongly Agree' is better than 'Agree,' but is the gap between them the same as the gap between 'Disagree' and 'Strongly Disagree'? Not necessarily."
          examples={[
            'Engagement survey ratings (1–5 scale)',
            'Performance ratings (Exceeds / Meets / Below)',
            'Job level (Individual Contributor → Director → VP → C-Suite)',
            'Candidate screening stage (Applied → Phone Screen → Final)',
          ]}
          analytics="Median, mode, percentile ranks, frequency distributions. Treat with caution when computing means — averaging performance ratings as if the gaps between labels are equal is a common but questionable practice."
        />

        <h3 className="font-serif text-xl font-semibold text-slate-900 mb-4 mt-6">Numerical Data</h3>

        <DataTypeRow
          type="Interval"
          also="equal intervals, no true zero"
          definition="Numerical data with equal intervals between values, but without a meaningful zero point. Zero does not mean 'none of the thing.' This makes ratios meaningless — you cannot say 80°F is 'twice as hot' as 40°F."
          examples={[
            'Temperature in Fahrenheit or Celsius',
            'Year of hire (2015, 2018, 2022)',
            'Calendar dates (January is not twice February)',
            'Most standardized test scores',
          ]}
          analytics="Mean, median, standard deviation, correlation. Ratios and percentages of the values themselves are not valid. Differences between values are meaningful."
        />

        <DataTypeRow
          type="Ratio"
          also="equal intervals with a true zero"
          definition="The most mathematically flexible data type. Zero means the complete absence of the thing being measured, making ratios valid. Ratio data supports the full range of arithmetic operations."
          examples={[
            'Annual salary ($0 = no income)',
            'Days to fill a position (0 = filled immediately)',
            'Tenure in years (0 = just hired)',
            'Number of training hours completed',
            'Headcount',
          ]}
          analytics="All mathematical operations are valid: mean, median, standard deviation, ratios, percentages, growth rates. Most quantitative HR metrics are ratio data."
        />

        <CallOut variant="caution" title="The Likert scale trap">
          Survey responses collected on 1–5 or 1–7 scales are <em>ordinal</em> data. However,
          it is extremely common in organizational research (and in practice) to calculate means
          and standard deviations on these responses as if they were interval data. This is a
          defensible shortcut when scales have many points and distributions are roughly
          symmetric — but it is a shortcut, not a mathematical fact. When you see a mean
          engagement score of 3.7, remember that it is an approximation based on a
          simplifying assumption.
        </CallOut>
      </section>

      {/* ── Section C: Standard Deviation ── */}
      <section aria-labelledby="section-sd" className="mb-14">
        <h2
          id="section-sd"
          className="font-serif text-2xl font-semibold text-slate-900 mb-2"
        >
          C. Standard Deviation
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Measures of central tendency tell you where data is centered. Standard deviation tells
          you how <em>spread out</em> the data is around that center. Two datasets can share the
          exact same mean while being completely different in character — standard deviation
          reveals that difference.
        </p>

        <div className="border border-slate-200 rounded-lg overflow-hidden mb-6">
          <div className="bg-slate-800 text-white px-6 py-3">
            <p className="font-serif text-base font-semibold">What standard deviation measures</p>
          </div>
          <div className="bg-white px-6 py-5 space-y-3 text-sm text-slate-700 leading-relaxed">
            <p>
              Standard deviation (σ for a population, <em>s</em> for a sample) is the average
              distance between each data point and the mean. A <strong>small</strong> standard
              deviation means data points cluster tightly around the mean — most values are
              similar. A <strong>large</strong> standard deviation means data is widely spread —
              values vary considerably.
            </p>
            <p>
              Intuitively: if the mean annual salary in your department is $70,000 with a standard
              deviation of $3,000, most salaries are bunched between roughly $67,000 and $73,000.
              If the standard deviation is $22,000, there are dramatically different pay levels
              within the same team — something worth investigating for equity and compression
              concerns.
            </p>
          </div>
        </div>

        <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
          Calculating Standard Deviation (Conceptually)
        </h3>
        <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm leading-relaxed mb-6 ml-2">
          <li><strong>Calculate the mean</strong> of the dataset.</li>
          <li><strong>Subtract the mean from each value</strong> to find each data point's distance (deviation) from the center. Some will be positive, some negative.</li>
          <li><strong>Square each deviation</strong> — this eliminates negatives and amplifies larger gaps.</li>
          <li><strong>Average the squared deviations</strong> — this value is called the <em>variance</em>.</li>
          <li><strong>Take the square root of the variance</strong> — this converts back to the original units and gives you the standard deviation.</li>
        </ol>

        <div className="bg-slate-50 border border-slate-200 rounded-lg px-6 py-5 mb-6">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Worked Example</p>
          <p className="text-sm text-slate-700 mb-3">
            Five employees' days-to-fill for their respective open roles: <strong>12, 18, 20, 24, 26</strong>.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
            {[
              { label: 'Mean', value: '(12+18+20+24+26) ÷ 5 = 20' },
              { label: 'Deviations from mean', value: '−8, −2, 0, +4, +6' },
              { label: 'Squared deviations', value: '64, 4, 0, 16, 36' },
              { label: 'Variance', value: '(64+4+0+16+36) ÷ 5 = 24' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white border border-slate-200 rounded p-3">
                <p className="font-semibold text-slate-600 mb-1">{label}</p>
                <p className="text-slate-800 font-mono">{value}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-700 mt-3">
            <strong>Standard deviation = √24 ≈ 4.9 days.</strong> On average, each role's time-to-fill
            sits within about 5 days of the 20-day mean.
          </p>
        </div>

        <CallOut variant="insight" title="Standard deviation in HR practice">
          Standard deviation is most useful for comparisons. A single SD value is hard to interpret
          on its own. But comparing the SD of time-to-fill across two hiring managers, or the SD of
          performance ratings across departments, immediately reveals whether one context is more
          consistent (lower SD) or variable (higher SD). High variability in performance ratings,
          for example, sometimes reflects genuine performance differences — but it can also
          reflect calibration problems between raters.
        </CallOut>
      </section>

      {/* ── Section D: Normal Distribution ── */}
      <section aria-labelledby="section-normal" className="mb-12">
        <h2
          id="section-normal"
          className="font-serif text-2xl font-semibold text-slate-900 mb-2"
        >
          D. Standard Deviation and the Normal Distribution
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          The standard deviation becomes especially powerful when data follows a{' '}
          <strong>normal distribution</strong> — the symmetric, bell-shaped curve that appears
          throughout nature and organizational data. Many HR metrics (performance ratings across
          large populations, engagement scores, test scores for large candidate pools) approximate
          normality when collected at sufficient scale.
        </p>

        <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
          The Bell Curve
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          A normal distribution is defined entirely by just two numbers: its mean (μ) and its
          standard deviation (σ). The mean tells you where the center of the bell sits; the
          standard deviation tells you how wide or narrow the bell is. A small σ produces a tall,
          narrow bell; a large σ produces a wide, flat bell.
        </p>

        <NormalCurveSVG />

        <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3 mt-4">
          The Empirical Rule (68 – 95 – 99.7)
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          In a perfectly normal distribution, the relationship between the mean and standard
          deviation follows a reliable pattern called the <em>empirical rule</em>:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            {
              range: '±1σ',
              pct: '68.2%',
              color: 'bg-sky-700',
              desc: 'Roughly two-thirds of all values fall within one standard deviation of the mean. This is the "typical" range.',
            },
            {
              range: '±2σ',
              pct: '95.4%',
              color: 'bg-sky-600',
              desc: 'Nearly all values fall within two standard deviations. Values beyond this threshold are genuinely unusual.',
            },
            {
              range: '±3σ',
              pct: '99.7%',
              color: 'bg-sky-500',
              desc: 'Almost the entire distribution. Values beyond 3σ are rare events — sometimes called outliers.',
            },
          ].map(({ range, pct, color, desc }) => (
            <div key={range} className="border border-slate-200 rounded-lg overflow-hidden">
              <div className={`${color} text-white px-5 py-4 text-center`}>
                <p className="font-mono text-xl font-bold">{pct}</p>
                <p className="text-sm opacity-90">of data within {range}</p>
              </div>
              <div className="bg-white px-5 py-4">
                <p className="text-sm text-slate-700 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
          Applying the Empirical Rule to HR Data
        </h3>

        <div className="space-y-4 mb-6">
          {[
            {
              scenario: 'Performance Scores',
              detail:
                'Suppose your organization uses a 100-point performance assessment with a mean of 72 and a standard deviation of 8. The empirical rule tells you: ~68% of employees score between 64 and 80 (within ±1σ). A score of 90 sits 2.25 standard deviations above the mean — a genuinely exceptional result, shared by fewer than 2% of the population.',
            },
            {
              scenario: 'Time-to-Fill',
              detail:
                'If your organization\'s average time-to-fill is 32 days with a standard deviation of 7 days, a role that takes 53+ days to fill (beyond +3σ) is not just slow — it is a statistical outlier that merits investigation: Is the role unusually specialized? Is the hiring manager responding to candidates promptly? Are the salary bands competitive?',
            },
            {
              scenario: 'Salary Equity Analysis',
              detail:
                'When auditing pay equity, analysts often compute a regression-predicted salary for each employee and then examine how far each actual salary deviates from the prediction. Employees whose pay falls more than 2σ below the predicted value may be systematically underpaid — a flag for further review regardless of other factors.',
            },
          ].map(({ scenario, detail }) => (
            <div key={scenario} className="border border-slate-200 rounded-lg p-5 bg-white">
              <p className="font-serif font-semibold text-slate-900 mb-2">{scenario}</p>
              <p className="text-sm text-slate-700 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>

        <CallOut variant="caution" title="Not everything is normally distributed">
          The empirical rule applies <em>only</em> to normally distributed data. Many common HR
          metrics are <strong>not</strong> normal: salary distributions are typically right-skewed
          (a long tail of high earners), tenure distributions often spike near zero (new hires) and
          again at later career stages, and turnover counts follow different statistical families
          entirely. Always visualize your data before assuming normality. When in doubt, use
          non-parametric statistics or median-based summaries.
        </CallOut>

        <div className="mt-8 border border-teal-200 rounded-lg bg-teal-50 px-6 py-5">
          <h3 className="font-serif text-lg font-semibold text-teal-900 mb-2">Z-Scores: A Quick Note</h3>
          <p className="text-sm text-teal-800 leading-relaxed">
            Once you understand the normal distribution, you can convert any raw score into a
            <strong> z-score</strong> — a measure of how many standard deviations above or below
            the mean a value sits. The formula is simple: <strong>z = (x − μ) / σ</strong>. A
            z-score of 0 is exactly average. A z-score of +1.5 means the value is 1.5 standard
            deviations above average. Z-scores let you compare values across datasets with
            different scales — for example, comparing a candidate's numerical reasoning test
            score to their structured interview score even though both are measured differently.
          </p>
        </div>
      </section>

      {/* ── Knowledge Check ── */}
      <section aria-labelledby="section-quiz" className="mb-12">
        <h2
          id="section-quiz"
          className="font-serif text-2xl font-semibold text-slate-900 mb-2"
        >
          Knowledge Check
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Five questions covering mean, median, mode, data types, standard deviation, and
          the normal distribution. Select an answer to reveal the explanation.
        </p>
        <DataBasicsQuiz />
      </section>
    </div>
  )
}
