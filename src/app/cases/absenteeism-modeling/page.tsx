import type { Metadata } from 'next'
import CaseLayout from '@/components/CaseLayout'
import CallOut from '@/components/CallOut'

export const metadata: Metadata = {
  title: 'Predicting Absenteeism at Harborview Medical Center (Illustrative)',
  description: "An illustrative scenario showing how a logistic regression model predicted high-risk absenteeism and enabled proactive scheduling and wellness interventions.",
}

export default function AbsenteeismPage() {
  return (
    <CaseLayout
      type="illustrative"
      title="Predicting Absenteeism at Harborview Medical Center"
      company="Harborview Medical Center (Illustrative)"
      companySize="Large (2,100 employees)"
      topic="Absenteeism"
      maturity="predictive"
    >
      <h2>Background</h2>
      <p>
        Harborview Medical Center is a fictitious large regional hospital and healthcare system with 2,100 employees across nursing, clinical support, administrative, and facilities roles. Unplanned staff absences created downstream problems — delayed procedures, mandatory overtime for covering nurses, and documented patient-safety near-misses tied to understaffing. The organization's absence rate was 6.2%, compared to an industry benchmark of approximately 4.5%.
      </p>

      <h2>Business Problem</h2>
      <p>
        The scheduling challenge was acute: nursing units needed 4–6 days' notice to arrange covered absences without mandatory overtime. But traditional absence patterns were largely invisible until the morning of a shift. The question was whether HR and operations could identify high-risk employees in advance and take preventive action.
      </p>

      <h2>Data Approach</h2>
      <p>
        With appropriate privacy safeguards and employee communication, HR built a logistic regression model to predict the probability that a given employee would have an unplanned absence in the following two-week window. Features included:
      </p>
      <ul>
        <li>Rolling 90-day absence history for the individual and their unit</li>
        <li>Shift pattern (rotating vs. fixed, night vs. day)</li>
        <li>Commute distance (zip-code-based estimate)</li>
        <li>Days since last wellness benefit usage (EAP, PTO)</li>
        <li>Manager-reported workload intensity (a weekly operational flag)</li>
        <li>Seasonal and day-of-week indicators</li>
      </ul>

      <CallOut variant="caution" title="Privacy and consent design">
        Harborview disclosed the model to employees through town halls and included it in its HR data governance policy. Employees were informed that risk scores were used only for scheduling and wellness outreach — not for performance management or disciplinary decisions. This transparency was a deliberate design decision to preserve trust.
      </CallOut>

      <h2>Model Performance</h2>
      <p>
        The model correctly identified high-risk employees in 71% of actual absence events (recall/sensitivity). The false-positive rate — employees flagged as high risk who did not subsequently miss a shift — was 28%. This level of performance was sufficient to justify proactive scheduling intervention without creating undue friction for low-risk employees.
      </p>
      <p>
        To contextualize: without the model, the base rate of unplanned absence was ~6%, meaning random flagging would capture 6% of actual events. The model captured 71% — a substantial improvement.
      </p>

      <h2>Interventions and Outcome</h2>
      <p>
        High-risk employees in a given two-week window received:
      </p>
      <ol>
        <li>A proactive check-in from their nurse manager (brief wellness conversation).</li>
        <li>An automated reminder about EAP and PTO options from HR.</li>
        <li>Scheduling preference accommodation where operationally possible (shift swap pool).</li>
      </ol>
      <p>
        Over 18 months, the organization's absence rate declined from 6.2% to 5.1% — a 1.1-point reduction. Annualized, this represented approximately 14,000 fewer unplanned absence-hours across the workforce and a projected $890,000 reduction in overtime costs.
      </p>

      <CallOut variant="insight" title="What this case illustrates">
        Predictive absenteeism modeling works best when interventions are supportive rather than punitive. Employees who felt surveilled rather than supported were less likely to use EAP or communicate proactively. The model's value depends on the intervention design, not just the prediction accuracy.
      </CallOut>
    </CaseLayout>
  )
}
