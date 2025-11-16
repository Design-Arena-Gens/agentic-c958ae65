'use client';

import { Tab } from '@headlessui/react';
import clsx from 'clsx';

import { CANDLESTICK_PATTERNS, type PatternCategory } from '@/data/patterns';
import { GlowCard } from './GlowCard';

const categories: PatternCategory[] = ['Reversal', 'Continuation', 'Indecision'];

export function PatternExplorer() {
  return (
    <GlowCard
      className="col-span-full"
      title="Pattern Intelligence"
      subtitle="Expert annotations, automation hooks, and institutional context"
    >
      <Tab.Group>
        <Tab.List className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                clsx(
                  'rounded-full px-4 py-2 text-sm font-medium transition',
                  selected
                    ? 'bg-accent/20 text-accent'
                    : 'bg-slate-800/60 text-slate-200 hover:bg-slate-700/50 hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Tab.Panel key={category} className="grid gap-4 md:col-span-2 lg:col-span-3">
              {CANDLESTICK_PATTERNS.filter((pattern) => pattern.category === category).map((pattern) => (
                <div key={pattern.id} className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-accent">{pattern.category}</p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{pattern.name}</h3>
                    </div>
                    <div className="flex gap-2 text-xs text-slate-300">
                      <span className="rounded-full bg-slate-800/80 px-3 py-1">{pattern.reliability} Reliability</span>
                      <span className="rounded-full bg-slate-800/80 px-3 py-1">{pattern.riskLevel} Risk</span>
                      <span className="rounded-full bg-slate-800/80 px-3 py-1">{pattern.context} Bias</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-slate-200">{pattern.description}</p>
                  <div className="mt-4 grid gap-3 md:grid-cols-2">
                    <div className="rounded-2xl bg-slate-900/80 p-4">
                      <h4 className="text-sm font-semibold text-slate-100">Execution Framework</h4>
                      <p className="mt-2 text-sm text-slate-300">{pattern.strategy}</p>
                    </div>
                    <div className="rounded-2xl bg-slate-900/80 p-4">
                      <h4 className="text-sm font-semibold text-slate-100">Confirmation Logic</h4>
                      <p className="mt-2 text-sm text-slate-300">{pattern.confirmation}</p>
                    </div>
                  </div>
                  <div className="mt-4 grid gap-4 lg:grid-cols-2">
                    <div>
                      <h5 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Conditions</h5>
                      <ul className="mt-2 space-y-2 text-sm text-slate-300">
                        {pattern.conditions.map((condition) => (
                          <li key={condition} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                            <span>{condition}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Playbook Notes</h5>
                      <ul className="mt-2 space-y-2 text-sm text-slate-300">
                        {pattern.tips.map((tip) => (
                          <li key={tip} className="flex items-start gap-2">
                            <span className="mt-1 h-2 w-2 rounded-full bg-success" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </GlowCard>
  );
}
