// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Sayfa
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaSayfaProps {}

export function AnaSayfa(props: AnaSayfaProps) {
  return (
    <>
      {/*  TopAppBar (Web & Mobile Hybrid)  */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl docked full-width top-0 no-border bg-slate-50/50 dark:bg-slate-800/50 shadow-sm shadow-indigo-500/5 z-40 hidden md:flex">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-4">
      <span className="text-2xl font-bold bg-gradient-to-br from-indigo-600 to-violet-500 bg-clip-text text-transparent tracking-tight">Pipeline Sayaç</span>
      </div>
      <nav className="flex items-center gap-8">
      <a className="text-indigo-600 dark:text-indigo-400 font-bold hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors rounded-lg px-4 py-2 scale-95 active:transition-transform" href="#">
                          Sayaç
                      </a>
      <a className="text-slate-500 dark:text-slate-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors rounded-lg px-4 py-2 scale-95 active:transition-transform" href="#">
                          Geçmiş
                      </a>
      <a className="text-slate-500 dark:text-slate-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors rounded-lg px-4 py-2 scale-95 active:transition-transform" href="#">
                          Ayarlar
                      </a>
      </nav>
      <div className="flex items-center gap-4">
      <button className="p-2 rounded-full text-slate-500 hover:bg-slate-100 transition-colors">
      <span className="material-symbols-outlined">settings</span>
      </button>
      </div>
      </div>
      </header>
      {/*  Mobile Top Header (Fallback)  */}
      <header className="md:hidden flex justify-between items-center px-6 py-5 bg-white/80 backdrop-blur-xl z-40 sticky top-0">
      <span className="text-xl font-bold bg-gradient-to-br from-indigo-600 to-violet-500 bg-clip-text text-transparent">Pipeline Sayaç</span>
      <button className="p-2 text-slate-500">
      <span className="material-symbols-outlined">settings</span>
      </button>
      </header>
      {/*  Main Content Canvas  */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 md:p-12 pb-32 md:pb-12 max-w-5xl mx-auto w-full">
      {/*  Hero Counter Area  */}
      <section className="w-full flex flex-col items-center justify-center gap-12 relative z-10">
      {/*  Title  */}
      <div className="text-center">
      <h1 className="text-[1.5rem] font-bold font-headline text-on-background tracking-tight mb-2">Günlük İlerleme</h1>
      <p className="text-sm text-on-surface-variant font-body tracking-[0.01em]">Bugünkü sayımlarınız</p>
      </div>
      {/*  The Counter Gallery Display  */}
      <div className="relative w-full max-w-sm aspect-square bg-surface-bright rounded-[2rem] flex items-center justify-center flex-col relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:to-transparent before:rounded-[2rem] before:pointer-events-none">
      {/*  Tonal Glow  */}
      <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -z-10"></div>
      <div className="text-[6rem] md:text-[8rem] font-bold font-display text-primary leading-none tracking-tighter drop-shadow-[0_8px_32px_rgba(70,72,212,0.15)] relative z-10">
                          42
                      </div>
      {/*  Status Chip  */}
      <div className="mt-8 px-6 py-2 bg-secondary-fixed rounded-full inline-flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
      <span className="text-sm font-medium text-on-secondary-fixed font-label">Aktif Sayım</span>
      </div>
      </div>
      {/*  Kinetic Action Controls  */}
      <div className="flex items-center gap-6 mt-4 w-full max-w-md justify-center">
      {/*  Azalt (-)  */}
      <button className="w-16 h-16 rounded-[1rem] bg-surface-container-highest text-on-surface flex items-center justify-center hover:bg-surface-variant transition-colors group shadow-[0_8px_32px_rgba(25,28,30,0.06)]">
      <span className="material-symbols-outlined text-3xl group-active:scale-90 transition-transform">remove</span>
      </button>
      {/*  Arttır (+) Primary  */}
      <button className="w-24 h-24 rounded-[1.25rem] bg-gradient-to-br from-primary to-primary-container text-on-primary flex items-center justify-center shadow-[0_12px_40px_rgba(70,72,212,0.25)] hover:shadow-[0_16px_48px_rgba(70,72,212,0.35)] transition-all relative overflow-hidden group">
      {/*  Inner Edge Highlight  */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 rounded-t-[1.25rem]"></div>
      <span className="material-symbols-outlined text-5xl group-active:scale-90 transition-transform">add</span>
      </button>
      {/*  Sıfırla (Reset)  */}
      <button className="w-16 h-16 rounded-[1rem] bg-surface-container-highest text-on-surface flex items-center justify-center hover:bg-surface-variant transition-colors group shadow-[0_8px_32px_rgba(25,28,30,0.06)]">
      <span className="material-symbols-outlined text-2xl group-active:-rotate-90 transition-transform duration-300">refresh</span>
      </button>
      </div>
      </section>
      {/*  Keyboard Shortcuts Guide  */}
      <section className="mt-20 w-full max-w-md mx-auto">
      <div className="bg-surface-container-low rounded-[1.5rem] p-6 relative">
      {/*  Ghost Border  */}
      <div className="absolute inset-0 rounded-[1.5rem] border border-outline-variant/15 pointer-events-none"></div>
      <h3 className="text-sm font-medium text-on-surface-variant mb-4 font-label flex items-center gap-2">
      <span className="material-symbols-outlined text-lg">keyboard</span>
                          Klavye Kısayolları
                      </h3>
      <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center px-2">
      <span className="text-sm text-on-surface font-body">Arttır</span>
      <kbd className="px-3 py-1 bg-surface-container-lowest text-on-surface rounded-lg text-xs font-mono font-medium shadow-sm outline outline-1 outline-outline-variant/20">+</kbd>
      </div>
      <div className="flex justify-between items-center px-2">
      <span className="text-sm text-on-surface font-body">Azalt</span>
      <kbd className="px-3 py-1 bg-surface-container-lowest text-on-surface rounded-lg text-xs font-mono font-medium shadow-sm outline outline-1 outline-outline-variant/20">-</kbd>
      </div>
      <div className="flex justify-between items-center px-2">
      <span className="text-sm text-on-surface font-body">Sıfırla</span>
      <kbd className="px-3 py-1 bg-surface-container-lowest text-on-surface rounded-lg text-xs font-mono font-medium shadow-sm outline outline-1 outline-outline-variant/20">R</kbd>
      </div>
      </div>
      </div>
      </section>
      </main>
      {/*  BottomNavBar (Mobile Only)  */}
      <nav className="md:hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl fixed bottom-0 w-full rounded-t-[2rem] no-border shadow-[0_-8px_30px_rgb(0,0,0,0.04)] z-50 flex justify-around items-center px-4 pb-8 pt-4">
      <a className="flex flex-col items-center justify-center bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-2xl px-5 py-2 active:scale-90 transition-transform duration-200" href="#">
      <span className="material-symbols-outlined text-2xl mb-1" style={{fontVariationSettings: "'FILL' 1"}}>timer</span>
      <span className="text-[10px] font-medium tracking-wider uppercase">Sayaç</span>
      </a>
      <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2 hover:text-indigo-500 transition-all active:scale-90 transition-transform duration-200" href="#">
      <span className="material-symbols-outlined text-2xl mb-1">history</span>
      <span className="text-[10px] font-medium tracking-wider uppercase">Geçmiş</span>
      </a>
      <a className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2 hover:text-indigo-500 transition-all active:scale-90 transition-transform duration-200" href="#">
      <span className="material-symbols-outlined text-2xl mb-1">settings</span>
      <span className="text-[10px] font-medium tracking-wider uppercase">Ayarlar</span>
      </a>
      </nav>
    </>
  );
}
