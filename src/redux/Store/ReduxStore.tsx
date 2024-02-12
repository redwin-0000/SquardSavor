import {configureStore} from '@reduxjs/toolkit';
import UserSlice from '../Slice/UserAuthSlice';
import RecipeSlice from '../Slice/RecipeSlice';
export const store = configureStore({
  reducer: {
    UserSlice,
    RecipeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
