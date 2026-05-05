import { Metadata } from 'next'
import { Bot, FileSpreadsheet, ShieldAlert, Sparkles, MessageSquare, ListTree } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Excel + Claude AI',
  description: 'How to use the Claude AI plugin in Excel for HR Analytics workflows.',
}

export default function ClaudeExcelPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <header className="bg-white border-b border-slate-200 pt-24 pb-12 sm:pt-32 sm:pb-16 px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Bot size={18} />
            AI Workflow Guide
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
            Using Excel + Claude AI
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Integrating Large Language Models (LLMs) directly into your spreadsheets is transforming HR Analytics. 
            Here is how to use the Claude for Excel plugin to automate qualitative data analysis and data cleaning.
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Warning Banner */}
        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
          <div className="flex items-start gap-3">
            <ShieldAlert className="text-amber-600 mt-1 shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-amber-900 mb-1">Critical Privacy Warning</h3>
              <p className="text-amber-800 text-sm leading-relaxed">
                Before using any AI tool with your workforce data, you must remove Personally Identifiable Information (PII). 
                <strong> Never pass SSNs, names, exact compensation, or identifiable medical/leave data to a public AI model.</strong> Always ensure you are using an Enterprise-approved AI environment that guarantees your data is not used to train future models.
              </p>
            </div>
          </div>
        </div>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <FileSpreadsheet className="text-teal-600" />
            What is the Claude Excel Plugin?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            The Claude Excel Add-in connects your spreadsheet directly to Anthropic's Claude AI via API. Instead of copying and pasting data back and forth between Excel and a chat window, you can use a simple formula (like <code>=CLAUDE()</code>) to apply AI reasoning to thousands of rows of HR data simultaneously.
          </p>
          <p className="text-slate-700 leading-relaxed">
            To get started, you typically install the <strong>Claude for Excel</strong> add-in from the Microsoft Store inside Excel, and provide an Anthropic API key.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
            <Sparkles className="text-teal-600" />
            Top HR Analytics Use Cases
          </h2>

          <div className="space-y-8">
            {/* Use Case 1 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-teal-50 text-teal-700 p-2 rounded-lg">
                  <MessageSquare size={20} />
                </div>
                <h3 className="font-bold text-lg text-slate-900">1. Survey Sentiment Analysis</h3>
              </div>
              <p className="text-slate-600 mb-4 text-sm">
                HR surveys often yield thousands of open-text comments. Reading them manually is slow; basic keyword searches miss nuance. Claude can grade the sentiment of every comment instantly.
              </p>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                =CLAUDE("Analyze the sentiment of this employee comment. Reply ONLY with 'Positive', 'Negative', or 'Neutral'. Comment: ", A2)
              </div>
            </div>

            {/* Use Case 2 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-teal-50 text-teal-700 p-2 rounded-lg">
                  <ListTree size={20} />
                </div>
                <h3 className="font-bold text-lg text-slate-900">2. Exit Interview Categorization</h3>
              </div>
              <p className="text-slate-600 mb-4 text-sm">
                When employees leave, their exit interview notes are messy. You can use Claude to force unstructured qualitative data into standardized categories for dashboard reporting.
              </p>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                =CLAUDE("Categorize this exit reason into exactly one of these buckets: [Compensation, Management, Career Growth, Personal, Commute]. Reason: ", B2)
              </div>
            </div>

            {/* Use Case 3 */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-teal-50 text-teal-700 p-2 rounded-lg">
                  <FileSpreadsheet size={20} />
                </div>
                <h3 className="font-bold text-lg text-slate-900">3. Formatting Messy HRIS Data</h3>
              </div>
              <p className="text-slate-600 mb-4 text-sm">
                When combining data from an ATS (Applicant Tracking System) and an HRIS, you often deal with poorly formatted job titles or inconsistent name casing. Claude can intelligently clean text that standard Excel functions (like PROPER or TRIM) struggle with.
              </p>
              <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-green-400 overflow-x-auto">
                =CLAUDE("Extract only the core job function from this messy title, and remove seniorities. For example, 'Sr. Director of Global Marketing' becomes 'Marketing'. Title: ", C2)
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-slate-900 mb-4">
            Best Practices for AI Prompts in Excel
          </h2>
          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start gap-2">
              <span className="text-teal-600 font-bold mt-0.5">•</span>
              <span><strong>Constrain the Output:</strong> Always tell Claude exactly how to format the reply (e.g., <em>"Reply ONLY with one word"</em>). Otherwise, it might generate conversational text like <em>"Sure, the sentiment is Positive!"</em> which ruins your data column.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 font-bold mt-0.5">•</span>
              <span><strong>Use Temperature Control:</strong> If the plugin allows parameter tuning, set the "Temperature" to 0. This stops Claude from being creative and forces it to be as analytical and consistent as possible.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-teal-600 font-bold mt-0.5">•</span>
              <span><strong>Sample First:</strong> Run the formula on 5 rows first. Check the output, refine your prompt, and then drag the formula down to the remaining 5,000 rows. This saves API costs and time.</span>
            </li>
          </ul>
        </section>

      </main>
    </div>
  )
}
