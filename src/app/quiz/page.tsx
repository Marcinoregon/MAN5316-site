import { Metadata } from 'next'
import Quiz from '@/components/Quiz'

export const metadata: Metadata = {
  title: 'Test Your Knowledge',
  description: 'Test your understanding of HR Analytics concepts and metrics.',
}

export default function QuizPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <header className="bg-white border-b border-slate-200 pt-24 pb-12 sm:pt-32 sm:pb-16 px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            MAN 6316 Review
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
            Test Your Knowledge
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            A 20-question review covering core concepts, statistical terms, and workforce metrics. 
            Use this to check your understanding of the glossary and case studies.
          </p>
        </div>
      </header>

      <main className="px-4 sm:px-6 lg:px-8">
        <Quiz />
      </main>
    </div>
  )
}
