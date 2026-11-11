export const incrementAC = () => ({ type: 'INCREMENT' as const })
export const decrementAC = () => ({ type: 'DECREMENT' as const })
export const setStepAC = (payload: number) => ({ type: 'SET_STEP' as const, payload })
export const resetAC = () => ({ type: 'RESET' as const })