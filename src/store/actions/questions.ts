export type toggleCurrent =
    { type: 'TOGGLE_CURRENT', payload: { step: number, isCurrent: boolean } } |
    { type: 'CHECK_ANSWER', payload: { step: number, answer: string } } |
    { type: 'RESET', payload: { step: number, isCurrent: boolean } }
