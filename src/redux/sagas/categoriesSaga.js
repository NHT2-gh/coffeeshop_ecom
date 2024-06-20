import axios from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_ALL_CATEGORIES_REQUEST } from '../actions/types';

import { getAllCategoriesSuccess, getAllCategoriesFailure } from '../actions/actions';

function* getAllCategoriesSaga() {
  try {
    const token = localStorage.getItem('token');

    const response = yield call(axios.get, 'http://18.139.114.240:5000/api/admin/category/all', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    yield put(getAllCategoriesSuccess(response.data));
  } catch (error) {
    yield put(getAllCategoriesFailure(error));
  }
}

export default function* categoriesSaga() {
  yield takeLatest(GET_ALL_CATEGORIES_REQUEST, getAllCategoriesSaga);
}
