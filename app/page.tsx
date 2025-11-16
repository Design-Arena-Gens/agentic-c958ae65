import { Hero } from '@/components/Hero';
import { InsightsTicker } from '@/components/InsightsTicker';
import { KnowledgeMatrix } from '@/components/KnowledgeMatrix';
import { CandlestickChart } from '@/components/CandlestickChart';
import { PatternExplorer } from '@/components/PatternExplorer';
import { SignalWorkbench } from '@/components/SignalWorkbench';
import { GlowCard } from '@/components/GlowCard';

const trainingTracks = [
  {
    title: 'Foundational Layer',
    items: [
      'Price action theory and candle anatomy refresher',
      'Contextual bias using higher timeframe market structure',
      'Pattern taxonomy with reliability scoring matrix'
    ]
  },
  {
    title: 'Execution Layer',
    items: [
      'Confirmation toolkit: volume, delta, VWAP and liquidity maps',
      'Risk systems including ATR stops, scaling heuristics, expectancy math',
      'Scenario planning and branching logic for live tape adjustments'
    ]
  },
  {
    title: 'Automation Layer',
    items: [
      'Webhook-ready signal dispatching to trading bots and journaling apps',
      'Backtesting blueprint with label generation and hypothesis tracking',
      'Review cadence integrating metrics, narrative logs, and snapshots'
    ]
  }
];

export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col gap-16 px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <Hero />
      <InsightsTicker />
      <section className="grid gap-6 lg:grid-cols-3" id="market-simulator">
        <CandlestickChart instrument="BTCUSDT" timeframe="1h" />
        <GlowCard
          className="col-span-full lg:col-span-1"
          title="Pattern Alignment Dashboard"
          subtitle="Key metrics to quickly evaluate conviction"
        >
          <div className="space-y-4 text-sm text-slate-200">
            <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-4 py-3">
              <span className="text-slate-300">Current Bias</span>
              <span className="rounded-full bg-success/20 px-3 py-1 text-success">Bullish</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-4 py-3">
              <span className="text-slate-300">Volatility Regime</span>
              <span className="rounded-full bg-warning/20 px-3 py-1 text-warning">Expanding</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-900/80 px-4 py-3">
              <span className="text-slate-300">Volume Signature</span>
              <span className="rounded-full bg-accent/20 px-3 py-1 text-accent">Accumulation</span>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Guidance</p>
            <p>
              Look for Morning Star or Bullish Engulfing patterns to align with developing demand. Confirm with on-balance volume and VWAP
              reclaim before entering.
            </p>
          </div>
        </GlowCard>
      </section>
      <section id="knowledge" className="grid gap-6 lg:grid-cols-3">
        <KnowledgeMatrix />
      </section>
      <section id="pattern-library">
        <PatternExplorer />
      </section>
      <section id="signal-workbench">
        <SignalWorkbench />
      </section>
      <section id="download-playbook" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trainingTracks.map((track) => (
          <GlowCard
            key={track.title}
            title={track.title}
            subtitle="Self-paced micro curriculum"
            className="flex flex-col justify-between"
          >
            <ul className="space-y-3 text-sm text-slate-200">
              {track.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-6 rounded-full border border-accent/60 bg-accent/10 px-6 py-2 text-sm text-accent transition hover:bg-accent/20"
            >
              Download Module
            </button>
          </GlowCard>
        ))}
      </section>
    </main>
  );
}
