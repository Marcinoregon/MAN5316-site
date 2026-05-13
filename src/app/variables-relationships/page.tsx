import type { Metadata } from 'next'
import CallOut from '@/components/CallOut'
import VariablesQuiz from '@/components/VariablesQuiz'

export const metadata: Metadata = {
  title: 'Variables & Relationships',
  description:
    'Understanding independent and dependent variables, correlation, and the critical distinction between correlation and causation in HR analytics.',
}

/* ── Scatter plot SVG (illustrative) ───────────────────────────────────────── */
function ScatterPlot({
  title,
  points,
  xLabel,
  yLabel,
  trendColor,
  trendStart,
  trendEnd,
}: {
  title: string
  points: { x: number; y: number }[]
  xLabel: string
  yLabel: string
  trendColor: string
  trendStart?: [number, number]
  trendEnd?: [number, number]
}) {
  const W = 260, H = 180, PAD = 36
  return (
    <div className="flex flex-col items-center">
      <p className="text-xs font-semibold text-slate-600 mb-2 text-center">{title}</p>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-xs">
        {/* Axes */}
        <line x1={PAD} y1={H - PAD} x2={W - 10} y2={H - PAD} stroke="#94a3b8" strokeWidth="1" />
        <line x1={PAD} y1={10} x2={PAD} y2={H - PAD} stroke="#94a3b8" strokeWidth="1" />
        {/* Axis labels */}
        <text x={W / 2} y={H - 4} textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="Inter,sans-serif">{xLabel}</text>
        <text x={10} y={H / 2} textAnchor="middle" fontSize="9" fill="#64748b" fontFamily="Inter,sans-serif" transform={`rotate(-90,10,${H/2})`}>{yLabel}</text>
        {/* Trend line */}
        {trendStart && trendEnd && (
          <line
            x1={PAD + trendStart[0]} y1={H - PAD - trendStart[1]}
            x2={PAD + trendEnd[0]}  y2={H - PAD - trendEnd[1]}
            stroke={trendColor} strokeWidth="1.5" strokeDasharray="4 2" opacity="0.7"
          />
        )}
        {/* Points */}
        {points.map((p, i) => (
          <circle key={i} cx={PAD + p.x} cy={H - PAD - p.y} r="3.5" fill={trendColor} opacity="0.75" />
        ))}
      </svg>
    </div>
  )
}

/* ── Correlation card ────────────────────────────────────────────────────────── */
function CorrCard({
  type, label, description, hrExample, color,
}: {
  type: string; label: string; description: string; hrExample: string; color: string
}) {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <div className={`${color} text-white px-5 py-3`}>
        <p className="font-serif font-semibold text-base">{type}</p>
        <p className="text-xs opacity-85 mt-0.5">{label}</p>
      </div>
      <div className="bg-white px-5 py-4 space-y-3">
        <p className="text-sm text-slate-700 leading-relaxed">{description}</p>
        <div className="bg-slate-50 border border-slate-200 rounded px-3 py-2">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">HR Example</p>
          <p className="text-sm text-slate-700 leading-relaxed">{hrExample}</p>
        </div>
      </div>
    </div>
  )
}

/* ── Page ──────────────────────────────────────────────────────────────────── */
export default function VariablesRelationshipsPage() {
  return (
    <div className="prose-section">

      {/* Header */}
      <header className="mb-12 pb-8 border-b border-slate-200">
        <p className="text-xs font-semibold text-teal-700 uppercase tracking-widest mb-3">Foundations</p>
        <h1 className="font-serif text-4xl font-semibold text-slate-900 leading-tight mb-4">
          Variables &amp; Relationships
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          HR analytics is ultimately about understanding <em>relationships</em> — does training
          improve retention? Does manager quality predict engagement? Answering those questions
          rigorously starts with understanding variables, correlation, and the crucial difference
          between association and cause.
        </p>
      </header>

      {/* ── Section A: Variables ── */}
      <section aria-labelledby="section-variables" className="mb-14">
        <h2 id="section-variables" className="font-serif text-2xl font-semibold text-slate-900 mb-2">
          A. Independent and Dependent Variables
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Every analytical question involves at least two variables. Understanding which one you are
          trying to <em>explain</em> and which one you believe is doing the <em>explaining</em> is
          the foundation of any honest analysis.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
          {/* Independent */}
          <div className="border border-teal-200 rounded-lg overflow-hidden">
            <div className="bg-teal-700 text-white px-5 py-4">
              <p className="font-serif text-lg font-semibold">Independent Variable</p>
              <p className="text-teal-200 text-xs mt-1">Also called: predictor, input, X</p>
            </div>
            <div className="bg-white px-5 py-5 space-y-3">
              <p className="text-sm text-slate-700 leading-relaxed">
                The variable you believe <strong>influences or explains</strong> the outcome. It is the
                "input" side of the relationship — the thing you manipulate, vary, or observe first.
                In experiments it is what the researcher controls; in observational HR data it is the
                factor you suspect matters.
              </p>
              <div className="bg-teal-50 border border-teal-200 rounded px-4 py-3">
                <p className="text-xs font-semibold text-teal-800 uppercase tracking-wide mb-2">HR Examples</p>
                <ul className="list-disc list-inside text-sm text-teal-900 space-y-1">
                  <li>Manager tenure in role</li>
                  <li>Hours of onboarding training completed</li>
                  <li>Commute distance</li>
                  <li>Whether an employee received a promotion</li>
                  <li>Number of 1-on-1 meetings per month</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dependent */}
          <div className="border border-sky-200 rounded-lg overflow-hidden">
            <div className="bg-sky-700 text-white px-5 py-4">
              <p className="font-serif text-lg font-semibold">Dependent Variable</p>
              <p className="text-sky-200 text-xs mt-1">Also called: outcome, response, Y</p>
            </div>
            <div className="bg-white px-5 py-5 space-y-3">
              <p className="text-sm text-slate-700 leading-relaxed">
                The variable you are trying to <strong>understand or predict</strong>. It is the
                "output" side — the thing whose variation you want to explain. In HR analytics,
                dependent variables are usually business outcomes worth improving or preventing.
              </p>
              <div className="bg-sky-50 border border-sky-200 rounded px-4 py-3">
                <p className="text-xs font-semibold text-sky-800 uppercase tracking-wide mb-2">HR Examples</p>
                <ul className="list-disc list-inside text-sm text-sky-900 space-y-1">
                  <li>Voluntary turnover (stayed or left)</li>
                  <li>Engagement score</li>
                  <li>90-day performance rating</li>
                  <li>Absenteeism rate</li>
                  <li>Time to productivity for new hires</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-lg px-6 py-5 mb-6">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Putting it together: a research question as a variable pair</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300">
                  <th className="text-left py-2 pr-4 text-slate-600 font-semibold">Research Question</th>
                  <th className="text-left py-2 pr-4 text-teal-700 font-semibold">Independent Variable (X)</th>
                  <th className="text-left py-2 text-sky-700 font-semibold">Dependent Variable (Y)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  {
                    q: 'Does onboarding quality affect first-year retention?',
                    x: 'Onboarding satisfaction score',
                    y: 'Retained at 12 months (yes/no)',
                  },
                  {
                    q: 'Do manager 1-on-1s reduce burnout?',
                    x: 'Avg. monthly 1-on-1 meetings',
                    y: 'Burnout survey score',
                  },
                  {
                    q: 'Does pay equity affect engagement?',
                    x: 'Deviation from market pay midpoint',
                    y: 'Engagement survey score',
                  },
                  {
                    q: 'Does tenure predict performance?',
                    x: 'Years in current role',
                    y: 'Annual performance rating',
                  },
                ].map(({ q, x, y }) => (
                  <tr key={q} className="text-slate-700">
                    <td className="py-2.5 pr-4 leading-snug italic">{q}</td>
                    <td className="py-2.5 pr-4 text-teal-800">{x}</td>
                    <td className="py-2.5 text-sky-800">{y}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <CallOut variant="insight" title="Variables can switch roles depending on the question">
          Engagement score is a <em>dependent</em> variable when you ask "what drives engagement?"
          — but it becomes an <em>independent</em> variable when you ask "does engagement predict
          productivity?" The same metric can sit on either side of the equation. What matters is
          being clear about which role it is playing in a specific analysis.
        </CallOut>
      </section>

      {/* ── Section B: Correlation ── */}
      <section aria-labelledby="section-correlation" className="mb-14">
        <h2 id="section-correlation" className="font-serif text-2xl font-semibold text-slate-900 mb-2">
          B. Correlation
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Correlation measures the <strong>direction and strength of a linear relationship</strong>{' '}
          between two variables. When X changes, does Y tend to change too — and in which direction?
          The most common measure is the <em>Pearson correlation coefficient</em> (r), which ranges
          from −1 to +1.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-lg px-6 py-4 mb-6 flex flex-wrap gap-6 items-center justify-center text-center text-sm">
          {[
            { r: 'r = −1.0', label: 'Perfect negative', color: 'text-rose-700' },
            { r: 'r = −0.5', label: 'Moderate negative', color: 'text-rose-500' },
            { r: 'r = 0.0', label: 'No relationship', color: 'text-slate-500' },
            { r: 'r = +0.5', label: 'Moderate positive', color: 'text-teal-600' },
            { r: 'r = +1.0', label: 'Perfect positive', color: 'text-teal-800' },
          ].map(({ r, label, color }) => (
            <div key={r}>
              <p className={`font-mono font-bold text-lg ${color}`}>{r}</p>
              <p className="text-slate-500 text-xs">{label}</p>
            </div>
          ))}
        </div>

        {/* Scatter plots */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          <ScatterPlot
            title="Positive Correlation"
            xLabel="Training Hours"
            yLabel="Performance Score"
            trendColor="#0d9488"
            trendStart={[10, 15]} trendEnd={[190, 120]}
            points={[
              {x:20,y:25},{x:35,y:35},{x:50,y:45},{x:60,y:50},{x:75,y:60},
              {x:85,y:68},{x:100,y:78},{x:115,y:82},{x:130,y:90},{x:150,y:100},
              {x:165,y:110},{x:180,y:118},
            ]}
          />
          <ScatterPlot
            title="No Correlation"
            xLabel="Employee Birth Month"
            yLabel="Engagement Score"
            trendColor="#94a3b8"
            points={[
              {x:15,y:30},{x:30,y:110},{x:45,y:55},{x:60,y:90},{x:75,y:20},
              {x:90,y:75},{x:105,y:100},{x:120,y:40},{x:135,y:85},{x:150,y:60},
              {x:165,y:115},{x:180,y:35},
            ]}
          />
          <ScatterPlot
            title="Negative Correlation"
            xLabel="Commute Time (min)"
            yLabel="Satisfaction Score"
            trendColor="#e11d48"
            trendStart={[10, 120]} trendEnd={[190, 15]}
            points={[
              {x:15,y:118},{x:30,y:105},{x:45,y:95},{x:60,y:88},{x:75,y:78},
              {x:90,y:65},{x:105,y:60},{x:120,y:50},{x:140,y:38},{x:160,y:28},
              {x:175,y:20},{x:185,y:12},
            ]}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
          <CorrCard
            type="Positive Correlation"
            label="r > 0"
            color="bg-teal-700"
            description="As X increases, Y tends to increase. The closer r is to +1, the tighter the relationship. At r = +1, the points fall on a perfect straight line with an upward slope."
            hrExample="More hours of management training correlates with higher direct-report engagement scores (r ≈ +0.45)."
          />
          <CorrCard
            type="No Correlation"
            label="r ≈ 0"
            color="bg-slate-500"
            description="X and Y move independently — knowing the value of X tells you nothing about what Y will be. The scatter plot looks like a random cloud of points with no slope."
            hrExample="An employee's birth month shows essentially no correlation with their annual performance rating (r ≈ 0.02)."
          />
          <CorrCard
            type="Negative Correlation"
            label="r < 0"
            color="bg-rose-600"
            description="As X increases, Y tends to decrease. The closer r is to −1, the stronger the inverse relationship. At r = −1, all points fall on a perfect downward-sloping line."
            hrExample="Longer commute times correlate with lower job satisfaction scores (r ≈ −0.38)."
          />
        </div>

        <div className="border border-slate-200 rounded-lg p-5 bg-white mb-6">
          <h3 className="font-serif text-lg font-semibold text-slate-900 mb-3">Interpreting the Strength of r</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-2 pr-4 text-slate-600 font-semibold">Absolute Value of r</th>
                  <th className="text-left py-2 text-slate-600 font-semibold">Conventional Interpretation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  { r: '0.00 – 0.10', label: 'Negligible — essentially no linear relationship' },
                  { r: '0.10 – 0.30', label: 'Weak — a pattern exists but explains little variation' },
                  { r: '0.30 – 0.50', label: 'Moderate — a meaningful relationship worth investigating' },
                  { r: '0.50 – 0.70', label: 'Strong — a robust relationship in behavioral data' },
                  { r: '0.70 – 1.00', label: 'Very strong — rare in social/organizational research' },
                ].map(({ r, label }) => (
                  <tr key={r}>
                    <td className="py-2.5 pr-4 font-mono text-teal-700">{r}</td>
                    <td className="py-2.5">{label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3 italic">
            Note: "strong" and "weak" are context-dependent. An r of 0.30 for a single variable
            predicting turnover in a large population is actually quite informative.
          </p>
        </div>

        <CallOut variant="caution" title="Correlation only measures linear relationships">
          A correlation of r ≈ 0 does not mean two variables are unrelated — it means they are
          not <em>linearly</em> related. Two variables can have a strong curved (non-linear)
          relationship that produces a near-zero r. Always visualize your data in a scatter plot
          before concluding that no relationship exists.
        </CallOut>
      </section>

      {/* ── Section C: Correlation vs. Causation ── */}
      <section aria-labelledby="section-causation" className="mb-12">
        <h2 id="section-causation" className="font-serif text-2xl font-semibold text-slate-900 mb-2">
          C. Correlation Is Not Causation
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          This is the single most important principle in applied data analysis — and the most
          frequently violated one. Finding that two variables move together does{' '}
          <strong>not</strong> tell you that one <em>causes</em> the other. Acting as if it does
          leads to wasted resources, failed interventions, and sometimes harm.
        </p>

        <div className="border border-slate-200 rounded-lg overflow-hidden mb-6">
          <div className="bg-slate-800 text-white px-6 py-3">
            <p className="font-serif text-base font-semibold">Why correlation ≠ causation</p>
          </div>
          <div className="divide-y divide-slate-100">
            {[
              {
                reason: 'Reverse Causation',
                description: 'The direction of cause and effect may be backwards from what you assumed.',
                hrExample: 'You find that high performers attend more optional training. You conclude training drives performance and mandate it for all. But it may be that high performers are simply more motivated — and motivation drives both training attendance AND performance. Mandating training for low performers may change nothing.',
              },
              {
                reason: 'A Third Variable (Confounding)',
                description: 'A hidden third variable causes both X and Y, creating the illusion of a direct relationship between them.',
                hrExample: 'Remote employees score higher on engagement surveys AND have lower attrition. You conclude remote work causes retention. But "role seniority" is a confounder: senior employees are more likely to be approved for remote work AND more likely to stay. Seniority — not remote work — may be doing most of the work.',
              },
              {
                reason: 'Coincidence (Spurious Correlation)',
                description: 'Two variables may trend together purely by chance, especially in small samples or when many correlations are tested simultaneously.',
                hrExample: 'In a 40-person office, the number of people wearing blue shirts on Monday correlates with productivity that week. This is noise, not signal. With enough variables and small samples, spurious correlations are mathematically inevitable.',
              },
            ].map(({ reason, description, hrExample }) => (
              <div key={reason} className="px-6 py-5 bg-white">
                <p className="font-serif font-semibold text-slate-900 mb-1">{reason}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-3">{description}</p>
                <div className="bg-amber-50 border border-amber-200 rounded px-4 py-3">
                  <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">HR Illustration</p>
                  <p className="text-sm text-amber-900 leading-relaxed">{hrExample}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h3 className="font-serif text-xl font-semibold text-slate-900 mb-3">
          What Does Establish Causation?
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Causal claims require more than correlation. The gold standard is a{' '}
          <strong>randomized controlled experiment</strong> — randomly assign people to conditions,
          hold everything else constant, and measure outcomes. But true experiments are rare in HR.
          Instead, practitioners use several alternatives:
        </p>
        <div className="space-y-3 mb-6">
          {[
            {
              method: 'Natural Experiments',
              detail: 'A policy or change happens to some employees but not others for reasons unrelated to the outcome — mimicking random assignment. Example: an office relocation forces some employees remote while others remain on-site.',
            },
            {
              method: 'Longitudinal Data',
              detail: 'Measuring the same employees over time, before and after an intervention. If engagement rises after a program is introduced — and not before, and not in a comparison group — the case for causation strengthens.',
            },
            {
              method: 'Controlling for Confounders',
              detail: 'Using regression analysis to statistically "hold constant" variables that might be driving both X and Y. If the relationship between X and Y persists after controlling for known confounders, it is more credible.',
            },
            {
              method: 'Pilot Programs with Control Groups',
              detail: 'Roll out an intervention to one department or location while keeping another as a comparison. Compare outcomes. This is a controlled experiment within organizational constraints.',
            },
          ].map(({ method, detail }) => (
            <div key={method} className="flex gap-4 border border-slate-200 rounded-lg p-4 bg-white">
              <div className="shrink-0 w-2 rounded-full bg-teal-600 self-stretch" />
              <div>
                <p className="font-serif font-semibold text-slate-900 mb-1">{method}</p>
                <p className="text-sm text-slate-700 leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>

        <CallOut variant="insight" title="The practical standard for HR analysts">
          In most organizational settings, you will rarely achieve ironclad causal proof. That is
          acceptable — as long as you are honest about it. The appropriate language is:{' '}
          <em>"Employees who received X showed better outcomes on Y, even after controlling for
          tenure and department. This is consistent with X having a positive effect, though we
          cannot rule out other explanations."</em> That framing is both rigorous and actionable.
          Overclaiming causation — and underclaiming it when the evidence is strong — are equally
          costly errors.
        </CallOut>

        {/* Summary table */}
        <div className="mt-8 border border-slate-200 rounded-lg overflow-hidden">
          <div className="bg-teal-700 text-white px-6 py-3">
            <p className="font-serif font-semibold">Quick Reference: Correlation vs. Causation</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-5 py-3 text-slate-600 font-semibold"> </th>
                  <th className="text-left px-5 py-3 text-teal-700 font-semibold">Correlation</th>
                  <th className="text-left px-5 py-3 text-sky-700 font-semibold">Causation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {[
                  { label: 'What it tells you', corr: 'X and Y move together', cause: 'X produces a change in Y' },
                  { label: 'Direction known?', corr: 'Not necessarily', cause: 'Yes — X precedes Y' },
                  { label: 'Confounders ruled out?', corr: 'No', cause: 'Yes (with proper design)' },
                  { label: 'Required for?', corr: 'Prediction and pattern detection', cause: 'Policy decisions and interventions' },
                  { label: 'How to establish', corr: 'Statistical analysis of observed data', cause: 'Randomized experiments or strong quasi-experimental designs' },
                ].map(({ label, corr, cause }) => (
                  <tr key={label} className="text-slate-700">
                    <td className="px-5 py-3 font-medium text-slate-800">{label}</td>
                    <td className="px-5 py-3">{corr}</td>
                    <td className="px-5 py-3">{cause}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
          Five questions covering independent and dependent variables, correlation,
          spurious relationships, and the distinction between correlation and causation.
          Select an answer to reveal the explanation.
        </p>
        <VariablesQuiz />
      </section>
    </div>
  )
}
