import React from "react"
import NavLinks from "./NavLinks";
import { FaHamburger, FaWindowClose } from "react-icons/fa";

const MobileNav = () => {

    const [open, setOpen] = React.useState(false)

    const hamburgerIcon = <FaHamburger className="hamburger" 
                            size="30px" color="#eee" onClick={() => setOpen(oldVal => !oldVal)}
                            />

    const closeIcon = <FaWindowClose className="hamburger" 
                            size="30px" color="#eee" onClick={() => setOpen(oldVal => !oldVal)}
                            />
    const closeMobileMenu = () => setOpen(false)
    
    return ( 
        <nav className="mobileNavigation">
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
        </nav>
      
     );
}
 
export default MobileNav;