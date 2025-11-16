const snippets = [
  'Combine Morning Star with anchored VWAP reclaim for 67% improved expectancy.',
  'Evening Star effectiveness increases when Delta turns sharply negative.',
  'Track liquidity sweeps before committing to Bullish Engulfing entries.',
  'Journal automation automatically tags trades with reliability meta-data.',
  'Volatility compression before Three White Soldiers often precedes expansion moves.'
];

export function InsightsTicker() {
  return (
    <div className="relative overflow-hidden rounded-full border border-white/10 bg-slate-900/60 py-3">
      <div className="animate-marquee whitespace-nowrap text-sm text-slate-200">
        {snippets.map((snippet) => (
          <span key={snippet} className="mx-8 inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            {snippet}
          </span>
        ))}
      </div>
    </div>
  );
}
