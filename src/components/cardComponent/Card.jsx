import React from 'react'
import pic from '../../assets/seo.png'
import styles from './card.module.css'

function Card({text}) {
  return (
    <div className={styles['card']}>
        <p className={styles.text}>{text}</p>
        <div className={styles['card-logo']}>
            <img src={pic} alt="" />
            <div>
                <h3 className={styles.seoname}>Gladis Lennon</h3>
                <p className={styles.seo}>Head of SEO</p>
            </div>
        </div>
    </div>
  )
}

export default Card