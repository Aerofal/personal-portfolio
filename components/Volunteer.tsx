'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import Section from '@/components/Section'

export default function Volunteer() {
  const { t } = useLanguage()
  const reduceMotion = useReducedMotion()

  const reveal = (order: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-80px' },
          transition: { duration: 0.5, delay: order * 0.1 },
        }

  return (
    <Section id="volunteer" index="05" title={t.volunteer.title}>
      <div className="flex flex-col gap-10 border-l border-foreground/10 pl-5">
        {t.volunteer.entries.map((entry, i) => (
          <motion.div key={entry.org} {...reveal(i)} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[1.5rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-foreground/30"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
              <h3 className="font-display text-base font-semibold">{entry.org}</h3>
              <span className="shrink-0 text-xs text-foreground/50">
                {entry.period}
              </span>
            </div>
            <p className="mt-0.5 text-sm text-foreground/70">{entry.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              {entry.description}
            </p>

            {entry.link ? (
              <a
                href={entry.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-foreground/20 px-3 py-1.5 text-xs font-medium transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                <ExternalLink size={14} aria-hidden="true" />
                {entry.link.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
