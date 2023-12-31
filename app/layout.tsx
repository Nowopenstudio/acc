import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import { Providers } from './components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
          <title>American CargoCare</title>
        </head>
      <body className={`${inter.className}  text-white bg-blue-700`}>
     <Providers>
      <main className=" mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
      </Providers></body>
    </html>
  )
}
