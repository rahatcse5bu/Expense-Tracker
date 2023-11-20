import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import ExpenseWrapper from './components/ExpenseWrapper'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ExpenseWrapper/>
  </React.StrictMode>,
)
