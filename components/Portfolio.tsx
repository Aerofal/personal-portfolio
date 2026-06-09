'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import Section from '@/components/Section'
import type { Project } from '@/lib/i18n'

function ProjectCard({
  project,
  viewCode,
  liveDemo,
}: {
  project: Project
  viewCode: string
  liveDemo: string
}) {
  const linkBase =
    'inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors duration-200'

  return (
    <article className="group border-l-2 border-transparent py-6 pl-5 transition-all duration-200 hover:translate-x-1 hover:border-accent">
      <h3 className="font-display text-base font-semibold">{project.title}</h3>
      <p className="mt-1 text-xs text-foreground/50">{project.context}</p>
      <p className="mt-3 text-sm leading-relaxed text-foreground/70">
        {project.description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-lg border border-foreground/15 px-2.5 py-0.5 text-xs text-foreground/60"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex gap-2">
        {project.codeUrl ? (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkBase} border-foreground/20 hover:border-accent hover:text-accent`}
          >
            <Github size={14} aria-hidden="true" />
            {viewCode}
          </a>
        ) : (
          <span
            aria-disabled="true"
            className={`${linkBase} cursor-not-allowed border-foreground/10 text-foreground/30`}
          >
            <Github size={14} aria-hidden="true" />
            {viewCode}
          </span>
        )}
        {project.noDemo ? null : project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkBase} border-foreground/20 hover:border-accent hover:text-accent`}
          >
            <ExternalLink size={14} aria-hidden="true" />
            {project.demoLabel ?? liveDemo}
          </a>
        ) : (
          <span
            aria-disabled="true"
            className={`${linkBase} cursor-not-allowed border-foreground/10 text-foreground/30`}
          >
            <ExternalLink size={14} aria-hidden="true" />
            {project.demoLabel ?? liveDemo}
          </span>
        )}
      </div>
    </article>
  )
}

export default function Portfolio() {
  const { t } = useLanguage()
  const reduceMotion = useReducedMotion()

  const reveal = (order: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-80px' },
          transition: { duration: 0.5, delay: order * 0.08 },
        }

  return (
    <Section id="portfolio" index="03" title={t.portfolio.title}>
      <div className="-mt-6 flex flex-col divide-y divide-foreground/5">
        {t.portfolio.projects.map((project, i) => (
          <motion.div key={project.title} {...reveal(i)}>
            <ProjectCard
              project={project}
              viewCode={t.portfolio.viewCode}
              liveDemo={t.portfolio.liveDemo}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
