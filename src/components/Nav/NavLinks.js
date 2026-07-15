import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion/dist/framer-motion'

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 }
  const animateTo = { opacity: 1, y: 0 }

  return (
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.1 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to="/">{props.language === 'fr' ? 'Accueil' : 'Home'}</Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to="/about">
          {props.language === 'fr' ? 'À propos' : 'About'}
        </Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.3 }}
        onClick={() => props.isMobile && props.closeMobileMenu()}
      >
        <Link to="/work">{props.language === 'fr' ? 'Travail' : 'Work'}</Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.4 }}
      >
        <button className="languageToggle" onClick={props.toggleLanguage}>
          {props.language === 'fr' ? 'EN' : 'FR'}
        </button>
      </motion.li>
    </ul>
  )
}

export default NavLinks
