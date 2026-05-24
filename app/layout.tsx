import type { Metadata } from 'next'
import { Syne, Space_Grotesk, Space_Mono } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-grotesk',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Parth Sood — AI / ML Engineer',
  description:
    'Production AI/ML Engineer specialising in RAG pipelines, agentic systems, and embedding-based search at scale.',
  keywords: [
    'AI Engineer','ML Engineer','RAG','LangGraph','LLM','FastAPI','PySpark',
    'Vector Search','HNSW','ChromaDB','PyTorch','Parth Sood',
  ],
  openGraph: {
    title: 'Parth Sood — AI / ML Engineer',
    description: 'Production AI/ML Engineer specialising in RAG pipelines, agentic systems, and embedding-based search.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
