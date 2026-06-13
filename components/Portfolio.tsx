'use client'

import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  ChevronDown,
  ExternalLink,
  FileText,
  Github,
  Globe,
  type LucideIcon,
} from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import Section from '@/components/Section'
import type { LinkKind, Project } from '@/lib/i18n'

const LINK_ICON: Record<LinkKind, LucideIcon> = {
  web: Globe,
  code: Github,
  demo: ExternalLink,
  pdf: FileText,
  doc: FileText,
}

interface StoryLabels {
  readStory: string
  hideStory: string
  why: string
  how: string
  what: string
  contribution: string
  learning: string
  role: string
  tech: string
}

function ProjectLinks({ links }: { links?: Project['links'] }) {
  if (!links || links.length === 0) return null
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {links.map((link) => {
        const Icon = LINK_ICON[link.kind]
        return (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-foreground/20 px-3 py-1.5 text-xs font-medium transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <Icon size={14} aria-hidden="true" />
            {link.label}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )
      })}
    </div>
  )
}

function StoryBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-accent/80">
        {label}
      </p>
      <p className="mt-1">{text}</p>
    </div>
  )
}

function TechList({ tech, label }: { tech: string[]; label: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-foreground/40">
        {label}
      </p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {tech.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-foreground/15 px-2.5 py-0.5 text-xs text-foreground/60"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProjectCard({
  project,
  labels,
}: {
  project: Project
  labels: StoryLabels
}) {
  const reduceMotion = useReducedMotion()
  const [open, setOpen] = useState(false)
  const panelId = useId()

  const visibleTech = project.tech.slice(0, 5)
  const extraTech = project.tech.length - visibleTech.length

  return (
    <article className="py-7">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <h3 className="font-display text-lg font-semibold">{project.title}</h3>
        <span className="text-xs text-foreground/40">{project.year}</span>
      </div>

      <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Project type">
        {project.labels.map((label, i) => (
          <li
            key={label}
            className={
              i === 0
                ? 'rounded-md bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent'
                : 'rounded-md border border-foreground/15 px-2 py-0.5 text-[11px] font-medium text-foreground/55'
            }
          >
            {label}
          </li>
        ))}
      </ul>

      <p className="mt-3 text-xs text-foreground/55">
        <span className="text-foreground/40">{labels.role}: </span>
        {project.role}
      </p>

      <p className="mt-3 text-sm leading-relaxed text-foreground/70">
        {project.summary}
      </p>

      <ul className="mt-4 flex flex-wrap items-center gap-2" aria-label="Tech stack">
        {visibleTech.map((tech) => (
          <li
            key={tech}
            className="rounded-lg border border-foreground/15 px-2.5 py-0.5 text-xs text-foreground/60"
          >
            {tech}
          </li>
        ))}
        {extraTech > 0 ? (
          <li className="text-xs text-foreground/40">+{extraTech} more</li>
        ) : null}
      </ul>

      <ProjectLinks links={project.links} />

      {project.note ? (
        <p className="mt-3 max-w-prose text-xs italic leading-relaxed text-foreground/45">
          {project.note}
        </p>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent transition-colors duration-200 hover:text-foreground"
      >
        {open ? labels.hideStory : labels.readStory}
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
            <div className="mt-4 space-y-4 border-l-2 border-accent/30 pl-4 text-sm leading-relaxed text-foreground/70">
              <StoryBlock label={labels.why} text={project.story.why} />
              <StoryBlock label={labels.how} text={project.story.how} />
              <StoryBlock label={labels.what} text={project.story.what} />
              {project.contribution ? (
                <StoryBlock
                  label={labels.contribution}
                  text={project.contribution}
                />
              ) : null}
              <StoryBlock label={labels.learning} text={project.story.learning} />
              <TechList tech={project.tech} label={labels.tech} />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  )
}

export default function Portfolio() {
  const { t } = useLanguage()
  const reduceMotion = useReducedMotion()

  const labels: StoryLabels = {
    readStory: t.projects.readStory,
    hideStory: t.projects.hideStory,
    why: t.projects.labelWhy,
    how: t.projects.labelHow,
    what: t.projects.labelWhat,
    contribution: t.projects.labelContribution,
    learning: t.projects.labelLearning,
    role: t.projects.labelRole,
    tech: t.projects.labelTech,
  }

  const reveal = (order: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: '-80px' },
          transition: { duration: 0.5, delay: order * 0.06 },
        }

  return (
    <Section id="projects" index="03" title={t.projects.title}>
      <div className="-mt-7 flex flex-col divide-y divide-foreground/10">
        {t.projects.projects.map((project, i) => (
          <motion.div key={project.title} {...reveal(i)}>
            <ProjectCard project={project} labels={labels} />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
