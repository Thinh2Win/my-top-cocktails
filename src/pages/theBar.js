import React from 'react';
import styles from '@/styles/theBar.module.css'
import Navbar from '@/components/Navbar/Navbar';
import SearchDisplay from '@/components/SearchDisplay/SearchDisplay';
import Table from '@/components/Table/Table';
import RecipesList from '@/components/RecipesList/RecipesList'

export default function search() {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.container}>
        <Table />
        <SearchDisplay />
        <RecipesList />
      </div>
    </div>
  )
}
