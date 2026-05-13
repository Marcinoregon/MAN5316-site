'use client'

import { useState } from 'react'
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react'

const QUESTIONS = [
  {
    question:
      'An HR team wants to know whether the number of manager 1-on-1 meetings per month predicts employee burnout scores. Which variable is independent and which is dependent?',
    options: [
      'Independent: burnout score; Dependent: number of 1-on-1 meetings',
      'Independent: number of 1-on-1 meetings; Dependent: burnout score',
      'Both are independent variables — they influence each other equally.',
      'Burnout score is neither; it is a control variable in this analysis.',
    ],
    correctAnswer: 1,
    explanation:
      'The independent variable (X) is the predictor — the factor you believe does the explaining. Here, the number of 1-on-1 meetings is the input the analyst suspects influences the outcome. Burnout score is the dependent variable (Y) — the outcome being explained. The research question literally points from meetings (input) to burnout (output), making the assignment straightforward.',
  },
  {
    question:
      'A correlation of r = −0.62 is found between average commute time and engagement scores across 500 employees. How should this be interpreted?',
    options: [
      'A strong positive relationship — employees with longer commutes are more engaged.',
      'A moderate negative relationship — longer commutes tend to associate with lower engagement, though the relationship is not perfect.',
      'Commute time causes lower engagement scores.',
      'The result is not meaningful because r is negative.',
    ],
    correctAnswer: 1,
    explanation:
      'r = −0.62 indicates a strong-to-moderate negative linear relationship: as commute time increases, engagement scores tend to decrease. Per conventional benchmarks, |r| values between 0.50 and 0.70 are considered strong for behavioral data. However, correlation alone never establishes causation — we cannot conclude that commuting causes disengagement without ruling out confounders (e.g., longer commutes may indicate lower-paid, less prestigious roles). Negative r values are perfectly meaningful; they simply indicate an inverse relationship.',
  },
  {
    question:
      'An analyst finds that ice cream sales and voluntary employee turnover both spike in July and August. The correlation between the two variables is r = +0.78. What is the most likely explanation?',
    options: [
      'Eating ice cream causes employees to quit.',
      'High turnover causes employees to celebrate with ice cream.',
      'A third variable — summer seasonality — drives both patterns independently.',
      'The correlation coefficient of 0.78 is too high to be coincidental; this must be a real relationship.',
    ],
    correctAnswer: 2,
    explanation:
      'This is a classic example of a spurious correlation driven by a shared third variable. Summer seasonality (warmer weather, vacation season, fiscal year-end cycles) independently causes both ice cream purchases and elevated turnover rates. The high r value does not make the relationship meaningful — in small or seasonal datasets, mathematically strong but substantively meaningless correlations are common. This is why domain knowledge and causal reasoning must accompany statistical output.',
  },
  {
    question:
      'A company introduces a new onboarding program and finds that first-year retention improves significantly in the following year. An executive concludes the program caused the improvement. What is the main threat to this causal claim?',
    options: [
      'The correlation between onboarding and retention is probably negative.',
      'The company did not use a control group, so other factors — like economic conditions or hiring changes — could explain the improvement.',
      'First-year retention is an independent variable, not a dependent variable, so the analysis is invalid.',
      'The onboarding program would need an r > 0.90 to establish causation.',
    ],
    correctAnswer: 1,
    explanation:
      'Without a control group (a comparable group that did not receive the new program), you cannot rule out alternative explanations: the labor market may have tightened, managerial quality may have improved, or the company may have hired differently. This is the "confounding" problem in before-after studies. A stronger design would compare retention in departments that received the new program against departments that continued with the old one — or use a randomized pilot rollout. Correlation coefficients have no threshold that establishes causation.',
  },
  {
    question:
      'Which of the following best describes the difference between correlation and causation?',
    options: [
      'Correlation requires a larger sample size than causation.',
      'Causation is simply a very strong correlation (r > 0.80).',
      'Correlation shows that two variables move together; causation shows that changing one variable produces a change in the other.',
      'Correlation applies to numerical data only; causation applies to categorical data.',
    ],
    correctAnswer: 2,
    explanation:
      'Correlation and causation are fundamentally different concepts, not different thresholds on the same scale. Correlation tells you that X and Y tend to move together — but not why, not in which direction causally, and not whether any third variable is responsible. Causation requires establishing that X precedes Y, that a mechanism links them, and that alternative explanations have been ruled out. No strength of correlation — r = 0.99 included — by itself establishes causation. The distinction matters enormously for HR decisions: a correlation tells you where to look; a causal design tells you whether acting on it will change anything.',
  },
]

export default function VariablesQuiz() {
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
        ? 'Perfect score — strong command of variables and relationships.'
        : pct >= 80
        ? 'Strong performance. Review any questions you missed before moving on.'
        : pct >= 60
        ? 'Good start. Revisit the correlation and causation sections.'
        : 'Worth re-reading the Variables & Relationships material carefully.'

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
