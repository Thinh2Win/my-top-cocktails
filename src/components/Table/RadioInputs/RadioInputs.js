import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import styles from './RadioInputs.module.css';
import { GET_RECIPES } from '@/store/types';
import axios from 'axios';

export default function RadioInputs({ingredients}) {
  const [search, setSearch] = useState('include');
  const dispatch = useDispatch();

  function handleChange(e) {
    setSearch(e.target.value)
  }

  function handleSearch(e) {
    e.preventDefault();
    let params = ingredients.join(',');
    if (!params.length) return;
    dispatch({type: GET_RECIPES, payload: {ingredients, search}});
  }

  return (
    <form className={styles.container} onSubmit={handleSearch}>
        <label htmlFor='include' className={styles.radio}>
          <input
            style={{ marginRight: "5px" }}
            type='radio'
            id='include'
            value='include'
            checked={search === 'include'}
            onChange={handleChange}
          />
          Include
        </label>
        <label htmlFor='filter' className={styles.radio}>
          <input
            style={{ marginRight: "5px" }}
            type='radio'
            id='filter'
            value='filter'
            checked={search === 'filter'}
            onChange={handleChange}
          />
          Filter
        </label>
        <button type='submit' className={styles.button}>Search</button>
      </form>
  )
}
