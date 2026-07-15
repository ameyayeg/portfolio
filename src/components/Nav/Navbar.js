import React from 'react'
import MobileNav from './MobileNav'
import DesktopNav from './DestopNav'
import { Link } from 'react-router-dom'

const Navbar = ({ language, toggleLanguage }) => {
  return (
    <div className="Navbar">
      <h3 className="logo">
        <Link to="/">AC</Link>
      </h3>
      <MobileNav language={language} toggleLanguage={toggleLanguage} />
      <DesktopNav language={language} toggleLanguage={toggleLanguage} />
    </div>
  )
}

export default Navbar
