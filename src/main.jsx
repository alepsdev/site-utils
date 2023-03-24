import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './componentes/Header'
import Routes from './MainRoutes'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Header />
    <Router>
      <Routes />
    </Router>
  </React.StrictMode>,
)
