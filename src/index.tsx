import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import store, { persistor } from './store'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PersistGate>
    </Provider>
)
