'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage } from '@/components/LanguageProvider'
import Section from '@/components/Section'

export default function About() {
  const { t } = useLanguage()
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
    <Section id="about" index="01" title={t.about.title}>
      <motion.div
        {...reveal}
        className="grid grid-cols-1 gap-8 md:grid-cols-[240px_1fr]"
      >
        <Image
          src="/images/profile.jpg"
          alt={t.about.photoAlt}
          width={480}
          height={480}
          className="aspect-square w-full max-w-[240px] rounded-lg object-cover"
        />

        <div>
          <p className="text-base leading-relaxed text-foreground/70">
            {t.about.bio}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Fun facts">
            {t.about.facts.map((fact) => (
              <li
                key={fact}
                className="rounded-lg border border-foreground/15 px-3 py-1 text-xs text-foreground/70"
              >
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </Section>
  )
}
