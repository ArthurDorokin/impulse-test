export interface IQuestion {
  step: number
  currency: string
  question: string
  answers: string[]
  cashPrize: number
  stepCompleted: boolean
  isCurrent: boolean
}

export interface IRightAnswers {
  step: number
  answer: string
  stepCompleted: boolean
  isCurrent: boolean
}
