import {ADD_INGREDIENT, REMOVE_INGREDIENT} from '@/store/types';

export default function ingredientsList(initialState = [], action) {
  let copy;
  switch (action.type) {
    case ADD_INGREDIENT:
      copy = new Set([...initialState, action.payload]);
      return [...copy];
    case REMOVE_INGREDIENT:
      copy = new Set([...initialState]);
      copy.delete(action.payload);
      return [...copy];
    default:
      return initialState;
  }
}