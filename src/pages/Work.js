import React from "react"
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/Footer";
import styles from '../styles/Work.module.css'
import Card from "../components/Card";
import projects from "../data"
import { FaArrowRight, FaArrowLeft, FaArrowUp, FaArrowDown} from 'react-icons/fa';


const Work = () => {
const [index, setIndex] = React.useState(1)
const [currentProject, setCurrentProject] = React.useState(projectSet)

function projectSet() {
  return projects.filter(project => project.id === index)
}

const cardEl = currentProject.map(project => <Card key={project.id} title={project.title} tech={project.tech} description={project.description} image={project.image} live={project.live} id={project.id}/>)

function handleLeft() {
  if(index > 1) {
    setIndex(oldIndex => oldIndex - 1)
  }
}

function handleRight() {
  if(index < projects.length) {
    setIndex(oldIndex => oldIndex + 1)
  }
}

React.useEffect(() => {
  setCurrentProject(projectSet)
}, [index])


    return ( 
        <div className="container">
            <Navbar/>
            <div className={styles.projectContainer}>
              <button className={`${styles.projectLeftArrow} ${styles.projectButton}`} onClick={handleLeft}>
                <FaArrowLeft size="2em"/>
              </button>
              <button className={`${styles.projectUpArrow} ${styles.projectButton}`} onClick={handleLeft}>
                <FaArrowUp size="2em"/>
              </button>
              {cardEl}
              <button className={`${styles.projectDownArrow} ${styles.projectButton}`} onClick={handleRight}>
                <FaArrowDown size="2em"/>
              </button>
              <button className={`${styles.projectRightArrow} ${styles.projectButton}`} onClick={handleRight}>
                <FaArrowRight size="2em"/>
              </button>
            </div>
            <Footer/>
        </div>
     );
}
 
export default Work;