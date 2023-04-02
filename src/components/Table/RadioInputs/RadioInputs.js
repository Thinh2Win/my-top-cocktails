import React, {useState} from 'react';
import styles from './RadioInputs.module.css';

export default function RadioInputs() {
  const [search, setSearch] = useState('include');

  function handleChange(e) {
    setSearch(e.target.value)
  }

  return (
    <form className={styles.radioContainer}>
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
