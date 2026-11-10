import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, CounterState } from './store/store.ts'
import { useState } from 'react'

const App = () => {
  const [currentStep, setCurrentStep] = useState('')

  const count = useSelector((state: CounterState) => state.count)
  const step = useSelector((state: CounterState) => state.step)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <>
      <h1>{count}</h1>
      <input
        type="number"
        value={currentStep}
        onChange={(event) => setCurrentStep(event.currentTarget.value)}
      />
      <button
        type="button"
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        Add {step}
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'DECREMENT' })}
      >
        Minus {step}
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: 'SET_STEP', payload: +currentStep })}
      >
        Set step: {currentStep}
      </button>
      <button type="button" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </>
  )
}

export default App