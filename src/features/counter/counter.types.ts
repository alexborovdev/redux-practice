export type CounterState = { count: number, step: number }
export type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'SET_STEP', payload: number }
  | { type: 'RESET' }