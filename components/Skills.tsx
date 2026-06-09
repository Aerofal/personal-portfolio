'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'
import Section from '@/components/Section'

export default function Skills() {
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
    <Section id="skills" index="02" title={t.skills.title}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {t.skills.groups.map((group, i) => (
          <motion.div key={group.label} {...reveal(i)}>
            <h3 className="text-sm font-medium text-foreground/50">
              {group.label}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill}>
                  <span className="group flex items-center gap-2 rounded-lg border border-foreground/15 px-3 py-1.5 text-sm transition-colors duration-200 hover:border-accent hover:text-accent">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-foreground/30 transition-colors duration-200 group-hover:bg-accent"
                    />
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
