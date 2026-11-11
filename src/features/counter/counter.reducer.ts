import type { Action, CounterState } from './counter.types.ts'

const initialState: CounterState = { count: 0, step: 1 }

export const counterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { ...state, count: state.count + state.step }
    }
    case 'DECREMENT': {
      return { ...state, count: state.count - state.step }
    }
    case 'SET_STEP': {
      return { ...state, step: action.payload }
    }
    case 'RESET': {
      return initialState
    }

    default: {
      return state
    }
  }
}