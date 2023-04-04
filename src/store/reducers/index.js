
import { combineReducers } from 'redux';
import ingredientsList from './ingredientsList';
import updateDisplay from './updateDisplay';

export default combineReducers({
  ingredientsList,
  updateDisplay
});