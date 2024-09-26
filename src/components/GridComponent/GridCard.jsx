import React from 'react'
import styles from './GridCard.module.css'
import Card from '../cardComponent/Card'

function GridCard() {
    return (
      <div className={styles.gridContainer}>
        <div className={styles.cardContainer}>
          <Card text={"lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis."}/>
        </div>
        <div className={styles.cardContainer}>
          <Card text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum."}/>
          <Card text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores."}/>
        </div>
        <div className={styles.cardContainer}>
          <Card text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!"}/>
          <Card text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt."}/>
          <Card text={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima. lorem uhepfu oihja9pfh uhp9asdhf uhpsudh oijodisf uuhofdh ohopdo hdf"}/>
        </div>
      </div>
    );
  }
  
  export default GridCard;
  