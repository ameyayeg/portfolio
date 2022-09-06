import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import styles from '../styles/About.module.css'
import Icon from "../Icon"

const About = () => {
    return ( 
        <div className="container">
            <Navbar/>
            <div className={styles.aboutHeader}>
                <div>
                    <h2>Who?</h2>
                    <p>Ameya [<b>uh</b>-may]</p>
                    <hr></hr>
                    <p>The name Ameya is primarily a gender-neutral name of Indian origin that means boundless.</p>
                </div>
                <div>
                    <h2>What?</h2>
                    <p>I enjoy building full-stack applications in Javascript. You'll usually find me coding in React and Node JS, but I tinker with Ruby on Rails and Mongo DB for backend-intense projects.</p>
                </div>
                <div>
                    <h2>Before?</h2>
                    <p>I used to be a breaking news reporter. I got my start at the Bonnyville Nouvelle, a community newspaper that served its namesake small-town in the Canadian prairies. I was part of the <span className={styles.aboutLink}><a href="https://edmontonjournal.com/author/acharnalia/" target="_blank" rel="noopener noreferrer">Edmonton Journal</a></span> team that won a National Newspaper Award in the breaking news category for our coverage of the devastating 2015 Fort McMurray wildfires. I finished my news career at the <span className={styles.aboutLink}><a href="https://www.thestar.com/authors.charnalia_ameya.html" target="_blank" rel="noopener noreferrer">Star</a></span>, where I covered energy, transport and municipal politics.</p>
                </div>
            </div>
            <Icon className={styles.aboutImage}/>
            <Footer/>
        </div>
     );
}
 
export default About;



