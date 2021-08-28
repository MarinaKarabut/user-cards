import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/auth-reducer';
import cardsReducer from './cards/cards-reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cards: cardsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { store };
