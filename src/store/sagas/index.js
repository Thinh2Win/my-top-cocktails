import {spawn, all, call} from 'redux-saga/effects';
import watchGetRecipes from './getRecipeSaga'

export default function* rootSaga() {
  yield all([
    watchGetRecipes(),
  ])
}