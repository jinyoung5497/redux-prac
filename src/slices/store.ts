import { configureStore } from '@reduxjs/toolkit'
import reservationSlice from './reservationSlice'
import customerSlice from './customerSlice'

export const store = configureStore({
  reducer: {
    reservations: reservationSlice,
    customers: customerSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
