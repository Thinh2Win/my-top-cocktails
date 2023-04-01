import React from 'react';
import Image from 'next/image';
import styles from './CategoryCard.module.css';
import categoryData from './categoryData.js';

export default function CategoryCard() {
  const categories = categoryData;
  return (
      <div className= {styles.container}>
          {categories.map(category => (
            <div key={category.title} className={styles.card}>
              <h2 className={styles.title}>{category.title}</h2>
              <Image
                className={styles.image}
                src={category.img}
                alt='category image'
                width={200}
                height={200}
              />
              <p className={styles.description}>{category.description}</p>
            </div>
          ))}
        </div>
  )
}
