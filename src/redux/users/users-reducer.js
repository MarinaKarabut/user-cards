import { combineReducers } from "redux"
import { createReducer } from "@reduxjs/toolkit"

import { fetchAllCardsSuccess, fetchPostsSuccess } from "./users-actions"

const initialStateCards = []

const initialStatePosts = []

const initialStateError = null

const cards = createReducer(initialStateCards, {
  [fetchAllCardsSuccess]: (_, { payload }) => payload,
})

const posts = createReducer(initialStatePosts, {
  [fetchPostsSuccess]: (_, { payload }) => payload,
})

const error = createReducer(initialStateError, {})

const usersReducer = combineReducers({
  cards,
  posts,
  error,
})

export default usersReducer
