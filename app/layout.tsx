import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
  title: 'Pankaj Jhajhria | AI Engineer — Agentic AI, RAG & Deep Learning Systems',
  description:
    'Portfolio of Pankaj Jhajhria, AI & Data Science engineering student at IIITDM Kurnool. Designing, building, and evaluating practical GenAI, RAG, and multimodal machine learning systems.',
  keywords: [
    'Pankaj Jhajhria',
    'AI Engineer',
    'Machine Learning Engineer',
    'Generative AI',
    'Agentic AI',
    'RAG',
    'Retrieval-Augmented Generation',
    'PyTorch',
    'Computer Vision',
    'Semantic Segmentation',
    'DuckDB',
    'IIITDM Kurnool',
  ],
  authors: [{ name: 'Pankaj Jhajhria', url: 'https://github.com/Pankaj-Jhajhria' }],
  creator: 'Pankaj Jhajhria',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pankaj-ai-portfolio.vercel.app',
    title: 'Pankaj Jhajhria — AI Engineer Portfolio',
    description:
      'Designing, building, and evaluating intelligent systems: Agentic AI, RAG, multimodal perception, and large-scale data engineering.',
    siteName: 'Pankaj Jhajhria Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pankaj Jhajhria | AI Engineer',
    description:
      'Designing, building, and evaluating intelligent systems across Agentic AI, LLMs & RAG, and multimodal deep learning.',
    creator: '@PkFlamer',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#fcfdfd',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#fcfdfd] text-[#0f1e2e] antialiased min-h-screen flex flex-col selection:bg-[#FFC067]/30 selection:text-[#7C3A00] bg-tech-grid">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
