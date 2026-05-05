import type { Metadata } from 'next'
import CaseLayout from '@/components/CaseLayout'
import CallOut from '@/components/CallOut'

export const metadata: Metadata = {
  title: 'Project Oxygen: What Makes a Great Manager?',
  description: "How Google used internal data to identify the behaviors of its most effective managers and translate them into scalable training.",
}

export default function ProjectOxygenPage() {
  return (
    <CaseLayout
      type="real"
      title="Project Oxygen: What Makes a Great Manager?"
      company="Google"
      companySize="Large enterprise"
      topic="Manager effectiveness"
      maturity="prescriptive"
      citations={[
        { id: '1', text: "Garvin, D. A. (2013). How Google sold its engineers on management. Harvard Business Review, 91(12), 74–82.", url: "https://hbr.org/2013/12/how-google-sold-its-engineers-on-management" },
        { id: '2', text: "Bryant, A. (2011, March 12). Google's quest to build a better boss. The New York Times.", url: "https://www.nytimes.com/2011/03/13/business/13hire.html" },
        { id: '3', text: "Google re:Work. (n.d.). Project Oxygen: The eight behaviors of high-scoring managers. Google.", url: "https://rework.withgoogle.com/en/guides/managers-identify-what-makes-a-great-manager/" },
      ]}
    >
      <h2>Background</h2>
      <p>
        In 2008, Google's senior leadership held a longstanding belief that managers were largely unnecessary — or at least that technical excellence mattered far more than managerial skill. The People Operations team (Google's name for HR) decided to test this assumption empirically rather than debate it.
      </p>
      <p>
        Project Oxygen began as an internal research initiative designed to answer a simple question: <em>Do managers matter at Google, and if so, what makes them effective?</em>
      </p>

      <h2>Business Problem</h2>
      <p>
        Google was experiencing meaningful variation in team performance, retention, and employee satisfaction that correlated suspiciously with who managed those teams. But without data linking manager behaviors to outcomes, the company could not make the case — internally or externally — for investing in management development. The question was whether the variation was signal or noise.
      </p>

      <h2>Data Approach</h2>
      <p>
        The People Operations team pulled double-blind interview data, performance reviews, and employee survey responses for more than 10,000 managers. They used statistical analysis to identify the specific behaviors and attributes that distinguished managers in the top quartile from those in the bottom quartile on key outcomes: team performance, employee satisfaction, and retention.
      </p>
      <p>
        They ranked managers from highest to lowest and studied what the top and bottom 25% actually <em>did differently</em> — not what they said they did. The analysis was deliberately behavior-focused, not trait-focused.
      </p>

      <CallOut variant="insight" title="Why behaviors, not traits?">
        Traits (intelligence, charisma, conscientiousness) are hard to change through training. Behaviors (how often a manager holds one-on-ones, how they deliver feedback) are learnable and measurable. By focusing on what managers do rather than who they are, Google created actionable training targets.
      </CallOut>

      <h2>Outcome: The Eight Behaviors</h2>
      <p>Project Oxygen identified eight behaviors that distinguished high-scoring managers. Listed in order of importance to employees:</p>
      <ol>
        <li>Is a good coach</li>
        <li>Empowers the team and does not micromanage</li>
        <li>Creates an inclusive team environment, showing concern for success and well-being</li>
        <li>Is productive and results-oriented</li>
        <li>Is a good communicator — listens and shares information</li>
        <li>Supports career development and discusses performance</li>
        <li>Has a clear vision/strategy for the team</li>
        <li>Has key technical skills to help advise the team</li>
      </ol>
      <p>
        The finding that technical expertise ranked last was particularly significant at a company of engineers who had historically been skeptical of management. Subsequent iterations of Project Oxygen added additional behaviors as the company evolved. <sup>[3]</sup>
      </p>
      <p>
        Google embedded these behaviors into manager evaluation surveys, developed targeted training modules for each, and used the framework to guide promotion decisions. Managers who scored low on specific behaviors were connected to development resources targeted at those behaviors.
      </p>

      <h2>Lessons Learned</h2>
      <ul>
        <li><strong>Data can change culture.</strong> Google's engineers were persuaded by evidence in ways they would not have been by assertion. The rigor of the methodology gave the findings credibility.</li>
        <li><strong>Start with a good question.</strong> "Do managers matter?" is a falsifiable question. "How do we improve management?" is not. Starting with the right research question is half the work.</li>
        <li><strong>Behavior-based frameworks are more useful than competency lists.</strong> The shift from "great managers are good communicators" to "great managers hold consistent one-on-ones and share information proactively" made the framework trainable.</li>
        <li><strong>Analytics does not end at the finding.</strong> Project Oxygen's value came from what happened after the research: the training programs, the revised evaluation criteria, the ongoing measurement. The data was a beginning, not a conclusion.</li>
      </ul>
    </CaseLayout>
  )
}
