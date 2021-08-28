import { createAction } from '@reduxjs/toolkit';

export const fetchAllCardsRequest = createAction('cards/fetchAllCardsRequest');
export const fetchAllCardsSuccess = createAction('cards/fetchAllCardsSuccess');
export const fetchAllCardsError = createAction('cards/fetchAllCardsError');

export const fetchPostsRequest = createAction('cards/fetchPostsRequest');
export const fetchPostsSuccess = createAction('cards/fetchPostsSuccess');
export const fetchPostsError = createAction('cards/fetchPostsError');

export const addCardRequest = createAction('cards/addCardRequest');
export const addCardSuccess = createAction('cards/addCardSuccess');
export const addCardError = createAction('cards/addCardError');

export const getCardsRequest = createAction('cards/getCardsRequest');
export const getCardsSuccess = createAction('cards/getCardsSuccess');
export const getCardsError = createAction('cards/getCardsError');

const actions = {
  fetchAllCardsRequest,
  fetchAllCardsSuccess,
  fetchAllCardsError,
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
  addCardRequest,
  addCardSuccess,
  addCardError,
  getCardsRequest,
  getCardsSuccess,
  getCardsError,
};

export default actions;
