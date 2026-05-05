import type { Metadata } from 'next'
import CaseLayout from '@/components/CaseLayout'
import CallOut from '@/components/CallOut'

export const metadata: Metadata = {
  title: 'Segmenting Turnover at Ashford Logistics (Illustrative)',
  description: "An illustrative scenario showing how separating regrettable from non-regrettable turnover changed the intervention strategy for a logistics company.",
}

export default function RegrettableTurnoverPage() {
  return (
    <CaseLayout
      type="illustrative"
      title="Segmenting Turnover to Find the Signal in the Noise"
      company="Ashford Logistics (Illustrative)"
      companySize="Mid-size (950 employees)"
      topic="Turnover"
      maturity="descriptive"
    >
      <h2>Background</h2>
      <p>
        Ashford Logistics is a fictitious regional freight and last-mile delivery company with 950 employees. Its overall annual turnover rate was 22% — a figure that had prompted concern from the board and pressure on HR to "fix the retention problem." The 22% rate was compared unfavorably to an industry benchmark of approximately 15%.
      </p>
      <p>
        The HR director suspected the headline number was obscuring important differences between voluntary and involuntary departures, and between high-performing and low-performing exits. She proposed a regrettable vs. non-regrettable turnover segmentation analysis before committing to any retention initiative.
      </p>

      <h2>Business Problem</h2>
      <p>
        A 22% overall turnover rate tells you almost nothing about what to do. Retention interventions are costly and require targeting: are you losing the employees you want to keep? Where in the organization? At what tenure? A blanket approach — raise salaries for everyone, offer retention bonuses — wastes resources and may retain people the organization would benefit from moving on.
      </p>

      <h2>Data Approach</h2>
      <p>
        The team coded departures from the past two years across three dimensions:
      </p>
      <ol>
        <li><strong>Voluntary vs. involuntary</strong> — sourced from termination type codes in the HRIS (with a quality audit to correct miscoding).</li>
        <li><strong>Performance tier</strong> — last performance rating before departure, assigned to High (top 25%), Solid (middle 50%), or Low (bottom 25%).</li>
        <li><strong>Role criticality</strong> — a simple three-tier classification (mission critical, standard, easily replaceable) developed with operations managers.</li>
      </ol>
      <p>
        Departures were then classified as <strong>regrettable</strong> (voluntary exit, High or Solid performer in a mission-critical or standard role) or <strong>non-regrettable</strong> (involuntary exit, Low performer, or voluntary exit of an easily-replaceable role).
      </p>

      <h2>Findings</h2>
      <ul>
        <li>Of the 22% total turnover, 14 percentage points were non-regrettable exits — primarily involuntary terminations for performance or conduct, and voluntary exits of warehouse sorters in easily-replaceable roles where turnover was essentially structural and expected.</li>
        <li>Only 8 percentage points were regrettable exits — but concentrated almost entirely in two populations: operations team leads and route planners.</li>
        <li>Operations team leads were leaving at a 31% annual rate — far above the 14% benchmark for similar roles in the region.</li>
        <li>Exit interview analysis for team leads cited three consistent themes: limited advancement pathways, pay below market by approximately 12%, and poor manager quality in one regional operations hub.</li>
      </ul>

      <CallOut variant="insight" title="The actual problem was not the 22% headline">
        The organization was conflating healthy attrition (low performers churning out of high-volume, low-skill roles) with a genuine strategic risk (losing trained team leads at twice the market rate). Without the segmentation, any intervention would have been misdirected.
      </CallOut>

      <h2>Interventions and Outcome</h2>
      <p>
        Ashford targeted three specific interventions:
      </p>
      <ol>
        <li>A market-adjustment pay review for team lead and route planner roles, resulting in average increases of 9% for 42 employees (annual cost: ~$180,000).</li>
        <li>A team lead development track — a six-month program with a defined pathway to an operations supervisor role, addressing the "nowhere to go" complaint.</li>
        <li>A targeted manager quality review in the underperforming regional hub, resulting in the reassignment of one operations manager and a coaching program for two others.</li>
      </ol>
      <p>
        Eighteen months later, team lead turnover had declined from 31% to 19%. Overall turnover remained at 20% — the non-regrettable component was essentially unchanged — but the CHRO reframed the metric in board reporting as "regrettable turnover: 6%" rather than "total turnover: 20%."
      </p>

      <CallOut variant="insight" title="What this case illustrates">
        The most important step in any turnover analysis is segmentation: voluntary vs. involuntary, regrettable vs. non-regrettable. Total turnover is a number that sounds alarming, enables no decisions, and often misleads. Regrettable turnover is the actual strategic problem.
      </CallOut>
    </CaseLayout>
  )
}
