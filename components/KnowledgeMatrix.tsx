import { SparklesIcon, CpuChipIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

import { GlowCard } from './GlowCard';

const pillars = [
  {
    title: 'Pattern Diagnostics',
    subtitle: 'Structure + order flow alignment',
    icon: <SparklesIcon className="h-6 w-6" />,
    items: [
      'Detect trend exhaustion and liquidity imbalance zones automatically.',
      'Map candle anatomy to higher timeframe structure and volume profile.',
      'Score the reliability using volatility, session timing, and historical edge.'
    ]
  },
  {
    title: 'Expert Playbooks',
    subtitle: 'Repeatable execution tactics',
    icon: <ArrowTrendingUpIcon className="h-6 w-6" />,
    items: [
      'Entry triggers enriched with ATR-based risk envelopes.',
      'Position management with dynamic scaling and hedging cues.',
      'Automation recipes for alerts, journaling, and P&L review.'
    ]
  },
  {
    title: 'Inference Engine',
    subtitle: 'Context-aware recommendations',
    icon: <CpuChipIcon className="h-6 w-6" />,
    items: [
      'Adjusts conviction based on trend strength and volatility regimes.',
      'Highlights confirmation checklist aligned with professional tape-readers.',
      'Surfaces downstream actions for portfolio level decision support.'
    ]
  }
];

export function KnowledgeMatrix() {
  return (
    <GlowCard
      className="col-span-full lg:col-span-3"
      title="Expert System DNA"
      subtitle="Three foundational pillars that turn pattern recognition into a trader-grade workflow"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
            <div className="flex items-center gap-3 text-accent">
              {pillar.icon}
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{pillar.subtitle}</p>
                <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
              </div>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {pillar.items.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </GlowCard>
  );
}
