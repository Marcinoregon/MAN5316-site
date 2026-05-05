import type { Metadata } from 'next'
import CaseLayout from '@/components/CaseLayout'
import CallOut from '@/components/CallOut'

export const metadata: Metadata = {
  title: 'Training ROI at Vantage Retail Group (Illustrative)',
  description: "An illustrative scenario showing how applying Kirkpatrick levels 3 and 4 demonstrated a 4.3× return on a sales leadership development program.",
}

export default function TrainingROIPage() {
  return (
    <CaseLayout
      type="illustrative"
      title="Calculating the ROI of a Sales Leadership Program"
      company="Vantage Retail Group (Illustrative)"
      companySize="Large (3,500 employees)"
      topic="Learning & development"
      maturity="prescriptive"
    >
      <h2>Background</h2>
      <p>
        Vantage Retail Group is a fictitious regional retail chain with 3,500 employees across 48 stores. Its L&D team had run a six-month Sales Leadership Program (SLP) for 40 store managers — a $420,000 investment including design, facilitation, backfill costs, and travel. Senior leadership supported the program but asked a pointed question at its conclusion: <em>What did we get for $420,000?</em>
      </p>

      <h2>Business Problem</h2>
      <p>
        L&D programs are typically evaluated at Kirkpatrick Level 1 (participant reaction surveys) and occasionally Level 2 (learning assessments). Vantage's leadership wanted to see Levels 3 and 4: evidence that participants applied new behaviors at work (Level 3 — behavior) and that those behaviors produced measurable business results (Level 4 — results).
      </p>

      <h2>Data Approach</h2>
      <p>
        The L&D team designed the evaluation before the program launched — a critical decision. Pre-program data was collected on four outcome metrics for both the 40 program participants and a control group of 40 store managers who were waitlisted for the next cohort:
      </p>
      <ul>
        <li>Store comparable sales growth (same-store YoY %)</li>
        <li>Employee engagement score (quarterly pulse, store level)</li>
        <li>First-year associate turnover rate</li>
        <li>Customer satisfaction (NPS, weekly store surveys)</li>
      </ul>
      <p>
        Post-program, the same metrics were collected for both groups. A difference-in-differences approach compared outcome changes in the treatment group (program participants) to changes in the control group (waitlisted managers) over the same period.
      </p>

      <CallOut variant="insight" title="Why a control group changes everything">
        Without a control group, you cannot distinguish program effects from market trends. If all stores saw 4% comp sales growth during the measurement period, a program group showing 4% growth has contributed nothing attributable. The waitlist approach gives you a comparison group that is well-matched on pre-program characteristics.
      </CallOut>

      <h2>Findings</h2>
      <ul>
        <li>Program stores showed 6.8% comp sales growth vs. 4.1% for control stores — a 2.7-point attributable difference.</li>
        <li>First-year associate turnover declined by 11 percentage points in program stores vs. 2 points in control stores.</li>
        <li>Employee engagement improved by an average of 0.4 points (on a 5-point scale) in program stores vs. 0.1 points in control stores.</li>
        <li>Customer NPS improvement was directionally positive but not statistically significant (too much store-level variance).</li>
      </ul>
      <p>
        Translating the sales and turnover improvements into financial terms:
      </p>
      <ul>
        <li>The 2.7-point incremental comp sales growth across 40 stores produced an estimated $1.8M in attributable revenue over 12 months.</li>
        <li>The 9-point reduction in first-year turnover across 40 stores (average 18 associates per store) saved an estimated $324,000 in replacement costs at an assumed $2,000 cost-per-hire.</li>
        <li>Total estimated financial return: ~$2.1M against a $420,000 investment — a 4.3× ROI or approximately 400% return.</li>
      </ul>

      <h2>Limitations and Honest Caveats</h2>
      <p>
        The team reported several limitations openly:
      </p>
      <ul>
        <li>The attribution is probabilistic, not causal. Store managers in the program may have been more motivated or selected for higher potential, creating selection bias even with waitlist controls.</li>
        <li>The measurement period (12 months post-program) may not capture full long-term effects or decay.</li>
        <li>Revenue attribution for individual store managers involves substantial noise — economic conditions, local competition, and seasonal factors were controlled imperfectly.</li>
      </ul>

      <CallOut variant="insight" title="What this case illustrates">
        Demonstrating L&D ROI is possible — but it requires pre-program baseline data, a comparison group, and financial translation of behavioral outcomes. The methodological overhead is real. The business case for doing it: a credible 4× ROI claim changes how the organization funds L&D.
      </CallOut>
    </CaseLayout>
  )
}
