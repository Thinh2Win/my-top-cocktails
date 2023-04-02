import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Table.module.css';

export default function Table() {
  const ingredients = useSelector(state => state.ingredientsList);
  // button and input to add to list
  // list should be managed by state within store
  /*
eventually users will be able to click on a recipe
and see missing ingredients. should have a button that
adds missing ingredients into a cart
  */
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>gin</li>
        <li className={styles.item}>lime</li>
        <li className={styles.item}>salt</li>
        <li className={styles.item}>salt</li>
        <li className={styles.item}>salt</li>
      </ul>
    </div>
  )
}
