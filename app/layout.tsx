import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { LanguageProvider } from '@/components/LanguageProvider'
import { CursorProvider } from '@/components/CursorProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500'],
})

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700'],
})

export const metadata: Metadata = {
  title: 'Naufal Maulana Ichlas',
  description:
    'Personal portfolio of Naufal Maulana Ichlas, a Computer Science student at Binus University and frontend developer building clean, functional digital products.',
}

// Runs before paint so the saved theme applies without a flash of light mode.
const themeInitScript = `
(function () {
  try {
    var theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <LanguageProvider>
          <CursorProvider>{children}</CursorProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
