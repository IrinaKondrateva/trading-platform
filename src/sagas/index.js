import { fork } from 'redux-saga/effects';
import { registrationWatch } from './auth';
import { loginFlow } from './auth';

export default function*() {
  yield fork(loginFlow);
  yield fork(registrationWatch);
}