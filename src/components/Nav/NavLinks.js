import React from "react"
import { Link } from "react-router-dom"
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion"

const NavLinks = (props) => {

    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: -0}

    return ( 
        <ul>
            <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.10}} onClick={() => props.isMobile && props.closeMobileMenu()}><Link to="/">Home</Link></motion.li>
            <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.20}} onClick={() => props.isMobile && props.closeMobileMenu()}><Link to="/about">About</Link></motion.li>
            <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.30}} onClick={() => props.isMobile && props.closeMobileMenu()}><Link to="/work">Work</Link></motion.li>
        </ul>
     );
}
 
export default NavLinks;