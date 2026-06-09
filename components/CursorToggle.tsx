'use client'

import { MousePointer2 } from 'lucide-react'
import { useCursor } from '@/components/CursorProvider'

export default function CursorToggle() {
  const { supported, enabled, toggle } = useCursor()

  // Hidden on touch devices and for users who prefer reduced motion.
  if (!supported) return null

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={enabled}
      aria-label={enabled ? 'Disable custom cursor' : 'Enable custom cursor'}
      title={enabled ? 'Disable custom cursor' : 'Enable custom cursor'}
      className={`rounded-lg p-1.5 transition-colors duration-200 ${
        enabled ? 'text-accent' : 'text-foreground/50 hover:text-accent'
      }`}
    >
      <MousePointer2 size={18} aria-hidden="true" />
    </button>
  )
}
