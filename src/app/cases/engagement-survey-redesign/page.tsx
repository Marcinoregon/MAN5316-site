import type { Metadata } from 'next'
import CaseLayout from '@/components/CaseLayout'
import CallOut from '@/components/CallOut'

export const metadata: Metadata = {
  title: 'Fixing Response Bias in an Engagement Survey (Illustrative)',
  description: "An illustrative scenario showing how response-bias correction revealed hidden disengagement in a municipal workforce.",
}

export default function EngagementSurveyPage() {
  return (
    <CaseLayout
      type="illustrative"
      title="Fixing Response Bias in an Engagement Survey"
      company="Northbrook Municipal Government (Illustrative)"
      companySize="Mid-size (600 employees)"
      topic="Engagement measurement"
      maturity="descriptive"
    >
      <h2>Background</h2>
      <p>
        Northbrook Municipal Government is a fictitious city government with approximately 600 employees across public works, planning, permitting, parks, and administrative functions. Its annual employee engagement survey had consistently returned favorable scores — an overall engagement index of 72% "favorable" — and a response rate of 68%, which leaders considered healthy.
      </p>
      <p>
        During a change management initiative, HR discovered that an entire division — the 80-person permitting and code enforcement department — had submitted fewer than five completed surveys in the most recent cycle. The 68% overall response rate had masked a near-zero participation rate from a critical unit.
      </p>

      <h2>Business Problem</h2>
      <p>
        The permitting department had the highest grievance rate, the highest absenteeism rate, and the most supervisor complaints in the organization. Its non-participation in the engagement survey had allowed leadership to believe the organization was broadly healthy, while an entire department effectively opted out of the measurement process.
      </p>

      <CallOut variant="caution" title="Non-response bias is the most common survey distortion">
        Disengaged employees are systematically less likely to complete engagement surveys. This means every engagement survey with less than 90%+ response rates is structurally biased toward optimism. A 70% response rate that does not account for who the 30% are is misleading by design.
      </CallOut>

      <h2>Diagnosis</h2>
      <p>
        HR conducted a brief follow-up diagnostic — five open-ended questions administered via paper with a supervisor-blind collection process — with the permitting department. Key findings:
      </p>
      <ul>
        <li>Employees did not trust that survey responses were anonymous, citing past incidents where managers appeared to identify individual respondents from write-in comments.</li>
        <li>The survey platform required employees to log in with city credentials, which several employees believed linked their responses to their identity.</li>
        <li>Several employees did not complete the survey as a form of collective protest against working conditions they believed leadership had ignored in prior years.</li>
      </ul>

      <h2>Redesign Interventions</h2>
      <ol>
        <li><strong>Platform change:</strong> Northbrook switched to a third-party survey vendor that de-coupled credentials from response data and provided audited anonymity certification.</li>
        <li><strong>Question redesign:</strong> Open-ended write-in items were moved to a separate, optional module with clear guidance that verbatim comments would be aggregated and paraphrased before any manager review.</li>
        <li><strong>Response rate transparency:</strong> Unit-level response rates were published alongside results, with a note that units with fewer than 10 responses would not be reported separately to prevent identification.</li>
        <li><strong>Leadership commitment ritual:</strong> Division directors committed publicly (via all-hands meetings) to sharing at least three specific actions taken in response to the previous survey — closing the feedback loop before asking employees to survey again.</li>
      </ol>

      <h2>Outcome</h2>
      <p>
        In the following survey cycle, overall response rates rose from 68% to 81%, and the permitting department's response rate reached 74%. The overall engagement index declined from 72% to 64% favorable — reflecting not a deterioration in engagement, but the inclusion of a previously silent population that was genuinely disengaged.
      </p>
      <p>
        Leadership initially received this as bad news. The CHRO reframed it: "We now have an accurate picture. A 72% score built on 68% responses was fiction. A 64% score built on 81% responses is real data we can act on."
      </p>

      <CallOut variant="insight" title="What this case illustrates">
        Response rate is not just a data quality metric — it is a trust metric. Low participation in engagement surveys reflects the same disengagement the survey is trying to measure. Before redesigning survey questions, audit who is and is not responding.
      </CallOut>
    </CaseLayout>
  )
}
