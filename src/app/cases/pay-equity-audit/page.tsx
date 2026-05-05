import type { Metadata } from 'next'
import CaseLayout from '@/components/CaseLayout'
import CallOut from '@/components/CallOut'

export const metadata: Metadata = {
  title: 'Pay Equity Audit at Meridian Financial Services (Illustrative)',
  description: "An illustrative scenario showing how a regression-adjusted pay equity analysis surfaced and remediated an unexplained gender wage gap in the analyst tier.",
}

export default function PayEquityPage() {
  return (
    <CaseLayout
      type="illustrative"
      title="Pay Equity Audit at Meridian Financial Services"
      company="Meridian Financial Services (Illustrative)"
      companySize="Mid-size (1,200 employees)"
      topic="Pay equity"
      maturity="descriptive"
    >
      <h2>Background</h2>
      <p>
        Meridian Financial Services is a fictitious mid-size regional bank with approximately 1,200 employees across retail banking, commercial lending, and corporate functions. During the rollout of a new compensation management system, the HR team noticed that average pay for women in the Analyst job family was 11% lower than for men in the same band.
      </p>
      <p>
        The CHRO commissioned a regression-adjusted pay equity analysis to determine whether the gap was explainable by legitimate pay factors — experience, performance, hire date, geographic market — or whether an unexplained residual gap remained after controlling for those variables.
      </p>

      <h2>Business Problem</h2>
      <p>
        An unadjusted 11% gap created legal, reputational, and retention risk. But unadjusted gaps often reflect occupational sorting — women concentrated in lower-paying specializations within the same job family, or differences in years of experience. Before taking corrective action, Meridian needed to understand the gap's structure: how much was explainable, and how much was not.
      </p>

      <h2>Data Approach</h2>
      <p>
        The analysis used ordinary least squares (OLS) regression with current base salary as the dependent variable. Independent variables included:
      </p>
      <ul>
        <li>Years of relevant experience (total and at Meridian)</li>
        <li>Performance rating (average over past 3 years)</li>
        <li>Geographic market (using a cost-of-labor index)</li>
        <li>Hire date (controlling for salary compression over time)</li>
        <li>Specialization within the Analyst band (credit, compliance, operations)</li>
        <li>Education level</li>
        <li>Gender (the variable of interest)</li>
      </ul>

      <CallOut variant="caution" title="Regression-adjusted vs. unadjusted gaps: both matter">
        The regression-adjusted gap isolates unexplained discrimination-like effects. But the unadjusted gap still matters: if women are systematically placed in lower-paying specializations due to bias in assignment practices, that is a structural inequity even if within each specialization pay is equal. Audit both.
      </CallOut>

      <h2>Findings</h2>
      <p>
        After controlling for legitimate pay factors, the regression-adjusted gender pay gap in the Analyst band was 6.1% — statistically significant (p &lt; 0.01, confidence interval: 4.2%–8.0%). Approximately 5 of the original 11 percentage points were explained by experience and geographic differences. The remaining 6% had no legitimate explanation in the model.
      </p>
      <p>
        A secondary analysis found that women in the Analyst band were also promoted to Senior Analyst at a rate of 14% per year, compared to 22% for men — despite similar performance ratings — suggesting that the pay gap was partly a downstream consequence of a promotion-rate gap.
      </p>

      <h2>Outcome and Remediation Plan</h2>
      <p>
        Meridian implemented a two-phase remediation:
      </p>
      <ol>
        <li><strong>Immediate pay corrections:</strong> 47 employees received salary adjustments averaging $4,200 annually, for a total annual cost of approximately $197,000 — less than the estimated annual litigation risk if the gap were discovered externally.</li>
        <li><strong>Process changes:</strong> Meridian revised its promotion nomination process to require managers to document evaluation criteria before names were submitted, added calibration sessions across peer manager groups, and began tracking promotion rates by gender quarterly.</li>
      </ol>

      <CallOut variant="insight" title="What this case illustrates">
        Pay equity analysis is a two-step process: first, isolate unexplained gaps using regression; second, trace those gaps upstream to the HR decisions that produced them — hiring, starting pay, promotion rates. The regression gives you the number; the root-cause analysis gives you the lever.
      </CallOut>
    </CaseLayout>
  )
}
