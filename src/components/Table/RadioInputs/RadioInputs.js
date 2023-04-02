import React, {useState} from 'react';
import styles from './RadioInputs.module.css';

export default function RadioInputs() {
  const [search, setSearch] = useState('include');

  function handleChange(e) {
    setSearch(e.target.value)
  }

  function handleSearch(e) {
    e.preventDefault();
    // search or filter DB by ingredients list
    // then set display list of cocktails in store as the result
  }

  return (
    <form className={styles.radioContainer} onSubmit={handleSearch}>
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
