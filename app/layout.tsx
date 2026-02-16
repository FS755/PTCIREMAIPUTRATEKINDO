import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })

export const metadata: Metadata = {
  title: 'PT. Ciremai Putra Tekindo - Mitra Solusi Konstruksi Terpercaya',
  description:
    'PT. Ciremai Putra Tekindo adalah perusahaan yang bergerak di bidang konstruksi, mekanikal elektrikal, dan infrastruktur. Mitra PLN, BUMN, BUMD, serta Swasta.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${dmSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
