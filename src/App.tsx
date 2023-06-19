import React, { type FC } from 'react'
import { ToGameView } from './components/common/toGameView'
import { GameScreen } from './components/gameScreen'
import { Routes, Route } from 'react-router-dom'
import { useTypedSelector } from './components/hooks/useTypedSelector'
import { numberDivideDigits } from './utils/HelpFunctions'

const App: FC = () => {
  const state = useTypedSelector(state => state.data)

  const cash = state.filter((item: any) => item.isCurrent)
  const lastQuestion = state.filter((question: any) => question.step === 12 && question.stepCompleted)

  const currency = cash.length === 0 ? lastQuestion[0].currency as string : cash[0].currency as string
  const cashPrize = cash.length === 0 ? numberDivideDigits(lastQuestion[0].cashPrize) : numberDivideDigits(cash[0].cashPrize)
  return (
      <div className={'app-wrapper'}>
        <Routes>
          <Route path="/" element={<ToGameView background={true} route={'/game'} title={'Who wants to be a millionaire?'} name={'Start'} label={''} />}/>
          <Route path="/game" element={<GameScreen />} />
          <Route path="/game-over" element={<ToGameView background={false} route={'/game'} title={`${currency}${cashPrize}`} name={'Try again'} label={'Total score:'} />}/>
        </Routes>
      </div>
  )
}

export default App
