import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage.jsx'
import POS from './Pages/POS.jsx'
function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pos" element={<POS />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App