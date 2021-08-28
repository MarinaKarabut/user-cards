import CardsService from './cards-service';
import axios from 'axios';

import {
  fetchAllCardsRequest,
  fetchAllCardsSuccess,
  fetchAllCardsError,
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
  addCardError,
  addCardRequest,
  addCardSuccess,
  getCardsRequest,
  getCardsSuccess,
  getCardsError,
} from './cards-actions';

const cardsService = new CardsService();

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchAllTasks = () => async dispatch => {
  dispatch(fetchAllCardsRequest());
  try {
    const { data } = await axios.get('/users');
    dispatch(fetchAllCardsSuccess(data));
  } catch (error) {
    dispatch(fetchAllCardsError(error));
  }
};

export const getPosts = () => async dispatch => {
  dispatch(fetchPostsRequest());
  try {
    const { data } = await axios.get('/posts');
    dispatch(fetchPostsSuccess(data));
  } catch (error) {
    dispatch(fetchPostsError(error));
  }
};

export const add = body => async dispatch => {
  dispatch(addCardRequest());
  try {
    const data = await cardsService.addCard(body);
    console.log(data);
    dispatch(addCardSuccess(data));
  } catch (error) {
    dispatch(addCardError(error));
  }
};

export const getCards = () => async dispatch => {
  dispatch(getCardsRequest());
  try {
    const data = await cardsService.getCards();
    dispatch(getCardsSuccess(data));
  } catch (error) {
    dispatch(getCardsError(error));
  }
};
