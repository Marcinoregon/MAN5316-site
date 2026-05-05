import { AlertCircle } from 'lucide-react'
import type { ReactNode } from 'react'

interface IllustrativeBannerProps {
  children?: ReactNode
}

export default function IllustrativeBanner({ children }: IllustrativeBannerProps) {
  return (
    <div className="illustrative-banner" role="note" aria-label="Illustrative scenario notice">
      <AlertCircle size={18} className="text-amber-600 shrink-0" aria-hidden="true" />
      <div>
        <span className="font-semibold">Illustrative Scenario — </span>
        {children ?? (
          <span>
            This case uses realistic but entirely fictional data. Names, figures, and outcomes are
            invented for instructional purposes. It does not describe any real organization.
          </span>
        )}
      </div>
    </div>
  )
}
