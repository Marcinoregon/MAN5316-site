import type { Metadata } from 'next'
import CaseLayout from '@/components/CaseLayout'
import CallOut from '@/components/CallOut'

export const metadata: Metadata = {
  title: 'IBM: Predicting Who Will Leave Before They Decide To',
  description: "How IBM's predictive attrition model claimed 95% accuracy and is reported to have saved $300 million in turnover costs.",
}

export default function IBMAttritionPage() {
  return (
    <CaseLayout
      type="real"
      title="Predicting Who Will Leave Before They Decide To"
      company="IBM"
      companySize="Large enterprise"
      topic="Attrition / retention"
      maturity="predictive"
      citations={[
        { id: '1', text: "Lohr, S. (2019, February 3). The data says workers are restless. This algorithm figured that out. The New York Times.", url: "https://www.nytimes.com/2019/02/03/technology/artificial-intelligence-workplace.html" },
        { id: '2', text: "Fast Company. (2019). IBM's AI can predict with 95% accuracy which employees are about to quit.", url: "https://www.fastcompany.com/90290780/ibm-ai-predict-employee-quit" },
        { id: '3', text: "Cascio, W. F., & Boudreau, J. W. (2019). HR strategy: Optimizing risks, not minimizing them. Human Resource Management, 58(1), 3–14.", url: "https://doi.org/10.1002/hrm.21940" },
      ]}
    >
      <h2>Background</h2>
      <p>
        IBM has invested heavily in people analytics for over a decade, using its own Watson AI platform as both a product and an internal tool. One of its most cited applications is a predictive model designed to identify employees who are likely to leave voluntarily — before they have decided to do so.
      </p>
      <p>
        IBM's Chief Human Resources Officer Diane Gherson and CEO Ginni Rometty have discussed the program publicly, making IBM one of the few large companies to speak openly about predictive attrition modeling. <sup>[1]</sup>
      </p>

      <h2>Business Problem</h2>
      <p>
        Like most large employers, IBM faced significant voluntary turnover costs. The company also had an additional challenge: its workforce was undergoing a major skill transformation, moving away from legacy IT services toward AI, cloud computing, and consulting. Losing employees with critical emerging skills to competitors was particularly costly.
      </p>

      <h2>Data Approach</h2>
      <p>
        IBM's model reportedly draws on a large set of internal data points — though the exact feature set is proprietary. Known inputs include historical attrition patterns, internal job posting behavior, skills assessment data, pay relative to market, career velocity (how quickly employees are advancing), and some employee survey signals.
      </p>
      <p>
        The model assigns flight-risk scores to individual employees. Managers are given access to scores for their direct reports, along with a set of recommended interventions — salary adjustments, stretch assignments, mobility opportunities — calibrated to the specific risk factors identified for each employee.
      </p>

      <CallOut variant="caution" title="Important methodological caveat">
        The "95% accuracy" figure cited in public reporting has not been independently verified and likely reflects the model's accuracy on held-out training data, not a randomized trial with a control group. Reported cost savings ($300M) are also IBM's own estimates. Treat these numbers as directionally meaningful rather than precise — a common challenge when evaluating proprietary corporate analytics programs.
      </CallOut>

      <h2>Outcome</h2>
      <p>
        IBM reports that the program has enabled proactive retention conversations and interventions — salary corrections, role changes, development opportunities — that would otherwise not have happened until an employee had already decided to leave. The company claims the system has saved approximately $300 million in turnover costs. <sup>[2]</sup>
      </p>
      <p>
        IBM has also commercialized elements of the underlying technology, selling talent analytics capabilities to other organizations through its HR software platform.
      </p>

      <h2>Lessons Learned</h2>
      <ul>
        <li><strong>Predictive models require action infrastructure.</strong> A flight-risk score is worth nothing if managers do not know how to respond to it or are not empowered to act. IBM paired the model with a menu of recommended interventions, which is as important as the model itself.</li>
        <li><strong>Transparency with employees is an unresolved question.</strong> IBM has not publicly confirmed whether employees know they are being scored. This raises legitimate ethical questions: Do workers have a right to know they have been flagged as flight risks? What if the score is wrong?</li>
        <li><strong>Model accuracy claims should be scrutinized.</strong> In HR analytics, "95% accurate" is often a description of in-sample fit or a specific definition of accuracy (e.g., precision) that does not capture false positives. Always ask: accurate on what? Over what time horizon? Against what baseline?</li>
        <li><strong>This model is a template, not a product.</strong> Most organizations lack the data infrastructure to replicate IBM's approach directly. The lesson is the logic: identify signals of disengagement early, connect signals to specific interventions, and measure what works.</li>
      </ul>
    </CaseLayout>
  )
}
