import { createSlice } from "@reduxjs/toolkit";

const  initialState = {
  numberOfCakes: 10,
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState, // this is the ES6 shorthand for initialState:initialState because here key and value pair are same
  reducers: {
    ordered: (state) => {
      // here we dont have to write action creaters because createSlice automatically generates action creaters with the same names as the reducer functions we have written
      // createSlice also returns the main reducer function which we can provide to out redux store
      state.numberOfCakes--
    },
    restocked: (state, action) => {
      state.numberOfCakes = state.numberOfCakes + action.payload
    },
  },
});


export default cakeSlice.reducer;
export const {ordered, restocked} = cakeSlice.actions