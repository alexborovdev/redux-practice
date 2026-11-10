import { legacy_createStore as createStore } from 'redux'

export type CounterState = { count: number, step: number }
export type AppDispatch = typeof store.dispatch

export type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'SET_STEP', payload: number }
  | { type: 'RESET' }

const initialState: CounterState = { count: 0, step: 1 }

const counterReducer = (state = initialState, action: Action) => {
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

const store = createStore(counterReducer)

export default store