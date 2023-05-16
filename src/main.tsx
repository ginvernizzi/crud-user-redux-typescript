import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './usersStore'
import { Provider } from 'react-redux'
import { ErrorProvider } from './context/ErrorContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorProvider>
  </React.StrictMode>,
)
