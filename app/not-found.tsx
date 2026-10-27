import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 flex items-center justify-center px-4">
      <div className="text-center max-w-md p-8 rounded-3xl glass-panel border border-white/[0.08]">
        <div className="text-5xl font-mono font-bold text-amber-400 mb-2">404</div>
        <h1 className="text-xl font-bold text-slate-100 mb-2">System Page Not Found</h1>
        <p className="text-xs sm:text-sm text-slate-400 mb-6">
          The requested coordinate or document does not exist in this repository.
        </p>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </Link>
      </div>
    </div>
  );
}
