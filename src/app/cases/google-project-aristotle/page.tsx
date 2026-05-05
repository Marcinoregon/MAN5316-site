import type { Metadata } from 'next'
import CaseLayout from '@/components/CaseLayout'
import CallOut from '@/components/CallOut'

export const metadata: Metadata = {
  title: 'Project Aristotle: The Science of High-Performing Teams',
  description: "How Google's two-year study of 180 teams found that psychological safety — not star talent — is the strongest predictor of team effectiveness.",
}

export default function ProjectAristotlePage() {
  return (
    <CaseLayout
      type="real"
      title="Project Aristotle: The Science of High-Performing Teams"
      company="Google"
      companySize="Large enterprise"
      topic="Team effectiveness"
      maturity="descriptive"
      citations={[
        { id: '1', text: "Duhigg, C. (2016, February 25). What Google learned from its quest to build the perfect team. The New York Times Magazine.", url: "https://www.nytimes.com/2016/02/28/magazine/what-google-learned-from-its-quest-to-build-the-perfect-team.html" },
        { id: '2', text: "Google re:Work. (n.d.). Guide: Understand team effectiveness. Google.", url: "https://rework.withgoogle.com/en/guides/understanding-team-effectiveness/" },
        { id: '3', text: "Edmondson, A. C. (1999). Psychological safety and learning behavior in work teams. Administrative Science Quarterly, 44(2), 350–383.", url: "https://doi.org/10.2307/2666999" },
      ]}
    >
      <h2>Background</h2>
      <p>
        Following the success of Project Oxygen, Google's People Operations team turned its attention to the team level. The premise was straightforward: if individual manager behavior could be studied empirically, so could team dynamics. Project Aristotle (named for Aristotle's observation that "the whole is greater than the sum of its parts") launched in 2012 and ran for roughly two years.
      </p>

      <h2>Business Problem</h2>
      <p>
        Google had hundreds of teams — engineering, sales, operations, research — that varied widely in productivity, innovation, and employee satisfaction. Leaders wanted to understand whether they could identify the conditions that made teams effective and then replicate those conditions. The first instinct was that the <em>composition</em> of the team mattered most: get the right mix of skills and personalities, and success would follow.
      </p>

      <h2>Data Approach</h2>
      <p>
        Researchers studied more than 180 teams across Google over two years, collecting data from employee surveys, interviews, direct observation, and performance metrics. They tested dozens of hypotheses about what distinguished effective teams: Were the best teams composed of friends? Did introverts or extroverts perform better? Did teams with similar educational backgrounds outperform diverse ones?
      </p>
      <p>
        The researchers were specifically looking for what they called "group norms" — the behavioral standards and unwritten rules that shaped how teams operated — that predicted effectiveness.
      </p>

      <h2>Outcome: Psychological Safety Above All</h2>
      <p>
        The most consistent predictor of team effectiveness was <strong>psychological safety</strong>: the shared belief that team members would not be punished or humiliated for speaking up with ideas, questions, concerns, or mistakes. <sup>[2]</sup>
      </p>
      <p>
        Researcher Amy Edmondson had introduced the concept in 1999 <sup>[3]</sup> — Project Aristotle validated it empirically in a large organizational setting. Google found five key dynamics that set high-performing teams apart, ranked by importance:
      </p>
      <ol>
        <li><strong>Psychological safety</strong> — Can we take risks without feeling insecure or embarrassed?</li>
        <li><strong>Dependability</strong> — Can we count on each other to do high-quality work on time?</li>
        <li><strong>Structure and clarity</strong> — Are goals, roles, and execution plans clear?</li>
        <li><strong>Meaning</strong> — Is the work personally important to team members?</li>
        <li><strong>Impact</strong> — Do we believe the work matters?</li>
      </ol>

      <CallOut variant="insight" title="What did NOT predict team effectiveness">
        Individual performance ratings, geographic co-location, consensus-driven decision-making, extroversion levels, workload size, seniority, team size, and tenure. The composition of the team mattered far less than how team members treated each other.
      </CallOut>

      <h2>Lessons Learned</h2>
      <ul>
        <li><strong>Norms, not individuals, drive team performance.</strong> The same person can thrive on one team and struggle on another. This has profound implications for how managers structure team culture, run meetings, and respond to mistakes.</li>
        <li><strong>Psychological safety is not "being nice."</strong> Teams with high psychological safety have candid disagreements — but they do so in a way that feels safe. The measure is whether people feel they can speak up, not whether conflict is absent.</li>
        <li><strong>Survey data can detect culture, but culture changes require behavioral interventions.</strong> Knowing that psychological safety is low on a team does not automatically fix it. Leaders need concrete facilitation tools and modeling from the top down.</li>
        <li><strong>This finding transfers beyond Google.</strong> The psychological safety research has been replicated across industries, including healthcare, manufacturing, and financial services.</li>
      </ul>
    </CaseLayout>
  )
}
