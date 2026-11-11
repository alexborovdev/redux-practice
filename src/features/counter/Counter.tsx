import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementAC, decrementAC, setStepAC, resetAC } from './counter.actions.ts'
import type { AppDispatch, RootState } from '../../app/store.ts'

const Counter = () => {
  const [currentStep, setCurrentStep] = useState('')

  const count = useSelector((state: RootState) => state.count)
  const step = useSelector((state: RootState) => state.step)

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
        onClick={() => dispatch(incrementAC())}
      >
        Add {step}
      </button>
      <button
        type="button"
        onClick={() => dispatch(decrementAC())}
      >
        Minus {step}
      </button>
      <button
        type="button"
        onClick={() => dispatch(setStepAC(+currentStep))}
      >
        Set step: {currentStep}
      </button>
      <button type="button" onClick={() => dispatch(resetAC())}>Reset</button>
    </>
  )
}

export default Counter