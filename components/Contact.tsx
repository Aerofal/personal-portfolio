'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import Magnetic from '@/components/Magnetic'

export default function Contact() {
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

  const links = [
    {
      label: t.contact.emailLabel,
      href: 'mailto:naufal.ichlas@binus.ac.id',
      Icon: Mail,
    },
    {
      label: t.contact.linkedinLabel,
      href: 'https://linkedin.com/in/naufalmaulanaa',
      Icon: Linkedin,
    },
    {
      label: t.contact.githubLabel,
      href: 'https://github.com/Aerofal',
      Icon: Github,
    },
    {
      label: t.contact.instagramLabel,
      href: 'https://www.instagram.com/naufallm1',
      Icon: Instagram,
    },
  ]

  return (
    <section id="contact" aria-label={t.contact.title} className="scroll-mt-20">
      <motion.div
        {...reveal}
        className="mx-auto max-w-content px-6 py-24 text-center"
      >
        <h2 className="font-display text-4xl font-bold tracking-tight">
          {t.contact.title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-foreground/70">
          {t.contact.text}
        </p>

        <div className="mt-8 flex justify-center gap-4">
          {links.map(({ label, href, Icon }) => (
            <Magnetic key={label} strength={0.35}>
              <a
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="block rounded-lg border border-foreground/15 p-3 text-foreground/70 transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            </Magnetic>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
