'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'
import { useReducedMotion } from 'framer-motion'
import CustomCursor from '@/components/CustomCursor'

interface CursorContextValue {
  /** True on fine-pointer devices without reduced motion — controls toggle visibility. */
  supported: boolean
  enabled: boolean
  toggle: () => void
}

const CursorContext = createContext<CursorContextValue | null>(null)

export function CursorProvider({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion()
  const [supported, setSupported] = useState(false)
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    setSupported(window.matchMedia('(pointer: fine)').matches)
    try {
      setEnabled(localStorage.getItem('cursor') !== 'off')
    } catch {
      // localStorage unavailable — keep default
    }
  }, [])

  const toggle = () => {
    setEnabled((prev) => {
      try {
        localStorage.setItem('cursor', prev ? 'off' : 'on')
      } catch {
        // localStorage unavailable — toggle still works for this visit
      }
      return !prev
    })
  }

  const available = supported && !reduceMotion

  return (
    <CursorContext.Provider value={{ supported: available, enabled, toggle }}>
      {children}
      {available && enabled && <CustomCursor />}
    </CursorContext.Provider>
  )
}

export function useCursor(): CursorContextValue {
  const ctx = useContext(CursorContext)
  if (!ctx) {
    throw new Error('useCursor must be used within a CursorProvider')
  }
  return ctx
}
