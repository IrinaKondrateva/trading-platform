import { createActions } from 'redux-actions';

const {
  auth: {
    registrationRequest,
    registrationSuccess,
    registrationFailure,
    loginRequest,
    loginSuccess,
    loginFailure,
    logout
  }
} = createActions({
  AUTH: {
    REGISTRATION_REQUEST: null,
    REGISTRATION_SUCCESS: null,
    REGISTRATION_FAILURE: null,
    LOGIN_REQUEST: null,
    LOGIN_SUCCESS: null,
    LOGIN_FAILURE: null,
    LOGOUT: null
  },
});

export { 
  registrationRequest,
  registrationSuccess,
  registrationFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logout 
};