import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {GET_RECIPES_FAILED, GET_RECIPES_SUCCESS, GET_RECIPES} from '@/store/types';
import axios from 'axios';

function* getRecipes(action) {
  const {type, payload} = action;

  try {
    let response;
    if (payload.search === 'include') {
      response = yield call(fetch, `/api/search/include?ingredients=${payload.ingredients}`);
    }
    if (payload.search === 'filter') {
      response = yield call(fetch, `/api/search/filter?ingredients=${payload.ingredients}`);
    }
    const recipes = yield response.json();
    yield put({type: GET_RECIPES_SUCCESS, payload: recipes});
  } catch (e) {
    yield put({type: GET_RECIPES_FAILED, payload: e.message});
  }
}

export default function* watchGetRecipes() {
  yield takeEvery(GET_RECIPES, getRecipes);
}