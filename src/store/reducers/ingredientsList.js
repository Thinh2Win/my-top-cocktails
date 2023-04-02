import {ADD_INGREDIENT, REMOVE_INGREDIENT} from '../types';

export default function ingredientsList(initialState = new Set(), action) {
  switch (action.type) {
    case ADD_INGREDIENT:
      return new Set([...initialState, action.payload]);
    case REMOVE_INGREDIENT:
      let copy = new Set([...initialState]);
      copy.delete(action.payload);
      return copy;
    default:
      return initialState;
  }
}