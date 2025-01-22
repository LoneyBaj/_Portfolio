import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage.jsx'
import POS from './Pages/POS.jsx'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pos" element={<POS />} />
      </Routes>
    </div>
  )
}

export default App