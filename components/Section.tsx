'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function Section({
  id,
  index,
  title,
  children,
}: {
  id: string
  index: string
  title: string
  children: ReactNode
}) {
  const reduceMotion = useReducedMotion()

  const reveal = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
        transition: { duration: 0.5 },
      }

  return (
    <section id={id} aria-label={title} className="scroll-mt-20">
      <div className="mx-auto max-w-content px-6 py-16 lg:grid lg:max-w-4xl lg:grid-cols-[220px_1fr] lg:gap-12 lg:py-24">
        <motion.div {...reveal} className="lg:sticky lg:top-28 lg:self-start">
          <p aria-hidden="true" className="text-xs font-medium text-accent">
            {index}
          </p>
          <h2 className="mt-1 font-display text-xl font-semibold tracking-tight">
            {title}
          </h2>
        </motion.div>
        <div className="mt-8 lg:mt-0">{children}</div>
      </div>
    </section>
  )
}
