import type { Metadata } from 'next'
import CaseLayout from '@/components/CaseLayout'
import CallOut from '@/components/CallOut'

export const metadata: Metadata = {
  title: 'DEI Pipeline Analysis at ClearPath Technology (Illustrative)',
  description: "An illustrative scenario demonstrating how promotion-rate analysis surfaced a DEI pipeline problem and led to a process redesign.",
}

export default function DEIPipelinePage() {
  return (
    <CaseLayout
      type="illustrative"
      title="Diagnosing a DEI Pipeline Problem at ClearPath Tech"
      company="ClearPath Technology (Illustrative)"
      companySize="Mid-size (800 employees)"
      topic="DEI / promotion equity"
      maturity="descriptive"
    >
      <h2>Background</h2>
      <p>
        ClearPath Technology is a fictitious mid-size software company with 800 employees, a stated commitment to diversity and inclusion, and a published annual DEI report showing improving representation at the individual contributor level. Despite this, senior leadership had remained predominantly homogeneous for five consecutive years.
      </p>
      <p>
        The People Analytics team was asked to investigate why DEI initiatives at the hiring stage were not translating into diversity at senior levels.
      </p>

      <h2>Business Problem</h2>
      <p>
        Representation data is a lagging indicator — it tells you where you are, not how you got there. To change the demographic composition of senior leadership five years from now, you need to identify where in the pipeline underrepresented employees are exiting the pathway to advancement. Hiring diverse talent into junior roles achieves little if those employees are not advancing at equitable rates.
      </p>

      <h2>Data Approach</h2>
      <p>
        The team built a promotion-rate analysis across four career levels (Engineer → Senior Engineer → Staff Engineer → Principal/Director), broken down by demographic group. They used a two-year lookback period and controlled for performance rating and tenure at level — two legitimate factors in promotion decisions.
      </p>

      <h2>Findings</h2>
      <p>
        The promotion-rate disparity first appeared at the transition from Engineer to Senior Engineer:
      </p>
      <ul>
        <li>Engineers from underrepresented groups were promoted at a rate of 11% per year, compared to 21% for their peers — despite similar average performance ratings (3.7 vs. 3.8 on a 5-point scale) and similar median tenure at level (2.1 vs. 2.2 years).</li>
        <li>The disparity compounded at each subsequent level, producing a 73% underrepresentation gap at the Principal/Director level relative to base representation at the Engineer level.</li>
      </ul>

      <CallOut variant="insight" title="Compounding gaps: why early-career equity matters most">
        A 10-percentage-point promotion gap at one level might seem small. Over four career transitions, the same gap — if consistent — produces a 65%+ reduction in representation. DEI pipeline problems are compounding problems: small early gaps generate large senior-level disparities over time.
      </CallOut>

      <h2>Root Cause Investigation</h2>
      <p>
        A supplementary analysis of promotion nominations revealed that managers submitted nominations for 68% of eligible majority-group engineers, but only 41% of equally-eligible underrepresented engineers. The nominations were discretionary — there was no standardized nomination process or required documentation of eligibility criteria.
      </p>
      <p>
        Focus groups with underrepresented engineers surfaced a consistent theme: they were uncertain whether they were "ready" for promotion and received less proactive sponsorship from their managers than peers described receiving.
      </p>

      <h2>Interventions and Outcome</h2>
      <ul>
        <li>ClearPath replaced discretionary nominations with a standardized eligibility matrix — managers completed a structured form before submitting any promotion recommendation.</li>
        <li>Calibration sessions were required across peer manager groups before promotions were finalized.</li>
        <li>A formal sponsorship program paired senior leaders with high-potential engineers from underrepresented groups.</li>
        <li>After two promotion cycles under the new process, the Engineer-to-Senior Engineer promotion rate for underrepresented groups rose to 17% — still below 21%, but meaningfully improved.</li>
      </ul>

      <CallOut variant="insight" title="What this case illustrates">
        Representation dashboards show the problem; promotion-rate analysis locates it. The intervention target was not hiring — it was the nomination process for promotions. Diagnosing the right lever requires disaggregating talent data across the full employee lifecycle.
      </CallOut>
    </CaseLayout>
  )
}
