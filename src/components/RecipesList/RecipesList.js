import React, {useState} from 'react';
import Image from 'next/image';
import styles from './RecipesList.module.css';
import { useSelector } from 'react-redux';

export default function RecipesList() {
  // const display = useSelector(state => state.updateDisplay);
  const recipes = [
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
    {
      name: 'amf',
      img: 'https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2t0YWlsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60',
    },
  ].map((recipe, idx) => ({...recipe, index: idx}));
  const [page, setPage] = useState(1);
  const pages = new Array(Math.ceil(recipes.length / 10)).fill(0);

  return (
    // need to set a state that has 10 recipes for display
    // need to have numbers to represent pages
    // pages will contain 10 recipes each

    <>
      <div className={styles.container}>
        {recipes.slice((0 + ((page - 1) * 10)), (10 + ((page - 1) * 10))).map((recipe, idx) => (
          <div key={idx} className={styles.card}>
            {recipe.index}
            <Image
                className={styles.image}
                src={recipe.img}
                alt="Picture of a cocktail"
                width={100}
                height={100}
            />
            <h3 className={styles.title}>{recipe.name}</h3>
          </div>
        ))}
      </div>
      <div className={styles.pageContainer}>
          {pages.map((page, idx) => (
            <span className={styles.page} key={idx} onClick={() => setPage(idx + 1)}>{idx + 1}</span>
          ))}
      </div>
    </>
  )
}
