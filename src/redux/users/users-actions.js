import { createAction } from "@reduxjs/toolkit"

export const fetchAllCardsRequest = createAction("users/fetchAllCardsRequest")
export const fetchAllCardsSuccess = createAction("users/fetchAllCardsSuccess")
export const fetchAllCardsError = createAction("users/fetchAllCardsError")

export const fetchPostsRequest = createAction("users/fetchPostsRequest")
export const fetchPostsSuccess = createAction("users/fetchPostsSuccess")
export const fetchPostsError = createAction("users/fetchPostsError")

const actions = {
  fetchAllCardsRequest,
  fetchAllCardsSuccess,
  fetchAllCardsError,
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
}

export default actions
