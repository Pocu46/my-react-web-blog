import {configureStore} from "@reduxjs/toolkit";
import createCartSlice from "./create-cart-slice";

const store = configureStore({
  reducer: { createPost: createCartSlice.reducer }
})

export default store;