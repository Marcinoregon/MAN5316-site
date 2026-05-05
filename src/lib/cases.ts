export type CaseType = 'real' | 'illustrative'
export type AnalyticsMaturity = 'descriptive' | 'predictive' | 'prescriptive'

export interface Case {
  slug: string
  title: string
  company: string
  companySize: string
  topic: string
  maturity: AnalyticsMaturity
  type: CaseType
  summary: string
}

export const CASES: Case[] = [
  // ── Real cases ──────────────────────────────────────────────────────
  {
    slug: 'google-project-oxygen',
    title: 'Project Oxygen: What Makes a Great Manager?',
    company: 'Google',
    companySize: 'Large enterprise',
    topic: 'Manager effectiveness',
    maturity: 'prescriptive',
    type: 'real',
    summary:
      'Google used internal survey and performance data to identify the eight behaviors that distinguish its most effective managers — then built training programs around those behaviors.',
  },
  {
    slug: 'google-project-aristotle',
    title: 'Project Aristotle: The Science of High-Performing Teams',
    company: 'Google',
    companySize: 'Large enterprise',
    topic: 'Team effectiveness',
    maturity: 'descriptive',
    type: 'real',
    summary:
      'A two-year study of 180+ teams found that psychological safety — not star talent — was the strongest predictor of team effectiveness at Google.',
  },
  {
    slug: 'ibm-predictive-attrition',
    title: 'Predicting Who Will Leave Before They Decide To',
    company: 'IBM',
    companySize: 'Large enterprise',
    topic: 'Attrition / retention',
    maturity: 'predictive',
    type: 'real',
    summary:
      "IBM's AI-driven retention model claimed to predict employee attrition with 95% accuracy, enabling proactive interventions that the company said saved nearly $300 million in turnover costs.",
  },
  {
    slug: 'microsoft-workplace-analytics',
    title: 'Rethinking Meetings and Remote Work at Scale',
    company: 'Microsoft',
    companySize: 'Large enterprise',
    topic: 'Productivity / collaboration',
    maturity: 'descriptive',
    type: 'real',
    summary:
      "Microsoft's own Workplace Analytics data revealed how pandemic-era remote work fragmented workdays, bloated meeting time, and strained employee wellbeing — insights that reshaped internal policies.",
  },
  {
    slug: 'best-buy-engagement',
    title: 'Connecting Engagement Scores to Store Revenue',
    company: 'Best Buy',
    companySize: 'Large enterprise',
    topic: 'Engagement',
    maturity: 'predictive',
    type: 'real',
    summary:
      'Best Buy found that a 0.1-point improvement in its employee engagement score correlated with a $100,000 increase in annual operating income per store — making engagement a measurable financial lever.',
  },
  {
    slug: 'dow-chemical-workforce-planning',
    title: 'Strategic Workforce Planning at Dow Chemical',
    company: 'Dow Chemical',
    companySize: 'Large enterprise',
    topic: 'Workforce planning',
    maturity: 'prescriptive',
    type: 'real',
    summary:
      "Dow Chemical's early adoption of strategic workforce planning aligned talent supply to five-year business scenarios, reducing reactive hiring and surfacing critical skill gaps years ahead of time.",
  },
  // ── Illustrative cases ───────────────────────────────────────────────
  {
    slug: 'pay-equity-audit',
    title: 'Pay Equity Audit at Meridian Financial Services',
    company: 'Meridian Financial Services (Illustrative)',
    companySize: 'Mid-size (1,200 employees)',
    topic: 'Pay equity',
    maturity: 'descriptive',
    type: 'illustrative',
    summary:
      'When a pay equity analysis surfaced an unexplained 6% gender wage gap in the analyst tier, HR used regression-adjusted comparisons to isolate legitimate vs. discriminatory drivers — and built a remediation plan.',
  },
  {
    slug: 'dei-pipeline-analysis',
    title: 'Diagnosing a DEI Pipeline Problem at ClearPath Tech',
    company: 'ClearPath Technology (Illustrative)',
    companySize: 'Mid-size (800 employees)',
    topic: 'DEI / promotion equity',
    maturity: 'descriptive',
    type: 'illustrative',
    summary:
      'A promotion-rate analysis showed that underrepresented engineers advanced at roughly half the rate of peers — despite similar performance ratings — prompting a redesign of the promotion nomination process.',
  },
  {
    slug: 'training-roi',
    title: 'Calculating the ROI of a Sales Leadership Program',
    company: 'Vantage Retail Group (Illustrative)',
    companySize: 'Large (3,500 employees)',
    topic: 'Learning & development',
    maturity: 'prescriptive',
    type: 'illustrative',
    summary:
      'Using Kirkpatrick levels 3 and 4, HR demonstrated that a $420,000 sales-leadership program produced $1.8M in attributable revenue lift — shifting L&D from a cost center to a strategic investment.',
  },
  {
    slug: 'absenteeism-modeling',
    title: 'Predicting Absenteeism at Harborview Medical Center',
    company: 'Harborview Medical Center (Illustrative)',
    companySize: 'Large (2,100 employees)',
    topic: 'Absenteeism',
    maturity: 'predictive',
    type: 'illustrative',
    summary:
      'A logistic regression model using shift patterns, commute distance, and prior leave history predicted high-risk absenteeism weeks in advance, enabling proactive scheduling and wellness check-ins.',
  },
  {
    slug: 'engagement-survey-redesign',
    title: 'Fixing Response Bias in an Engagement Survey',
    company: 'Northbrook Municipal Government (Illustrative)',
    companySize: 'Mid-size (600 employees)',
    topic: 'Engagement measurement',
    maturity: 'descriptive',
    type: 'illustrative',
    summary:
      "After discovering that its 68% survey response rate masked a near-0% participation from one division, HR redesigned anonymity safeguards and question framing — raising response rates and uncovering previously hidden disengagement.",
  },
  {
    slug: 'regrettable-turnover',
    title: 'Segmenting Turnover to Find the Signal in the Noise',
    company: 'Ashford Logistics (Illustrative)',
    companySize: 'Mid-size (950 employees)',
    topic: 'Turnover',
    maturity: 'descriptive',
    type: 'illustrative',
    summary:
      "By separating regrettable from non-regrettable departures, Ashford's HR team found its true problem was losing high performers in operations — not the headline 22% overall turnover rate — and targeted interventions accordingly.",
  },
]
