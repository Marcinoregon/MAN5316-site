export interface GlossaryEntry {
  term: string
  slug: string
  definition: string
  whyItMatters: string
  seeAlso?: { term: string; slug: string }
}

export const GLOSSARY: GlossaryEntry[] = [
  {
    term: 'Absence Rate',
    slug: 'absence-rate',
    definition:
      'The percentage of scheduled workdays lost to unplanned absences within a given period. Calculated as (days absent ÷ days scheduled) × 100. It excludes approved leave such as vacation or FMLA.',
    whyItMatters:
      'A rising absence rate often signals disengagement, burnout, or scheduling problems before formal complaints surface. Track it by team, not just org-wide, to locate the pain point.',
    seeAlso: { term: 'Engagement vs. Satisfaction', slug: 'engagement-vs-satisfaction' },
  },
  {
    term: 'Adverse Impact',
    slug: 'adverse-impact',
    definition:
      'A substantially different rate of selection, promotion, or other employment decision that works to the disadvantage of a protected group. The EEOC uses this concept to evaluate whether a neutral-seeming policy has a discriminatory effect.',
    whyItMatters:
      'Even well-intentioned screening tools can produce adverse impact. Any time you use data to rank or filter candidates, run a disparate-impact check before deployment.',
    seeAlso: { term: 'Four-Fifths Rule', slug: 'four-fifths-rule' },
  },
  {
    term: 'Attrition vs. Turnover',
    slug: 'attrition-vs-turnover',
    definition:
      'Turnover counts all departures — voluntary and involuntary — in a period. Attrition typically refers to voluntary departures only and is often used when positions are not immediately backfilled. The two terms are sometimes used interchangeably, which causes confusion.',
    whyItMatters:
      'Conflating the two obscures whether you have a retention problem (voluntary attrition) or a structural/performance problem (involuntary exits). Always clarify which number is being reported.',
    seeAlso: { term: 'Regrettable Turnover', slug: 'regrettable-turnover' },
  },
  {
    term: 'Base Rate',
    slug: 'base-rate',
    definition:
      'The naturally occurring frequency of an event in a population before any intervention or selection. In HR, the base rate of, say, high performance tells you how common that outcome is in your workforce absent any prediction model.',
    whyItMatters:
      "When base rates are very low (e.g., 5% of employees become top performers), even an accurate-sounding model may produce mostly false positives. Always ask: 'How common is this outcome to begin with?'",
    seeAlso: { term: 'Statistical Significance', slug: 'statistical-significance' },
  },
  {
    term: 'Cohort Analysis',
    slug: 'cohort-analysis',
    definition:
      'Tracking a defined group of employees — typically those hired or promoted in the same period — over time to observe retention, performance, or career-trajectory patterns.',
    whyItMatters:
      "Cohort analysis reveals whether a problem is getting better or worse across hiring classes. If your 2022 cohort retains at 80% by year two and your 2024 cohort retains at 55%, you have a recent change worth investigating — not just an aggregate number.",
    seeAlso: { term: 'Survival Analysis', slug: 'survival-analysis' },
  },
  {
    term: 'Compa-Ratio',
    slug: 'compa-ratio',
    definition:
      "An employee's actual pay divided by the midpoint of their pay band, expressed as a decimal or percentage. A compa-ratio of 1.00 means the employee is paid exactly at midpoint; below 1.00 means below midpoint.",
    whyItMatters:
      'Compa-ratios are the standard tool for equity reviews and merit planning. When compa-ratios are consistently lower for one demographic group, that is an early signal for a pay equity audit.',
    seeAlso: { term: 'Pay Band', slug: 'pay-band' },
  },
  {
    term: 'Confidence Interval',
    slug: 'confidence-interval',
    definition:
      'A range of values within which the true population parameter is estimated to fall with a specified probability (e.g., 95%). A 95% CI does not mean there is a 95% chance the true value is in that range for a given sample; it means 95% of such intervals, constructed the same way, will contain the true value.',
    whyItMatters:
      'Reporting a point estimate (e.g., "engagement is 67%") without a confidence interval conceals uncertainty. For small teams or pilot surveys, the interval may be wide enough to make the estimate nearly meaningless.',
    seeAlso: { term: 'Statistical Significance', slug: 'statistical-significance' },
  },
  {
    term: 'Cost-Per-Hire',
    slug: 'cost-per-hire',
    definition:
      'The total recruiting expenditure divided by the number of hires in a period. SHRM defines it as (internal recruiting costs + external recruiting costs) ÷ total hires. It includes sourcing, advertising, agency fees, staff time, and onboarding setup.',
    whyItMatters:
      "Cost-per-hire is frequently tracked but rarely benchmarked correctly. A low cost-per-hire doesn't indicate success if quality-of-hire is also low. Always pair it with downstream outcomes.",
    seeAlso: { term: 'Quality of Hire', slug: 'quality-of-hire' },
  },
  {
    term: 'Dashboard Fatigue',
    slug: 'dashboard-fatigue',
    definition:
      'The phenomenon in which an overabundance of metrics, charts, or reports causes HR stakeholders to disengage from analytics tools rather than use them. Often results from building dashboards for data completeness rather than decision relevance.',
    whyItMatters:
      'If your CHRO has 40 metrics on their dashboard, they effectively have zero. Start with three to five decisions the leader needs to make, and build metrics backward from those decisions.',
    seeAlso: { term: 'Dashboard vs. Report', slug: 'dashboard-vs-report' },
  },
  {
    term: 'Dashboard vs. Report',
    slug: 'dashboard-vs-report',
    definition:
      'A dashboard is a real-time or near-real-time visual display of key metrics, designed for monitoring. A report is a structured document presenting historical data for review, typically produced on a schedule and consumed more slowly.',
    whyItMatters:
      'Using a report where a dashboard is needed (or vice versa) creates friction. Executives generally need dashboards to spot anomalies; managers need reports to plan. Clarify the decision before choosing the format.',
    seeAlso: { term: 'Dashboard Fatigue', slug: 'dashboard-fatigue' },
  },
  {
    term: 'Data Democratization',
    slug: 'data-democratization',
    definition:
      'The practice of making workforce data accessible and interpretable to a broad set of stakeholders — not just analysts or senior HR leaders — so that line managers and employees can make data-informed decisions.',
    whyItMatters:
      "Democratization accelerates insight, but it raises risks: untrained users misread data, confidential employee information can be exposed, and managers may draw spurious conclusions. It requires both tools and training.",
    seeAlso: { term: 'GDPR/CCPA Implications', slug: 'gdpr-ccpa' },
  },
  {
    term: 'Descriptive Analytics',
    slug: 'descriptive-analytics',
    definition:
      'The use of historical data to summarize and understand past workforce events — headcount, turnover rates, time-to-fill, absence rates. It answers "What happened?" and is the foundation for all higher-order analytics.',
    whyItMatters:
      'Most HR functions operate at the descriptive level. That is not a failure — bad descriptive data leads to worse predictive models. Invest in data quality here before advancing up the maturity ladder.',
    seeAlso: { term: 'Predictive Analytics', slug: 'predictive-analytics' },
  },
  {
    term: 'eNPS (Employee Net Promoter Score)',
    slug: 'enps',
    definition:
      'A single-question metric that asks employees how likely they are (0–10) to recommend their organization as a place to work. Promoters (9–10) minus Detractors (0–6) = eNPS, which can range from −100 to +100.',
    whyItMatters:
      'eNPS is fast to collect but blunt as a diagnostic. A score of +20 tells you something is broadly right; it cannot tell you why or which population is unhappy. Always follow up with open-text or pulse items.',
    seeAlso: { term: 'Engagement vs. Satisfaction', slug: 'engagement-vs-satisfaction' },
  },
  {
    term: 'Engagement vs. Satisfaction',
    slug: 'engagement-vs-satisfaction',
    definition:
      'Satisfaction measures whether employees like their conditions (pay, benefits, environment). Engagement measures emotional commitment and discretionary effort — whether employees go beyond the minimum. A satisfied employee is not necessarily engaged.',
    whyItMatters:
      'This distinction drives survey design and intervention strategy. Raising pay may improve satisfaction without improving engagement. Focus retention efforts on engagement drivers: autonomy, growth, purpose, and connection to team.',
    seeAlso: { term: 'eNPS', slug: 'enps' },
  },
  {
    term: 'First-Year Turnover',
    slug: 'first-year-turnover',
    definition:
      'The percentage of new hires who leave within their first twelve months of employment. A high first-year turnover rate is a leading indicator of problems in hiring accuracy, onboarding quality, or realistic job preview.',
    whyItMatters:
      'First-year turnover is one of the most expensive forms of churn because the organization has not yet recovered its hiring and training investment. A 30%+ rate typically signals a systemic onboarding or role-fit problem.',
    seeAlso: { term: 'Cost-Per-Hire', slug: 'cost-per-hire' },
  },
  {
    term: 'Four-Fifths Rule',
    slug: 'four-fifths-rule',
    definition:
      'A EEOC guideline that flags possible adverse impact when the selection rate for a protected group is less than 80% (four-fifths) of the rate for the group with the highest selection rate. It is a screening heuristic, not a legal standard.',
    whyItMatters:
      'The four-fifths rule is your first pass, not your final answer. Small samples can trigger it randomly; large samples can hide real discrimination. Combine it with statistical tests (Fisher\'s exact, chi-square) for a fuller picture.',
    seeAlso: { term: 'Adverse Impact', slug: 'adverse-impact' },
  },
  {
    term: 'FTE (Full-Time Equivalent)',
    slug: 'fte',
    definition:
      'A unit that normalizes headcount to account for part-time workers. One FTE = one full-time employee. Two part-time workers each at 20 hours per week = 1.0 FTE in a 40-hour work environment.',
    whyItMatters:
      'Comparing headcount across departments or time periods without FTE conversion misleads. A department that grew from 10 to 15 "people" but is entirely part-time may have less total labor than before.',
    seeAlso: { term: 'Headcount', slug: 'headcount' },
  },
  {
    term: 'GDPR/CCPA Implications for People Data',
    slug: 'gdpr-ccpa',
    definition:
      "The EU's General Data Protection Regulation (GDPR) and California's Consumer Privacy Act (CCPA) impose obligations on how organizations collect, store, and use personal data — including employee data. Key rights include access, correction, and deletion.",
    whyItMatters:
      'People analytics often operates in a legal gray zone. Before building a predictive attrition model or tracking workplace sentiment, verify with legal counsel which data you may use, for how long, and how it must be secured.',
    seeAlso: { term: 'Data Democratization', slug: 'data-democratization' },
  },
  {
    term: 'HCM (Human Capital Management)',
    slug: 'hcm',
    definition:
      'A category of software and practice that treats the workforce as a strategic asset requiring deliberate investment, measurement, and development. HCM platforms (Workday, SAP SuccessFactors, Oracle HCM) integrate HRIS, talent management, and analytics.',
    whyItMatters:
      'HRIS stores data; HCM interprets it. Many organizations buy HCM suites but use only the HRIS layer. The analytics and talent-management modules are where strategic HR value lives.',
    seeAlso: { term: 'HRIS', slug: 'hris' },
  },
  {
    term: 'Headcount',
    slug: 'headcount',
    definition:
      'The total number of employees on payroll at a given moment, counted as individuals regardless of their hours. Distinct from FTE, which adjusts for part-time status.',
    whyItMatters:
      "Headcount is the simplest workforce metric and the easiest to misuse. Always clarify: active vs. total? Full-time only or all employees? As-of-date snapshot or average? Different answers serve different decisions.",
    seeAlso: { term: 'FTE', slug: 'fte' },
  },
  {
    term: 'HR Analytics vs. People Analytics vs. Workforce Analytics',
    slug: 'hr-analytics-vs-people-analytics',
    definition:
      'These terms are largely interchangeable in practice. "HR analytics" is the broadest and oldest term, often scoped to the HR function itself. "People analytics" emphasizes the human element and is favored by tech companies. "Workforce analytics" tends to focus on labor supply, scheduling, and productivity at scale.',
    whyItMatters:
      "The label matters less than the questions being answered. A workforce analytics project at a manufacturing firm (shift optimization) and a people analytics project at a consulting firm (career pathing) both require the same statistical rigor.",
    seeAlso: { term: 'Descriptive Analytics', slug: 'descriptive-analytics' },
  },
  {
    term: 'HRIS (Human Resource Information System)',
    slug: 'hris',
    definition:
      "A software system that stores, manages, and tracks employee data — personal information, employment history, payroll, benefits, and compliance records. It is the system of record for people data.",
    whyItMatters:
      "The quality of your analytics is bounded by the quality of your HRIS data. Before running any analysis, audit your HRIS: are job codes standardized? Are termination reasons coded consistently? Is manager data accurate?",
    seeAlso: { term: 'HCM', slug: 'hcm' },
  },
  {
    term: 'Internal Mobility Rate',
    slug: 'internal-mobility-rate',
    definition:
      'The percentage of open positions filled by internal candidates — transfers, promotions, or lateral moves — rather than external hires. Calculated as (internal fills ÷ total fills) × 100.',
    whyItMatters:
      'Low internal mobility often signals that career pathing is unclear or that managers are hoarding talent. High internal mobility reduces cost-per-hire and preserves institutional knowledge.',
    seeAlso: { term: 'Cost-Per-Hire', slug: 'cost-per-hire' },
  },
  {
    term: 'KPI vs. Metric',
    slug: 'kpi-vs-metric',
    definition:
      "A metric is any quantifiable measure. A KPI (Key Performance Indicator) is a metric that has been selected as a proxy for a strategic goal, assigned a target, and held accountable to an owner. All KPIs are metrics; most metrics are not KPIs.",
    whyItMatters:
      "Calling everything a KPI inflates the list to uselessness. A rule of thumb: if there is no owner and no target, it is a metric to monitor, not a KPI to manage.",
    seeAlso: { term: 'Leading vs. Lagging Indicator', slug: 'leading-vs-lagging' },
  },
  {
    term: 'Leading vs. Lagging Indicator',
    slug: 'leading-vs-lagging',
    definition:
      'A lagging indicator measures an outcome that has already occurred (e.g., annual turnover rate). A leading indicator predicts a future outcome (e.g., manager satisfaction scores, which correlate with future voluntary exits).',
    whyItMatters:
      'Most HR dashboards are dominated by lagging indicators because they are easier to count. The strategic value is in identifying reliable leading indicators — so you can act before a problem becomes a statistic.',
    seeAlso: { term: 'Predictive Analytics', slug: 'predictive-analytics' },
  },
  {
    term: 'Mean',
    slug: 'mean',
    definition:
      'The mathematical average of a dataset, calculated by adding all values and dividing by the number of values.',
    whyItMatters:
      'The mean is heavily influenced by extreme outliers. For heavily skewed HR data like compensation or tenure, reporting only the mean can misrepresent the typical employee experience.',
    seeAlso: { term: 'Median', slug: 'median' },
  },
  {
    term: 'Median',
    slug: 'median',
    definition:
      'The middle value in a dataset when arranged in numerical order. Half the values fall above the median, and half fall below it.',
    whyItMatters:
      'The median is robust against extreme outliers. When reporting salaries, time-to-fill, or headcount across varying departments, the median often provides a more accurate reflection of reality than the mean.',
    seeAlso: { term: 'Mean', slug: 'mean' },
  },
  {
    term: 'Mode',
    slug: 'mode',
    definition:
      'The most frequently occurring value in a dataset. Unlike mean and median, a dataset can have one mode, multiple modes, or no mode at all.',
    whyItMatters:
      'Mode is uniquely useful for categorical data. It helps identify the most common reason for voluntary turnover in an exit survey, or the most frequent performance rating assigned by managers.',
    seeAlso: { term: 'Median', slug: 'median' },
  },
  {
    term: 'Offer Acceptance Rate',
    slug: 'offer-acceptance-rate',
    definition:
      'The percentage of formal job offers that candidates accept. Calculated as (accepted offers ÷ total offers extended) × 100.',
    whyItMatters:
      'A declining acceptance rate is a market signal, not just a recruiter problem. It may indicate misalignment on compensation, a weakening employer brand, or a cumbersome process that loses candidates to faster competitors.',
    seeAlso: { term: 'Quality of Hire', slug: 'quality-of-hire' },
  },
  {
    term: 'p-value',
    slug: 'p-value',
    definition:
      'The probability of observing results at least as extreme as those found, assuming the null hypothesis is true. A p-value of 0.05 means a 5% chance of seeing the observed result by random chance if there is truly no effect.',
    whyItMatters:
      'p-values are widely misunderstood in HR contexts. A result can be statistically significant (p < 0.05) but practically trivial, especially with large samples. Always pair statistical significance with effect size.',
    seeAlso: { term: 'Statistical Significance', slug: 'statistical-significance' },
  },
  {
    term: 'Pay Band',
    slug: 'pay-band',
    definition:
      'A defined compensation range — minimum, midpoint, and maximum — assigned to a job grade or family. Pay bands establish the boundaries within which managers can make pay decisions.',
    whyItMatters:
      "Pay bands create compensation structure and equity guardrails. When too many employees cluster at the maximum ('red-circled'), the band has aged out and needs re-evaluation.",
    seeAlso: { term: 'Compa-Ratio', slug: 'compa-ratio' },
  },
  {
    term: 'Pay Equity',
    slug: 'pay-equity',
    definition:
      'The principle that employees doing substantially similar work should receive similar compensation, regardless of gender, race, age, or other protected characteristics. Analyses typically use regression to control for legitimate pay drivers before comparing groups.',
    whyItMatters:
      'Pay equity is both a legal requirement and a retention lever. Unadjusted pay gaps often reflect occupational segregation (who is in which role) rather than direct discrimination — both deserve remediation, but different interventions.',
    seeAlso: { term: 'Compa-Ratio', slug: 'compa-ratio' },
  },
  {
    term: 'People Analytics',
    slug: 'people-analytics',
    definition:
      'See "HR Analytics vs. People Analytics vs. Workforce Analytics." The term gained popularity in the mid-2010s, particularly among technology firms, as a way to signal a more human-centered and scientific approach to workforce decisions.',
    whyItMatters:
      "The label shift from 'HR metrics' to 'people analytics' also signaled a methodological shift — from reporting past events to using statistical modeling to inform future decisions.",
    seeAlso: { term: 'HR Analytics vs. People Analytics vs. Workforce Analytics', slug: 'hr-analytics-vs-people-analytics' },
  },
  {
    term: 'Predictive Analytics',
    slug: 'predictive-analytics',
    definition:
      'The use of statistical models and machine learning to forecast future workforce outcomes based on historical and current data. Common applications include attrition prediction, flight-risk scoring, and performance forecasting.',
    whyItMatters:
      "Predictive models are only as good as the historical data they learn from. If your past decisions were biased, the model learns to replicate that bias. Audit your training data before trusting a model's output.",
    seeAlso: { term: 'Prescriptive Analytics', slug: 'prescriptive-analytics' },
  },
  {
    term: 'Prescriptive Analytics',
    slug: 'prescriptive-analytics',
    definition:
      'Analytics that go beyond predicting what will happen to recommending what action to take, often using optimization algorithms or simulation. The highest level of the analytics maturity ladder.',
    whyItMatters:
      'Prescriptive analytics is rare in HR because it requires both excellent data infrastructure and sufficient organizational trust in algorithmic recommendations. Most HR teams should focus on predictive before attempting prescriptive.',
    seeAlso: { term: 'Predictive Analytics', slug: 'predictive-analytics' },
  },
  {
    term: 'Quality of Hire',
    slug: 'quality-of-hire',
    definition:
      'A composite measure of the value a new hire delivers to the organization, typically combining performance rating, ramp time, retention at 12 months, and hiring manager satisfaction into a single score.',
    whyItMatters:
      "Quality of hire is the most important recruiting metric and among the hardest to measure consistently. Start with a simple version — performance at 90 days + 12-month retention — before building a weighted index.",
    seeAlso: { term: 'Cost-Per-Hire', slug: 'cost-per-hire' },
  },
  {
    term: 'R² (R-Squared)',
    slug: 'r-squared',
    definition:
      "The proportion of variance in the dependent variable explained by the independent variables in a regression model, expressed as a value from 0 to 1. An R² of 0.60 means the model explains 60% of the variation in the outcome.",
    whyItMatters:
      "In HR survey research, R² values of 0.20–0.40 are common and often meaningful. A low R² does not mean the model is useless — it may still identify reliable predictors even when human behavior is inherently variable.",
    seeAlso: { term: 'Statistical Significance', slug: 'statistical-significance' },
  },
  {
    term: 'Regression to the Mean',
    slug: 'regression-to-the-mean',
    definition:
      'The tendency for extreme measurements to move closer to the average on subsequent measurements. An employee with an unusually low performance rating in Q1 is likely to score higher in Q2 — not because of coaching, but because of natural variation.',
    whyItMatters:
      "Regression to the mean is a source of false credit in HR interventions. If you identify your lowest-performing employees and coach them, improvement is partially expected regardless of coaching quality. Use control groups to isolate true intervention effects.",
    seeAlso: { term: 'Base Rate', slug: 'base-rate' },
  },
  {
    term: "Regrettable Turnover",
    slug: 'regrettable-turnover',
    definition:
      'Departures that the organization wishes it could have prevented — typically high-performing or high-potential employees who left voluntarily. Contrasted with non-regrettable turnover (low performers, involuntary exits, retirements).',
    whyItMatters:
      'Tracking total turnover without segmenting by regrettability masks strategic information. A 25% turnover rate is very different if 20% of it is non-regrettable exits versus if it is your best people leaving.',
    seeAlso: { term: 'Attrition vs. Turnover', slug: 'attrition-vs-turnover' },
  },
  {
    term: 'Revenue per Employee',
    slug: 'revenue-per-employee',
    definition:
      'Total revenue divided by the number of employees (or FTEs). A macro efficiency ratio that contextualizes workforce size relative to business output.',
    whyItMatters:
      'Revenue per employee is most useful for industry benchmarking, not internal management. A drop in the ratio may mean over-hiring, but it may also reflect strategic investment in growth infrastructure. Always contextualize.',
    seeAlso: { term: 'FTE', slug: 'fte' },
  },
  {
    term: 'Sample Bias',
    slug: 'sample-bias',
    definition:
      'The systematic difference between a study sample and the population it is meant to represent. In HR surveys, sample bias occurs when response rates differ significantly across groups — for example, if disengaged employees are less likely to complete the survey.',
    whyItMatters:
      "A 70% survey response rate sounds good until you realize the 30% who did not respond are the most disengaged. Non-response bias is the most common reason HR survey results are more optimistic than reality.",
    seeAlso: { term: 'Simpson\'s Paradox', slug: 'simpsons-paradox' },
  },
  {
    term: "Simpson's Paradox in HR Data",
    slug: 'simpsons-paradox',
    definition:
      "A statistical phenomenon in which a trend that appears in aggregated data disappears or reverses when the data is broken into subgroups. The classic HR example: an organization appears to hire women at a higher rate overall, but men are preferred in every individual department.",
    whyItMatters:
      "Always disaggregate before concluding. Simpson's Paradox is not rare in HR data — it appears whenever subgroups have very different base rates AND very different sizes.",
    seeAlso: { term: 'Sample Bias', slug: 'sample-bias' },
  },
  {
    term: 'Span of Control',
    slug: 'span-of-control',
    definition:
      'The number of direct reports assigned to a single manager. Wide spans (8–12+) are typical in flat organizations; narrow spans (3–5) appear in highly complex or specialized environments requiring close supervision.',
    whyItMatters:
      "Span of control data reveals structural inefficiencies. A manager with 1–2 direct reports is an expensive bottleneck; a manager with 20+ is likely a disengaged rubber-stamper. Industry benchmarks typically suggest 6–8 for most knowledge-work roles.",
    seeAlso: { term: 'Span-and-Layers Ratio', slug: 'span-and-layers-ratio' },
  },
  {
    term: 'Span-and-Layers Ratio',
    slug: 'span-and-layers-ratio',
    definition:
      'A combined analysis of organizational structure that examines both the average span of control (breadth) and the number of management layers from CEO to individual contributor (depth). Together they reveal the efficiency and agility of the organizational design.',
    whyItMatters:
      'An org with many narrow spans and many layers is expensive and slow. Span-and-layers analysis is a standard input for org design projects and is increasingly done with HRIS data rather than manual org-chart audits.',
    seeAlso: { term: 'Span of Control', slug: 'span-of-control' },
  },
  {
    term: 'Standard Deviation',
    slug: 'standard-deviation',
    definition:
      'A statistical measure of the amount of variation or dispersion in a set of values. A low standard deviation means values are clustered closely around the mean; a high standard deviation means they are spread out.',
    whyItMatters:
      'Averages hide variation. If two teams have an average engagement score of 3.5, but Team A has a standard deviation of 0.2 and Team B has 1.5, Team B contains a much wider range of deeply happy and deeply unhappy employees.',
    seeAlso: { term: 'Mean', slug: 'mean' },
  },
  {
    term: 'Statistical Significance',
    slug: 'statistical-significance',
    definition:
      'A result is statistically significant when it is unlikely to have occurred by chance alone, typically assessed against a threshold p-value (often 0.05). It says nothing about the size or practical importance of the effect.',
    whyItMatters:
      "HR practitioners often over-rely on significance testing. With large workforce datasets, trivial differences become statistically significant. With small teams, meaningful gaps fail to reach significance. Pair every p-value with an effect size.",
    seeAlso: { term: 'Confidence Interval', slug: 'confidence-interval' },
  },
  {
    term: 'Survival Analysis',
    slug: 'survival-analysis',
    definition:
      "A set of statistical techniques that model the time until an event occurs — in HR, typically voluntary departure. It accounts for 'censored' data: employees still active at the analysis date who have not yet left.",
    whyItMatters:
      'Survival analysis (or hazard modeling) is the most precise way to answer "At what tenure point do we lose most of our people?" and "Is the risk rising or falling over time?" Standard turnover rates cannot answer these questions cleanly.',
    seeAlso: { term: 'Cohort Analysis', slug: 'cohort-analysis' },
  },
  {
    term: 'Time-to-Fill vs. Time-to-Hire',
    slug: 'time-to-fill',
    definition:
      'Time-to-fill measures days from a job requisition being opened to an offer being accepted. Time-to-hire measures days from when a candidate enters the pipeline to offer acceptance. Time-to-fill is the business metric; time-to-hire is the recruiter process metric.',
    whyItMatters:
      'The gap between time-to-fill and time-to-hire reveals sourcing lag — how long it takes to find qualified candidates after the role opens. A long gap signals sourcing or approval-chain problems, not recruiter speed.',
    seeAlso: { term: 'Offer Acceptance Rate', slug: 'offer-acceptance-rate' },
  },
]
