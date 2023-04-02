import React from 'react';
import styles from './Table.module.css';

export default function Table() {
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
