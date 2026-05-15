import { Metadata } from 'next'
import { TableProperties, PlayCircle, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react'
import CallOut from '@/components/CallOut'

export const metadata: Metadata = {
  title: 'Pivot Tables',
  description: 'A visual, step-by-step guide to building pivot tables in Microsoft Excel — using the same HR data as your coursework.',
}

/* ── Raw Data SVG ─────────────────────────────────────────────────────────── */
function RawDataSVG() {
  const headers = ['Employee ID', 'Department', 'Gender', 'Annual Wage']
  const rows = [
    ['E001', 'Sales', 'F', '$52,000'],
    ['E002', 'HR', 'M', '$61,000'],
    ['E003', 'Sales', 'M', '$55,000'],
    ['E004', 'HR', 'F', '$59,000'],
    ['E005', 'Sales', 'F', '$53,000'],
    ['E006', 'HR', 'M', '$64,000'],
  ]
  const colW = [110, 100, 72, 100]
  const colX = [0, 110, 210, 282]
  const rowH = 28
  const totalW = 382
  const totalH = 36 + rows.length * rowH

  return (
    <svg viewBox={`0 0 ${totalW} ${totalH}`} className="w-full max-w-lg mx-auto block" role="img" aria-label="Example HR spreadsheet with columns: Employee ID, Department, Gender, Annual Wage">
      {/* Header row */}
      <rect x={0} y={0} width={totalW} height={36} fill="#0f766e" rx={4} />
      {headers.map((h, i) => (
        <text key={h} x={colX[i] + colW[i] / 2} y={22} textAnchor="middle" fontSize={11} fontFamily="Inter,sans-serif" fill="white" fontWeight="600">{h}</text>
      ))}
      {/* Data rows */}
      {rows.map((row, ri) => (
        <g key={ri}>
          <rect x={0} y={36 + ri * rowH} width={totalW} height={rowH} fill={ri % 2 === 0 ? '#f8fafc' : 'white'} />
          <line x1={0} y1={36 + ri * rowH} x2={totalW} y2={36 + ri * rowH} stroke="#e2e8f0" strokeWidth={1} />
          {row.map((cell, ci) => (
            <text key={ci} x={colX[ci] + colW[ci] / 2} y={36 + ri * rowH + 18} textAnchor="middle" fontSize={10.5} fontFamily="Inter,sans-serif" fill="#334155">{cell}</text>
          ))}
        </g>
      ))}
      {/* Column dividers */}
      {[110, 210, 282].map(x => (
        <line key={x} x1={x} y1={0} x2={x} y2={totalH} stroke="#cbd5e1" strokeWidth={1} />
      ))}
      {/* Border */}
      <rect x={0} y={0} width={totalW} height={totalH} fill="none" stroke="#94a3b8" strokeWidth={1} rx={4} />
    </svg>
  )
}

/* ── Arrow SVG ────────────────────────────────────────────────────────────── */
function TransformArrow() {
  return (
    <div className="flex justify-center items-center py-4">
      <div className="flex flex-col items-center gap-1 text-teal-600">
        <ArrowRight size={28} aria-hidden="true" />
        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Pivot Table</span>
      </div>
    </div>
  )
}

/* ── Result Pivot Table SVG ───────────────────────────────────────────────── */
function PivotResultSVG() {
  const totalW = 320
  const totalH = 120

  return (
    <svg viewBox={`0 0 ${totalW} ${totalH}`} className="w-full max-w-sm mx-auto block" role="img" aria-label="Resulting pivot table showing average annual wage by department and gender">
      {/* Corner cell */}
      <rect x={0} y={0} width={100} height={36} fill="#1e293b" />
      <text x={50} y={22} textAnchor="middle" fontSize={10} fontFamily="Inter,sans-serif" fill="#94a3b8">Department</text>
      {/* Column headers */}
      {['Female', 'Male'].map((g, i) => (
        <g key={g}>
          <rect x={100 + i * 110} y={0} width={110} height={36} fill="#0f766e" />
          <text x={100 + i * 110 + 55} y={22} textAnchor="middle" fontSize={11} fontFamily="Inter,sans-serif" fill="white" fontWeight="600">{g}</text>
        </g>
      ))}
      {/* Row headers + data */}
      {[
        { dept: 'HR', f: '$59,000', m: '$62,500' },
        { dept: 'Sales', f: '$52,500', m: '$55,000' },
      ].map((row, ri) => (
        <g key={row.dept}>
          <rect x={0} y={36 + ri * 36} width={100} height={36} fill={ri % 2 === 0 ? '#f1f5f9' : '#e2e8f0'} />
          <text x={50} y={36 + ri * 36 + 22} textAnchor="middle" fontSize={11} fontFamily="Inter,sans-serif" fill="#1e293b" fontWeight="600">{row.dept}</text>
          {[row.f, row.m].map((val, ci) => (
            <g key={ci}>
              <rect x={100 + ci * 110} y={36 + ri * 36} width={110} height={36} fill={ri % 2 === 0 ? '#f8fafc' : 'white'} />
              <text x={100 + ci * 110 + 55} y={36 + ri * 36 + 22} textAnchor="middle" fontSize={11} fontFamily="Inter,sans-serif" fill="#0f766e" fontWeight="600">{val}</text>
            </g>
          ))}
        </g>
      ))}
      {/* Grid lines */}
      <line x1={100} y1={0} x2={100} y2={totalH} stroke="#cbd5e1" strokeWidth={1} />
      <line x1={210} y1={0} x2={210} y2={totalH} stroke="#cbd5e1" strokeWidth={1} />
      <line x1={0} y1={36} x2={totalW} y2={36} stroke="#cbd5e1" strokeWidth={1} />
      <line x1={0} y1={72} x2={totalW} y2={72} stroke="#cbd5e1" strokeWidth={1} />
      <rect x={0} y={0} width={totalW} height={totalH} fill="none" stroke="#94a3b8" strokeWidth={1} rx={4} />
    </svg>
  )
}

/* ── Field Editor Diagram ─────────────────────────────────────────────────── */
function FieldEditorSVG() {
  const zones = [
    { label: 'Rows', y: 56, color: '#0f766e', lightColor: '#ccfbf1', example: 'Department, Job Status' },
    { label: 'Columns', y: 122, color: '#0369a1', lightColor: '#e0f2fe', example: 'Gender' },
    { label: 'Values', y: 188, color: '#7c3aed', lightColor: '#ede9fe', example: 'Annual Wage (Average)' },
    { label: 'Filters', y: 254, color: '#b45309', lightColor: '#fef3c7', example: 'Department (optional)' },
  ]
  return (
    <svg viewBox="0 0 300 316" className="w-full max-w-xs mx-auto block" role="img" aria-label="Excel PivotTable Fields panel showing Rows, Columns, Values, and Filters zones">
      {/* Panel background */}
      <rect x={0} y={0} width={300} height={316} fill="#1e293b" rx={8} />
      <text x={150} y={28} textAnchor="middle" fontSize={12} fontFamily="Inter,sans-serif" fill="white" fontWeight="700">Pivot Table Editor</text>
      <line x1={16} y1={38} x2={284} y2={38} stroke="#334155" strokeWidth={1} />
      {zones.map(({ label, y, color, lightColor, example }) => (
        <g key={label}>
          <rect x={16} y={y} width={268} height={52} fill="#0f172a" rx={6} />
          <rect x={16} y={y} width={6} height={52} fill={color} rx={3} />
          <text x={30} y={y + 18} fontSize={11} fontFamily="Inter,sans-serif" fill="white" fontWeight="700">{label}</text>
          <rect x={30} y={y + 26} width={248} height={18} fill={lightColor} rx={3} />
          <text x={154} y={y + 38} textAnchor="middle" fontSize={9.5} fontFamily="Inter,sans-serif" fill="#1e293b">{example}</text>
        </g>
      ))}
    </svg>
  )
}

/* ── Step Card ────────────────────────────────────────────────────────────── */
function StepCard({ step, title, children }: { step: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0">
        <span className="flex items-center justify-center w-9 h-9 rounded-full bg-teal-700 text-white text-sm font-bold">{step}</span>
      </div>
      <div className="flex-1 border border-slate-200 rounded-xl bg-white p-5 shadow-sm">
        <p className="font-semibold text-slate-900 mb-2">{title}</p>
        <div className="text-sm text-slate-600 leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

/* ── Video Link Card ──────────────────────────────────────────────────────── */
function VideoCard({ title, description, duration, searchQuery }: { title: string; description: string; duration: string; searchQuery: string }) {
  const href = `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery)}`
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="flex items-start gap-4 border border-slate-200 rounded-xl bg-white p-5 shadow-sm hover:border-teal-300 hover:shadow-md transition-all group">
      <div className="bg-red-50 text-red-600 rounded-lg p-3 shrink-0 group-hover:bg-red-100 transition-colors">
        <PlayCircle size={24} aria-hidden="true" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <p className="font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">{title}</p>
          <ExternalLink size={13} className="text-slate-400 shrink-0" aria-hidden="true" />
        </div>
        <p className="text-sm text-slate-600 leading-relaxed mb-1">{description}</p>
        <span className="text-xs text-slate-400 font-medium">{duration}</span>
      </div>
    </a>
  )
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function PivotTablesPage() {
  return (
    <div className="prose-section">

      {/* Header */}
      <header className="mb-12 pb-8 border-b border-slate-200">
        <p className="text-xs font-semibold text-teal-700 uppercase tracking-widest mb-3 flex items-center gap-2">
          <TableProperties size={14} aria-hidden="true" />
          Core Skills
        </p>
        <h1 className="font-serif text-4xl font-semibold text-slate-900 leading-tight mb-4">
          How to Build a Pivot Table
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          A Pivot Table takes a long list of raw data and summarizes it by group — instantly.
          This guide shows you how to build one in <strong>Microsoft Excel</strong> using
          the same HR data structure as your coursework.
        </p>
      </header>

      {/* ── What a Pivot Table Does ── */}
      <section aria-labelledby="section-what" className="mb-14">
        <h2 id="section-what" className="font-serif text-2xl font-semibold text-slate-900 mb-4">
          A. What a Pivot Table Actually Does
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Start with a raw employee list. A Pivot Table reads every row and automatically
          groups and summarizes the numbers — no formulas required.
        </p>

        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-4">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4 text-center">Your raw data (6 rows shown)</p>
          <RawDataSVG />
          <TransformArrow />
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-4 text-center">Average Annual Wage by Department &amp; Gender</p>
          <PivotResultSVG />
        </div>

        <CallOut variant="insight" title="The power of grouping">
          Those six rows of raw data became a clear comparison in seconds — no sorting,
          no filtering, no formulas. With 1,000 rows of Mr. Macky&rsquo;s data, the Pivot Table
          does exactly the same thing, just at larger scale.
        </CallOut>
      </section>

      {/* ── The Field Editor ── */}
      <section aria-labelledby="section-editor" className="mb-14">
        <h2 id="section-editor" className="font-serif text-2xl font-semibold text-slate-900 mb-4">
          B. The Four Zones — What Goes Where
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          When you create a PivotTable in Excel, a <strong>PivotTable Fields</strong> panel
          appears on the right side of the screen. It has four drop zones. Understanding
          what each one does is the whole skill.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <FieldEditorSVG />
          <div className="space-y-4">
            {[
              { label: 'Rows', color: 'bg-teal-700', desc: 'The categories that run down the left side of your table. In an HR context: Department, Job Status, or Job Title.', example: 'Put "Department" in Rows → one row per department.' },
              { label: 'Columns', color: 'bg-sky-700', desc: 'The categories that run across the top. Use this to split groups side-by-side.', example: 'Put "Gender" in Columns → separate columns for F and M.' },
              { label: 'Values', color: 'bg-violet-700', desc: 'The numbers you want to calculate. You choose how: Average, Sum, Count, Standard Deviation.', example: 'Put "Annual Wage" in Values, set to Average.' },
              { label: 'Filters', color: 'bg-amber-700', desc: 'Optional. Narrows the whole table to a subset of your data before calculating anything.', example: 'Filter to Full-Time only → all calculations apply only to FT employees.' },
            ].map(({ label, color, desc, example }) => (
              <div key={label} className="border border-slate-200 rounded-lg overflow-hidden">
                <div className={`${color} text-white px-4 py-2`}>
                  <p className="font-semibold text-sm">{label}</p>
                </div>
                <div className="px-4 py-3 bg-white space-y-1.5">
                  <p className="text-sm text-slate-700 leading-relaxed">{desc}</p>
                  <p className="text-xs text-slate-500 italic">{example}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Step by Step ── */}
      <section aria-labelledby="section-steps" className="mb-14">
        <h2 id="section-steps" className="font-serif text-2xl font-semibold text-slate-900 mb-4">
          C. Step-by-Step: Build One Right Now
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Open your HR dataset in Excel and follow these steps. You&rsquo;ll have a
          working PivotTable in under two minutes.
        </p>

        <div className="space-y-4">
          <StepCard step={1} title="Select your data">
            Click any cell inside your dataset. Then press{' '}
            <kbd className="bg-slate-100 border border-slate-300 rounded px-1.5 py-0.5 text-xs font-mono">Ctrl+A</kbd>{' '}
            (Windows) or{' '}
            <kbd className="bg-slate-100 border border-slate-300 rounded px-1.5 py-0.5 text-xs font-mono">⌘+A</kbd>{' '}
            (Mac) to select the entire table — headers included. Make sure your columns all have
            header names in row 1.
          </StepCard>

          <StepCard step={2} title="Insert → PivotTable">
            In the top menu, click <strong>Insert</strong>, then <strong>PivotTable</strong>.
            A dialog box will ask where to put it — select <strong>New Worksheet</strong> and
            click <strong>OK</strong>. Excel opens a blank sheet with the PivotTable Fields
            panel on the right.
          </StepCard>

          <StepCard step={3} title="Drag a field into Rows">
            In the PivotTable Fields panel, find the column you want to group by — for
            example, <em>Department</em> — and drag it into the <strong>Rows</strong> box
            at the bottom of the panel (or check the checkbox and Excel places it
            automatically). One row will appear for each unique department.
          </StepCard>

          <StepCard step={4} title="Drag a field into Columns (optional)">
            Drag a second grouping variable — for example, <em>Gender</em> — into the{' '}
            <strong>Columns</strong> box. The table will now split each row into a Female
            column and a Male column side by side.
          </StepCard>

          <StepCard step={5} title="Drag a field into Values and set the calculation">
            Drag the numeric column you want to calculate — for example, <em>Annual Wage</em>
            — into the <strong>Values</strong> box. By default, Excel uses{' '}
            <strong>Sum</strong>. Click the field name in the Values box, choose{' '}
            <strong>Value Field Settings</strong>, and change it to <strong>Average</strong>{' '}
            or <strong>StdDev</strong> depending on what your analysis requires.
          </StepCard>

          <StepCard step={6} title="Read and verify your results">
            Your PivotTable is live. Double-click any value cell to see the raw rows that
            fed into that number — Excel will open a new sheet showing only those records.
            This is the fastest way to confirm the table is pulling from the right data.
          </StepCard>
        </div>

        <div className="mt-6">
          <CallOut variant="caution" title="If the Fields panel disappears">
            Click anywhere inside your PivotTable. The <strong>PivotTable Fields</strong>{' '}
            panel will reappear on the right. If it still doesn&rsquo;t show, go to the{' '}
            <strong>PivotTable Analyze</strong> tab in the ribbon and click{' '}
            <strong>Field List</strong>.
          </CallOut>
        </div>
      </section>

      {/* ── Common Configurations ── */}
      <section aria-labelledby="section-configs" className="mb-14">
        <h2 id="section-configs" className="font-serif text-2xl font-semibold text-slate-900 mb-4">
          D. Configurations You&rsquo;ll Use in This Course
        </h2>

        <div className="space-y-3">
          {[
            {
              goal: 'Headcount by department and job status',
              rows: 'Department',
              cols: 'Job Status',
              values: 'Employee ID → COUNTA',
              filters: '—',
            },
            {
              goal: 'Average wage by gender within job status',
              rows: 'Job Status',
              cols: 'Gender',
              values: 'Annual Wage → AVERAGE',
              filters: '—',
            },
            {
              goal: 'Pay spread within groups (equity check)',
              rows: 'Department',
              cols: 'Gender',
              values: 'Annual Wage → Standard Deviation',
              filters: '—',
            },
            {
              goal: 'Average tenure for full-time employees only',
              rows: 'Department',
              cols: '—',
              values: 'Tenure → AVERAGE',
              filters: 'Job Status = Full-Time',
            },
          ].map(({ goal, rows, cols, values, filters }) => (
            <div key={goal} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
              <div className="bg-slate-800 text-white px-5 py-3">
                <p className="text-sm font-semibold">{goal}</p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-slate-100">
                {[
                  { zone: 'Rows', val: rows, color: 'text-teal-700' },
                  { zone: 'Columns', val: cols, color: 'text-sky-700' },
                  { zone: 'Values', val: values, color: 'text-violet-700' },
                  { zone: 'Filters', val: filters, color: 'text-amber-700' },
                ].map(({ zone, val, color }) => (
                  <div key={zone} className="px-4 py-3">
                    <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${color}`}>{zone}</p>
                    <p className="text-sm text-slate-700">{val}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Video Tutorials ── */}
      <section aria-labelledby="section-videos" className="mb-8">
        <h2 id="section-videos" className="font-serif text-2xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <PlayCircle className="text-red-500" size={22} aria-hidden="true" />
          E. Watch It First
        </h2>
        <p className="text-slate-700 leading-relaxed mb-6">
          Each link below opens a YouTube search for a high-quality tutorial. Pick the one
          that matches your learning style.
        </p>

        <div className="space-y-4">
          <VideoCard
            title="Excel Pivot Tables — Full Tutorial for Beginners"
            description="The most thorough beginner walkthrough. Covers dragging fields, changing calculations, filtering, and formatting. Best if you want to understand the why, not just the how."
            duration="~15 min · Comprehensive"
            searchQuery="Excel PivotTable full tutorial beginners"
          />
          <VideoCard
            title="Excel Pivot Tables in 10 Minutes (with practice file)"
            description="Comes with a downloadable practice file so you can follow along directly with the instructor. Great for hands-on learners."
            duration="~10 min · Practice-based"
            searchQuery="Excel Pivot Tables 10 minutes practice file tutorial"
          />
          <VideoCard
            title="How to Create a Pivot Table in Excel — Step by Step"
            description="The fastest possible overview. Just insert, drag fields, and read results — nothing extra. Use this if you're short on time or need a quick refresher before an assignment."
            duration="~7 min · Quick overview"
            searchQuery="How to create a pivot table in Excel step by step"
          />
        </div>

        <div className="mt-6">
          <CallOut variant="insight" title="Recommended sequence">
            Watch the 7-minute version first. Then attempt the steps in Section C with
            your own data. If you get stuck, watch the A-to-Z tutorial for the specific
            part that&rsquo;s unclear — you don&rsquo;t need to watch all 15 minutes.
          </CallOut>
        </div>
      </section>

    </div>
  )
}
