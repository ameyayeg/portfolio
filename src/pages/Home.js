import React from 'react'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Nav/Navbar'
import Footer from '../components/Footer'
import TextTransition, { presets } from 'react-text-transition'

const Home = ({ language, toggleLanguage }) => {
  const [index, setIndex] = React.useState(0)
  const profileImage = 'images/profile.jpg'

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((currentIndex) => currentIndex + 1),
      6000,
    )
    return () => clearInterval(intervalId)
  }, [])

  const copy = {
    en: {
      greeting: "Hi there, I'm an Ottawa-based",
    },
    fr: {
      greeting: 'Bonjour, je suis basé à Ottawa et je suis',
    },
  }

  const texts =
    language === 'fr'
      ? ['enseignant', 'chroniqueur gastronomique']
      : ['teacher', 'food journalist']

  return (
    <div className="container">
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <div className={styles.homeContent}>
        <img
          src={profileImage}
          alt="Ameya Charnalia"
          className={styles.homeImage}
        />
        <div className={styles.homeText}>
          <h2 className={styles.homeHeader}>
            {copy[language].greeting}&nbsp;
            <TextTransition
              style={{ color: '#1589FF' }}
              springConfig={presets.slow}
              inline={false}
            >
              {texts[index % texts.length]}
            </TextTransition>
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
