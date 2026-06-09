'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'
import Section from '@/components/Section'

export default function Experience() {
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
    <Section id="experience" index="04" title={t.experience.title}>
      <ol className="flex flex-col gap-10 border-l border-foreground/10 pl-6">
        {t.experience.entries.map((entry, i) => (
          <motion.li key={entry.role} {...reveal(i)} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[1.83rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-foreground/30"
            />
            <h3 className="font-display text-base font-semibold">
              {entry.role}
            </h3>
            <p className="mt-0.5 text-sm text-foreground/70">
              {entry.organization}
            </p>
            <p className="mt-0.5 text-xs text-foreground/50">{entry.period}</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              {entry.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
