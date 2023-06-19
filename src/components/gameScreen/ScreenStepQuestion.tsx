import React, { type FC, type MouseEvent, useCallback, useEffect, useState } from 'react'
import { type IQuestion } from '../../types'
import { actionMutation } from '../../utils/HelpFunctions'
import { useDispatch } from 'react-redux'
import { rightAnswers } from '../../store/reducers/questions'
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { ReactComponent as MenuIcon } from '../../assets/img/menu.svg'
import { ReactComponent as CloseIcon } from '../../assets/img/close.svg'
interface IProps {
  dataEarned: IQuestion[]
}

export const ScreenStepQuestion: FC<IProps> = ({ dataEarned }) => {
  const navigate = useNavigate()
  const state = useTypedSelector(state => state.data)
  const [answerSelect, setAnswerSelect] = useState<string>('')
  const [incorrect, setIncorrect] = useState<string>('')
  const [correct, setCorrect] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(false)
  const [checked, setChecked] = React.useState(true)

  const dispatch = useDispatch()

  const handleCheckClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const { answer, step } = event.currentTarget.dataset
    const checkValidAnswer = !(step == null) && rightAnswers.filter((answer) => answer.step === +step)[0].answer === answer
    setDisabled(true)
    !(answer == null) && setAnswerSelect(answer)

    setTimeout(() => {
      if (checkValidAnswer) {
        setCorrect(answer)
        setTimeout(() => {
          !(answer == null) && !(step == null) && dispatch({ type: 'CHECK_ANSWER', payload: { step: +step, answer } })
          setDisabled(false)
        }, 1000)
      } else {
        !(answer == null) && setIncorrect(answer)

        if (!(incorrect == null)) {
          setTimeout(() => {
            navigate('/game-over')
          }, 2000)
        }
      }
    }, 2000)
  }, [])

  const check = (): void => {
    setChecked((checked) => !checked)
  }

  useEffect(() => {
    const checkLastQuestion = state.filter((question: IQuestion) => question.step === 12)

    if (checkLastQuestion[0].stepCompleted === true) {
      navigate('/game-over')
    }
  }, [state])

  return (
        <>
          <label className="btn-menu" htmlFor="hmt">
            {checked
              ? <span className={'menu'}><MenuIcon /></span>
              : <span className={'close'}><CloseIcon /></span>
            }
          </label>
          <input type="checkbox" id="hmt" className="hidden-menu-ticker" onChange={check} />
            {dataEarned.filter((questions) => questions.isCurrent).map((question) =>
                <div className={'questionBlock'} key={question.step}>
                <h2>{question.question}</h2>
                    <div className={'wrapVariantAnswer'}>
                        {question.answers.map((answer, index) =>
                            <div key={index} onClick={handleCheckClick} data-answer={answer} data-step={question.step} className={`variantAnswer${answerSelect === answer ? ' selected' : ''}${incorrect === answer ? ' wrong' : ''}${correct === answer ? ' correct' : ''}${disabled ? ' disabled' : ''}`}>
                              <span>{actionMutation(index)}</span>
                              {answer}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
  )
}
