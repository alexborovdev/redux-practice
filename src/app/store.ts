import { legacy_createStore as createStore } from 'redux'
import { counterReducer } from '../features/counter/counter.reducer.ts'

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = createStore(counterReducer)

export default store