/*eslint-disable*/
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface dataType {
  user: any;
}
const initialState: dataType = {
  user: [],
};

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<number>) => {
      state.user = action.payload;
      console.log(action.payload,' userAuthSlice Register user data payload')
    },
  },
});

export const {addUser} = UserSlice.actions;

export default UserSlice.reducer;
/*eslint-disable*/
