import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Navbar } from '../components/Navbar'
import { About } from '../pages/About'
import { Home } from '../pages/Home'
import GlobalStyles from '../styles/GlobalStyles'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
