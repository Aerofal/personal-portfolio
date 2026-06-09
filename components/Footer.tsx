'use client'

import { useLanguage } from '@/components/LanguageProvider'
import LanguageToggle from '@/components/LanguageToggle'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-foreground/5">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-6 lg:max-w-4xl">
        <p className="text-xs text-foreground/50">
          {t.footer.builtBy} · {new Date().getFullYear()}
        </p>
        <LanguageToggle />
      </div>
    </footer>
  )
}
