import React from 'react'
import NavLinks from './NavLinks'

const DesktopNav = ({ language, toggleLanguage }) => {
  return (
    <nav className="desktopNavigation">
      <NavLinks language={language} toggleLanguage={toggleLanguage} />
    </nav>
  )
}

export default DesktopNav
