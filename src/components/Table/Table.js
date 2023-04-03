import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Table.module.css';
import { ADD_INGREDIENT, REMOVE_INGREDIENT } from '@/store/types';
import RadioInputs from './RadioInputs/RadioInputs';

export default function Table() {
  const [ingredient, setIngredient] = useState('');
  const ingredients = useSelector(state => state.ingredientsList);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({type: ADD_INGREDIENT, payload: ingredient.toLowerCase()});
    setIngredient('');
  }

  function handleDelete(ingredient) {
    dispatch({type: REMOVE_INGREDIENT, payload: ingredient.toLowerCase()});
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor='ingredient'>ingredients:</label>
        <input
          type='text'
          id='ingredient'
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
      <ul className={styles.list}>
        {ingredients.map(item => <li className={styles.item} onClick={() => handleDelete(item)} key={item}>{item}</li>)}
      </ul>
      <RadioInputs ingredients={ingredients}/>
    </div>
  )
}
