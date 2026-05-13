'use client'

import { useState } from 'react'
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react'

const QUESTIONS = [
  {
    question:
      'Your organization reports that the average (mean) salary is $95,000, but the median salary is $62,000. What does this tell you?',
    options: [
      'The data was collected incorrectly.',
      'Most employees earn close to $95,000.',
      'A small number of very high earners are pulling the mean upward.',
      'The median is always a more accurate measure than the mean.',
    ],
    correctAnswer: 2,
    explanation:
      'When the mean is significantly higher than the median, it signals a right-skewed distribution — a small number of very high values (like executive salaries) are pulling the mean upward. The median is unaffected by those extremes and better represents the "typical" employee. In skewed salary data, the median is generally the more useful central tendency measure.',
  },
  {
    question:
      'An HR analyst wants to calculate the average engagement score from a survey that used a 1–5 rating scale. What data type are these ratings, and what should the analyst be aware of?',
    options: [
      'Ratio data — no special concerns apply.',
      'Nominal data — the mean cannot be calculated at all.',
      'Ordinal data — the intervals between ratings may not be equal, so the mean is an approximation.',
      'Interval data — the mean is perfectly valid because zero on the scale means no engagement.',
    ],
    correctAnswer: 2,
    explanation:
      'Likert-type ratings (1–5, 1–7) are ordinal data. The categories have a meaningful order, but there is no guarantee that the gap between "Disagree" and "Neutral" equals the gap between "Neutral" and "Agree." Calculating a mean treats those gaps as equal — a defensible simplification in practice, but one the analyst should acknowledge. It is not ratio data because a score of 0 does not represent the complete absence of engagement.',
  },
  {
    question:
      'In a normally distributed dataset of time-to-fill with a mean of 28 days and a standard deviation of 5 days, approximately what percentage of roles are filled in fewer than 23 days?',
    options: [
      'Approximately 2.5%',
      'Approximately 16%',
      'Approximately 32%',
      'Approximately 50%',
    ],
    correctAnswer: 1,
    explanation:
      '23 days is exactly one standard deviation below the mean (28 − 5 = 23). According to the empirical rule, approximately 68% of values fall within ±1σ of the mean, leaving 32% in the tails. Because the normal distribution is symmetric, half of that 32% — about 16% — falls below −1σ. So roughly 16% of roles are filled in fewer than 23 days.',
  },
  {
    question:
      'Which of the following variables is an example of ratio data?',
    options: [
      'An employee\'s performance rating on a 1–5 scale.',
      'The year an employee was hired (e.g., 2018, 2021).',
      'The department an employee belongs to (Sales, HR, Finance).',
      'The number of training hours an employee completed.',
    ],
    correctAnswer: 3,
    explanation:
      'Number of training hours is ratio data: it has a true zero (0 hours = no training completed), and the intervals between values are equal, making all arithmetic operations valid. Performance ratings are ordinal (equal intervals not guaranteed). Hire year is interval data — the year 0 is not a meaningful baseline for this variable, and you cannot say 2020 is "twice" 2010. Department is nominal data — categories with no mathematical relationship.',
  },
  {
    question:
      'A large call center finds that the mode of its employees\' preferred shift is the "Evening" shift, while the mean shift preference score (1 = Morning, 2 = Afternoon, 3 = Evening) is 2.1. Which statistic is most meaningful here, and why?',
    options: [
      'The mean (2.1), because it uses all the data points.',
      'The mode ("Evening"), because shift preference is a categorical variable.',
      'The median, because it is always the most robust measure.',
      'Neither — you need standard deviation to understand shift preferences.',
    ],
    correctAnswer: 1,
    explanation:
      'Shift preference is a nominal categorical variable — the labels Morning, Afternoon, and Evening have no inherent numerical order or equal spacing. Assigning them numbers (1, 2, 3) and computing a mean of 2.1 produces a mathematically misleading result. The mode — the most frequently chosen category — is the appropriate measure of central tendency for nominal data. It directly answers: "Which shift do most employees prefer?"',
  },
]

export default function DataBasicsQuiz() {
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
        ? 'Perfect score — excellent command of the material.'
        : pct >= 80
        ? 'Strong performance. Review any questions you missed.'
        : pct >= 60
        ? 'Solid start. Revisit the sections on the questions you missed.'
        : 'Worth another read-through of the Data Basics material before moving on.'

    return (
      <div className="border border-slate-200 rounded-xl bg-white overflow-hidden">
        <div className="bg-teal-700 text-white px-8 py-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-200 mb-1">Knowledge Check Complete</p>
          <p className="font-serif text-5xl font-bold mt-2">{pct}%</p>
          <p className="text-teal-100 mt-2 text-sm">
            {score} of {QUESTIONS.length} correct
          </p>
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
      {/* Progress bar */}
      <div className="h-1.5 bg-slate-100">
        <div
          className="h-full bg-teal-600 transition-all duration-500"
          style={{ width: `${((current) / QUESTIONS.length) * 100}%` }}
        />
      </div>

      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
        <span className="text-xs font-semibold text-teal-700 uppercase tracking-widest">
          Question {current + 1} of {QUESTIONS.length}
        </span>
        <span className="text-xs font-medium text-slate-500">Score: {score}</span>
      </div>

      {/* Question */}
      <div className="px-6 py-6 bg-slate-50 border-b border-slate-200">
        <p className="font-serif text-lg font-semibold text-slate-900 leading-snug">{q.question}</p>
      </div>

      {/* Options */}
      <div className="px-6 py-5 space-y-3">
        {q.options.map((opt, i) => {
          const isSelected = selected === i
          const isCorrectOpt = i === q.correctAnswer
          let cls =
            'w-full text-left px-4 py-3.5 rounded-lg border-2 text-sm leading-snug transition-all duration-150 '
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

      {/* Explanation */}
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
