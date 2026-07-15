import React from 'react'
import Navbar from '../components/Nav/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/About.module.css'
import Icon from '../Icon'

const About = ({ language, toggleLanguage }) => {
  const copy = {
    en: {
      heading: 'About',
      paragraph:
        'From covering breaking news on the Canadian Prairies to building web architecture for local businesses, my career has always been driven by a love for community stories. I recently graduated from St. Thomas University (2026) with a Bachelor of Education, specializing in Teaching Core French and French Immersion, and served as my graduating class’s valedictorian. I also run a side project, Eat the Strip, a food review site that highlights strip mall restaurants and hidden gems.',
      whoLabel: 'Who?',
      whoText:
        'Ameya [uh-may] — a Canadian educator and storyteller who builds learning experiences with the same attention to voice, detail and audience that made my journalism work strong.',
      whatLabel: 'What?',
      whatText:
        'I enjoy bringing curriculum to life through student-centered lessons, classroom storytelling, and discovery-based activities that build proficiency and confidence in French immersion.',
      beforeLabel: 'Before?',
      beforeText:
        'I began my career in breaking news reporting across the Prairie provinces. Along the way I also worked on Parliament Hill in Ottawa, with a brief stint in the civil service, made a macaron or two, and taught English in northern France.',
    },
    fr: {
      heading: 'À propos',
      paragraph:
        'De la couverture de l’actualité sur les Prairies canadiennes à la construction d’architectures web pour des entreprises locales, ma carrière a toujours été guidée par un amour des histoires de communauté. J’ai récemment obtenu mon baccalauréat en éducation à la St. Thomas University (2026), avec une spécialisation en enseignement du français de base et en immersion française, et j’ai été major de promotion. Je gère également Eat the Strip, un projet parallèle axé sur les restaurants de centres commerciaux.',
      whoLabel: 'Qui?',
      whoText:
        'Ameya [uh-may] — éducateur et conteur canadien qui construit des expériences d’apprentissage avec la même attention à la voix, au détail et au public que mon travail journalistique.',
      whatLabel: 'Quoi?',
      whatText:
        'J’aime donner vie au programme par des leçons centrées sur l’élève, des récits en classe et des activités par découverte qui renforcent la compétence et la confiance en immersion française.',
      beforeLabel: 'Avant?',
      beforeText:
        'J’ai commencé ma carrière dans le journalisme dans les Prairies. En chemin, j’ai travaillé sur la Colline du Parlement à Ottawa, fait un bref passage dans la fonction publique, préparé quelques macarons et enseigné l’anglais dans le nord de la France.',
    },
  }

  return (
    <div className="container">
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <div className={styles.aboutLayout}>
        <div className={styles.aboutCard}>
          <h2>{copy[language].heading}</h2>
          <p>{copy[language].paragraph}</p>

          <div className={styles.aboutSection}>
            <h3>{copy[language].whoLabel}</h3>
            <p>{copy[language].whoText}</p>
          </div>

          <div className={styles.aboutSection}>
            <h3>{copy[language].whatLabel}</h3>
            <p>{copy[language].whatText}</p>
          </div>

          <div className={styles.aboutSection}>
            <h3>{copy[language].beforeLabel}</h3>
            <p>{copy[language].beforeText}</p>
          </div>
        </div>

        <div className={styles.aboutImage}>
          <Icon />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
