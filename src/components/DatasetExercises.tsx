'use client'

import { useState } from 'react'
import { Download, CheckCircle2, XCircle, ChevronRight } from 'lucide-react'

const EXERCISES = [
  {
    id: 1,
    scenario: "You open 'Dataset 1000' and calculate the mean for 'Wage Rate (2026)' across all employees. The result is approximately $2,880. However, you notice several Managers have a listed Wage Rate of $85,000+. What is the most likely cause for this distorted mean?",
    options: [
      "Extreme outliers at the low end are pulling the average down disproportionately.",
      "The dataset mixes Exempt (salaried) and Non-Exempt (hourly) employees, meaning annual salaries are being averaged together with hourly rates.",
      "The median is a better metric for this calculation.",
      "There is a formatting error in the Excel column."
    ],
    correctAnswer: 1,
    explanation: "Correct. Column K designates employees as 'Exempt' or 'Non-Exempt'. Non-exempt employees are listed by their hourly rate (e.g., $15/hr) while Exempt managers are listed by their annual salary. You must standardize these units (e.g., multiply hourly rates by 2,080 hours) before analyzing pay equity!"
  },
  {
    id: 2,
    scenario: "You want to determine if 'Interview 1' scores are a valid predictor of 'Performance Rating (2026)'. You run a linear regression in Excel and get an R-squared value of 0.04. What does this mean?",
    options: [
      "The Interview 1 score is 96% accurate at predicting performance.",
      "The interview process is highly biased.",
      "The Interview 1 score explains only 4% of the variance in an employee's future performance rating.",
      "There is a 4% chance the results occurred by random chance."
    ],
    correctAnswer: 2,
    explanation: "Correct. R-squared measures the proportion of variance explained by the model. An R² of 0.04 means that 96% of an employee's performance rating is driven by factors OTHER than their first interview score. This suggests the interview is not highly predictive."
  },
  {
    id: 3,
    scenario: "You are asked to investigate 'Simpson's Paradox' within the Store Markets. What would this look like in the data?",
    options: [
      "Overall, women appear to have lower performance ratings than men, but when you break the data down by individual Store Market (Large, Medium, Small), women actually have HIGHER ratings in every single market.",
      "The base rate of turnover in Small markets is so low that predicting it is impossible.",
      "Employees who perform well in Interview 1 consistently perform poorly in Interview 2.",
      "The correlation between Age and Wage Rate is negative."
    ],
    correctAnswer: 0,
    explanation: "Correct. Simpson's Paradox occurs when a trend appears in aggregated data but reverses when the data is disaggregated into subgroups (like specific Store Markets or Departments). It often occurs due to uneven sample sizes across groups."
  },
  {
    id: 4,
    scenario: "Suppose the market midpoint salary for a 'Manager' is $80,000. Employee ID 2 has a 'Wage Rate (2026)' of $85,484. What is their Compa-Ratio?",
    options: [
      "1.07",
      "0.93",
      "1.00",
      "1.85"
    ],
    correctAnswer: 0,
    explanation: "Correct. Compa-Ratio is calculated by dividing actual pay by the midpoint (85,484 / 80,000 = 1.06855). A ratio of 1.07 means the employee is paid 7% above the market midpoint for their role."
  },
  {
    id: 5,
    scenario: "You want to calculate average time-to-promotion. You notice that many employees have blanks in 'Promotion 1 (Date)'. What is the most statistically sound way to handle these blanks in a time-to-event model?",
    options: [
      "Delete all rows with blanks to ensure a clean dataset.",
      "Replace the blanks with the average promotion time of the rest of the group.",
      "Recognize that these employees haven't been promoted yet (right-censored data) and use survival analysis rather than standard averages.",
      "Replace the blanks with zeros."
    ],
    correctAnswer: 2,
    explanation: "Correct. Deleting them creates survivorship bias (you only measure people who survived long enough to get promoted). Replacing with zeros or averages corrupts the data. Survival Analysis correctly handles 'censored' data where the event hasn't happened *yet*."
  },
  {
    id: 6,
    scenario: "The HR Director wants to know if 'Prior Experience' correlates with sustained performance over time. Which columns would provide the most robust metric to test this?",
    options: [
      "'Prior Experience' vs 'Performance Rating (2026)' only.",
      "'Prior Experience' vs the average of 'Performance Rating (2022) to (2026)'.",
      "'Prior Experience' vs 'Wage Rate (2026)'.",
      "'Hire Date' vs 'Promotion 1 (Date)'."
    ],
    correctAnswer: 1,
    explanation: "Correct. A single year of performance (2026) might be impacted by temporary factors (a bad manager, personal issues). Averaging ratings over 5 years (2022-2026) smooths out volatility and provides a truer measure of 'sustained' performance."
  },
  {
    id: 7,
    scenario: "You are building a predictive model to forecast which employees will receive 'Promotion 2'. Why MUST you exclude 'Promotion 3 (Date)' from your independent variables?",
    options: [
      "Because it causes data leakage (a future event cannot be used to predict a past event).",
      "Because dates cannot be mathematically processed by algorithms.",
      "Because it violates the EEOC Four-Fifths Rule.",
      "Because 'Promotion 1' is already included."
    ],
    correctAnswer: 0,
    explanation: "Correct. Data leakage happens when you accidentally include information in your training data that wouldn't be available at the time of prediction. If someone has a Promotion 3 date, the model immediately 'knows' they must have received Promotion 2, ruining the prediction's validity."
  },
  {
    id: 8,
    scenario: "To perform an initial Pay Equity audit, you compare the average 'Wage Rate (2026)' between Men and Women. You find a $5,000 difference. Does this definitively prove illegal wage discrimination?",
    options: [
      "Yes, any statistical difference in pay between genders violates the Equal Pay Act.",
      "Yes, but only if the difference is larger than 10%.",
      "No, because you have not yet controlled for bona fide factors like 'Job Title', 'Prior Experience', and 'Performance Rating'.",
      "No, because the dataset is too small."
    ],
    correctAnswer: 2,
    explanation: "Correct. A raw pay gap does not prove unequal pay for equal work. You must run a multiple regression analysis controlling for legitimate, non-discriminatory factors (like seniority, performance, and role level) to see if the gender gap persists."
  }
]

export default function DatasetExercises() {
  const [activeExercise, setActiveExercise] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const exercise = EXERCISES[activeExercise]
  const isCorrect = selectedOption === exercise.correctAnswer

  const handleSelect = (index: number) => {
    if (showExplanation) return
    setSelectedOption(index)
    setShowExplanation(true)
  }

  const handleNext = () => {
    setActiveExercise((c) => (c + 1) % EXERCISES.length)
    setSelectedOption(null)
    setShowExplanation(false)
  }

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-slate-900">Dataset 1000 Analysis</h2>
          <p className="text-slate-600 mt-1">Exercise {activeExercise + 1} of {EXERCISES.length}</p>
        </div>
        <a 
          href="/data/Dataset_1000.xlsx" 
          download
          className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors shrink-0"
        >
          <Download size={18} />
          Download Dataset 1000
        </a>
      </div>

      <div className="p-6 sm:p-8">
        <p className="text-lg text-slate-800 leading-relaxed font-medium mb-6">
          {exercise.scenario}
        </p>

        <div className="space-y-3">
          {exercise.options.map((option, index) => {
            const isSelected = selectedOption === index
            const isCorrectOption = index === exercise.correctAnswer
            
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
          <div className={`mt-6 p-6 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-100' : 'bg-red-50 border border-red-100'}`}>
            <h3 className={`font-bold mb-2 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </h3>
            <p className="text-slate-700 leading-relaxed mb-6">{exercise.explanation}</p>
            
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-slate-800 transition-colors"
            >
              Next Exercise
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {!showExplanation && (
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleNext}
              className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-medium px-4 py-2"
            >
              Skip Exercise
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
