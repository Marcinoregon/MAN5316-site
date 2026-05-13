'use client'

import { useState } from 'react'
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react'

const QUESTIONS = [
  {
    question:
      'An analyst runs a bivariate analysis and finds that mentorship program participation correlates with higher performance. A colleague suggests adding "years of tenure" to the model. Why?',
    options: [
      'Tenure is a dependent variable that needs to be predicted separately.',
      'Tenure is a likely confounder — more tenured employees are both more likely to join mentorship programs and to perform better, so controlling for it isolates the true mentorship effect.',
      'Adding more variables always improves an analysis, regardless of their relevance.',
      'Tenure should replace mentorship participation as the independent variable.',
    ],
    correctAnswer: 1,
    explanation:
      'Tenure is a classic control variable here because it independently predicts both the predictor (senior employees are more likely to be selected for or seek out mentorship) and the outcome (senior employees tend to perform better due to experience). Without controlling for tenure, the observed mentorship-performance correlation may partly or entirely reflect the effect of experience. Adding tenure as a control variable allows the model to estimate the mentorship effect among employees at the same tenure level — a much more credible estimate of mentorship\'s unique contribution.',
  },
  {
    question:
      'A regression model predicting engagement scores (0–100) includes a "Department" variable with four categories: Sales, HR, Finance, and Operations. How should Department be entered into the model?',
    options: [
      'Enter Department as a single variable coded 1, 2, 3, 4 for each department.',
      'Create three dummy variables (Sales, HR, Finance) and omit Operations as the reference category.',
      'Create four dummy variables — one for each department.',
      'Department cannot be included in a regression model because it is categorical.',
    ],
    correctAnswer: 1,
    explanation:
      'With four categories, you need three dummy variables — one per category minus one. The omitted category becomes the reference group, and each dummy\'s coefficient is interpreted as the difference in the outcome compared to that reference. Coding Department as 1–4 is incorrect because it implies a numerical ordering (Finance is not "twice" HR). Creating four dummies causes perfect multicollinearity (the dummy variable trap), which breaks the regression. Categorical variables are routinely included in regression via dummy coding.',
  },
  {
    question:
      'A linear regression model predicts annual salary with the following output: β for "Remote_Dummy" = 4,200, p = 0.03. What does this mean?',
    options: [
      'Remote employees earn $4,200 less than on-site employees, and this is statistically significant.',
      'Remote employees earn $4,200 more than on-site employees on average, after controlling for other variables in the model, and this effect is statistically significant (p < 0.05).',
      'There is a 3% probability that remote work affects salary.',
      'The model explains 4,200 units of salary variance.',
    ],
    correctAnswer: 1,
    explanation:
      'β = 4,200 on a dummy variable means remote employees (coded 1) earn $4,200 more per year on average than the reference group (on-site employees, coded 0), holding all other variables in the model constant. The p-value of 0.03 is below the conventional threshold of 0.05, meaning this difference is statistically significant — it is unlikely to be due to chance alone. The p-value does not represent the probability that remote work affects salary; it is the probability of observing a coefficient this large if the true effect were zero.',
  },
  {
    question:
      'An HR team builds a logistic regression model to predict voluntary turnover. For the predictor "received_promotion," the odds ratio is 0.45. How should this be interpreted?',
    options: [
      'Employees who received a promotion are 45% more likely to leave.',
      'Receiving a promotion increases turnover odds by 0.45 percentage points.',
      'Employees who received a promotion have 55% lower odds of voluntary turnover compared to those who did not.',
      'The model explains 45% of the variance in turnover.',
    ],
    correctAnswer: 2,
    explanation:
      'An odds ratio below 1.0 indicates that the predictor is associated with decreased odds of the outcome. OR = 0.45 means that receiving a promotion is associated with odds of voluntary turnover that are 55% lower than for employees who did not receive a promotion (1 − 0.45 = 0.55, or a 55% reduction in odds). This is a meaningful protective effect. Odds ratios do not directly represent percentage-point changes in probability, nor do they represent variance explained — that is R², which applies to linear regression.',
  },
  {
    question:
      'Which of the following research questions calls for logistic regression rather than linear regression?',
    options: [
      'What is the predicted engagement score for an employee based on their manager rating and tenure?',
      'By how many dollars does each year of experience increase salary, controlling for department?',
      'What is the probability that an employee will leave voluntarily within 12 months, given their engagement score and number of 1-on-1 meetings?',
      'How does training hours predict performance rating on a 100-point scale?',
    ],
    correctAnswer: 2,
    explanation:
      'Logistic regression is the correct choice when the dependent variable is binary — in this case, whether an employee leaves (yes/no) within 12 months. Logistic regression models the probability of that binary outcome occurring. The other three questions all involve continuous outcomes (engagement score, salary in dollars, performance rating on a scale) — those call for linear regression. Choosing the wrong model type is one of the most consequential analytical errors: applying linear regression to a binary outcome produces predicted values outside the 0–1 probability range, making the output technically invalid.',
  },
]

export default function MultivariateQuiz() {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const q = QUESTIONS[current]
  const isCorrect = selected === q.correctAnswer

  const handleSelect = (i: number) => {
    if (revealed) return
    setSelected(i)
    setRevealed(true)
    if (i === q.correctAnswer) setScore((s) => s + 1)
  }

  const handleNext = () => {
    if (current < QUESTIONS.length - 1) {
      setCurrent((c) => c + 1)
      setSelected(null)
      setRevealed(false)
    } else {
      setFinished(true)
    }
  }

  const handleRestart = () => {
    setCurrent(0)
    setSelected(null)
    setRevealed(false)
    setScore(0)
    setFinished(false)
  }

  if (finished) {
    const pct = Math.round((score / QUESTIONS.length) * 100)
    const feedback =
      pct === 100
        ? 'Perfect score — excellent command of multivariate methods.'
        : pct >= 80
        ? 'Strong performance. Review any explanations you missed.'
        : pct >= 60
        ? 'Good effort. Revisit the regression and dummy variable sections.'
        : 'Worth re-reading the Multivariate Analysis material before moving on.'

    return (
      <div className="border border-slate-200 rounded-xl bg-white overflow-hidden">
        <div className="bg-teal-700 text-white px-8 py-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-200 mb-1">Knowledge Check Complete</p>
          <p className="font-serif text-5xl font-bold mt-2">{pct}%</p>
          <p className="text-teal-100 mt-2 text-sm">{score} of {QUESTIONS.length} correct</p>
        </div>
        <div className="px-8 py-6 text-center">
          <p className="text-slate-700 leading-relaxed mb-6">{feedback}</p>
          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 bg-teal-700 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-teal-800 transition-colors"
          >
            <RotateCcw size={16} />
            Retake Knowledge Check
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="border border-slate-200 rounded-xl bg-white overflow-hidden">
      <div className="h-1.5 bg-slate-100">
        <div
          className="h-full bg-teal-600 transition-all duration-500"
          style={{ width: `${(current / QUESTIONS.length) * 100}%` }}
        />
      </div>
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <span className="text-xs font-semibold text-teal-700 uppercase tracking-widest">
          Question {current + 1} of {QUESTIONS.length}
        </span>
        <span className="text-xs font-medium text-slate-500">Score: {score}</span>
      </div>
      <div className="px-6 py-6 bg-slate-50 border-b border-slate-200">
        <p className="font-serif text-lg font-semibold text-slate-900 leading-snug">{q.question}</p>
      </div>
      <div className="px-6 py-5 space-y-3">
        {q.options.map((opt, i) => {
          const isSelected = selected === i
          const isCorrectOpt = i === q.correctAnswer
          let cls = 'w-full text-left px-4 py-3.5 rounded-lg border-2 text-sm leading-snug transition-all duration-150 '
          if (!revealed) {
            cls += 'border-slate-200 text-slate-700 hover:border-teal-500 hover:bg-teal-50 cursor-pointer'
          } else if (isCorrectOpt) {
            cls += 'border-green-500 bg-green-50 text-green-900'
          } else if (isSelected && !isCorrectOpt) {
            cls += 'border-red-300 bg-red-50 text-red-900'
          } else {
            cls += 'border-slate-100 bg-slate-50 text-slate-400 opacity-50 cursor-not-allowed'
          }
          return (
            <button key={i} onClick={() => handleSelect(i)} disabled={revealed} className={cls}>
              <div className="flex items-start justify-between gap-3">
                <span>{opt}</span>
                {revealed && isCorrectOpt && <CheckCircle2 size={20} className="text-green-600 shrink-0 mt-0.5" />}
                {revealed && isSelected && !isCorrectOpt && <XCircle size={20} className="text-red-500 shrink-0 mt-0.5" />}
              </div>
            </button>
          )
        })}
      </div>
      {revealed && (
        <div className={`px-6 py-5 border-t ${isCorrect ? 'bg-green-50 border-green-100' : 'bg-red-50 border-red-100'}`}>
          <p className={`text-xs font-bold uppercase tracking-wide mb-2 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {isCorrect ? '✓ Correct' : '✗ Incorrect'} — Explanation
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">{q.explanation}</p>
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors"
            >
              {current < QUESTIONS.length - 1 ? 'Next Question' : 'See Results'}
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
