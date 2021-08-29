import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './auth-actions';

const initialStateUser = {};

const initialStateToken = null;

const initialStateError = null;

const initialStateGoogleLogin = {};

const userGoogle = createReducer(initialStateGoogleLogin, {});

const user = createReducer(initialStateUser, {
  [actions.registerSuccess]: (_, { payload }) => ({ ...payload.user }),
  [actions.loginSuccess]: (_, { payload }) => ({ ...payload.user }),
  [actions.loginGoogleSuccess]: (_, { payload }) => ({ ...payload.user }),
  [actions.logoutSuccess]: () => initialStateUser,
  [actions.getCurrentUserSuccess]: (_, { payload }) => ({ ...payload.user }),
});

const token = createReducer(initialStateToken, {
  [actions.registerSuccess]: (_, { payload }) => payload.token,
  [actions.loginSuccess]: (_, { payload }) => payload.token,
  [actions.loginGoogleSuccess]: (_, { payload }) => payload.token,
  [actions.logoutSuccess]: () => initialStateToken,
});

const loading = createReducer(false, {
  [actions.registerRequest]: () => true,
  [actions.registerSuccess]: () => false,
  [actions.registerError]: () => false,

  [actions.loginRequest]: () => true,
  [actions.loginSuccess]: () => false,
  [actions.loginError]: () => false,

  [actions.loginGoogleRequest]: () => true,
  [actions.loginGoogleSuccess]: () => false,
  [actions.loginGoogleError]: () => false,

  [actions.logoutRequest]: () => true,
  [actions.logoutSuccess]: () => false,
  [actions.logoutError]: () => false,

  [actions.getCurrentUserRequest]: () => true,
  [actions.getCurrentUserSuccess]: () => false,
  [actions.getCurrentUserError]: () => false,
});

const error = createReducer(initialStateError, {
  [actions.registerError]: (_, { payload }) => payload,
  [actions.registerSuccess]: () => initialStateError,

  [actions.loginError]: (_, { payload }) => payload,
  [actions.loginSuccess]: () => initialStateError,

  [actions.loginGoogleError]: (_, { payload }) => payload,
  [actions.loginGoogleSuccess]: () => initialStateError,

  [actions.logoutError]: (_, { payload }) => payload,
  [actions.logoutSuccess]: () => initialStateError,

  [actions.getCurrentUserError]: () => initialStateError,
  [actions.getCurrentUserSuccess]: () => initialStateError,
});

const isAuthenticated = createReducer(false, {
  [actions.registerSuccess]: () => true,
  [actions.loginSuccess]: () => true,
  [actions.registerError]: () => false,
  [actions.loginError]: () => false,
  [actions.getCurrentUserSuccess]: () => true,
  [actions.getCurrentUserError]: () => false,
  [actions.logoutSuccess]: () => false,
  [actions.loginGoogleSuccess]: () => true,
  [actions.loginGoogleError]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
  loading,
  userGoogle,
});
