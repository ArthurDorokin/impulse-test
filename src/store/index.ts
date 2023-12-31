import { createStore } from 'redux'
import { rootReducer } from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'persist-store',
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer)
export const persistor = persistStore(store)
export default store
