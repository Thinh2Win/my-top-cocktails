import {GET_RECIPES,GET_RECIPES_FAILED,GET_RECIPES_SUCCESS} from '@/store/types';

const initialState = {
  recipes: [],
  isLoading: false,
  error: null,
}

export default function updateDisplay(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case GET_RECIPES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        recipes: action.payload
      };
    case GET_RECIPES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
}