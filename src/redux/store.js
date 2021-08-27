import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./auth/auth-reducer"
import usersReducer from "./users/users-reducer"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
  },
  devTools: process.env.NODE_ENV === "development",
})

// eslint-disable-next-line import/no-anonymous-default-export
export default { store }
