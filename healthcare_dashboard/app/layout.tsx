import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Healtcare Dashboard App',
  description: 'Healtcare Dashboard',
  generator: 'HealtcareDashboard.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
