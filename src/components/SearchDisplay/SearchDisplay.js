import React from 'react';
import styles from './SearchDisplay.module.css';
import Image from 'next/image';
import { capitalizeString } from '@/helpers/misc';

const recipe = {
  name: 'amf',
  ingredients: '1 oz. (30ml) vodka,1 oz. (30ml) rum,1 oz. (30ml) gin,1 oz. (30ml) tequila,2 oz. (60ml) sweet & sour mix,1 oz. (30ml) lemon lime soda,1 oz. (30ml) blue curacao',
  preparation: 'add the vodka, rum, tequila, gin, blue curaçao and sweet-and-sour mix to a highball glass with ice and stir.top with Sprite or 7up.garnish with a lemon wedge and preserved cherry, if desired.',
  img: 'https://images.unsplash.com/photo-1596458598955-cea21e95a20b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  description: 'A variation of the long island iced tea with blue curacao substituting for the triple sec, and with lemon-lime soda substituting for the cola. Every person from bay area, CA will reminisce Wednesday nights at Dave & Busters.'
}

export default function SearchDisplay() {
  // component displays a clicked cocktail recipe in full detail
  // probably as a prop
  const {name, ingredients, preparation, img, description} = recipe;

  return (
    <div className={styles.recipeCard}>
      <Image
        className={styles.image}
        src={img}
        alt={name}
        width={400}
        height={400}
      />
      <h2 className={styles.name}>{capitalizeString(name)}</h2>
      <div className={styles.ingredients}>
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.split(',').map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className={styles.instructions}>
        <h3>Instructions:</h3>
        <ol>
          {preparation.split('.').map((step, index) => {
            if (!step.length) return null
            return <li key={index}>{step.charAt(0).toUpperCase() + step.slice(1)}</li>
          })}
        </ol>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
