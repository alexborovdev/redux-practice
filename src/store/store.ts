import { legacy_createStore as createStore } from 'redux'

type CounterState = { count: number }

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }

const initialState: CounterState = { count: 0 }

const counterReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'INCREMENT': {
      return { ...state, count: state.count + 1 }
    }
    case 'DECREMENT': {
      return { ...state, count: state.count - 1 }
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