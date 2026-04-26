// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Hata Durumu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface HataDurumuProps {}

export function HataDurumu(props: HataDurumuProps) {
  return (
    <>
      {/*  Top Navigation Placeholder (Suppressed per logic as this is an error state, but kept minimal for context if needed, opting to hide full nav for focus)  */}
      <main className="w-full max-w-md flex flex-col gap-8">
      {/*  TopAppBar (Minimal for context, no full nav)  */}
      <header className="docked full-width top-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl no-border bg-slate-50/50 dark:bg-slate-800/50 shadow-sm shadow-indigo-500/5 flex justify-between items-center w-full px-6 py-4 rounded-xl mb-4">
      <h1 className="text-2xl font-bold bg-gradient-to-br from-indigo-600 to-violet-500 bg-clip-text text-transparent">Pipeline Sayaç</h1>
      <div className="flex gap-4">
      <span className="material-symbols-outlined text-indigo-600 dark:text-indigo-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors rounded-full p-2 cursor-pointer" data-icon="settings">settings</span>
      </div>
      </header>
      {/*  Error Banner / Card  */}
      <div className="bg-error-container text-on-error-container rounded-xl p-6 flex flex-col items-center text-center shadow-[0_8px_32px_rgba(186,26,26,0.1)] border border-error/20">
      <span className="material-symbols-outlined text-error text-5xl mb-4" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
      <h2 className="font-headline text-xl font-bold mb-2 text-error">Hata Durumu</h2>
      <p className="font-body text-[0.875rem] tracking-[0.01em] text-on-error-container">Verilere ulaşılamadı. Sayaç varsayılan değerle (0) çalışmaya devam edecek.</p>
      </div>
      {/*  The Hero Counter (Signature Component) - Reset State  */}
      <div className="bg-surface-bright rounded-xl p-10 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_8px_32px_rgba(25,28,30,0.06)]">
      {/*  Subtle gradient background  */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
      <div className="relative z-10 flex flex-col items-center">
      <span className="font-display text-[3.5rem] font-bold text-on-surface leading-none mb-2">0</span>
      <span className="font-label text-[0.75rem] font-medium text-on-surface-variant uppercase tracking-wider">Varsayılan Sayaç</span>
      </div>
      </div>
      {/*  Counter Controls (Secondary focus)  */}
      <div className="flex gap-4 w-full justify-center mt-4">
      <button aria-label="Decrease" className="bg-secondary-container text-on-secondary-container rounded-md w-16 h-16 flex items-center justify-center hover:bg-surface-container-highest transition-colors shadow-[0_8px_32px_rgba(25,28,30,0.04)]">
      <span className="material-symbols-outlined text-2xl">remove</span>
      </button>
      <button aria-label="Increase" className="bg-primary text-on-primary rounded-md w-16 h-16 flex items-center justify-center shadow-[0_8px_32px_rgba(70,72,212,0.3)] relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
      <span className="material-symbols-outlined text-3xl transition-transform group-hover:scale-110">add</span>
      </button>
      </div>
      </main>
    </>
  );
}
