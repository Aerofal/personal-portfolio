'use client'

import { useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/components/LanguageProvider'
import LanguageToggle from '@/components/LanguageToggle'
import ThemeToggle from '@/components/ThemeToggle'
import CursorToggle from '@/components/CursorToggle'

const SECTION_IDS = ['about', 'portfolio', 'experience', 'contact']

export default function Navbar() {
  const { t } = useLanguage()
  const reduceMotion = useReducedMotion()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const links = [
    { href: '#about', id: 'about', label: t.nav.about },
    { href: '#portfolio', id: 'portfolio', label: t.nav.portfolio },
    { href: '#experience', id: 'experience', label: t.nav.experience },
    { href: '#contact', id: 'contact', label: t.nav.contact },
  ]

  const linkClass = (id: string) =>
    `text-sm transition-colors duration-200 hover:text-accent ${
      activeSection === id ? 'text-accent' : 'text-foreground/70'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'border-b border-foreground/5 bg-background/80 backdrop-blur'
          : 'bg-transparent'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-content items-center justify-between px-6 py-4 lg:max-w-4xl"
      >
        <a href="#top" className="font-display text-base font-bold" aria-label="Home">
          NFL
        </a>

        <div className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={linkClass(link.id)}>
              {link.label}
            </a>
          ))}
          <LanguageToggle />
          <ThemeToggle />
          <CursorToggle />
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Scroll progress indicator */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-accent"
        style={{ scaleX: reduceMotion ? scrollYProgress : progress }}
      />

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-foreground/5 bg-background/95 backdrop-blur sm:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={linkClass(link.id)}
                >
                  {link.label}
                </a>
              ))}
              <LanguageToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
