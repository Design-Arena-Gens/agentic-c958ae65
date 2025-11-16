'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckIcon, LightBulbIcon } from '@heroicons/react/24/outline';

import type { SignalInput } from '@/lib/inference';
import { generateSignals } from '@/lib/inference';
import { GlowCard } from './GlowCard';

const instruments = ['BTCUSDT', 'ES Mini', 'EURUSD', 'NVDA', 'TSLA'];
const timeframes: SignalInput['timeframe'][] = ['5m', '15m', '1h', '4h', '1d'];

export function SignalWorkbench() {
  const [input, setInput] = useState<SignalInput>({
    instrument: 'BTCUSDT',
    timeframe: '1h',
    context: 'Bullish',
    trend: 'Strong Uptrend',
    volatility: 'Medium',
    volume: 'Rising',
    objective: 'Entry'
  });

  const signals = useMemo(() => generateSignals(input), [input]);

  return (
    <GlowCard
      className="col-span-full"
      title="Decision Workbench"
      subtitle="Dynamic inference engine that prioritises the highest quality setups"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <form className="grid gap-4">
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Instrument</label>
            <select
              value={input.instrument}
              onChange={(event) => setInput((prev) => ({ ...prev, instrument: event.target.value }))}
              className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 focus:border-accent focus:outline-none"
            >
              {instruments.map((instrument) => (
                <option key={instrument}>{instrument}</option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Timeframe</label>
            <div className="flex flex-wrap gap-2">
              {timeframes.map((timeframe) => (
                <button
                  key={timeframe}
                  type="button"
                  onClick={() => setInput((prev) => ({ ...prev, timeframe }))}
                  className={`rounded-full px-3 py-1 text-sm transition ${
                    input.timeframe === timeframe
                      ? 'bg-accent/20 text-accent'
                      : 'bg-slate-800/60 text-slate-200 hover:bg-slate-700/50'
                  }`}
                >
                  {timeframe}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Context</label>
            <div className="grid grid-cols-3 gap-2">
              {['Bullish', 'Bearish', 'Neutral'].map((context) => (
                <button
                  key={context}
                  type="button"
                  onClick={() => setInput((prev) => ({ ...prev, context: context as SignalInput['context'] }))}
                  className={`rounded-2xl px-3 py-2 text-sm transition ${
                    input.context === context
                      ? 'bg-success/20 text-success'
                      : 'bg-slate-800/60 text-slate-200 hover:bg-slate-700/50'
                  }`}
                >
                  {context}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Trend Strength</label>
            <select
              value={input.trend}
              onChange={(event) => setInput((prev) => ({ ...prev, trend: event.target.value as SignalInput['trend'] }))}
              className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 focus:border-accent focus:outline-none"
            >
              {['Strong Uptrend', 'Strong Downtrend', 'Sideways', 'Choppy'].map((trend) => (
                <option key={trend}>{trend}</option>
              ))}
            </select>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Volatility</label>
              <select
                value={input.volatility}
                onChange={(event) => setInput((prev) => ({ ...prev, volatility: event.target.value as SignalInput['volatility'] }))}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 focus:border-accent focus:outline-none"
              >
                {['Low', 'Medium', 'High'].map((volatility) => (
                  <option key={volatility}>{volatility}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Volume State</label>
              <select
                value={input.volume}
                onChange={(event) => setInput((prev) => ({ ...prev, volume: event.target.value as SignalInput['volume'] }))}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 focus:border-accent focus:outline-none"
              >
                {['Rising', 'Falling', 'Stable'].map((volume) => (
                  <option key={volume}>{volume}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-[0.3em] text-slate-400">Objective</label>
            <div className="flex flex-wrap gap-2">
              {['Entry', 'Add Position', 'Manage Risk', 'Take Profit'].map((objective) => (
                <button
                  key={objective}
                  type="button"
                  onClick={() => setInput((prev) => ({ ...prev, objective: objective as SignalInput['objective'] }))}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    input.objective === objective
                      ? 'bg-warning/20 text-warning'
                      : 'bg-slate-800/60 text-slate-200 hover:bg-slate-700/50'
                  }`}
                >
                  {objective}
                </button>
              ))}
            </div>
          </div>
        </form>
        <div className="grid gap-4">
          {signals.map((signal, index) => (
            <motion.div
              key={signal.pattern.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4, ease: 'easeOut' }}
              className="rounded-3xl border border-accent/20 bg-slate-900/80 p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-accent">Suggested Play</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{signal.pattern.name}</h3>
                  <p className="mt-1 text-sm text-slate-300">Conviction score {signal.conviction}/100</p>
                </div>
                <div className="rounded-full bg-accent/20 px-3 py-1 text-sm text-accent">
                  {signal.pattern.reliability}
                </div>
              </div>
              <div className="mt-4 space-y-3 text-sm text-slate-200">
                <div>
                  <h4 className="font-semibold text-slate-100">Execution Checklist</h4>
                  <ul className="mt-2 space-y-2">
                    {signal.checklist.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckIcon className="mt-0.5 h-4 w-4 text-success" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-100">Objective Playbook</h4>
                  <ul className="mt-2 space-y-1 text-slate-300">
                    {signal.playbook.map((idea) => (
                      <li key={idea}>· {idea}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-100">Automation Hooks</h4>
                  <ul className="mt-2 space-y-1 text-slate-300">
                    {signal.automationIdeas.map((idea) => (
                      <li key={idea}>· {idea}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 text-sm text-slate-300">
            <div className="flex items-center gap-3 text-warning">
              <LightBulbIcon className="h-5 w-5" />
              <p className="font-medium uppercase tracking-[0.3em]">Expert Tip</p>
            </div>
            <p className="mt-3">
              Run forward-testing on simulated order flow before committing real capital. Use the journaling hooks to audit discipline and
              tweak your edge iteratively.
            </p>
          </div>
        </div>
      </div>
    </GlowCard>
  );
}
