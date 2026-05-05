'use client'

import { BarChart2, TrendingUp, Lightbulb } from 'lucide-react'

const LEVELS = [
  {
    level: 'Descriptive',
    tagline: 'What happened?',
    icon: BarChart2,
    color: 'border-slate-400 bg-slate-50 text-slate-800',
    iconColor: 'text-slate-500',
    examples: [
      'Headcount reports',
      'Turnover rate by department',
      'Time-to-fill dashboards',
      'Absence rate tracking',
    ],
    tools: 'Spreadsheets, HRIS reports, basic dashboards',
  },
  {
    level: 'Predictive',
    tagline: 'What might happen?',
    icon: TrendingUp,
    color: 'border-teal-500 bg-teal-50 text-teal-900',
    iconColor: 'text-teal-600',
    examples: [
      'Flight risk modeling',
      'Retention probability scores',
      'Engagement-to-performance forecasting',
      'Absenteeism prediction',
    ],
    tools: 'Statistical modeling, machine learning, survey analytics',
  },
  {
    level: 'Prescriptive',
    tagline: 'What should we do?',
    icon: Lightbulb,
    color: 'border-amber-500 bg-amber-50 text-amber-900',
    iconColor: 'text-amber-600',
    examples: [
      'Targeted retention interventions',
      'Optimized hiring sequences',
      'Personalised L&D pathways',
      'Pay-equity correction models',
    ],
    tools: 'Advanced ML, simulation, optimization algorithms',
  },
]

export default function MaturityLadder() {
  return (
    <section aria-label="HR Analytics Maturity Ladder" className="my-8">
      <h3 className="font-serif text-2xl font-semibold text-slate-900 mb-6 text-center">
        The Analytics Maturity Ladder
      </h3>

      <div className="relative">
        {/* Connecting line */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-12 left-1/2 -translate-x-1/2
                     w-[calc(100%-8rem)] h-0.5 bg-slate-200"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEVELS.map(({ level, tagline, icon: Icon, color, iconColor, examples, tools }, i) => (
            <div
              key={level}
              className={`relative border-2 rounded-lg p-6 ${color}`}
            >
              {/* Step number */}
              <div
                aria-hidden="true"
                className="absolute -top-4 left-6 bg-white border-2 border-current
                           rounded-full w-8 h-8 flex items-center justify-center
                           text-sm font-bold font-sans"
              >
                {i + 1}
              </div>

              <Icon
                size={24}
                className={`mb-3 mt-2 ${iconColor}`}
                aria-hidden="true"
              />
              <h4 className="font-serif text-xl font-semibold mb-1">{level}</h4>
              <p className="text-sm font-medium italic mb-4 opacity-75">{tagline}</p>

              <ul className="text-sm space-y-1 mb-4">
                {examples.map((ex) => (
                  <li key={ex} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current shrink-0 opacity-60" aria-hidden="true" />
                    {ex}
                  </li>
                ))}
              </ul>

              <p className="text-xs opacity-60 border-t border-current border-opacity-20 pt-3">
                <span className="font-semibold">Typical tools: </span>
                {tools}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
