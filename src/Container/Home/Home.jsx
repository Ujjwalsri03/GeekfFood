import React from 'react'
import styles from './Home.module.css'


function Home() {
  return (
    <div className={styles.container}>
        <div className={styles["home-div"]}>
            <h1 className={styles.heading}>Let us find your <span>Forever Food.</span></h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur elit. Aperiam ut adipisci eum nisi quae veritatis. Lorem ipsum dolor sit amet.</p>
            <div className={styles["Home-Buttons"]}>
                <button className={styles.search}>Search Now</button>
                <button className={styles.know}>Know More</button>
            </div>
        </div>
    </div>
    
  )
}

export default Home