import { fork, takeEvery, take, put, call, select, cancel } from 'redux-saga/effects';
import { registration, login, setTokenApi, clearTokenApi } from '../api';
import {
  registrationRequest,
  registrationSuccess,
  registrationFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout,
  getIsAuthorized
} from '../ducks/auth';
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
  removeTokenFromLocalStorage
} from '../localStorage';

function* registrationFlow(action) {
  try {
    const response = yield call(registration, action.payload);

    yield put(registrationSuccess());
    yield put(loginSuccess());
    let token = response.data.jwt;
    
    yield call(setTokenApi, token);
    yield call(setTokenToLocalStorage, token);
  } catch (error) {
    const errorMessage = Object.keys(error.data.message).map(item => (
      `${item} ${error.data.message[item]}`
    ));

    yield put(registrationFailure(errorMessage.toString()));
  }
}

export function* loginFlow() {
  while(true) {
    const isAuthorized = yield select(getIsAuthorized);
    const localStorageToken = yield call(getTokenFromLocalStorage);
    console.log(`localStorageToken ${localStorageToken}`);

    if (!isAuthorized && localStorageToken) {
      yield put(loginSuccess());
    }
    const { payload } = yield take(loginRequest);
    const task = yield fork(authorize, payload);
    const action = yield take([logout, loginFailure]);

    if (action.type === 'LOGOUT') yield cancel(task);
    yield call(removeTokenFromLocalStorage);
    yield call(clearTokenApi);
  }
}

function* authorize(emailpass) {
  try {
    const response = yield call(login, emailpass);
    let token = response.data.jwt;

    yield put(loginSuccess());
    yield call(setTokenApi, token);
    yield call(setTokenToLocalStorage, token);
    return token;
  } catch (error) { 
    yield put(loginFailure(error.data.message));
  }
}

export function* registrationWatch() {
  yield takeEvery(registrationRequest, registrationFlow);
}