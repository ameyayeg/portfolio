import React from 'react'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Nav/Navbar'
import Footer from '../components/Footer'
import TextTransition, { presets } from 'react-text-transition'
import { Link } from 'react-router-dom'

const TEXTS = ['web developer', 'food journalist']

const Home = () => {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      6000 // every 3 seconds
    )
    return () => clearTimeout(intervalId)
  }, [])

  return (
    <div className="container">
      <Navbar />
      <img
        src="images/profile.jpg"
        alt="Author smiling"
        className={styles.homeImage}
      />
      <h2 className={styles.homeHeader}>
        Hi there, I'm an Ottawa-based&nbsp;
        <TextTransition
          style={{ color: '#1589FF' }}
          springConfig={presets.slow}
          inline={false}
        >
          {TEXTS[index % TEXTS.length]}
        </TextTransition>
      </h2>
      <Footer />
    </div>
  )
}

export default Home
