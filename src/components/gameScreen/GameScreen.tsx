import React, { type FC } from 'react'
import { ScreenStepQuestion } from './ScreenStepQuestion'
import { ScreenStepEarned } from './ScreenStepEarned'
import { useTypedSelector } from '../hooks/useTypedSelector'

export const GameScreen: FC = () => {
  const state = useTypedSelector(state => state.data)

  return (
       <div className={'gameScreen'}>
           <ScreenStepQuestion dataEarned={state} />
           <ScreenStepEarned dataEarned={state} />
       </div>
  )
}
