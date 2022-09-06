import React from "react"
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';



const Footer = () => {
    return ( 
        <footer>
            <p>Copyright {new Date().getFullYear()} Ameya Charnalia</p>
            <div className="socials">
                <a href="https://twitter.com/ameyayeg" target="_blank" rel="noopener noreferrer"><FaTwitter/></a>
                <a href="https://github.com/ameyayeg" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/ameyayeg/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a>
            </div>
        </footer>
     );
}
 
export default Footer;