import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import styles from './RadioInputs.module.css';
import { UPDATE_DISPLAY } from '@/store/types';

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
    dispatch({type: UPDATE_DISPLAY, payload: ingredients});
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
          include
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
          filter
        </label>
        <button type='submit' className={styles.button}>Search</button>
      </form>
  )
}
