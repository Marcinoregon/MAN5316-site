import type { Metadata } from 'next'
import CaseLayout from '@/components/CaseLayout'
import CallOut from '@/components/CallOut'

export const metadata: Metadata = {
  title: 'Best Buy: Connecting Engagement Scores to Store Revenue',
  description: "How Best Buy quantified the financial value of employee engagement, finding that a 0.1-point improvement correlated with $100,000 in annual operating income per store.",
}

export default function BestBuyPage() {
  return (
    <CaseLayout
      type="real"
      title="Connecting Engagement Scores to Store Revenue"
      company="Best Buy"
      companySize="Large enterprise"
      topic="Engagement"
      maturity="predictive"
      citations={[
        { id: '1', text: "Rucci, A. J., Kirn, S. P., & Quinn, R. T. (1998). The employee-customer-profit chain at Sears. Harvard Business Review, 76(1), 82–97.", url: "https://hbr.org/1998/01/the-employee-customer-profit-chain-at-sears" },
        { id: '2', text: "Cascio, W. F. (2006). The economic impact of employee behaviors on organizational performance. California Management Review, 48(4), 41–59.", url: "https://doi.org/10.2307/41166364" },
        { id: '3', text: "Harter, J. K., Schmidt, F. L., & Hayes, T. L. (2002). Business-unit-level relationship between employee satisfaction, employee engagement, and business outcomes. Journal of Applied Psychology, 87(2), 268–279.", url: "https://doi.org/10.1037/0021-9010.87.2.268" },
      ]}
    >
      <h2>Background</h2>
      <p>
        Best Buy operates hundreds of retail stores, each functioning as a semi-independent business unit with its own workforce, management team, and revenue and profitability figures. This structure — common in retail — creates a natural analytical opportunity: the same HR variables can be correlated with financial outcomes across stores while holding many environmental factors roughly constant.
      </p>
      <p>
        Best Buy's HR team, working with external partners, set out to quantify the financial value of employee engagement. The work sits within a tradition of engagement-to-performance linkage research established in retail and service sectors, most notably at Sears in the late 1990s. <sup>[1]</sup>
      </p>

      <h2>Business Problem</h2>
      <p>
        Best Buy's HR leadership faced a familiar challenge: they could demonstrate that engagement varied by store and correlated with manager behavior, but they could not make a compelling financial argument for investment in engagement programs because the business impact was unquantified. The question was whether they could close that loop.
      </p>

      <h2>Data Approach</h2>
      <p>
        The analysis linked annual engagement survey scores at the store level to store-level financial outcomes — primarily operating income. The unit of analysis was the store (not the individual employee), which both enabled the financial linkage and avoided individual privacy concerns.
      </p>
      <p>
        Researchers controlled for store size, market demographics, and other variables before estimating the engagement-income relationship, using a regression approach similar to the methodology Gallup has employed across thousands of business units globally. <sup>[3]</sup>
      </p>

      <CallOut variant="insight" title="Why store-level analysis works">
        Retail chains with standardized products and formats are among the best natural laboratories for engagement-outcome research. Revenue, margin, and customer satisfaction are measured consistently across units, and the primary differentiator between units is people — their hiring, management, development, and culture. HR rarely gets this clean a comparison group in other industries.
      </CallOut>

      <h2>Outcome</h2>
      <p>
        Best Buy found that a 0.1-point increase in employee engagement score — on the survey's scale — was associated with approximately $100,000 in additional annual operating income per store. This figure was reported publicly by the company and cited in subsequent engagement research. <sup>[2]</sup>
      </p>
      <p>
        The finding gave HR a dollar figure to attach to engagement initiatives. A leadership development program that moved a region's average engagement score by 0.3 points across 20 stores would represent a projected $6 million impact. That framing changed how the board viewed HR investment.
      </p>

      <h2>Lessons Learned</h2>
      <ul>
        <li><strong>Natural experiments make better evidence.</strong> The multi-unit retail structure gave Best Buy something most HR teams lack: a genuine comparison group. If your organization lacks this structure, cohort comparisons or quasi-experimental designs can approximate it.</li>
        <li><strong>Translating HR metrics into financial terms is the most powerful advocacy tool available to HR leaders.</strong> Saying "engagement went up 5 points" is qualitatively different from saying "we estimate this translates to $2M in operating income." The second claim requires more methodological work — and more humility about uncertainty — but it earns a fundamentally different type of attention.</li>
        <li><strong>Correlation is not causation — but causation is not required to justify action.</strong> This research establishes a strong, consistent correlation between engagement and financial performance. It does not prove that higher engagement causes higher revenue. The weight of evidence from dozens of similar studies, however, supports the directional claim strongly enough to act on.</li>
      </ul>
    </CaseLayout>
  )
}
