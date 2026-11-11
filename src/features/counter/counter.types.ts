import type {
  incrementAC,
  decrementAC,
  setStepAC,
  resetAC,
} from './counter.actions.ts'

export type CounterState = {
  count: number
  step: number
}

export type Action =
  | ReturnType<typeof incrementAC>
  | ReturnType<typeof decrementAC>
  | ReturnType<typeof setStepAC>
  | ReturnType<typeof resetAC>