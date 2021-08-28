import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import actions from './cards-actions';

const initialStateCards = [];

const initialStatePosts = [];

const initialStateError = null;

const initialStateUserCard = {};

const initialStateUserCards = [];

const cards = createReducer(initialStateCards, {
  [actions.fetchAllCardsSuccess]: (_, { payload }) => payload,
});

const posts = createReducer(initialStatePosts, {
  [actions.fetchPostsSuccess]: (_, { payload }) => payload,
});

const userCard = createReducer(initialStateUserCard, {
  [actions.addCardSuccess]: (_, { payload }) => payload,
});

const userCards = createReducer(initialStateUserCards, {
  [actions.getCardsSuccess]: (_, { payload }) => payload.cards,
});

const loading = createReducer(false, {
  [actions.fetchAllCardsRequest]: () => true,
  [actions.fetchAllCardsSuccess]: () => false,
  [actions.fetchAllCardsError]: () => false,

  [actions.fetchAllCardsRequest]: () => true,
  [actions.fetchPostsSuccess]: () => false,
  [actions.fetchPostsError]: () => false,

  [actions.getCardsRequest]: () => true,
  [actions.getCardsSuccess]: () => false,
  [actions.getCardsError]: () => false,

  [actions.addCardRequest]: () => true,
  [actions.addCardSuccess]: () => false,
  [actions.addCardError]: () => false,
});

const error = createReducer(initialStateError, {
  [actions.fetchAllCardsError]: (_, { payload }) => payload,
  [actions.fetchAllCardsSuccess]: () => initialStateError,

  [actions.fetchPostsError]: (_, { payload }) => payload,
  [actions.fetchPostsSuccess]: () => initialStateError,

  [actions.addCardError]: (_, { payload }) => payload,
  [actions.addCardSuccess]: () => initialStateError,

  [actions.getCardsError]: () => initialStateError,
  [actions.getCardsSuccess]: () => initialStateError,
});

const usersReducer = combineReducers({
  cards,
  posts,
  userCard,
  userCards,
  error,
  loading,
});

export default usersReducer;
