import { Lightbulb, AlertTriangle, BookOpen } from 'lucide-react'
import type { ReactNode } from 'react'

type CallOutVariant = 'insight' | 'caution' | 'source'

interface CallOutProps {
  variant: CallOutVariant
  title?: string
  children: ReactNode
}

const config: Record<CallOutVariant, { cls: string; Icon: typeof Lightbulb; label: string }> = {
  insight: { cls: 'callout-insight', Icon: Lightbulb,       label: 'Insight' },
  caution: { cls: 'callout-caution', Icon: AlertTriangle,   label: 'Caution' },
  source:  { cls: 'callout-source',  Icon: BookOpen,        label: 'Source' },
}

export default function CallOut({ variant, title, children }: CallOutProps) {
  const { cls, Icon, label } = config[variant]
  return (
    <aside className={cls} role="note" aria-label={title ?? label}>
      <div className="flex items-start gap-3">
        <Icon size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
        <div>
          {title && <p className="font-semibold mb-1">{title}</p>}
          <div>{children}</div>
        </div>
      </div>
    </aside>
  )
}
