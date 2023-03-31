import React from 'react';
import Image from 'next/image';
import styles from './CategoryCard.module.css';
import Navbar from '@/components/Navbar/Navbar'

export default function CategoryCard() {
  const categories = [
    {
      title: 'Top 5 Craft Cocktails',
      img: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80',
      description: 'Our top 5 most liked cocktails'
    },
    {
      title: 'Crowd Favorites',
      img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      description: 'Best cocktails to please the masses'
    },
    {
      title: 'Easy to Drink',
      img: 'https://images.unsplash.com/photo-1571950006418-f226dc106482?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      description: 'Wow! Is there even alcohol in here? Drink 5 more and find out'
    },
    {
      title: 'Make Me Regret',
      img: 'https://images.unsplash.com/photo-1611864072773-9abb9573b8ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      description: 'Cocktails you\'d give to your friend who says they\'re a tank'
    }
  ]
  return (
    <>
      <Navbar />
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
    </>

  )
}
