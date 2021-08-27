import axios from "axios"
import actions from "./users-actions"

export const fetchAllTasks = () => async (dispatch) => {
  dispatch(actions.fetchAllCardsRequest())
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    )
    dispatch(actions.fetchAllCardsSuccess(data))
  } catch (error) {
    dispatch(actions.fetchAllCardsError(error))
  }
}

export const getPosts = () => async (dispatch) => {
  dispatch(actions.fetchPostsRequest())
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/"
    )
    dispatch(actions.fetchPostsSuccess(data))
  } catch (error) {
    dispatch(actions.fetchPostsError(error))
  }
}
