'use client'

import { useState } from 'react'
import { QUIZ_QUESTIONS } from '@/lib/quiz'
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from 'lucide-react'

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const question = QUIZ_QUESTIONS[currentQuestion]
  const isCorrect = selectedOption === question.correctAnswer

  const handleSelect = (index: number) => {
    if (showExplanation) return
    setSelectedOption(index)
    setShowExplanation(true)
    if (index === question.correctAnswer) {
      setScore((s) => s + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion((c) => c + 1)
      setSelectedOption(null)
      setShowExplanation(false)
    } else {
      setIsFinished(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setShowExplanation(false)
    setScore(0)
    setIsFinished(false)
  }

  if (isFinished) {
    const percentage = Math.round((score / QUIZ_QUESTIONS.length) * 100)
    return (
      <div className="max-w-3xl mx-auto bg-white rounded-xl border border-slate-200 shadow-sm p-8 sm:p-12 text-center">
        <h2 className="font-serif text-3xl font-semibold text-slate-900 mb-4">Quiz Complete!</h2>
        <div className="text-6xl font-bold text-teal-600 mb-6">{percentage}%</div>
        <p className="text-lg text-slate-600 mb-8">
          You scored {score} out of {QUIZ_QUESTIONS.length} correct.
        </p>
        <button
          onClick={handleRestart}
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors"
        >
          <RotateCcw size={18} />
          Retake Quiz
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 flex justify-between items-end px-2">
        <div className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
          Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
        </div>
        <div className="text-sm text-slate-500 font-medium">Score: {score}</div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200">
          <h2 className="text-xl sm:text-2xl font-serif font-semibold text-slate-900 leading-snug">
            {question.question}
          </h2>
        </div>

        <div className="p-6 sm:p-8 space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedOption === index
            const isCorrectOption = index === question.correctAnswer
            
            let buttonStyles = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 "
            
            if (!showExplanation) {
              buttonStyles += "border-slate-200 hover:border-teal-600 hover:bg-teal-50 text-slate-700"
            } else if (isCorrectOption) {
              buttonStyles += "border-green-500 bg-green-50 text-green-900"
            } else if (isSelected && !isCorrectOption) {
              buttonStyles += "border-red-300 bg-red-50 text-red-900"
            } else {
              buttonStyles += "border-slate-100 bg-slate-50 text-slate-400 opacity-50 cursor-not-allowed"
            }

            return (
              <button
                key={index}
                onClick={() => handleSelect(index)}
                disabled={showExplanation}
                className={buttonStyles}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-medium">{option}</span>
                  {showExplanation && isCorrectOption && <CheckCircle2 className="text-green-600 shrink-0" size={24} />}
                  {showExplanation && isSelected && !isCorrectOption && <XCircle className="text-red-500 shrink-0" size={24} />}
                </div>
              </button>
            )
          })}
        </div>

        {showExplanation && (
          <div className={`p-6 sm:p-8 border-t ${isCorrect ? 'bg-green-50/50 border-green-100' : 'bg-red-50/50 border-red-100'}`}>
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className={`font-bold mb-2 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                  {isCorrect ? 'Correct!' : 'Incorrect'}
                </h3>
                <p className="text-slate-700 leading-relaxed">{question.explanation}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-slate-800 transition-colors"
              >
                {currentQuestion < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'See Results'}
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
