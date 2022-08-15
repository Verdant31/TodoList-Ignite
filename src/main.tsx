import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TasksContextProvider } from './contexts/TasksContext'
import './global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TasksContextProvider>
      <App />
    </TasksContextProvider>
  </React.StrictMode>
)
