import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import App from './componentes/App'

import TextTools from './componentes/TextTools'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/textTools" element={<TextTools />}/>
    </Routes>
  )
}
