'use client'

import { useLanguage } from '@/components/LanguageProvider'
import type { Lang } from '@/lib/i18n'

const LANGS: Lang[] = ['en', 'id']

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className="flex items-center gap-1 text-xs font-medium"
      role="group"
      aria-label="Language"
    >
      {LANGS.map((code, i) => (
        <span key={code} className="flex items-center gap-1">
          {i > 0 && <span aria-hidden="true" className="text-foreground/30">|</span>}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={`px-1 py-0.5 uppercase transition-colors duration-200 ${
              lang === code
                ? 'text-accent'
                : 'text-foreground/50 hover:text-foreground'
            }`}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  )
}
