/*eslint-disable*/
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface dataType {
  recipe: any;
}
const initialState: dataType = {
    recipe: [],
};

export const RecipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    UserRecipe: (state, action: PayloadAction<number>) => {
      state.recipe = action.payload;
      // console.log(action.payload,'UserRecipe payload')
    },
  },
});

export const {UserRecipe} = RecipeSlice.actions;

export default RecipeSlice.reducer;
/*eslint-disable*/
