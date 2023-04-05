import React from 'react';
import styles from './SearchDisplay.module.css';
import Image from 'next/image';
import { capitalizeString } from '@/helpers/misc';
import { useSelector } from 'react-redux';

export default function SearchDisplay() {
  // component displays a clicked cocktail recipe in full detail
  // probably as a prop
  const recipe = useSelector(state => state.updateDisplay);
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
