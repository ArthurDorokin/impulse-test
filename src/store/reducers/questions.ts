import { type IQuestion, type IRightAnswers } from '../../types'

export const rightAnswers: IRightAnswers[] = [
  {
    step: 1,
    answer: 'White',
    stepCompleted: false,
    isCurrent: true
  },
  {
    step: 2,
    answer: '8',
    stepCompleted: false,
    isCurrent: false
  },
  {
    step: 3,
    answer: 'A murder',
    stepCompleted: false,
    isCurrent: false
  },
  {
    step: 4,
    answer: 'Canberra',
    stepCompleted: false,
    isCurrent: false
  },
  {
    step: 5,
    answer: 'Pacific',
    stepCompleted: false,
    isCurrent: false
  },
  {
    step: 6,
    answer: 'George R. R. Martin',
    stepCompleted: false,
    isCurrent: false
  },
  {
    step: 7,
    answer: '12',
    stepCompleted: false,
    isCurrent: false
  },
  {
    step: 8,
    answer: 'Mars',
    stepCompleted: false,
    isCurrent: false
  },
  {
    step: 9,
    answer: 'Au',
    stepCompleted: false,
    isCurrent: false
  },
  {
    step: 10,
    answer: 'Leonardo da Vinci',
    stepCompleted: false,
    isCurrent: false
  },
  {
    step: 11,
    answer: 'Nile',
    stepCompleted: false,
    isCurrent: false
  },
  {
    step: 12,
    answer: 'Neil Armstrong',
    stepCompleted: false,
    isCurrent: false
  }
]

const initialState: IQuestion[] =
  [
    {
      step: 12,
      question: 'Who was the first person to walk on the moon?',
      answers: ['Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'Michael Collins'],
      cashPrize: 1000000,
      currency: '$',
      stepCompleted: false,
      isCurrent: false
    },
    {
      step: 11,
      question: 'What is the name of the longest river in the world?',
      answers: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
      cashPrize: 500000,
      currency: '$',
      stepCompleted: false,
      isCurrent: false
    },
    {
      step: 10,
      question: 'Who painted the Mona Lisa?',
      answers: ['Vincent Van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
      cashPrize: 250000,
      currency: '$',
      stepCompleted: false,
      isCurrent: false
    },
    {
      step: 9,
      question: 'What is the chemical symbol for gold?',
      answers: ['Gd', 'Go', 'Au', 'Ag'],
      cashPrize: 125000,
      currency: '$',
      stepCompleted: false,
      isCurrent: false
    },
    {
      step: 8,
      question: 'Which planet is known as the "Red Planet"?',
      answers: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      cashPrize: 64000,
      currency: '$',
      stepCompleted: false,
      isCurrent: false
    },
    {
      step: 7,

      question: 'What is the square root of 144?',
      answers: ['12', '14', '16', '18'],
      cashPrize: 32000,
      currency: '$',
      stepCompleted: false,
      isCurrent: false
    },
    {
      step: 6,
      question: 'Who wrote the "Game of Thrones" series of books?',
      answers: ['J.K. Rowling', 'George R. R. Martin', 'Stephen King', 'Suzanne Collins'],
      cashPrize: 16000,
      currency: '$',
      stepCompleted: false,
      isCurrent: false
    },
    {
      step: 5,
      question: 'What is the world\'s largest ocean?',
      answers: ['Atlantic', 'Indian', 'Pacific', 'Arctic'],
      cashPrize: 8000,
      currency: '$',
      stepCompleted: false,
      isCurrent: false
    },
    {
      step: 4,
      question: 'What is the capital of Australia?',
      answers: ['Sydney', 'Melbourne', 'Brisbane', 'Canberra'],
      cashPrize: 4000,
      currency: '$',
      stepCompleted: false,
      isCurrent: false
    },
    {
      step: 3,
      question: 'What do you call a group of crows?',
      answers: ['A flock', 'A murder', 'A gaggle', 'A herd'],
      cashPrize: 2000,
      currency: '$',
      stepCompleted: false,
      isCurrent: false
    },
    {
      step: 2,
      question: 'How many legs does a spider typically have?',
      answers: ['100', '2', '8', '4'],
      cashPrize: 1000,
      currency: '$',
      stepCompleted: false,
      isCurrent: false
    },
    {
      step: 1,
      question: 'What is the color of the White House',
      answers: ['Pink', 'Blue', 'White', 'Rainbow'],
      cashPrize: 500,
      currency: '$',
      stepCompleted: false,
      isCurrent: true
    }
  ]

export const questions = (state = initialState, action: any): any => {
  switch (action.type) {
    case 'TOGGLE_CURRENT':
      return state.map((step) => step.step === action.payload.step ? { ...step, isCurrent: action.payload.isCurrent } : step)
    case 'CHECK_ANSWER':
      return state.map((step) => step.step === action.payload.step
        ? { ...step, isCurrent: false, stepCompleted: true }
        : step.step === +action.payload.step + 1 ? { ...step, isCurrent: true } : step)
    case 'RESET':
      return initialState
    default:
      return initialState
  }
}
