import type { Metadata } from 'next'
import CallOut from '@/components/CallOut'

export const metadata: Metadata = {
  title: 'Multivariate Analysis',
  description:
    'Understanding multivariate analysis, control variables, dummy variables, linear regression, and logistic regression in the context of HR analytics.',
}

function ConceptCard({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden mb-6">
      <div className="bg-teal-700 text-white px-6 py-3">
        <p className="font-serif text-lg font-semibold">{title}</p>
        <p className="text-teal-200 text-xs mt-0.5">{subtitle}</p>
      </div>
      <div className="bg-white px-6 py-5">{children}</div>
    </div>
  )
}

function HRBox({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="bg-teal-50 border border-teal-200 rounded px-4 py-3 mt-3">
      <p className="text-xs font-semibold text-teal-800 uppercase tracking-wide mb-1">{label}</p>
      <div className="text-sm text-teal-900 leading-relaxed">{children}</div>
    </div>
  )
}

function WarnBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded px-4 py-3 mt-3">
      <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">Watch Out</p>
      <div className="text-sm text-amber-900 leading-relaxed">{children}</div>
    </div>
  )
}

export default function MultivariateAnalysisPage() {
  return (
    <div className="prose-section">

      {/* Header */}
      <header className="mb-12 pb-8 border-b border-slate-200">
        <p className="text-xs font-semibold text-teal-700 uppercase tracking-widest mb-3">Foundations</p>
        <h1 className="font-serif text-4xl font-semibold text-slate-900 leading-tight mb-4">
          Multivariate Analysis
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Real HR outcomes are rarely caused by a single factor. Multivariate analysis lets you
          examine how multiple variables work together to explain or predict an outcome — and
          separate the signal of each one from the noise of the others.
        </p>
      </header>

      {/* A: What is Multivariate Analysis */}
      <section aria-labelledby="section-what" className="mb-14">
        <h2 id="section-what" className="font-serif text-2xl font-semibold text-slate-900 mb-3">
          A. What Is Multivariate Analysis?
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          A <strong>bivariate analysis</strong> examines the relationship between two variables —
          for example, whether training hours correlate with performance scores. That is a useful
          starting point, but it is incomplete. Employees who attend more training may also have
          more tenure, more supportive managers, and higher baseline motivation. How do you know
          which factor is actually driving performance?
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          <strong>Multivariate analysis</strong> examines the relationship between an outcome
          (dependent variable) and <em>multiple</em> predictors (independent variables)
          simultaneously. By including several variables at once, you can estimate the unique
          contribution of each one while statistically accounting for the others.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-lg px-6 py-5 mb-6">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">Bivariate vs. Multivariate: a comparison</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-300">
                  <th className="text-left py-2 pr-4 text-slate-600 font-semibold"> </th>
                  <th className="text-left py-2 pr-4 text-slate-600 font-semibold">Bivariate</th>
                  <th className="text-left py-2 text-teal-700 font-semibold">Multivariate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  { label: 'Number of predictors', bi: '1', multi: '2 or more' },
                  { label: 'Controls for other factors?', bi: 'No', multi: 'Yes' },
                  { label: 'Can isolate unique contribution?', bi: 'No', multi: 'Yes' },
                  { label: 'Risk of confounding?', bi: 'High', multi: 'Lower' },
                  { label: 'Complexity', bi: 'Simple', multi: 'Moderate to high' },
                ].map(({ label, bi, multi }) => (
                  <tr key={label}>
                    <td className="py-2.5 pr-4 font-medium text-slate-800">{label}</td>
                    <td className="py-2.5 pr-4 text-slate-600">{bi}</td>
                    <td className="py-2.5 text-teal-700 font-medium">{multi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <CallOut variant="insight" title="The core logic of multivariate analysis">
          When you add a variable to a model, you are essentially asking: &ldquo;After accounting
          for everything else in this model, what is the unique relationship between this predictor
          and the outcome?&rdquo; This &ldquo;holding other things equal&rdquo; logic is what makes
          multivariate methods so powerful — and why they are the workhorse of quantitative HR research.
        </CallOut>
      </section>

      {/* B: Control Variables */}
      <section aria-labelledby="section-controls" className="mb-14">
        <h2 id="section-controls" className="font-serif text-2xl font-semibold text-slate-900 mb-3">
          B. Control Variables
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          A <strong>control variable</strong> is a variable you include in a model not because
          you are primarily interested in it, but because you know it influences the outcome and
          you want to remove its effect from your main analysis. Controlling for a variable means
          statistically holding it constant so it cannot confound your results.
        </p>

        <ConceptCard title="How Control Variables Work" subtitle="Isolating the effect you actually care about">
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            Imagine you want to know whether employees who participate in a mentorship program
            perform better. You run a simple correlation and find yes — mentorship participants
            score higher. But participants also tend to be more senior. Seniority predicts
            performance independently. Without controlling for seniority, you cannot tell whether
            mentorship is helping or whether you are just measuring seniority.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed mb-3">
            When you add seniority as a control variable, the model estimates the mentorship
            effect <em>among employees at the same seniority level</em>. If mentorship still
            predicts performance after this control, you have a much stronger case.
          </p>
          <HRBox label="Common HR control variables">
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Tenure / seniority</strong> — more experienced employees perform differently</li>
              <li><strong>Department</strong> — outcomes vary structurally across business units</li>
              <li><strong>Manager</strong> — a powerful confounder in almost every HR model</li>
              <li><strong>Age / generation</strong> — may correlate with both predictors and outcomes</li>
              <li><strong>Prior performance</strong> — often the strongest predictor of future performance</li>
            </ul>
          </HRBox>
          <WarnBox>
            Over-controlling is a real risk. If you add too many control variables — especially
            ones that are themselves caused by your main predictor — you can inadvertently absorb
            the very effect you are trying to measure. Be selective and theoretically motivated
            about what you control for.
          </WarnBox>
        </ConceptCard>
      </section>

      {/* C: Dummy Variables */}
      <section aria-labelledby="section-dummy" className="mb-14">
        <h2 id="section-dummy" className="font-serif text-2xl font-semibold text-slate-900 mb-3">
          C. Dummy Variables
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Regression models require numerical inputs. But many important HR variables are
          categorical — department, job type, work arrangement, gender. A{' '}
          <strong>dummy variable</strong> (also called an indicator variable) converts a
          categorical variable into a numerical format that regression can process.
        </p>

        <ConceptCard title="Creating Dummy Variables" subtitle="Converting categories to 0s and 1s">
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            A dummy variable is binary: it equals <strong>1</strong> if an observation belongs to
            a category, and <strong>0</strong> if it does not. For a two-category variable (e.g.,
            Remote vs. On-site), one dummy variable is sufficient. For variables with more
            categories, you create multiple dummies — one per category, minus one.
          </p>

          <div className="overflow-x-auto mb-4">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Example: Work Arrangement (3 categories)</p>
            <table className="w-full text-sm border border-slate-200 rounded">
              <thead className="bg-slate-50">
                <tr className="border-b border-slate-200">
                  <th className="text-left px-4 py-2 text-slate-600 font-semibold">Employee</th>
                  <th className="text-left px-4 py-2 text-slate-600 font-semibold">Arrangement</th>
                  <th className="text-left px-4 py-2 text-teal-700 font-semibold">Remote (1/0)</th>
                  <th className="text-left px-4 py-2 text-teal-700 font-semibold">Hybrid (1/0)</th>
                  <th className="text-left px-4 py-2 text-slate-500 font-semibold">On-site (reference)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  { emp: 'A', arr: 'Remote', r: '1', h: '0', o: '—' },
                  { emp: 'B', arr: 'Hybrid', r: '0', h: '1', o: '—' },
                  { emp: 'C', arr: 'On-site', r: '0', h: '0', o: '(baseline)' },
                  { emp: 'D', arr: 'Remote', r: '1', h: '0', o: '—' },
                ].map(({ emp, arr, r, h, o }) => (
                  <tr key={emp}>
                    <td className="px-4 py-2 font-medium">{emp}</td>
                    <td className="px-4 py-2">{arr}</td>
                    <td className="px-4 py-2 font-mono text-teal-700">{r}</td>
                    <td className="px-4 py-2 font-mono text-teal-700">{h}</td>
                    <td className="px-4 py-2 text-slate-400 italic">{o}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 text-sm leading-relaxed">
            Notice that <strong>On-site is omitted</strong> — it is the <em>reference category</em>.
            The coefficients on Remote and Hybrid in a regression are interpreted as the difference
            in the outcome compared to On-site employees. You always omit one category to avoid
            perfect multicollinearity (the &ldquo;dummy variable trap&rdquo;).
          </p>

          <HRBox label="Common uses of dummy variables in HR analysis">
            <ul className="list-disc list-inside space-y-1">
              <li>Controlling for department or business unit effects</li>
              <li>Comparing outcomes across job families or pay grades</li>
              <li>Encoding whether an employee received an intervention (1) or not (0)</li>
              <li>Representing any yes/no characteristic: promoted, high-potential, manager role</li>
            </ul>
          </HRBox>
        </ConceptCard>
      </section>

      {/* D: Linear Regression */}
      <section aria-labelledby="section-regression" className="mb-14">
        <h2 id="section-regression" className="font-serif text-2xl font-semibold text-slate-900 mb-3">
          D. Linear Regression Analysis
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          <strong>Linear regression</strong> is the most widely used multivariate technique. It
          models the relationship between a <em>continuous</em> dependent variable and one or
          more independent variables by fitting a straight line (or plane, in multiple dimensions)
          that best represents the data.
        </p>

        <ConceptCard title="The Regression Equation" subtitle="Reading the output of a linear regression">
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            A multiple linear regression equation takes the form:
          </p>
          <div className="bg-slate-800 text-white rounded px-5 py-4 font-mono text-sm mb-4">
            Y = β₀ + β₁X₁ + β₂X₂ + β₃X₃ + ε
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 mb-4">
            {[
              { symbol: 'Y', meaning: 'The outcome you are predicting (e.g., performance score)' },
              { symbol: 'β₀', meaning: 'The intercept — the predicted value of Y when all X variables equal zero' },
              { symbol: 'β₁, β₂, β₃', meaning: 'Regression coefficients — how much Y changes for each one-unit increase in each X, holding all other X variables constant' },
              { symbol: 'ε', meaning: 'The error term — the portion of Y not explained by the model' },
            ].map(({ symbol, meaning }) => (
              <div key={symbol} className="flex gap-3 bg-slate-50 border border-slate-200 rounded p-3">
                <span className="font-mono text-teal-700 font-bold shrink-0">{symbol}</span>
                <span className="leading-snug">{meaning}</span>
              </div>
            ))}
          </div>
          <HRBox label="HR Example: Predicting engagement score">
            <p className="mb-2">Suppose you run a regression with engagement score (0–100) as the outcome:</p>
            <div className="bg-white border border-teal-200 rounded px-3 py-2 font-mono text-xs mb-2">
              Engagement = 42 + 3.1(Manager_Rating) + 0.8(Training_Hours) − 2.4(Commute_Min) + 5.2(Remote_Dummy)
            </div>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Each 1-point rise in manager rating → +3.1 points in engagement</li>
              <li>Each additional training hour → +0.8 points</li>
              <li>Each additional minute of commute → −2.4 points</li>
              <li>Remote employees score 5.2 points higher than on-site (the reference group)</li>
              <li>All of these effects are estimated <em>simultaneously</em>, holding the others constant</li>
            </ul>
          </HRBox>
        </ConceptCard>

        <div className="border border-slate-200 rounded-lg p-5 bg-white mb-6">
          <h3 className="font-serif text-lg font-semibold text-slate-900 mb-3">Key Output Metrics to Know</h3>
          <div className="space-y-3">
            {[
              { term: 'R² (R-squared)', def: 'The proportion of variance in the outcome explained by the model. R² = 0.40 means the predictors account for 40% of the variation in the outcome. Higher is better, but in behavioral research, R² values of 0.20–0.40 are often meaningful.' },
              { term: 'Coefficient (β)', def: 'The slope for each predictor — how much the outcome is expected to change for a one-unit increase in that predictor, with all other predictors held constant.' },
              { term: 'p-value', def: 'The probability that the observed coefficient would occur by chance if the true effect were zero. Conventionally, p < 0.05 is considered statistically significant — meaning the relationship is unlikely to be noise.' },
              { term: 'Confidence Interval', def: 'A range of plausible values for the true coefficient. A 95% CI of [1.2, 4.8] means you are 95% confident the true effect lies between 1.2 and 4.8. Narrower intervals indicate more precise estimates.' },
            ].map(({ term, def }) => (
              <div key={term} className="flex gap-4 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                <div className="shrink-0 w-2 rounded-full bg-teal-600 self-stretch" />
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{term}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mt-0.5">{def}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <CallOut variant="caution" title="Linear regression requires a continuous outcome">
          Linear regression is appropriate when your dependent variable is continuous and
          roughly normally distributed — engagement scores, salary, performance points,
          tenure. It is <em>not</em> appropriate when your outcome is binary (stayed/left,
          promoted/not promoted). For those situations, use logistic regression.
        </CallOut>
      </section>

      {/* E: Logistic Regression */}
      <section aria-labelledby="section-logistic" className="mb-12">
        <h2 id="section-logistic" className="font-serif text-2xl font-semibold text-slate-900 mb-3">
          E. Logistic Regression Analysis
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          <strong>Logistic regression</strong> is used when the dependent variable is{' '}
          <strong>binary</strong> — it has only two possible outcomes (yes/no, 1/0). Instead of
          predicting the raw value of Y, logistic regression predicts the{' '}
          <em>probability</em> that Y = 1. This makes it the standard tool for the most
          consequential questions in HR analytics: who is likely to leave? Who is likely to
          succeed?
        </p>

        <ConceptCard title="How Logistic Regression Works" subtitle="Predicting probabilities, not values">
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            Logistic regression uses the same predictor structure as linear regression, but it
            runs the prediction through a mathematical function (the logistic/sigmoid function)
            that constrains the output to fall between 0 and 1. The result is a predicted
            probability: &ldquo;This employee has a 73% probability of voluntary turnover in
            the next 12 months.&rdquo;
          </p>
          <HRBox label="Common binary outcomes in HR logistic regression">
            <ul className="list-disc list-inside space-y-1">
              <li>Voluntary turnover in the next 12 months (yes / no)</li>
              <li>Retained past 90 days (yes / no)</li>
              <li>Promoted within 2 years (yes / no)</li>
              <li>Selected for hire from applicant pool (yes / no)</li>
              <li>Flagged as high-potential (yes / no)</li>
            </ul>
          </HRBox>
        </ConceptCard>

        <div className="border border-slate-200 rounded-lg p-5 bg-white mb-6">
          <h3 className="font-serif text-lg font-semibold text-slate-900 mb-3">Reading Logistic Regression Output: Odds Ratios</h3>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            Logistic regression coefficients are expressed as <strong>odds ratios (OR)</strong> —
            a measure of how much a one-unit increase in a predictor changes the <em>odds</em> of
            the outcome occurring.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-2 text-slate-600 font-semibold">Odds Ratio</th>
                  <th className="text-left px-4 py-2 text-slate-600 font-semibold">Interpretation</th>
                  <th className="text-left px-4 py-2 text-slate-600 font-semibold">HR Example (outcome = voluntary exit)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 text-sm">
                {[
                  { or: 'OR = 1.0', interp: 'No effect', ex: 'Commute distance has no relationship with turnover odds' },
                  { or: 'OR > 1.0 (e.g., 1.8)', interp: 'Increases the odds of Y = 1', ex: 'Each missed 1-on-1 per month multiplies turnover odds by 1.8×' },
                  { or: 'OR < 1.0 (e.g., 0.6)', interp: 'Decreases the odds of Y = 1', ex: 'Receiving a promotion reduces turnover odds to 60% of baseline' },
                ].map(({ or, interp, ex }) => (
                  <tr key={or}>
                    <td className="px-4 py-3 font-mono text-teal-700 font-bold">{or}</td>
                    <td className="px-4 py-3">{interp}</td>
                    <td className="px-4 py-3 text-slate-600 italic">{ex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="border border-slate-200 rounded-lg p-5 bg-white mb-6">
          <h3 className="font-serif text-lg font-semibold text-slate-900 mb-4">Linear vs. Logistic Regression: Quick Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-2 text-slate-600 font-semibold"> </th>
                  <th className="text-left px-4 py-2 text-teal-700 font-semibold">Linear Regression</th>
                  <th className="text-left px-4 py-2 text-sky-700 font-semibold">Logistic Regression</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  { label: 'Outcome type', lin: 'Continuous (scores, salary, tenure)', log: 'Binary (yes/no, 1/0)' },
                  { label: 'What it predicts', lin: 'The value of Y', log: 'The probability that Y = 1' },
                  { label: 'Output metric', lin: 'Coefficient (β) — change in Y per unit X', log: 'Odds ratio — change in odds of Y per unit X' },
                  { label: 'Model fit statistic', lin: 'R² (variance explained)', log: 'Pseudo-R², AUC, classification accuracy' },
                  { label: 'HR use cases', lin: 'Predicting engagement scores, salary equity analysis, performance forecasting', log: 'Predicting turnover, promotion likelihood, hire/no-hire decisions' },
                ].map(({ label, lin, log }) => (
                  <tr key={label}>
                    <td className="px-4 py-3 font-medium text-slate-800">{label}</td>
                    <td className="px-4 py-3 text-slate-700">{lin}</td>
                    <td className="px-4 py-3 text-slate-700">{log}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <CallOut variant="insight" title="You do not need to run these models yourself">
          As an HR professional working with analysts or using people analytics platforms, your
          job is not to code the regression — it is to ask the right questions, interpret the
          output correctly, and communicate findings to decision-makers. Understanding what
          a coefficient means, why a control variable matters, and how to read an odds ratio
          makes you a far more effective consumer and communicator of analytical work.
        </CallOut>
      </section>
    </div>
  )
}
