import { legacy_createStore as createStore } from 'redux'

export type CounterState = { count: number }
export type AppDispatch = typeof store.dispatch

export type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'INCREMENT_BY'; payload: number }
  | { type: 'DECREMENT_BY'; payload: number }

const initialState: CounterState = { count: 0 }

const counterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { ...state, count: state.count + 1 }
    }
    case 'INCREMENT_BY': {
      return { ...state, count: state.count + action.payload }
    }
    case 'DECREMENT': {
      return { ...state, count: state.count - 1 }
    }
    case 'DECREMENT_BY': {
      return { ...state, count: state.count - action.payload }
    }
    case 'RESET': {
      return { ...state, count: 0 }
    }

    default: {
      return state
    }
  }
}

const store = createStore(counterReducer)

export default store