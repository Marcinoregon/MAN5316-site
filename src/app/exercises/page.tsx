import { Metadata } from 'next'
import DatasetExercises from '@/components/DatasetExercises'

export const metadata: Metadata = {
  title: 'Interactive Exercises',
  description: 'Practice HR Analytics with real datasets.',
}

export default function ExercisesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <header className="bg-white border-b border-slate-200 pt-24 pb-12 sm:pt-32 sm:pb-16 px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Applied Learning
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
            Interactive Exercises
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Download the raw data and test your analytical reasoning. These exercises simulate real-world challenges you will face when cleaning and interpreting HRIS exports.
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <DatasetExercises />
      </main>
    </div>
  )
}
