'use client'

import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import Section from '@/components/Section'
import type { ExperienceRole } from '@/lib/i18n'

function RoleBlock({
  role,
  showMore,
  showLess,
}: {
  role: ExperienceRole
  showMore: string
  showLess: string
}) {
  const reduceMotion = useReducedMotion()
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const hasItems = Boolean(role.items && role.items.length > 0)

  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="absolute -left-[1.5rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-foreground/30"
      />
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
        <h4 className="font-display text-base font-semibold">{role.role}</h4>
        <span className="shrink-0 text-xs text-foreground/50">{role.period}</span>
      </div>

      {role.context ? (
        <p className="mt-0.5 text-xs text-foreground/45">{role.context}</p>
      ) : null}

      {role.summary ? (
        <p className="mt-2 text-sm leading-relaxed text-foreground/70">
          {role.summary}
        </p>
      ) : null}

      {hasItems ? (
        <>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls={panelId}
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-colors duration-200 hover:text-foreground"
          >
            {open ? showLess : showMore}
            <ChevronDown
              size={14}
              aria-hidden="true"
              className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            />
          </button>

          <AnimatePresence initial={false}>
            {open ? (
              <motion.div
                id={panelId}
                initial={reduceMotion ? false : { opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.3, ease: 'easeOut' }}
                className="overflow-hidden"
              >
                <ul className="mt-3 space-y-3">
                  {role.items?.map((item) => (
                    <li key={item.title}>
                      <p className="text-sm font-medium text-foreground/80">
                        {item.title}
                      </p>
                      <ul className="mt-1 list-disc space-y-1 pl-4 text-sm leading-relaxed text-foreground/65 marker:text-accent/50">
                        {item.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </>
      ) : null}
    </div>
  )
}

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
      <div className="flex flex-col gap-12">
        {t.experience.groups.map((group, gi) => (
          <motion.div key={group.org} {...reveal(gi)}>
            {group.kicker ? (
              <p className="text-[11px] font-medium uppercase tracking-wide text-accent/80">
                {group.kicker}
              </p>
            ) : null}
            <h3 className="mt-1 font-display text-lg font-semibold">{group.org}</h3>

            <div className="mt-5 flex flex-col gap-6 border-l border-foreground/10 pl-5">
              {group.roles.map((role) => (
                <RoleBlock
                  key={role.role}
                  role={role}
                  showMore={t.experience.showMore}
                  showLess={t.experience.showLess}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
