import { CANDLESTICK_PATTERNS, type CandlestickPattern, type MarketContext } from '@/data/patterns';

type TrendStrength = 'Strong Uptrend' | 'Strong Downtrend' | 'Sideways' | 'Choppy';

type VolatilityRegime = 'Low' | 'Medium' | 'High';

type VolumeState = 'Rising' | 'Falling' | 'Stable';

export interface SignalInput {
  instrument: string;
  timeframe: '5m' | '15m' | '1h' | '4h' | '1d';
  context: MarketContext;
  trend: TrendStrength;
  volatility: VolatilityRegime;
  volume: VolumeState;
  objective: 'Entry' | 'Add Position' | 'Manage Risk' | 'Take Profit';
}

export interface SignalOutput {
  pattern: CandlestickPattern;
  conviction: number;
  checklist: string[];
  playbook: string[];
  automationIdeas: string[];
}

const TREND_MATCH_BONUS: Record<TrendStrength, Partial<Record<CandlestickPattern['context'], number>>> = {
  'Strong Uptrend': {
    Bullish: 12,
    Neutral: 4
  },
  'Strong Downtrend': {
    Bearish: 12,
    Neutral: 4
  },
  Sideways: {
    Neutral: 8,
    Bullish: 4,
    Bearish: 4
  },
  Choppy: {
    Neutral: 6
  }
};

const VOLATILITY_MODIFIER: Record<VolatilityRegime, Record<CandlestickPattern['riskLevel'], number>> = {
  Low: {
    Conservative: 10,
    Moderate: 6,
    Aggressive: 2
  },
  Medium: {
    Conservative: 6,
    Moderate: 10,
    Aggressive: 6
  },
  High: {
    Conservative: 2,
    Moderate: 6,
    Aggressive: 12
  }
};

const OBJECTIVE_PLAYBOOK: Record<SignalInput['objective'], string[]> = {
  Entry: [
    'Define invalidation level and position size before entering.',
    'Assess higher timeframe structure for alignment.',
    'Confirm trigger using volume or order flow.'
  ],
  'Add Position': [
    'Ensure core position remains valid before pyramiding.',
    'Scale using reduced size to avoid compounding risk.',
    'Tighten stop loss progressively to lock in gains.'
  ],
  'Manage Risk': [
    'Re-evaluate stop placement relative to liquidity pools.',
    'Hedge using correlated instrument or options if available.',
    'Document new risk metrics in journal immediately.'
  ],
  'Take Profit': [
    'Mark nearby liquidity sweeps or imbalance fills as targets.',
    'Reduce size at 1R and trail remainder with structure pivots.',
    'Shift to break-even stop once partial profits are booked.'
  ]
};

export function generateSignals(input: SignalInput): SignalOutput[] {
  return CANDLESTICK_PATTERNS.map((pattern) => {
    let score = 40;

    if (pattern.context === input.context) {
      score += 15;
    }

    score += TREND_MATCH_BONUS[input.trend][pattern.context] ?? 0;
    score += VOLATILITY_MODIFIER[input.volatility][pattern.riskLevel];

    if (pattern.reliability === 'High') {
      score += 8;
    }

    if (pattern.reliability === 'Speculative' && input.objective !== 'Take Profit') {
      score -= 10;
    }

    const conviction = Math.min(100, Math.round(score));

    const checklist = [
      `Validate multi-timeframe alignment for ${pattern.name}.`,
      `Monitor volume behaviour: ${pattern.confirmation}`,
      `Document contextual notes for ${input.instrument} on the ${input.timeframe} chart.`
    ];

    const automationIdeas = [
      'Trigger alerts when volume and candle structure align with this pattern.',
      'Backtest frequency of this setup using historical data labelling.',
      'Benchmark risk-reward by exporting trades to your journal automatically.'
    ];

    return {
      pattern,
      conviction,
      checklist,
      playbook: OBJECTIVE_PLAYBOOK[input.objective],
      automationIdeas
    };
  })
    .sort((a, b) => b.conviction - a.conviction)
    .slice(0, 3);
}
