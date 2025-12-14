import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Felix Gündling - Software Engineer & Developer',
  description: 'Professional portfolio of Felix Gündling, a software engineer specializing in modern web technologies, full-stack development, and innovative digital solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
