import React from 'react'
import './styles/App.css'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [language, setLanguage] = React.useState('en')

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === 'en' ? 'fr' : 'en'))
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home language={language} toggleLanguage={toggleLanguage} />}
        />
        <Route
          path="/about"
          element={
            <About language={language} toggleLanguage={toggleLanguage} />
          }
        />
        <Route
          path="/work"
          element={<Work language={language} toggleLanguage={toggleLanguage} />}
        />
      </Routes>
    </div>
  )
}

export default App
