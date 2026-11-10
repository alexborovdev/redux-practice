import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, CounterState } from './store/store.ts'

const App = () => {
  const count = useSelector((state: CounterState) => state.count)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <>
      <h1>{count}</h1>
      <button type="button" onClick={() => dispatch({ type: 'INCREMENT' })}>Add 1</button>
      <button type="button" onClick={() => dispatch({ type: 'INCREMENT_BY', payload: 5 })}>Add 5</button>
      <button type="button" onClick={() => dispatch({ type: 'DECREMENT_BY', payload: 6 })}>Minus 6</button>
      <button type="button" onClick={() => dispatch({ type: 'DECREMENT' })}>Minus 1</button>
      <button type="button" onClick={() => dispatch({ type: 'RESET' })}>Set 0</button>
    </>
  )
}

export default App