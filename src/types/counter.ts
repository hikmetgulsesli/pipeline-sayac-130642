export interface CounterState {
  value: number;
  isActive: boolean;
}

export interface CounterConfig {
  step: number;
  min: number;
  max: number;
}

export type CounterAction =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'set'; value: number };

export interface CounterHistoryEntry {
  previousValue: number;
  newValue: number;
  action: CounterAction['type'];
  timestamp: string;
}

export const DEFAULT_COUNTER_CONFIG: CounterConfig = {
  step: 1,
  min: -9999,
  max: 9999,
};

export const STORAGE_KEY = 'pipeline-sayac-deger';
