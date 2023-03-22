import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './componentes/App'
import Header from './componentes/Header'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
)
