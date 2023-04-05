import React, {useState} from 'react';
import Image from 'next/image';
import { capitalizeString } from '@/helpers/misc';
import { useSelector, useDispatch } from 'react-redux';
import { UPDATE_DISPLAY } from '@/store/types';
import styles from './RecipesList.module.css';

export default function RecipesList() {
  const dispatch = useDispatch();
  const { recipes, loading, error } = useSelector(state => state.updateRecipeList);
  const [page, setPage] = useState(1);
  const pages = new Array(Math.ceil(recipes.length / 10)).fill(0);

  return (
    <>
      <div className={styles.container}>
        {recipes.slice((0 + ((page - 1) * 10)), (10 + ((page - 1) * 10))).map((recipe, idx) => (
          <div key={idx} onClick={() => dispatch({type: UPDATE_DISPLAY, payload: recipe})} className={styles.card}>
            <Image
                className={styles.image}
                src={recipe.img}
                alt="Picture of a cocktail"
                width={100}
                height={100}
            />
            <h2 className={styles.title}>{capitalizeString(recipe.name)}</h2>
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
