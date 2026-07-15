import React from 'react'
import Navbar from '../components/Nav/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Work.module.css'
import Card from '../components/Card'
import projects from '../data'

const Work = ({ language, toggleLanguage }) => {
  const [teacherOpen, setTeacherOpen] = React.useState(true)
  const [webOpen, setWebOpen] = React.useState(false)

  const teacherExperience = {
    en: [
      {
        title: 'Bliss Carman Middle School',
        date: 'March 2026 – May 2026',
        location: 'Fredericton, N.B.',
        role: 'Grade 6 French Immersion Student Teacher',
        bullets: [
          'Instructed Grade 6 French Immersion Language Arts (FILA), designing student-centred lessons to enhance oral proficiency and literacy skills.',
          'Supported diverse learner profiles by differentiating instruction and scaffolding language arts content to meet varying proficiency levels.',
          'Utilized positive, relational classroom management strategies to maintain an inclusive and focused learning environment.',
        ],
      },
      {
        title: 'George Street Middle School',
        date: 'Oct. 2025 – Dec. 2025',
        location: 'Fredericton, N.B.',
        role: 'Grade 6 French Immersion Student Teacher',
        bullets: [
          'Instructed Grade 6 Early Immersion French Language Arts (FILA) and Late Immersion Science, adapting instruction to meet diverse classroom behaviours and learning needs.',
          'Differentiated instruction and scaffolded complex science content to support students with varying levels of French language proficiency.',
          'Implemented proactive, relational classroom management strategies using clear expectations and positive reinforcement to foster student engagement.',
          'Designed formative assessments and engaged in continuous reflective practice to refine instructional design and assessment strategies.',
        ],
      },
      {
        title: 'Lycée Émile Zola',
        date: 'Oct. 2018 – May 2019',
        location: 'Wattrelos, France',
        role: 'English Language Assistant',
        bullets: [
          'Taught English to French high school students as part of the Teaching Assistance Program in France (TAPIF).',
          'Selected as one of approximately 100 Canadians nationwide to teach in public schools across France.',
        ],
      },
      {
        title: 'Centre éducatif Saint-Aubin',
        date: 'Sept. 2019 – Dec. 2019',
        location: 'Baie-Saint-Paul, Que.',
        role: 'English Language Assistant',
        bullets: [
          'Assisted high school English teachers with group activities, games and lesson planning.',
          'Worked with students with varying levels of language skills.',
          'Conducted conversation groups for exceptional students as an extracurricular activity.',
        ],
      },
    ],
    fr: [
      {
        title: 'École intermédiaire Bliss Carman',
        date: 'Mars 2026 – Mai 2026',
        location: 'Fredericton, N.-B.',
        role: 'Stagiaire enseignant en immersion française de 6e année',
        bullets: [
          'Enseigné la langue arts de l’immersion française (FILA) de 6e année, en concevant des leçons centrées sur l’élève pour renforcer la compétence orale et la littératie.',
          'Soutenu des profils d’élèves diversifiés en différenciant l’instruction et en structurant le contenu pour différents niveaux de compétence.',
          'Utilisé des stratégies de gestion de classe positives et relationnelles pour maintenir un environnement inclusif et concentré.',
        ],
      },
      {
        title: 'École intermédiaire George Street',
        date: 'Oct. 2025 – Déc. 2025',
        location: 'Fredericton, N.-B.',
        role: 'Stagiaire enseignant en immersion française de 6e année',
        bullets: [
          'Enseigné la langue arts français en immersion précoce (FILA) et les sciences en immersion tardive, en adaptant l’instruction aux comportements et aux besoins d’apprentissage variés.',
          'Différencié l’instruction et structuré le contenu scientifique complexe pour soutenir les élèves ayant différents niveaux de compétence en français.',
          'Mis en œuvre des stratégies de gestion de classe proactives et relationnelles à l’aide d’attentes claires et de renforcement positif pour favoriser l’engagement.',
          'Conçu des évaluations formatives et pratiqué une réflexion continue pour affiner l’enseignement et les stratégies d’évaluation.',
        ],
      },
      {
        title: 'Lycée Émile Zola',
        date: 'Oct. 2018 – Mai 2019',
        location: 'Wattrelos, France',
        role: 'Assistant d’anglais',
        bullets: [
          'Enseigné l’anglais à des lycéens français dans le cadre du programme TAPIF.',
          'Sélectionné parmi environ 100 Canadiens au niveau national pour enseigner dans les écoles publiques françaises.',
        ],
      },
      {
        title: 'Centre éducatif Saint-Aubin',
        date: 'Sept. 2019 – Déc. 2019',
        location: 'Baie-Saint-Paul, Que.',
        role: 'Assistant d’anglais',
        bullets: [
          'Assisté des enseignants d’anglais du secondaire avec des activités de groupe, des jeux et la planification des leçons.',
          'Travailé avec des élèves ayant des niveaux de compétence linguistique variés.',
          'Animé des groupes de conversation pour des élèves exceptionnels en activité parascolaire.',
        ],
      },
    ],
  }

  const resume = {
    en: {
      educationTitle: 'Education & Training',
      educationItems: [],
      educationDetailed: [
        'St. Thomas University — Bachelor of Education (2026), Specialization: Teaching Core French & French Immersion — Valedictorian',
        "University of King's College — Bachelor of Journalism",
        'University of Toronto — Bachelor of Arts, International Relations & History',
      ],
      awards: [
        'National Newspaper Award (part of Edmonton Journal team coverage)',
        'Valedictorian — St. Thomas University (2026)',
      ],
      experienceTitle: 'Teaching & Storytelling Experience',
      experienceItems: [
        'French immersion classroom instruction in history and mathematics',
        'Integrated real-world journalism stories into classroom activities',
      ],
      skillsTitle: 'Core strengths',
      skills: [
        'Curriculum development',
        'Lesson design',
        'Differentiated instruction',
        'French immersion pedagogy',
        'Classroom management',
        'Formative assessment',
        'Instructional design',
        'Student engagement',
        'Front-end development (React, Next.js)',
        'Content strategy & storytelling',
      ],
    },
    fr: {
      educationTitle: 'Formation et perfectionnement',
      educationItems: [],
      educationDetailed: [
        'St. Thomas University — Baccalauréat en éducation (2026), Spécialisation : enseignement du français de base et immersion française — Major de promotion',
        "University of King's College — Baccalauréat en journalisme",
        'University of Toronto — Baccalauréat en arts, Relations internationales et Histoire',
      ],
      awards: [
        "Prix national de journalisme (National Newspaper Award) — couverture avec l'Edmonton Journal",
        'Major de promotion — St. Thomas University (2026)',
      ],
      experienceTitle: 'Expérience en enseignement et narration',
      experienceItems: [
        'Enseignement en immersion française de l’histoire et des mathématiques',
        'Intégration de récits journalistiques réels dans des activités de classe',
      ],
      skillsTitle: 'Compétences clés',
      skills: [
        'Développement de programmes',
        'Conception de leçons',
        'Différenciation pédagogique',
        'Pédagogie en immersion française',
        'Gestion de classe',
        'Évaluation formative',
        'Conception pédagogique',
        'Engagement des élèves',
        'Développement front-end (React, Next.js)',
        'Stratégie de contenu et narration',
      ],
    },
  }

  const copy = {
    en: {
      webTitle: 'WEB WORK',
      teacherTitle: 'TEACHING AND LANGUAGE EXPERIENCE',
      webIntro: 'Selected web projects I have built or contributed to.',
      skillsTitle: 'Core strengths',
    },
    fr: {
      webTitle: 'TRAVAUX WEB',
      teacherTitle: 'ENSEIGNEMENT ET EXPÉRIENCE LINGUISTIQUE',
      webIntro:
        'Projets web sélectionnés que j’ai construits ou auxquels j’ai contribué.',
      skillsTitle: 'Compétences clés',
    },
  }

  return (
    <div className="container">
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <div className={styles.workPage}>
        <div className={styles.dropdownSection}>
          <button
            className={styles.dropdownButton}
            onClick={() => setTeacherOpen((value) => !value)}
          >
            <span>{copy[language].teacherTitle}</span>
            <span>{teacherOpen ? '−' : '+'}</span>
          </button>
          {teacherOpen && (
            <div className={styles.dropdownContent}>
              <div className={styles.experienceSection}>
                {teacherExperience[language].map((entry) => (
                  <div
                    className={styles.experienceEntry}
                    key={entry.title + entry.date}
                  >
                    <div className={styles.entryHeading}>
                      <div>
                        <strong>{entry.title}</strong>
                        <p className={styles.entryRole}>{entry.role}</p>
                      </div>
                      <div className={styles.entryMeta}>
                        <span>{entry.date}</span>
                        <span>{entry.location}</span>
                      </div>
                    </div>
                    <ul className={styles.entryList}>
                      {entry.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className={styles.educationAwards}>
                <div className={styles.educationBlock}>
                  <h4>{resume[language].educationTitle}</h4>
                  <ul>
                    {resume[language].educationDetailed.map((ed) => (
                      <li key={ed}>{ed}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.awardsBlock}>
                  <h4>{language === 'fr' ? 'Récompenses' : 'Awards'}</h4>
                  <ul>
                    {resume[language].awards.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={styles.resumeColumns}>
                <div>
                  <h4>{resume[language].skillsTitle}</h4>
                  <div className={styles.skillTags}>
                    {resume[language].skills.map((skill) => (
                      <span key={skill} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className={styles.dropdownSection}>
          <button
            className={styles.dropdownButton}
            onClick={() => setWebOpen((value) => !value)}
          >
            <span>{copy[language].webTitle}</span>
            <span>{webOpen ? '−' : '+'}</span>
          </button>
          {webOpen && (
            <div className={styles.dropdownContent}>
              <p>{copy[language].webIntro}</p>
              <div className={styles.cardGrid}>
                {projects.map((project) => (
                  <Card
                    key={project.id}
                    title={project.title[language]}
                    tech={project.tech}
                    description={project.description[language]}
                    image={project.image}
                    live={project.live}
                    id={project.id}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Work
