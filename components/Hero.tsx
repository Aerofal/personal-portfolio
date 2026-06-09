'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { FileText, MapPin } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import Magnetic from '@/components/Magnetic'
import CodeCard from '@/components/CodeCard'

const CYCLE_INTERVAL_MS = 2500

export default function Hero() {
  const { t } = useLanguage()
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)

  const identities = t.hero.identities

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % identities.length),
      CYCLE_INTERVAL_MS
    )
    return () => clearInterval(id)
  }, [identities.length])

  const stagger = (order: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: order * 0.15 },
        }

  return (
    <section id="top" aria-label="Introduction" className="pt-[20vh]">
      <div className="mx-auto max-w-content px-6 pb-24 lg:max-w-5xl xl:max-w-6xl">
        <div className="lg:grid lg:grid-cols-[1fr_400px] lg:items-center lg:gap-16">
          <div>
            <motion.h1
              {...stagger(0)}
              className="font-display text-4xl font-bold tracking-tight lg:text-6xl"
            >
              {t.hero.name}
            </motion.h1>

            <motion.div {...stagger(1)} className="mt-4 h-8" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.p
                  key={identities[index]}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                  transition={{ duration: reduceMotion ? 0 : 0.4, ease: 'easeOut' }}
                  className="font-display text-xl font-semibold text-accent"
                >
                  {identities[index]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.p
              {...stagger(2)}
              className="mt-6 max-w-lg text-base leading-relaxed text-foreground/70"
            >
              {t.hero.bio}
            </motion.p>

            <motion.div {...stagger(3)} className="mt-6 flex flex-col gap-2">
              <p className="flex items-center gap-2 text-sm text-foreground/60">
                <MapPin size={14} aria-hidden="true" />
                {t.hero.location}
              </p>
              <p className="flex items-center gap-2 text-sm text-foreground/60">
                <span
                  aria-hidden="true"
                  className="ml-0.5 h-2 w-2 rounded-full bg-green-500"
                />
                {t.hero.availability}
              </p>
            </motion.div>

            <motion.div {...stagger(4)} className="mt-8 flex flex-wrap gap-3">
              <Magnetic>
                <a
                  href="#portfolio"
                  className="inline-block rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors duration-200 hover:bg-accent"
                >
                  {t.hero.ctaPrimary}
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#contact"
                  className="inline-block rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  {t.hero.ctaSecondary}
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="/cv.pdf"
                  className="inline-flex items-center gap-2 rounded-lg border border-foreground/20 px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  <FileText size={16} aria-hidden="true" />
                  {t.hero.ctaCv}
                </a>
              </Magnetic>
            </motion.div>
          </div>

          <motion.div {...stagger(3)} className="hidden lg:block">
            <CodeCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
