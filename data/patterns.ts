export type PatternCategory = 'Reversal' | 'Continuation' | 'Indecision';

export type MarketContext = 'Bullish' | 'Bearish' | 'Neutral';

export interface CandlestickPattern {
  id: string;
  name: string;
  category: PatternCategory;
  context: MarketContext;
  reliability: 'High' | 'Medium' | 'Speculative';
  riskLevel: 'Conservative' | 'Moderate' | 'Aggressive';
  description: string;
  confirmation: string;
  strategy: string;
  conditions: string[];
  tips: string[];
}

export const CANDLESTICK_PATTERNS: CandlestickPattern[] = [
  {
    id: 'morning-star',
    name: 'Morning Star',
    category: 'Reversal',
    context: 'Bullish',
    reliability: 'High',
    riskLevel: 'Conservative',
    description:
      'Three-candle bullish reversal pattern signalling exhaustion of oversold pressure and emergence of demand.',
    confirmation:
      'Look for volume expansion on the third candle and a close above the midpoint of the first bearish candle.',
    strategy:
      'Enter on break above third candle high with stop below pattern low. Partial profits at 1.5R, trail remainder using 8 EMA.',
    conditions: [
      'Appears after a prolonged downtrend or corrective leg',
      'First candle is long-bodied bearish',
      'Second candle gaps down with a small real body',
      'Third candle closes well into the first candle body'
    ],
    tips: [
      'Higher reliability when RSI diverges positively',
      'Combine with anchored VWAP reclaim for institutional confirmation',
      'Avoid if third candle closes below 50% of the first candle body'
    ]
  },
  {
    id: 'evening-star',
    name: 'Evening Star',
    category: 'Reversal',
    context: 'Bearish',
    reliability: 'High',
    riskLevel: 'Moderate',
    description:
      'Mirror formation of the Morning Star that highlights buyer exhaustion and potential top distribution.',
    confirmation:
      'Volume should contract on the star candle and expand on the bearish confirmation candle closing below the midpoint of the first bar.',
    strategy:
      'Enter on break below the third candle low. Stop above the pattern high. Target liquidity pools or demand zones below.',
    conditions: [
      'Forms after extended uptrend or parabolic push',
      'First candle large bullish body closing near highs',
      'Second candle gaps up with indecision body',
      'Third candle closes deep into first candle range'
    ],
    tips: [
      'Look for negative delta or weakening order book on futures data',
      'Higher conviction when forming near weekly supply zones'
    ]
  },
  {
    id: 'engulfing-bullish',
    name: 'Bullish Engulfing',
    category: 'Reversal',
    context: 'Bullish',
    reliability: 'Medium',
    riskLevel: 'Moderate',
    description:
      'Two-candle reversal where aggressive buyers reclaim prior supply by engulfing previous bearish range.',
    confirmation:
      'Prefer a close above prior swing high and rising on-balance volume.',
    strategy:
      'Enter on break above engulfing candle with stop below the pattern low. Scale out into nearby liquidity and manage risk with ATR multiples.',
    conditions: [
      'Downtrend context, ideally into daily demand',
      'Second candle body fully engulfs the previous body',
      'Volume supports the reversal (delta turning positive)'
    ],
    tips: [
      'Combine with market structure shift (MSS) for higher odds',
      'Avoid if occurring inside consolidation without imbalance'
    ]
  },
  {
    id: 'engulfing-bearish',
    name: 'Bearish Engulfing',
    category: 'Reversal',
    context: 'Bearish',
    reliability: 'Medium',
    riskLevel: 'Moderate',
    description:
      'Two-candle bearish reversal showing dominant sellers absorbing demand and pushing price lower.',
    confirmation:
      'Break below pattern low with increasing volume and failure to reclaim VWAP.',
    strategy:
      'Enter short on breakdown below engulfing bar. Stop above the pattern high. Cover at structure lows or liquidity voids.',
    conditions: [
      'Appears after rallies into resistance or supply imbalance',
      'Second candle body overpowers the prior bullish body'
    ],
    tips: [
      'Use cumulative delta to confirm passive absorption',
      'Enhance edge by aligning with higher timeframe downtrend'
    ]
  },
  {
    id: 'doji',
    name: 'Doji',
    category: 'Indecision',
    context: 'Neutral',
    reliability: 'Speculative',
    riskLevel: 'Aggressive',
    description:
      'Single candle where open and close are near identical, signalling balance between supply and demand.',
    confirmation:
      'Requires follow through by subsequent candles to determine direction.',
    strategy:
      'Wait for break of doji range with volume confirmation. Place stops beyond the opposite wick or structure pivot.',
    conditions: ['Very small real body', 'Long upper and lower wicks', 'Forms near key levels or after sharp moves'],
    tips: [
      'Better used as context rather than standalone signal',
      'Combine with order flow or liquidity analysis before executing'
    ]
  },
  {
    id: 'three-white-soldiers',
    name: 'Three White Soldiers',
    category: 'Continuation',
    context: 'Bullish',
    reliability: 'High',
    riskLevel: 'Moderate',
    description:
      'Sequence of three strong bullish candles with minimal wicks, displaying institutional accumulation.',
    confirmation:
      'Higher timeframe closes above key resistance and uptick in cumulative volume.',
    strategy:
      'Enter on minor pullback toward third candle midpoint. Stop below first candle low. Trail using 9 EMA or structure swing.',
    conditions: [
      'Each candle opens within prior body and closes near highs',
      'Limited upper shadows indicating consistent demand',
      'Occurs after basing structure or breakout'
    ],
    tips: [
      'Avoid chasing after extended vertical runs; wait for pullbacks',
      'Monitor for distribution signs on intraday order flow'
    ]
  }
];
