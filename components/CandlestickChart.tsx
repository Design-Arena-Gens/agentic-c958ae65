'use client';

import { useMemo, useState } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { GlowCard } from './GlowCard';

interface ChartProps {
  instrument: string;
  timeframe: string;
}

interface CandlePoint {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

function generateSyntheticSeries(seed = 100, points = 60): CandlePoint[] {
  const series: CandlePoint[] = [];
  let price = seed;

  for (let i = 0; i < points; i += 1) {
    const drift = Math.sin(i / 6) * 1.6;
    const volatility = 2 + Math.sin(i / 12) * 1.2;
    const randomShock = (Math.random() - 0.5) * volatility;

    const open = price;
    let close = price + drift + randomShock;
    const high = Math.max(open, close) + Math.random() * 3;
    const low = Math.min(open, close) - Math.random() * 3;
    const volume = 1200 + Math.sin(i / 3) * 200 + Math.random() * 250;

    close = Number(close.toFixed(2));
    price = close;

    series.push({
      time: `${i}`,
      open: Number(open.toFixed(2)),
      high: Number(high.toFixed(2)),
      low: Number(low.toFixed(2)),
      close,
      volume: Math.round(volume)
    });
  }

  return series;
}

export function CandlestickChart({ instrument, timeframe }: ChartProps) {
  const [mode, setMode] = useState<'price' | 'volume'>('price');

  const data = useMemo(() => {
    const seed = instrument.length * 10 + timeframe.length * 25;
    return generateSyntheticSeries(seed);
  }, [instrument, timeframe]);

  return (
    <GlowCard
      className="col-span-full lg:col-span-2"
      title={`Market Replay · ${instrument}`}
      subtitle={`Synthetic ${timeframe} session with contextual overlays`}
    >
      <div className="flex items-center gap-3 text-sm text-slate-300">
        <button
          type="button"
          className={`rounded-full px-3 py-1 transition ${mode === 'price' ? 'bg-accent/20 text-accent' : 'bg-slate-800/60 hover:bg-slate-700/60'}`}
          onClick={() => setMode('price')}
        >
          Price Structure
        </button>
        <button
          type="button"
          className={`rounded-full px-3 py-1 transition ${mode === 'volume' ? 'bg-accent/20 text-accent' : 'bg-slate-800/60 hover:bg-slate-700/60'}`}
          onClick={() => setMode('volume')}
        >
          Volume Signature
        </button>
      </div>
      <div className="mt-6 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {mode === 'price' ? (
            <AreaChart data={data} margin={{ top: 10, bottom: 0, left: 0, right: 0 }}>
              <defs>
                <linearGradient id="priceGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.55} />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(148, 163, 184, 0.2)" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="time" tick={{ fill: 'rgba(148, 163, 184, 0.8)', fontSize: 12 }} axisLine={false} tickLine={false} dy={8} />
              <YAxis
                tick={{ fill: 'rgba(148, 163, 184, 0.8)', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                width={70}
                domain={['auto', 'auto']}
              />
              <Tooltip
                cursor={{ stroke: '#38bdf8', strokeWidth: 1 }}
                contentStyle={{ backgroundColor: '#0f172a', borderRadius: 12, border: '1px solid rgba(56, 189, 248, 0.35)' }}
                formatter={(value: number, name: string) => [`${value}`, name.toUpperCase()]}
              />
              <Area type="monotone" dataKey="close" stroke="#38bdf8" strokeWidth={2} fill="url(#priceGradient)" />
            </AreaChart>
          ) : (
            <AreaChart data={data} margin={{ top: 10, bottom: 0, left: 0, right: 0 }}>
              <defs>
                <linearGradient id="volumeGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#22c55e" stopOpacity={0.55} />
                  <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(148, 163, 184, 0.2)" strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="time" tick={{ fill: 'rgba(148, 163, 184, 0.8)', fontSize: 12 }} axisLine={false} tickLine={false} dy={8} />
              <YAxis
                tick={{ fill: 'rgba(148, 163, 184, 0.8)', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                width={70}
                domain={['auto', 'auto']}
              />
              <Tooltip
                cursor={{ stroke: '#22c55e', strokeWidth: 1 }}
                contentStyle={{ backgroundColor: '#0f172a', borderRadius: 12, border: '1px solid rgba(34, 197, 94, 0.35)' }}
                formatter={(value: number) => [`${Math.round(value)}`, 'VOLUME']}
              />
              <Area type="monotone" dataKey="volume" stroke="#22c55e" strokeWidth={2} fill="url(#volumeGradient)" />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>
    </GlowCard>
  );
}
