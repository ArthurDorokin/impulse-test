import { combineReducers } from 'redux'
import { questions } from './questions'

export const rootReducer = combineReducers({
  data: questions
})

export type RootState = ReturnType<typeof rootReducer>
