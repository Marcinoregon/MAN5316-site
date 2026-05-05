import type { Metadata } from 'next'
import CaseLayout from '@/components/CaseLayout'
import CallOut from '@/components/CallOut'

export const metadata: Metadata = {
  title: 'Dow Chemical: Strategic Workforce Planning',
  description: "How Dow Chemical's early investment in strategic workforce planning aligned talent supply to five-year business scenarios and reduced reactive hiring.",
}

export default function DowChemicalPage() {
  return (
    <CaseLayout
      type="real"
      title="Strategic Workforce Planning at Dow Chemical"
      company="Dow Chemical"
      companySize="Large enterprise"
      topic="Workforce planning"
      maturity="prescriptive"
      citations={[
        { id: '1', text: "Boudreau, J. W., & Ramstad, P. M. (2007). Beyond HR: The new science of human capital. Harvard Business School Press." },
        { id: '2', text: "Workforce Planning for Public Sector Organizations. (2012). Human Capital Institute / SHRM Foundation.", url: "https://www.shrm.org/foundation/ourwork/initiatives/workforce-planning/pages/default.aspx" },
        { id: '3', text: "Sullivan, J. (2002, March 11). Dow Chemical: A case study in strategic workforce planning. ERE Media.", url: "https://www.ere.net/dow-chemical-a-case-study-in-strategic-workforce-planning/" },
      ]}
    >
      <h2>Background</h2>
      <p>
        Dow Chemical (now part of Dow Inc.) was among the earliest large corporations to implement what practitioners now call strategic workforce planning — the practice of forecasting future talent supply and demand against business scenarios, rather than simply filling current vacancies. Dow's efforts, begun in the early 2000s, have been cited in academic and practitioner literature as a model of how large organizations can align talent decisions with business strategy. <sup>[1]</sup>
      </p>

      <h2>Business Problem</h2>
      <p>
        Dow operates in capital-intensive chemical and materials businesses with long planning horizons — decisions made today about plant construction, R&D investment, and market entry have workforce implications five to ten years out. The company faced a recurring problem: HR was optimized to hire reactively, filling roles as they opened, while the business needed HR to anticipate workforce requirements years in advance based on strategic scenarios.
      </p>
      <p>
        Additionally, a significant portion of Dow's workforce — particularly among experienced engineers and scientists — was approaching retirement age, creating a skills-transfer risk that required proactive planning.
      </p>

      <h2>Data Approach</h2>
      <p>
        Dow's workforce planning process linked HR data to business strategy in three ways:
      </p>
      <ol>
        <li><strong>Supply modeling:</strong> Using HRIS data, Dow modeled the expected workforce across a five-year horizon — accounting for retirements, voluntary attrition, internal promotions, and known departures — to project where critical skill gaps would emerge.</li>
        <li><strong>Demand modeling:</strong> Working with business unit leaders, HR translated strategic scenarios (new product lines, geographic expansion, capacity additions) into workforce requirements by role family, geography, and skill profile.</li>
        <li><strong>Gap analysis and action planning:</strong> The intersection of projected supply and demand revealed specific gaps — roles and skills that would be undersupplied relative to business need. These gaps drove decisions about hiring timelines, build-vs-buy tradeoffs, and knowledge-transfer programs for near-retirement employees. <sup>[3]</sup></li>
      </ol>

      <CallOut variant="insight" title="The shift from requisition-based to scenario-based HR">
        Traditional HR planning starts with a vacancy: a role opens, HR fills it. Strategic workforce planning starts with a question: given our five-year business strategy, what workforce will we need, and what will we actually have if current trends continue? The gap between those two projections is the planning agenda.
      </CallOut>

      <h2>Outcome</h2>
      <p>
        Dow reported that workforce planning enabled the company to reduce reactive hiring — the expensive, slow process of finding candidates urgently — by building talent pipelines in advance of actual demand. The process also surfaced the retirement cliff risk explicitly, enabling early knowledge-capture programs paired with targeted succession planning.
      </p>
      <p>
        While specific financial figures from Dow's program are not publicly available with the precision of the Best Buy or IBM cases, the methodology has been documented in academic literature by Boudreau and Ramstad as an exemplar of human capital strategy. <sup>[1]</sup>
      </p>

      <h2>Lessons Learned</h2>
      <ul>
        <li><strong>Workforce planning requires genuine partnership with business strategy.</strong> HR cannot build an accurate demand model without access to the business's strategic plans. This requires credibility with senior leaders — which itself is built by demonstrating analytical rigor over time.</li>
        <li><strong>The retirement cliff is a quantifiable risk.</strong> Organizations that track age distribution and projected retirement dates alongside role criticality have a significant planning advantage. This is descriptive analytics put to prescriptive use.</li>
        <li><strong>Scenario planning beats point forecasts.</strong> Rather than projecting a single "most likely" workforce future, Dow used multiple business scenarios. This acknowledges that strategy changes and forces HR to plan for contingencies rather than a single predicted path.</li>
        <li><strong>Build-vs-buy decisions belong in the planning model.</strong> For each identified gap, the question is not just "how many people do we need?" but "should we hire externally, develop internally, use contractors, or redesign the work?" Analytics can inform each option's cost and risk.</li>
      </ul>
    </CaseLayout>
  )
}
