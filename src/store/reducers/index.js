
import { combineReducers } from 'redux';
import ingredientsList from './ingredientsList';
import updateRecipeList from './updateRecipeList';

export default combineReducers({
  ingredientsList,
  updateRecipeList
});