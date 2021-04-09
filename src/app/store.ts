import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import flightsReducer from '../features/flights/flightsSlice';
import countesReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    flights: flightsReducer,
    counter: countesReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
