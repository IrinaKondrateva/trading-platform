import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  registrationRequest,
  registrationFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout
} from './actions';

const isAuthorized = handleActions(
  {
    [registrationRequest.toString()]: () => false,
    [loginSuccess.toString()]: () => true,
    [logout.toString()]: () => false
  },
  false
);

const registationError = handleActions(
  {
    [registrationFailure.toString()]: (_state, action) => action.payload,
    [registrationRequest.toString()]: () => null
  },
  null
);

const loginError = handleActions(
  {
    [loginFailure.toString()]: (_state, action) => action.payload,
    [loginRequest.toString()]: () => null
  },
  null
);

export default combineReducers({
  isAuthorized,
  registationError,
  loginError
});