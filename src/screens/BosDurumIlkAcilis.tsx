// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Durum (İlk Açılış)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BosDurumIlkAcilisProps {}

export function BosDurumIlkAcilis(props: BosDurumIlkAcilisProps) {
  return (
    <>
      {/*  TopAppBar  */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl docked full-width top-0 no-border bg-slate-50/50 dark:bg-slate-800/50 shadow-sm shadow-indigo-500/5 flex justify-between items-center w-full px-6 py-4 sticky z-50 hidden md:flex">
      <div className="text-2xl font-bold bg-gradient-to-br from-indigo-600 to-violet-500 bg-clip-text text-transparent">
                  Pipeline Sayaç
              </div>
      <nav className="flex gap-6 items-center">
      <a className="text-indigo-600 dark:text-indigo-400 font-bold Headline-SM text-xl Inter tracking-tight" href="#">Sayaç</a>
      <a className="text-slate-500 dark:text-slate-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors px-3 py-2 rounded-lg" href="#">Geçmiş</a>
      <a className="text-slate-500 dark:text-slate-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors px-3 py-2 rounded-lg" href="#">Ayarlar</a>
      </nav>
      <div className="text-indigo-600 dark:text-indigo-400 flex items-center justify-center p-2 rounded-full hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer scale-95 active:transition-transform">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </div>
      </header>
      {/*  Mobile Top Header (Brand Only)  */}
      <header className="md:hidden flex justify-between items-center w-full px-6 py-6 z-50">
      <div className="text-2xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent tracking-tight">
                  Pipeline Sayaç
              </div>
      <div className="text-on-surface-variant flex items-center justify-center p-2 rounded-full cursor-pointer">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </div>
      </header>
      {/*  Main Content Canvas  */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 pb-32 md:pb-12 pt-8">
      {/*  Hero Counter (Empty State)  */}
      <div className="w-full max-w-md flex flex-col items-center mb-12">
      {/*  Subtle backdrop gradient  */}
      <div className="relative w-full flex justify-center items-center py-16 px-8 rounded-xl bg-surface-bright/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(25,28,30,0.06)] border border-outline-variant/15 overflow-hidden">
      {/*  Inner soft gradient hint  */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl pointer-events-none"></div>
      <h1 className="text-[5rem] md:text-[6rem] font-bold text-on-surface/40 font-display leading-none tracking-tighter relative z-10">
                          0
                      </h1>
      </div>
      <p className="mt-8 text-on-surface-variant text-center font-body text-base max-w-xs tracking-wide">
                      Başlamak için arttır butonuna basabilirsin.
                  </p>
      </div>
      {/*  Action Controls  */}
      <div className="w-full max-w-sm flex gap-4 justify-center items-center">
      {/*  Azalt Button (Secondary)  */}
      <button className="flex-1 py-4 px-6 rounded-lg bg-surface-container-highest hover:bg-surface-dim transition-colors text-on-surface flex items-center justify-center gap-2 group">
      <span className="material-symbols-outlined group-hover:-translate-y-0.5 transition-transform" data-icon="remove">remove</span>
      <span className="font-label font-medium tracking-wide">Azalt</span>
      </button>
      {/*  Arttır Button (Primary)  */}
      <button className="flex-[1.5] py-4 px-6 rounded-lg bg-primary text-on-primary shadow-[0_8px_32px_rgba(70,72,212,0.2)] hover:shadow-[0_12px_40px_rgba(70,72,212,0.3)] transition-all flex items-center justify-center gap-2 relative overflow-hidden group">
      {/*  Subtle inner glow on top edge  */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/20"></div>
      <span className="material-symbols-outlined font-bold group-hover:-translate-y-0.5 transition-transform" data-icon="add" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
      <span className="font-label font-bold tracking-wide">Arttır</span>
      </button>
      </div>
      {/*  Sıfırla Button (Ghost/Tertiary)  */}
      <div className="mt-6 w-full max-w-sm flex justify-center">
      <button className="py-3 px-6 rounded-lg text-on-surface-variant/60 hover:text-on-surface bg-transparent hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2">
      <span className="material-symbols-outlined text-sm" data-icon="restart_alt">restart_alt</span>
      <span className="font-label text-sm font-medium">Sıfırla</span>
      </button>
      </div>
      </main>
      {/*  BottomNavBar (Mobile Only)  */}
      <nav className="md:hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl fixed bottom-0 w-full rounded-t-[2rem] no-border shadow-[0_-8px_30px_rgb(0,0,0,0.04)] fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4">
      <div className="flex flex-col items-center justify-center bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-2xl px-5 py-2 active:scale-90 transition-transform duration-200 cursor-pointer">
      <span className="material-symbols-outlined mb-1" data-icon="timer">timer</span>
      <span className="Label-MD: text-[10px] font-medium tracking-wider uppercase">Sayaç</span>
      </div>
      <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2 hover:text-indigo-500 transition-all active:scale-90 transition-transform duration-200 cursor-pointer">
      <span className="material-symbols-outlined mb-1" data-icon="history">history</span>
      <span className="Label-MD: text-[10px] font-medium tracking-wider uppercase">Geçmiş</span>
      </div>
      <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-5 py-2 hover:text-indigo-500 transition-all active:scale-90 transition-transform duration-200 cursor-pointer">
      <span className="material-symbols-outlined mb-1" data-icon="settings">settings</span>
      <span className="Label-MD: text-[10px] font-medium tracking-wider uppercase">Ayarlar</span>
      </div>
      </nav>
    </>
  );
}
