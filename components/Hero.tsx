import { ArrowTopRightOnSquareIcon, AcademicCapIcon, CloudArrowDownIcon } from '@heroicons/react/24/outline';

export function Hero() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-sm text-accent">
        <AcademicCapIcon className="h-4 w-4" />
        Institutional pattern intelligence for discretionary and systematic traders
      </div>
      <div className="max-w-4xl space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Candlestick Chart Expert System
        </h1>
        <p className="text-lg text-slate-300">
          Learn, backtest, and operationalise candlestick patterns using a guided expert system. Blend discretionary insight with
          automation-ready workflows that adapt to market context in real time.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
        <a
          href="#signal-workbench"
          className="rounded-full bg-accent px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-sky-500/30 transition hover:translate-y-0.5 hover:shadow-sky-500/40"
        >
          Launch Decision Workbench
        </a>
        <a
          href="#pattern-library"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-slate-900/60 px-6 py-3 text-slate-100 transition hover:border-accent/60 hover:text-accent"
        >
          Explore Pattern Library
          <ArrowTopRightOnSquareIcon className="h-4 w-4" />
        </a>
        <a
          href="#download-playbook"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-success/60 bg-success/10 px-6 py-3 text-success transition hover:border-success hover:bg-success/20"
        >
          Download Playbook
          <CloudArrowDownIcon className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
