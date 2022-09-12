import React from "react"
import MobileNav from "./MobileNav";
import DesktopNav from "./DestopNav";
import { Link } from "react-router-dom"


const Navbar = () => {
    return ( 
        <div className="Navbar">
            <h3 className="logo"><Link to="/">AC</Link></h3>
            <MobileNav/>
            <DesktopNav/>
        </div>
     );
}

export default Navbar;

