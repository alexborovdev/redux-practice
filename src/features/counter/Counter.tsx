import { type ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementAC, decrementAC, setStepAC, resetAC } from './counter.actions.ts'
import type { AppDispatch, RootState } from '../../app/store.ts'

const Counter = () => {
  const [currentStep, setCurrentStep] = useState('')

  const count = useSelector((state: RootState) => state.count)
  const step = useSelector((state: RootState) => state.step)

  const dispatch = useDispatch<AppDispatch>()

  const isValidStep =
    currentStep.trim() !== '' &&
    Number.isSafeInteger(+currentStep) &&
    +currentStep > 0

  const onCurrentStepInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentStep(event.currentTarget.value)
  }
  const onAddButtonClick = () => {
    dispatch(incrementAC())
  }
  const onMinusButtonClick = () => {
    dispatch(decrementAC())
  }
  const onSetStepButtonClick = () => {
    dispatch(setStepAC(+currentStep))
    setCurrentStep('')
  }
  const onResetButtonClick = () => {
    dispatch(resetAC())
    setCurrentStep('')
  }

  return (
    <>
      <h1>{count}</h1>
      <input
        type="number"
        placeholder="Enter step"
        value={currentStep}
        onChange={onCurrentStepInputChange}
      />
      <button
        type="button"
        onClick={onAddButtonClick}
      >
        Add {step}
      </button>
      <button
        type="button"
        onClick={onMinusButtonClick}
      >
        Minus {step}
      </button>
      <button
        type="button"
        disabled={!isValidStep}
        onClick={onSetStepButtonClick}
      >
        Set step: {currentStep}
      </button>
      <button
        type="button"
        onClick={onResetButtonClick}
      >
        Reset
      </button>
    </>
  )
}

export default Counter