import React, { type FC } from 'react'
import { type IQuestion } from '../../types'
import { numberDivideDigits } from '../../utils/HelpFunctions'

interface IProps {
  dataEarned: IQuestion[]
}

export const ScreenStepEarned: FC<IProps> = ({ dataEarned }) => {
  return (
        <div className={'earnedBlock hidden-menu'}>
            {dataEarned.map((earned) =>
                <div key={earned.step} className={`stepEarned${earned.isCurrent ? ' now' : ''}${earned.stepCompleted ? ' disabled' : ''}`}>
                    {earned.currency}{numberDivideDigits(earned.cashPrize)}
                </div>
            )}
        </div>
  )
}
