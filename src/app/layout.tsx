import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Justin Devon Mitchell Fighter Shooter Art Game',
  description: 'The ultimate 3-in-1 gaming experience: Fighter legends, helicopter shooter, and digital art studio by Justin Devon Mitchell',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
          {children}
        </div>
      </body>
    </html>
  )
}