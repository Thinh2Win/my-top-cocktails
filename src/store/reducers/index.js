
import { combineReducers } from 'redux';
import ingredientsList from './ingredientsList';
import updateRecipeList from './updateRecipeList';
import updateDisplay from './updateDisplay';

export default combineReducers({
  ingredientsList,
  updateRecipeList,
  updateDisplay
});