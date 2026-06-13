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
  metadataBase: new URL('https://naufalmaulana.com'),
  title:
    'Naufal Maulana Ichlas — Domain Expert, Project Leader & Software Engineering Student',
  description:
    'Portfolio of Naufal Maulana Ichlas, a Computer Science undergraduate in the Software Engineering stream at BINUS University, exploring product, project, people, and event operations through technology and collaborative work.',
  alternates: { canonical: 'https://naufalmaulana.com' },
  openGraph: {
    type: 'website',
    url: 'https://naufalmaulana.com',
    siteName: 'Naufal Maulana Ichlas',
    title:
      'Naufal Maulana Ichlas — Domain Expert, Project Leader & Software Engineering Student',
    description:
      'Computer Science undergraduate in the Software Engineering stream at BINUS University, exploring product, project, people, and event operations through technology and collaborative work.',
    locale: 'en_US',
  },
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
