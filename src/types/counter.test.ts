import { describe, expect, it } from 'vitest';
import {
  type CounterAction,
  type CounterConfig,
  type CounterHistoryEntry,
  type CounterState,
  DEFAULT_COUNTER_CONFIG,
  STORAGE_KEY,
} from './counter';

describe('Counter types and constants', () => {
  it('DEFAULT_COUNTER_CONFIG has correct default values', () => {
    expect(DEFAULT_COUNTER_CONFIG.step).toBe(1);
    expect(DEFAULT_COUNTER_CONFIG.min).toBe(-9999);
    expect(DEFAULT_COUNTER_CONFIG.max).toBe(9999);
  });

  it('STORAGE_KEY is defined', () => {
    expect(STORAGE_KEY).toBe('pipeline-sayac-deger');
  });

  it('CounterState can be constructed', () => {
    const state: CounterState = { value: 42, isActive: true };
    expect(state.value).toBe(42);
    expect(state.isActive).toBe(true);
  });

  it('CounterConfig can be constructed', () => {
    const config: CounterConfig = { step: 5, min: 0, max: 100 };
    expect(config.step).toBe(5);
    expect(config.min).toBe(0);
    expect(config.max).toBe(100);
  });

  it('CounterAction increment type is valid', () => {
    const action: CounterAction = { type: 'increment' };
    expect(action.type).toBe('increment');
  });

  it('CounterAction decrement type is valid', () => {
    const action: CounterAction = { type: 'decrement' };
    expect(action.type).toBe('decrement');
  });

  it('CounterAction reset type is valid', () => {
    const action: CounterAction = { type: 'reset' };
    expect(action.type).toBe('reset');
  });

  it('CounterAction set type accepts a value', () => {
    const action: CounterAction = { type: 'set', value: 7 };
    expect(action.type).toBe('set');
    if (action.type === 'set') {
      expect(action.value).toBe(7);
    }
  });

  it('CounterHistoryEntry can be constructed', () => {
    const entry: CounterHistoryEntry = {
      previousValue: 0,
      newValue: 1,
      action: 'increment',
      timestamp: new Date().toISOString(),
    };
    expect(entry.previousValue).toBe(0);
    expect(entry.newValue).toBe(1);
    expect(entry.action).toBe('increment');
    expect(typeof entry.timestamp).toBe('string');
  });
});
