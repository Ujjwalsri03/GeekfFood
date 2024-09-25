import React from 'react'
import styles from './imageSection.module.css'
import images from '../../assets/pexels-frans-van-heerden-201846-1438832.jpg'

function ImageSection() {
  return (
    <div className={styles.imageContainer}>
        <div className={styles.images}>
            <img src={images} alt="" />
        </div>
        <div className={styles.description}>
            <h2>Lorem ipum dolor,sit amet constetur adipicing. Delen derunt</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>

            <button className={styles.touchBtn}>Get in Touch</button>
        </div>
    </div>
  )
}

export default ImageSection