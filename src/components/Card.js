import React from "react"
import styles from '../styles/Card.module.css'


const Card = ({title, tech, description, image, live, id}) => {

    const techStackElements = tech.map(language => <h4 key={language} style={{display: 'inline-flex', backgroundColor: 'white', color: 'black', flexWrap: 'wrap', marginRight: '2px', marginTop: '2px', padding: '0.2em', fontSize: 'var(--font-size-sm'}}>{language}</h4>)


    return ( 
        <div className={styles.cardContainer}>
          <a href={live} target="_blank" rel="noopener noreferrer"><img src={image} className={styles.cardImage} alt="Project header"  /></a>
          <div className={styles.cardDetails}>
              <h3 className={styles.cardTitle}>{title}</h3>
              {techStackElements}
              <p className={styles.cardDescription}>{description}</p>
          </div>
        </div>
     );
}
 
export default Card;

